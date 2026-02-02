"use client";

import React from "react";

export const TimelineItem = ({ title, subtitle, date, description, tags, location, type, cgpa }: { title: string, subtitle: string, date: string, description: string, tags?: string[], location?: string, type?: string, cgpa?: string }) => (
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
        <div className="text-sm font-medium text-purple-400 mb-1">{subtitle}</div>

        {/* Meta Info: Location, Type, CGPA */}
        <div className="flex flex-wrap gap-4 mb-3 text-xs" style={{ color: "color-mix(in oklab, var(--foreground) 50%, transparent)" }}>
            {location && (
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                    {location}
                </div>
            )}
            {type && (
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>
                    {type}
                </div>
            )}
            {cgpa && (
                <div className="flex items-center gap-1 font-mono">
                    <span className="font-bold">CGPA:</span> {cgpa}
                </div>
            )}
        </div>
        <p
            className="text-sm leading-relaxed mb-4 max-w-xl"
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
