"use server"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation'
import Navigation from "./Navigation"
import Dashboard from "./Dashboard"
import Pricing from "../Pricing"
import Footer from "../Footer"

import { PrismaClient } from "@prisma/client"
import { createHmac } from "crypto";

export default async function Home() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/');
    }

    const pClient = new PrismaClient();
    const encryptor = createHmac("sha512", "buildsoflegendsdotlolslashsecret");
    encryptor.update(session.user?.email!);
    const encMail = encryptor.digest("hex").toString();
    const currUser = await pClient.user.findUnique({
        where: {
            emailHash: encMail
        }
    });

    return (
        <>
            <Navigation />
            {currUser ? <Dashboard /> : <Pricing />}
            <Footer />
        </>
    )
}