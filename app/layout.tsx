import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const bodyStyle = ""

export const metadata: Metadata = {
  title: "Flow Tasks",
  description: "minimal way to manage your goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " " + bodyStyle}>{children}</body>
    </html>
  );
}
