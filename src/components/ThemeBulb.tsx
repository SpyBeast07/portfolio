"use client";

import React, { useState, useEffect } from "react";

export default function ThemeBulb() {
    const [isDark, setIsDark] = useState(true);

    // Initialize theme on mount
    useEffect(() => {
        // Check local storage or system preference logic if needed.
        // Default is dark as per requirements.
        document.documentElement.classList.add("dark");
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        // Animate the pull
        const rope = document.getElementById("bulb-rope");
        if (rope) {
            rope.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateY(10px)' },
                { transform: 'translateY(0)' }
            ], {
                duration: 300,
                easing: 'ease-in-out'
            });
        }

        if (newIsDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="fixed top-0 right-12 z-50 flex flex-col items-center">
            {/* Rope */}
            <div
                id="bulb-rope"
                className="flex flex-col items-center cursor-pointer transition-transform origin-top hover:translate-y-1"
                onClick={toggleTheme}
            >
                {/* Rope Line */}
                <div className="w-[1px] h-20 bg-neutral-700 dark:bg-neutral-500 relative">
                    {/* Rope Texture (Simulated with dashes) */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_45%,rgba(0,0,0,0.5)_50%,transparent_55%)] bg-[length:4px_4px]" />
                </div>

                {/* Socket */}
                <div className="w-4 h-6 bg-black dark:bg-neutral-800 rounded-sm -mt-0.5 shadow-sm border border-neutral-700 border-b-0" />

                {/* Bulb */}
                <div
                    className={`
                w-8 h-12 rounded-b-[50%] rounded-t-[40%] -mt-1 border border-black/20 dark:border-white/10 shadow-lg transition-all duration-300
                ${isDark ? 'bg-neutral-800 shadow-none' : 'bg-yellow-300 shadow-[0_0_30px_rgba(253,224,71,0.6)] animate-pulse'}
            `}
                >
                    {/* Filament (visible in on state or off state slightly) */}
                    <div className="w-full h-full relative opacity-50">
                        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[1px] h-6 bg-neutral-900/50" />
                        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-neutral-900/50" />
                    </div>
                </div>
            </div>
        </div>
    );
}
