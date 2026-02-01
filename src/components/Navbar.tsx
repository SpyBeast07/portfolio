"use client";

import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

export default function Navbar({ mode = "floating" }: { mode?: "floating" | "sidebar" }) {
    const navItems = [
        { name: "Home", href: "/", active: true },
        { name: "About", href: "/about", active: false },
        { name: "Work", href: "/work", active: false },
        { name: "Blogs", href: "/blogs", active: false },
    ];
    const navItemsSide = [
        { name: "Home", href: "#", active: true },
        { name: "About", href: "#about", active: false },
        { name: "Work", href: "#work", active: false },
        { name: "Blogs", href: "#blogs", active: false },
    ];

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.toggle("dark");
        setIsDark(root.classList.contains("dark"));
    };

    /* --- Sidebar Mode (Vertical List) --- */
    if (mode === "sidebar") {
        return (
            <nav className="flex flex-col items-start gap-6">
                {navItemsSide.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                            if (item.href.startsWith('#')) {
                                e.preventDefault();
                                const id = item.href.replace('#', '');
                                if (id === "") window.scrollTo({ top: 0, behavior: "smooth" });
                                else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className="group flex items-center gap-5 text-base font-medium tracking-widest uppercase transition-colors duration-300"
                        style={{
                            color: "color-mix(in oklab, var(--foreground) 55%, transparent)",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.color = "var(--foreground)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.color =
                                "color-mix(in oklab, var(--foreground) 55%, transparent)";
                        }}
                    >
                        <span
                            className={`block h-[1px] transition-all duration-300 ${item.active ? "w-8" : "w-0 group-hover:w-4"}`}
                            style={{
                                backgroundColor: "var(--foreground)",
                            }}
                        />
                        {item.name}
                    </Link>
                ))}
            </nav>
        );
    }

    /* --- Floating Mode (Pill) --- */
    return (
        <div className="fixed left-1/2 -translate-x-1/2 z-50">
            <nav
                className="flex items-center gap-1 p-1 rounded-full backdrop-blur-md shadow-lg ring-1 ring-black/5"
                style={{
                    backgroundColor: "color-mix(in oklab, var(--background) 70%, transparent)",
                    border: "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)",
                }}
            >
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={(e) => {
                            if (item.href.startsWith('#')) {
                                e.preventDefault();
                                const id = item.href.replace('#', '');
                                if (id === "") window.scrollTo({ top: 0, behavior: "smooth" });
                                else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        className={`
                                    relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                    ${item.active
                                ? "shadow-sm"
                                : ""
                            }
                                `}
                        style={{
                            color: item.active
                                ? "var(--background)"
                                : "color-mix(in oklab, var(--foreground) 60%, transparent)",
                            backgroundColor: item.active
                                ? "var(--foreground)"
                                : "transparent",
                        }}
                        onMouseEnter={(e) => {
                            if (!item.active) {
                                e.currentTarget.style.backgroundColor =
                                    "color-mix(in oklab, var(--foreground) 8%, transparent)";
                                e.currentTarget.style.color = "var(--foreground)";
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (!item.active) {
                                e.currentTarget.style.backgroundColor = "transparent";
                                e.currentTarget.style.color =
                                    "color-mix(in oklab, var(--foreground) 60%, transparent)";
                            }
                        }}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
