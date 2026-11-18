import {
    Fredoka,
    Inter,
    JetBrains_Mono,
    Plus_Jakarta_Sans,
} from "next/font/google";
import "./globals.css";
import { DesignSystemProvider } from "@/design-systems/DesignSystemProvider";

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

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const designSystemInitScript = `(function(){try{var k='design-system';var s=localStorage.getItem(k);if(s==='corporate'||s==='developer'||s==='cartoon'){document.documentElement.dataset.designSystem=s;}}catch(e){}})();`;

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            data-design-system="corporate"
            className="scroll-smooth"
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{ __html: designSystemInitScript }}
                />
            </head>
            <body
                suppressHydrationWarning
                className={`${fredoka.variable} ${plusJakartaSans.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
            >
                <DesignSystemProvider>{children}</DesignSystemProvider>
            </body>
        </html>
    );
}
