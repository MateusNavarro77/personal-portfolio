import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full py-12 bg-surface-container-lowest border-t border-[rgba(95,121,153,0.15)] text-center text-sm text-on-surface-variant/75">
            <div className="max-w-5xl mx-auto px-4">
                <p>© {new Date().getFullYear()} <span className="text-on-surface font-semibold">Mateus Navarro</span>. {t("rights")}</p>
                <p className="mt-2 text-xs text-on-surface-variant/60">Built with Next.js, Flutter Sky Tech Design System and Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
