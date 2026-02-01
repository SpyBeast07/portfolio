import React from "react";

export default function About() {
    return (
        <section id="about" className="mb-24 scroll-mt-24">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-white">About</h2>
            <div className="text-neutral-400 leading-relaxed max-w-lg space-y-4 font-outfit">
                <p>
                    I'm a developer and AI enthusiast with a passion for building pixel-perfect,
                    intuitive user interfaces. I thrive at the intersection of design and engineering,
                    creating robust and scalable code while ensuring a seamless user experience.
                </p>
                <p>
                    Currently, I'm exploring the frontiers of Generative AI and Large Language Models,
                    looking for ways to integrate intelligent agents into everyday web applications.
                    When I'm not coding, you can find me reading about the latest tech trends or
                    experimenting with new frameworks.
                </p>
            </div>
        </section>
    );
}
