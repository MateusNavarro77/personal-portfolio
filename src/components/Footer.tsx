import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full py-12 bg-surface-container-low text-center text-sm text-foreground/60">
            <div className="max-w-5xl mx-auto px-4">
                <p>© {new Date().getFullYear()} Mateus Navarro. {t("rights")}</p>
                <p className="mt-2">Built with Next.js, Tailwind CSS and Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
