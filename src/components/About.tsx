import React from "react";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="mb-24 lg:mb-40 scroll-mt-24">
            {/* Heading */}
            <h2
                className="font-playfair text-3xl font-bold mb-8"
                style={{ color: "var(--foreground)" }}
            >
                About
            </h2>

            {/* Intro Text */}
            <div
                className="leading-relaxed max-w-lg space-y-4 font-outfit mb-8"
                style={{
                    color: "color-mix(in oklab, var(--foreground) 70%, transparent)",
                }}
            >
                <p>
                    I'm a developer and AI enthusiast with a passion for building pixel-perfect,
                    intuitive user interfaces. I thrive at the intersection of design and engineering,
                    creating robust and scalable code while ensuring a seamless user experience.
                </p>

                <p>
                    Currently, I'm exploring the frontiers of Generative AI and Large Language Models,
                    looking for ways to integrate intelligent agents into everyday web applications.
                </p>
            </div>

            {/* CTA Button */}
            <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all"
                style={{
                    color: "var(--foreground)",
                    border: "1px solid color-mix(in oklab, var(--foreground) 15%, transparent)",
                    backgroundColor:
                        "color-mix(in oklab, var(--background) 85%, transparent)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor =
                        "color-mix(in oklab, var(--foreground) 8%, var(--background))";
                    e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                        "color-mix(in oklab, var(--background) 85%, transparent)";
                    e.currentTarget.style.transform = "scale(1)";
                }}
            >
                Know More About Me <span style={{ color: "var(--icon-color)" }}>→</span>
            </Link>
        </section>
    );
}