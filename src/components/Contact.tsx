"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MessageSquare } from "lucide-react";
import { useTranslations } from "next-intl";
import SimpleIcon from "./SimpleIcon";
import { siGithub } from "simple-icons";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

const Contact = () => {
    const t = useTranslations("Contact");
    const { activeSystem } = useDesignSystem();
    const { Card, getButtonClasses } = activeSystem.components;
    const { typography } = activeSystem;

    return (
        <section id="contact" className="py-20 sm:py-24 px-4 max-w-3xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
            >
                <Card
                    variant="accent"
                    tiltDeg={-0.65}
                    icon={<MessageSquare size={22} className="stroke-[2.5]" />}
                    title={t("title")}
                    className="p-7 sm:p-10 text-left"
                >
                    <p
                        className={cn(
                            typography.body,
                            "text-base sm:text-lg mb-8 max-w-lg"
                        )}
                    >
                        {t("description")}
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4">
                        <a
                            href="mailto:mateusnavarro9@gmail.com"
                            className={getButtonClasses({
                                variant: "surface",
                                size: "md",
                                className: "w-full sm:w-auto",
                            })}
                        >
                            <Mail size={18} className="stroke-[2.5]" />
                            <span>{t("emailMe")}</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/mateus-navarro-910673298/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getButtonClasses({
                                variant: "secondary",
                                size: "md",
                                className: "w-full sm:w-auto",
                            })}
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} className="stroke-[2.5]" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/MateusNavarro77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={getButtonClasses({
                                variant: "secondary",
                                size: "md",
                                className: "w-full sm:w-auto",
                            })}
                            aria-label="GitHub"
                        >
                            <SimpleIcon icon={siGithub} size={18} />
                            <span>GitHub</span>
                        </a>
                    </div>
                </Card>
            </motion.div>
        </section>
    );
};

export default Contact;
