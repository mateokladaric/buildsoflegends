"use client";
import Tab from "./Tab";

export default function Dashboard() {
    return (
        <div className="mt-12 bg-[rgb(12,12,12)] flex flex-col p-4">
            <h1 className="w-full text-center text-3xl mb-4">Dashboard</h1>
            <Tab />
        </div>
    );
}