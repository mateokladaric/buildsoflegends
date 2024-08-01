"use server";
import Stripe from "stripe";
import { NextResponse, NextRequest } from "next/server";
import { createHmac } from "crypto";
import prisma from "../../Prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const pClient = prisma;
const encryptor = createHmac("sha512", "buildsoflegendsdotlolslashsecret");

export async function POST(req: NextRequest, res: NextResponse) {
    const payload = await req.text();
    const response = JSON.parse(payload);

    const sig = req.headers.get("Stripe-Signature");

    const dateTime = new Date(response?.created * 1000).toLocaleDateString();
    const timeString = new Date(response?.created * 1000).toLocaleTimeString();
    var event = null;

    try {
        event = stripe.webhooks.constructEvent(payload, sig!, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ status: "error", message: "Webhook Error", err });
    }

    switch (event.type) {
        case "charge.succeeded":
            const mail = event.data.object.receipt_email ?? "unknown";
            encryptor.update(mail!);
            const encryptionValue = encryptor.digest("hex").toString();
            const exisitingUser = await pClient.user.findUnique({ where: { emailHash: encryptionValue } })
            const subEnd = new Date();
            if (event.data.object.amount > 4000) {
                subEnd.setDate(subEnd.getDate() + 365)
            }
            else if (event.data.object.amount > 1200) {
                subEnd.setDate(subEnd.getDate() + 90)
            }
            else {
                subEnd.setDate(subEnd.getDate() + 30)
            }
            if (!exisitingUser) {
                await pClient.user.create({
                    data: {
                        emailHash: encryptionValue,
                        subscriptionEnd: subEnd,
                    }
                })
            }
            else {
                await pClient.user.update({
                    where: {
                        emailHash: encryptionValue,
                    },
                    data: {
                        subscriptionEnd: subEnd,
                    }
                })
            }
        default:
            console.log(event)
    }

    return NextResponse.json({ status: "success", event: event.type });
}