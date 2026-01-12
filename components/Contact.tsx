"use client";
import React from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 max-w-3xl mx-auto w-full text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 p-12 rounded-3xl"
            >
                <h2 className="text-3xl font-bold tracking-tight mb-4">Let's Connect</h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-md mx-auto">
                    Feel free to reach out — I’m always open to new opportunities and interesting projects.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:your.email@example.com"
                        className="h-12 px-6 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                    >
                        <Mail size={18} />
                        Email Me
                    </a>
                    <div className="flex gap-4">
                        <a href="#" className="w-12 h-12 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
