"use client";

import Link from "next/link";
import React from "react";

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
                        className="group flex items-center gap-5 text-base font-medium tracking-widest uppercase text-neutral-500 hover:text-white transition-colors duration-300"
                    >
                        <span className={`block h-[1px] bg-white transition-all duration-300 ${item.active ? "w-8" : "w-0 group-hover:w-4"}`} />
                        {item.name}
                    </Link>
                ))}
            </nav>
        );
    }

    /* --- Floating Mode (Pill) --- */
    return (
        <div className="fixed left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1 p-1 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-lg ring-1 ring-black/5">
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
                                ? "bg-white text-black shadow-sm"
                                : "text-neutral-400 hover:text-white hover:bg-white/5"
                            }
            `}
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
