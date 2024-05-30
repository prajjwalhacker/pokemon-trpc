"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { trpc } from "@/utils/trpc";

const inter = Inter({ subsets: ["latin"] });



function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default trpc.withTRPC(RootLayout)