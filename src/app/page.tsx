"use client";

import Demo from "./Demo";
import Footer from "./Footer";
import Header from "./Header";
import Introduction from "./Introduction";
import Pricing from "./Pricing";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <Introduction />
      <Demo />
      <Pricing />
      <Footer />
    </SessionProvider>
  );
}