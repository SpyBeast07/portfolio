import React from "react";
import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="mb-24 scroll-mt-24">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-white">About</h2>

            {/* Intro Text */}
            <div className="text-neutral-400 leading-relaxed max-w-lg space-y-4 font-outfit mb-8">
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

            <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
                Know More About Me <span className="text-yellow-500">→</span>
            </Link>
        </section>
    );
}
