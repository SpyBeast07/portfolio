import { navItems } from "@/app/data";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://kushagra.dev"; // Placeholder URL

    const routes = navItems.map((item) => ({
        url: `${baseUrl}${item.href}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: item.href === "/" ? 1 : 0.8,
    }));

    return [
        ...routes,
        {
            url: `${baseUrl}/resume`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        }
    ];
}
