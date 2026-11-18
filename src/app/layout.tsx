import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
    variable: "--font-fredoka",
    subsets: ["latin"],
    weight: ["600", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta",
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                suppressHydrationWarning
                className={`${fredoka.variable} ${plusJakartaSans.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
