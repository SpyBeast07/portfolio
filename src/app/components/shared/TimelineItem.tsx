"use client";

import { BriefcaseIcon, MapPinIcon } from "@/app/components/ui/Icons";
import { Education } from "@/app/data";

// eslint-disable-next-line @next/next/no-img-element
export const TimelineItem = ({ title, subtitle, date, description, tags, location, type, cgpa, related, logo }: { title: string, subtitle: string, date: string, description: string, tags?: string[], location?: string, type?: string, cgpa?: string, related?: Education[], logo?: string }) => (
    <div
        className="relative pl-8 pb-12 last:pb-0"
        style={{
            borderLeft: "1px solid color-mix(in oklab, var(--foreground) 10%, transparent)",
        }}
    >
        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-yellow-500/50 ring-4 ring-neutral-900 dark:ring-neutral-900 ring-opacity-20" style={{ boxShadow: "0 0 0 4px var(--background)" }} />

        {/* Header with Logo */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-4">
            <div className="flex items-start gap-4">
                {logo && (
                    <img
                        src={logo}
                        alt={`${subtitle} logo`}
                        className="w-12 h-12 rounded-full object-cover border"
                        style={{
                            borderColor: "color-mix(in oklab, var(--foreground) 10%, transparent)"
                        }}
                    />
                )}
                <div className="flex-1">
                    <h3
                        className="text-lg font-bold font-playfair"
                        style={{ color: "var(--foreground)" }}
                    >
                        {title}
                    </h3>
                    <div className="text-sm font-medium text-purple-400 mb-1">{subtitle}</div>
                </div>
            </div>

            <span
                className="text-xs font-mono uppercase tracking-widest sm:text-right flex-shrink-0 mt-1"
                style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}
            >
                {date}
            </span>
        </div>

        {/* Meta Info: Location, Type, CGPA */}
        <div className="flex flex-wrap gap-4 mb-3 text-xs" style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
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
                    <span className="font-bold">GPA:</span> {cgpa}
                </div>
            )}
        </div>
        <p
            className="text-base leading-relaxed mb-4 max-w-xl whitespace-pre-line"
            style={{ color: "color-mix(in oklab, var(--foreground) 70%, transparent)" }}
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

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-4">
                            <div className="flex items-start gap-3">
                                {item.logo && (
                                    <img
                                        src={item.logo}
                                        alt={`${item.subtitle} logo`}
                                        className="w-10 h-10 rounded-full object-cover border"
                                        style={{
                                            borderColor: "color-mix(in oklab, var(--foreground) 10%, transparent)"
                                        }}
                                    />
                                )}
                                <div>
                                    <h4 className="text-md font-bold font-playfair" style={{ color: "var(--foreground)" }}>
                                        {item.title}
                                    </h4>
                                    <div className="text-sm font-medium text-purple-400 mb-2">{item.subtitle}</div>
                                </div>
                            </div>
                            <span className="text-xs font-mono uppercase tracking-widest sm:text-right flex-shrink-0 mt-1" style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
                                {item.date}
                            </span>
                        </div>

                        {item.cgpa && (
                            <div className="text-xs font-mono mb-2" style={{ color: "color-mix(in oklab, var(--foreground) 60%, transparent)" }}>
                                <span className="font-bold">GPA:</span> {item.cgpa}
                            </div>
                        )}

                        <p className="text-base leading-relaxed whitespace-pre-line" style={{ color: "color-mix(in oklab, var(--foreground) 70%, transparent)" }}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        )}
    </div>
);
