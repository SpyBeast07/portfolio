"use client";

import { useEffect } from "react";
import { useMotionValue, useTransform, animate, m } from "framer-motion";

export default function AnimatedCounter({ value }: { value: number }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        const controls = animate(count, value, { duration: 1, ease: "easeOut" });
        return () => controls.stop();
    }, [value, count]);

    return <m.span>{rounded}</m.span>;
}
