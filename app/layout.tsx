import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${inter.variable} ${geistMono.variable} antialiased selection:bg-zinc-200 dark:selection:bg-zinc-800 bg-white dark:bg-black text-zinc-900 dark:text-zinc-100`}
            >
                {children}
            </body>
        </html>
    );
}
