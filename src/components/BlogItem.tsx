import React from "react";
import Image from "next/image";
import Link from "next/link";

export const BlogItem = ({ title, excerpt, date, slug, readTime }: { title: string, excerpt: string, date: string, slug: string, readTime: string }) => (
    <Link href={slug} className="group flex flex-col md:flex-row gap-6 mb-12 items-start cursor-pointer hover:bg-white/5 p-4 rounded-xl transition-colors -mx-4">
        {/* Blog Image */}
        <div className="w-full md:w-48 h-32 relative flex-shrink-0 overflow-hidden rounded-lg bg-neutral-800 border border-white/10">
            <Image
                src="https://placehold.co/600x400/222/FFF?text=Blog"
                alt="Blog"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 mb-2 uppercase tracking-wide">
                <span>{date}</span>
                <span>•</span>
                <span>{readTime}</span>
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-yellow-500 transition-colors font-playfair mb-3 leading-tight">
                {title}
            </h3>

            <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-3">
                {excerpt}
            </p>

            <div className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all">
                Read Article <span className="text-yellow-500">→</span>
            </div>
        </div>
    </Link>
);
