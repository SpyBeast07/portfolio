import React from "react";

export default function Footer() {
    return (
        <footer
            className="pb-24 text-sm leading-relaxed font-outfit max-w-md"
            style={{ color: "color-mix(in oklab, var(--foreground) 50%, transparent)" }}
        >
            <p>
                Coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.
                <br />
                Interested in working together?
                Feel free to reach out on LinkedIn or email.
            </p>
        </footer>
    );
}
