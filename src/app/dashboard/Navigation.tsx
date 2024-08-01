"use client";
import { signOut } from "next-auth/react";
export default function Navigation() {
    return (
        <header className="flex justify-between container mx-auto mt-6 items-center">
            <div className="flex gap-4 items-center">
                <img className="h-12" src="logo.svg" alt="" />
                <h4 className="text-2xl font-bold">/BuildsOfLegends.lol</h4>
            </div>
            <nav className="h-auto my-auto">
                <ul className="flex gap-4 items-center">
                    <li><a className="px-4 py-2 text-xl font-bold cursor-pointer border-2 rounded-full border-white border-opacity-30" onClick={signOut}>Sign Out</a></li>
                </ul>
            </nav>
        </header>
    );
}