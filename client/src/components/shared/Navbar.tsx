"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { AlignJustify, X, Github, Twitter } from "lucide-react";
import FlipLink from "../ui/text-effect-flipper";

export default function ResponsiveNavbar() {
    const [open, setOpen] = useState(false);
    const panelRef = useRef<HTMLDivElement | null>(null);

    // Close on ESC
    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false);
        }
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Lock body scroll when sidebar is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);


    // Close when clicking outside the panel
    useEffect(() => {
        function onClick(e: MouseEvent) {
            if (!open) return;
            if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        window.addEventListener("mousedown", onClick);
        return () => window.removeEventListener("mousedown", onClick);
    }, [open]);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/dashboard", label: "Dashboard" },
        { href: "/tasks", label: "Tasks" },
        { href: "/goals", label: "Goals" },
        { href: "/settings", label: "Settings" },
    ];

    return (
        <header className="w-full bg-white/05 dark:bg-black/05 backdrop-blur-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-[url('/logo.jpg')] bg-center bg-cover rounded-[5px] flex items-center justify-center font-bold" />
                            <span className="hidden sm:inline-block font-semibold">LeoSparkX</span>
                        </Link>
                    </div>

                    {/* Desktop Navbar */}
                    <nav className="hidden md:flex rounded-[999px] px-4 py-2 border bg-black/80 dark:bg-white/80 backdrop-blur-md shadow-md">
                        <div className="relative flex items-center gap-6">
                            {navLinks.map((l) => (
                                <FlipLink
                                    key={l.href}
                                    href={l.href}
                                    children={l.label}
                                    className="text-sm font-medium text-zinc-50 dark:text-zinc-800 "
                                />
                            ))}

                            {/* Desktop Sign In Button */}
                            <Link href="/login" className="inline-flex items-center px-3 py-1.5 rounded-md bg-white dark:bg-black text-black dark:text-white text-sm font-medium hover:opacity-95" > Sign in </Link>
                        </div>
                    </nav>

                    {/* Right Icons */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />

                        <a
                            href="https://github.com/your-profile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xs hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            <Github className="w-5 h-5" />
                        </a>

                        <a
                            href="https://x.com/your-handle"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-xs hover:bg-black/10 dark:hover:bg-white/10"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setOpen(true)}
                                aria-label="Open menu"
                                className="inline-flex items-center justify-center p-2 cursor-pointer"
                            >
                                <AlignJustify />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Slide-Over Panel */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="fixed inset-0 bg-black/90 z-40 h-screen"
                            onClick={() => setOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Sidebar */}
                        <motion.div
                            ref={panelRef}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 flex flex-col w-64 h-screen overflow-y-auto bg-white dark:bg-black shadow-lg z-50 border-l"
                            role="dialog"
                            aria-modal="true"
                        >
                            <div className="flex items-center justify-between px-4 h-16 border-b text-black dark:text-white">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="w-10 h-10 rounded-[5px] flex items-center justify-center font-bold bg-[url('/logo.jpg')] bg-center bg-cover"
                                        aria-label="Logo"
                                    />
                                    <span className="font-semibold">LeoSparkX</span>
                                </div>
                                <button
                                    onClick={() => setOpen(false)}
                                    aria-label="Close menu"
                                    className="cursor-pointer inline-flex items-center justify-center p-2"
                                >
                                    <X />
                                </button>
                            </div>

                            <nav className="px-4 py-6 space-y-4 overflow-y-auto flex-grow">
                                {navLinks.map((l) => (
                                    <FlipLink
                                        key={l.href}
                                        href={l.href}
                                        children={l.label}
                                    />
                                ))}

                                <div className="mt-4"> <Link href="/login" className="block w-full text-center px-4 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black font-medium" onClick={() => setOpen(false)} > Sign in </Link> </div>
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
