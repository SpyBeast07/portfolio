import Link from "next/link";
import React from "react";

export default function Navbar() {
    const navItems = [
        { name: "Home", href: "#", active: true },
        { name: "About", href: "#", active: false },
        { name: "Work", href: "#", active: false },
        { name: "Blogs", href: "#", active: false },
    ];

    return (
        <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
            <nav className="flex items-center gap-1 p-1 rounded-full bg-neutral-900/50 backdrop-blur-md border border-white/10 shadow-lg ring-1 ring-black/5">
                {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
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
