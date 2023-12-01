
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ReduxProvider from "../redux/provider";
import NavBar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const inter = Inter({ subsets: ["latin"] });



export const metadata: Metadata = {
  title: "Umbartha",
  description: "Umbartha",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NavBar />
        <ReduxProvider>{children}</ReduxProvider>

        <Footer />
      </body>
    </html>

  );
}
