"use client";

import React from "react";

export const TimelineItem = ({ title, subtitle, date, description, tags }: { title: string, subtitle: string, date: string, description: string, tags?: string[] }) => (
    <div
        className="relative pl-8 pb-12 last:pb-0"
        style={{
            borderLeft: "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)",
        }}
    >
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-yellow-500/50 ring-4 ring-neutral-900 dark:ring-neutral-900 ring-opacity-20" style={{ boxShadow: "0 0 0 4px var(--background)" }} />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
            <h3
                className="text-lg font-bold font-playfair"
                style={{ color: "var(--foreground)" }}
            >
                {title}
            </h3>
            <span
                className="text-xs font-mono uppercase tracking-widest"
                style={{ color: "color-mix(in oklab, var(--foreground) 50%, transparent)" }}
            >
                {date}
            </span>
        </div>
        <div className="text-sm font-medium text-purple-400 mb-3">{subtitle}</div>
        <p
            className="text-sm leading-relaxed mb-4 max-w-md"
            style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}
        >
            {description}
        </p>
        {tags && (
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full"
                        style={{
                            color: "color-mix(in oklab, var(--foreground) 70%, transparent)",
                            backgroundColor: "color-mix(in oklab, var(--foreground) 5%, transparent)",
                            border: "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)"
                        }}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        )}
    </div>
);
