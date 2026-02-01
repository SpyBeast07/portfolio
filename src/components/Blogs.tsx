import Link from "next/link";
import React from "react";
import { BlogItem } from "../components/BlogItem";

export default function Blogs() {
    return (
        <section id="blogs" className="mb-24 scroll-mt-24">
            <h2 className="font-playfair text-3xl font-bold mb-10 text-white">Latest Writing</h2>

            <div className="space-y-2">
                {/* 
                   TODO: Uncomment these BlogItem components when you have real blogs to show.
                   You can add more items here following the same pattern.
                */}
                {/* 
                <BlogItem
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
                /> 
                */}

                {/* Coming Soon Placeholder */}
                <div className="py-12 text-center border border-white/5 bg-white/5 rounded-lg border-dashed">
                    <p className="text-neutral-400 font-playfair italic text-lg">
                        Thoughtful essays coming soon...
                    </p>
                </div>
            </div>

            <Link
                href="/blogs"
                className="inline-flex items-center gap-2 px-6 py-3 mt-4 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 transition-all"
            >
                View More Blogs
            </Link>
        </section>
    );
}
