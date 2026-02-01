import React from "react";
import Navbar from "@/components/Navbar";
import { BlogItem } from "@/components/BlogItem";

export default function BlogsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground relative selection:bg-yellow-500/30">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none bg-grid-pattern z-0 opacity-40" />
            <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_90%)] z-0" />

            <div className="relative z-10 container mx-auto px-6 py-24 max-w-4xl">
                <div className="mb-12">
                    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
                        <Navbar mode="floating" />
                    </div>
                    <div className="mt-24">
                        <h1
                            className="font-playfair text-5xl font-bold mb-6"
                            style={{ color: "var(--foreground)" }}
                        >
                            Writing
                        </h1>
                        <p
                            className="max-w-2xl text-lg"
                            style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}
                        >
                            Thoughts on software engineering, design systems, and the future of AI.
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
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
                    />
                    <BlogItem
                        title="Understanding React Server Components"
                        excerpt="A deep dive into how RSCs change the way we build Next.js applications, covering the benefits of reduced bundle size and direct backend access."
                        date="Jan 10, 2024"
                        readTime="6 min read"
                        slug="#"
                    />
                    <BlogItem
                        title="Mastering TypeScript Generics"
                        excerpt="Generics can be intimidating, but they are essential for building reusable components. Learn patterns for creating flexible and type-safe utilities."
                        date="Dec 05, 2023"
                        readTime="10 min read"
                        slug="#"
                    /> */}
                </div>

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
        </div>
    );
}
