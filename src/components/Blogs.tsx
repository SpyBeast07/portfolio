import Link from "next/link";
import React from "react";

const BlogItem = ({ title, excerpt, date, slug }: { title: string, excerpt: string, date: string, slug: string }) => (
    <div className="group block mb-8 cursor-pointer">
        <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-lg font-bold text-white group-hover:text-yellow-500 transition-colors font-playfair">{title}</h3>
            <span className="text-xs font-mono text-neutral-600">{date}</span>
        </div>
        <p className="text-neutral-400 text-sm leading-relaxed mb-3 max-w-lg">
            {excerpt}
        </p>
        <div className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
            Read Article <span className="text-yellow-500">→</span>
        </div>
    </div>
);

export default function Blogs() {
    return (
        <section id="blogs" className="mb-24 scroll-mt-24">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-white">Latest Writing</h2>

            <div className="space-y-2">
                <BlogItem
                    title="Building Scalable UI Systems"
                    excerpt="How to architect your component library to withstand the test of time and changing requirements."
                    date="Mar 2024"
                    slug="#"
                />
                <BlogItem
                    title="The Future of AI Agents"
                    excerpt="Exploring the possibilities of autonomous agents and how they will reshape software development."
                    date="Feb 2024"
                    slug="#"
                />
            </div>

            <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
                View All Blogs
            </Link>
        </section>
    );
}
