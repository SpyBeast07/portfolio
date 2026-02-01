"use client";

import Link from "next/link";
import React from "react";
import { BlogItem } from "../components/BlogItem";

export default function Blogs() {
    return (
        <section id="blogs" className="mb-24 lg:mb-40 scroll-mt-24">
            <h2
                className="font-playfair text-3xl font-bold mb-10"
                style={{ color: "var(--foreground)" }}
            >
                Latest Writing
            </h2>

            <div className="space-y-2">
                {/* 
                   TODO: Uncomment these BlogItem components when you have real blogs to show.
                   You can add more items here following the same pattern.
                */}
                {/* <BlogItem
                    title="Building Scalable UI Systems"
                    excerpt="In modern frontend development, consistency is key. We start by exploring the atomic design methodology and how it applies to React component libraries. This article covers tokenization, theming, and component composition."
                    date="Mar 15, 2024"
                    readTime="5 min read"
                    slug="#"
                />
                <BlogItem
                    title="The Future of AI Agents"
                    excerpt="Autonomous agents are rapidly becoming more capable. From planning complex tasks to executing code in sandboxed environments, we are witnessing a paradigm shift in how we interact with software. Here's what you need to know."
                    date="Feb 28, 2024"
                    readTime="8 min read"
                    slug="#"
                />  */}


                {/* Coming Soon Placeholder */}
                <div
                    className="py-12 text-center rounded-lg border-dashed"
                    style={{
                        borderColor: "color-mix(in oklab, var(--foreground) 10%, transparent)",
                        backgroundColor: "color-mix(in oklab, var(--background) 85%, transparent)",
                        borderWidth: "1px",
                    }}
                >
                    <p
                        className="font-playfair italic text-lg"
                        style={{ color: "color-mix(in oklab, var(--foreground) 50%, transparent)" }}
                    >
                        Thoughtful essays coming soon...
                    </p>
                </div>
            </div>

            <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-full text-sm font-medium transition-all"
                style={{
                    color: "var(--foreground)",
                    border: "1px solid color-mix(in oklab, var(--foreground) 15%, transparent)",
                    backgroundColor: "color-mix(in oklab, var(--background) 85%, transparent)",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "color-mix(in oklab, var(--foreground) 8%, var(--background))";
                    e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "color-mix(in oklab, var(--background) 85%, transparent)";
                    e.currentTarget.style.transform = "scale(1)";
                }}
            >
                View More Blogs
            </Link>
        </section>
    );
}
