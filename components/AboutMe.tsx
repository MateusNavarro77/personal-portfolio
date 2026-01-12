"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 max-w-3xl mx-auto w-full">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl font-bold tracking-tight mb-8">About Me</h2>
                <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400">
                    <p>
                        I’m a computer engineering student and software development intern focused on building clean, scalable mobile apps using Flutter. I enjoy turning ideas into real products and constantly improving my skills.
                    </p>
                    <p>
                        Currently, I'm diving deeper into Clean Architecture, State Management, and advanced UI patterns to deliver high-quality user experiences.
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutMe;
