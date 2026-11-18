import React from "react";
import { useTranslations } from "next-intl";

const Footer = () => {
    const t = useTranslations("Footer");

    return (
        <footer className="w-full py-10 bg-surface border-t-[3.5px] border-ink text-center text-sm text-ink">
            <div className="max-w-5xl mx-auto px-4">
                <p className="font-bold">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-black">Mateus Navarro</span>. {t("rights")}
                </p>
                <p className="mt-2 text-xs font-bold">
                    Built with Next.js, Cartoon Blueprint Design System and Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
