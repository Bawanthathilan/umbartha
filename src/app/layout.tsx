"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";
import ReduxProvider from "../redux/provider";
import NavBar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });

import { ParallaxProvider } from "react-scroll-parallax";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>My page title</title>
      </Head>

      <body className={inter.className}>
        <ParallaxProvider>
          <NavBar />
          <ReduxProvider>
            {children}
            <Footer />
          </ReduxProvider>
        </ParallaxProvider>
      </body>
    </html>
  );
}
