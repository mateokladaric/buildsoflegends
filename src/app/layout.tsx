import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";

const comforta = Comfortaa({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Builds of Legends - Powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-[rgb(18,18,18)] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3vw_3vw]" lang="en">
      <body className={comforta.className + " text-white"}>{children}</body>
    </html>
  );
}
