"use client";


import { BriefcaseIcon, MapPinIcon } from "./ui/Icons";

import { Education } from "@/data";

export const TimelineItem = ({ title, subtitle, date, description, tags, location, type, cgpa, related }: { title: string, subtitle: string, date: string, description: string, tags?: string[], location?: string, type?: string, cgpa?: string, related?: Education[] }) => (
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
                    <MapPinIcon width={14} height={14} />
                    {location}
                </div>
            )}
            {type && (
                <div className="flex items-center gap-1">
                    <BriefcaseIcon width={14} height={14} />
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

        {/* Nested Related Items */}
        {related && (
            <div className="mt-8 space-y-8">
                {related.map((item) => (
                    <div key={item.subtitle} className="relative pl-6 border-l border-dashed" style={{ borderColor: "color-mix(in oklab, var(--foreground) 20%, transparent)" }}>
                        <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "color-mix(in oklab, var(--foreground) 30%, transparent)" }} />

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h4 className="text-md font-bold font-playfair" style={{ color: "var(--foreground)" }}>
                                {item.title}
                            </h4>
                            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "color-mix(in oklab, var(--foreground) 50%, transparent)" }}>
                                {item.date}
                            </span>
                        </div>

                        <div className="text-sm font-medium text-purple-400 mb-2">{item.subtitle}</div>

                        {item.cgpa && (
                            <div className="text-xs font-mono mb-2" style={{ color: "color-mix(in oklab, var(--foreground) 50%, transparent)" }}>
                                <span className="font-bold">CGPA:</span> {item.cgpa}
                            </div>
                        )}

                        <p className="text-sm leading-relaxed" style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        )}
    </div>
);
