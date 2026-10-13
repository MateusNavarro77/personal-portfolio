"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { buttonVariants } from "./Button";
import SimpleIcon from "./SimpleIcon";
import { siGithub } from "simple-icons";

const Contact = () => {
    const t = useTranslations("Contact");

    return (
        <section id="contact" className="py-24 px-4 max-w-3xl mx-auto w-full text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="kinetic-glass border border-[rgba(95,121,153,0.2)] p-8 sm:p-14 rounded-3xl shadow-ambient hover:shadow-glass-hover transition-all duration-500"
            >
                <h2 className="headline-lg mb-4 text-on-surface">
                    {t("title")}
                </h2>
                <p className="body-lg text-on-surface-variant mb-10 max-w-md mx-auto">
                    {t("description")}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:mateusnavarro9@gmail.com"
                        className={buttonVariants({ variant: "primary", size: "md", className: "px-7 w-full sm:w-auto" })}
                    >
                        <Mail size={18} />
                        {t("emailMe")}
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mateus-navarro-910673298/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "secondary", size: "md", className: "px-6 w-full sm:w-auto" })}
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={18} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/MateusNavarro77"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "secondary", size: "md", className: "px-6 w-full sm:w-auto" })}
                        aria-label="GitHub"
                    >
                        <SimpleIcon icon={siGithub} size={18} />
                        <span>GitHub</span>
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
