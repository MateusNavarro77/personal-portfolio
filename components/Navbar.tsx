"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 flex items-center"
        >
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
               
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <Link href="#about" className="hover:text-zinc-500 transition-colors">About</Link>
                    <Link href="#projects" className="hover:text-zinc-500 transition-colors">Projects</Link>
                    <Link href="#skills" className="hover:text-zinc-500 transition-colors">Skills</Link>
                    <Link href="#experience" className="hover:text-zinc-500 transition-colors">Experience</Link>
                    <Link href="#contact" className="hover:text-zinc-500 transition-colors">Contact</Link>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
