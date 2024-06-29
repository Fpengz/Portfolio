import type { Metadata } from "next";
import "./globals.css";
import { ubuntuMono } from "./ui/fonts";

export const metadata: Metadata = {
  title: "Penguin's Home Page",
  description: "Wang Zhoufu's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body className={`${ubuntuMono.className} antialiased bg-[#252525] min-h-screen flex flex-col`}>
        {children} 
      </body>
    </html>
  );
}
