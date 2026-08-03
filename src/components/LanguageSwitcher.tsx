"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { Languages } from "lucide-react";
import Button from "./Button";
import Chip from "./Chip";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const toggleLanguage = () => {
        const nextLocale = locale === "en" ? "pt-br" : "en";
        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <Button
            onClick={toggleLanguage}
            variant="secondary"
            size="sm"
            className="h-10 px-3"
        >
            <Languages size={16} />
            <Chip variant="primary" className="leading-none px-2.5 py-1">
                {locale === "en" ? "PT-BR" : "EN-US"}
            </Chip>
        </Button>
    );
}
