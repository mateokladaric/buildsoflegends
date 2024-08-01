"use client"
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
    const { data: session } = useSession();
    const router = useRouter();

    if (session) {
        router.push('/dashboard');
    }

    return (
        <header className="flex justify-between container mx-auto mt-6 items-center">
            <div className="flex gap-4 items-center">
                <img className="h-12" src="logo.svg" alt="" />
                <h4 className="text-2xl font-bold">/BuildsOfLegends.lol</h4>
            </div>
            <nav className="h-auto my-auto">
                <ul className="flex gap-4 items-center">
                    <li><a className="px-4 py-2 text-xl font-bold" href="#features">Features</a></li>
                    <li><a className="px-4 py-2 text-xl font-bold" href="#pricing">Pricing</a></li>
                    <li><a className="px-4 py-2 text-xl font-bold text-gray-500">Reviews</a></li>
                    <li>{session ? (
                        <img className="h-12 aspect-square border rounded-full" src={session.user.image} alt={session.user.name} />
                    ) : (
                        <a className="px-2 py-1 cursor-pointer" onClick={() => signIn('google')}>
                            <img className="h-12 aspect-square px-2 border rounded-full" src="google.svg" alt="" />
                        </a>
                    )}</li>
                </ul>
            </nav>
        </header>
    );
}
