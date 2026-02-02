import Link from "next/link";
import SectionHeading from "./ui/SectionHeading";
import CustomButton from "./ui/CustomButton";
import { about } from "@/data";

export default function About() {
    return (
        <section id="about" className="mb-24 lg:mb-40 scroll-mt-24">
            {/* Heading */}
            <SectionHeading>About</SectionHeading>

            {/* Intro Text */}
            <div
                className="leading-relaxed max-w-lg space-y-4 font-outfit mb-8"
                style={{
                    color: "color-mix(in oklab, var(--foreground) 70%, transparent)",
                }}
            >
                {about.short.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            {/* CTA Button */}
            <CustomButton href="/about">
                Know More About Me <span style={{ color: "var(--icon-color)" }}>→</span>
            </CustomButton>
        </section>
    );
}