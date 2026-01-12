import React from "react";

const Footer = () => {
    return (
        <footer className="w-full py-12 border-t border-zinc-200 dark:border-zinc-800 text-center text-sm text-zinc-500">
            <div className="max-w-5xl mx-auto px-4">
                <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
                <p className="mt-2">Built with Next.js, Tailwind CSS and Framer Motion.</p>
            </div>
        </footer>
    );
};

export default Footer;
