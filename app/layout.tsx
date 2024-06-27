import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
const bodyStyle = "w-screen h-screen m-0"

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
            <body className={inter.className + " " + bodyStyle}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
