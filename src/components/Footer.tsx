import React from "react";

export default function Footer() {
    return (
        <footer className="pb-24 text-sm text-neutral-500 leading-relaxed font-outfit max-w-md">
            <p>
                Coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
                All text is set in the <span className="text-neutral-400">Outfit</span> (replacing Inter) typeface.
            </p>
        </footer>
    );
}
