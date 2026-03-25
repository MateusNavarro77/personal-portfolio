"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { buttonVariants } from "./Button";

const Contact = () => {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="py-24 px-4 max-w-3xl mx-auto w-full text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-surface-container-low border border-outline-variant/15 p-12 rounded-3xl shadow-ambient"
            >
                <h2 className="font-display text-3xl font-bold tracking-tight mb-4">{t("title")}</h2>
                <p className="text-lg text-foreground/70 mb-8 max-w-md mx-auto">
                    {t("description")}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:mateusnavarro9@gmail.com"
                        className={buttonVariants({ variant: "primary", size: "md", className: "px-6" })}
                    >
                        <Mail size={18} />
                        {t("emailMe")}
                    </a>
                    <div className="flex gap-4">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/mateus-navarro-910673298/"
                            className={buttonVariants({
                                variant: "secondary",
                                size: "md",
                                className: "w-12 px-0",
                            })}
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/MateusNavarro77"
                            className={buttonVariants({
                                variant: "secondary",
                                size: "md",
                                className: "w-12 px-0",
                            })}
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
