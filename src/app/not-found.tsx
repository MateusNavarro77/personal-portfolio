"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDesignSystem } from "@/design-systems/DesignSystemProvider";

export default function NotFound() {
    const { activeSystem } = useDesignSystem();
    const { SectionBand, Card, SectionTitle, getButtonClasses } =
        activeSystem.components;
    const { typography } = activeSystem;

    return (
        <SectionBand
            variant="primary"
            withTopBorder={false}
            className="min-h-screen flex flex-col justify-center items-center px-4 w-full"
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 240, damping: 20 }}
                className="max-w-xl w-full"
            >
                <SectionTitle as="span" className="justify-center mb-6">
                    Error 404
                </SectionTitle>

                <Card
                    variant="surface"
                    tiltDeg={-0.8}
                    icon={<Compass size={22} className="stroke-[2.5]" />}
                    title="404 - Not Found"
                    className="p-8 sm:p-10 text-left"
                    actions={
                        <Link
                            href="/"
                            className={getButtonClasses({
                                variant: "primary",
                                size: "md",
                                className: "group",
                            })}
                        >
                            <ArrowLeft
                                size={18}
                                className="stroke-[2.5] group-hover:-translate-x-1 transition-transform duration-200"
                            />
                            <span>Back to Home</span>
                        </Link>
                    }
                >
                    <p className={cn(typography.body, "text-base sm:text-lg")}>
                        The page you are looking for doesn&apos;t exist or has been moved.
                    </p>
                </Card>
            </motion.div>
        </SectionBand>
    );
}
