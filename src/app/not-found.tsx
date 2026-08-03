"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/Button";

export default function NotFound() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 w-full bg-grid-pattern">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <span className="text-foreground/55 font-medium mb-4 block tracking-widest uppercase text-xs">
                    Error 404
                </span>

                <h1 className="font-display text-6xl md:text-8xl font-bold tracking-[-0.05em] mb-6 bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
                    404 - Not Found
                </h1>

                <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mb-10 leading-relaxed shadow-none mx-auto">
                    The page you are looking for doesn&apos;t exist or has been moved.
                </p>

                <div className="flex justify-center">
                    <Link
                        href="/"
                        className={`${buttonVariants({ variant: "primary", size: "md" })} group`}
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-500" />
                        Back to Home
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
