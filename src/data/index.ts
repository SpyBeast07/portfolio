
export const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blogs", href: "/blogs" },
];

export const sideNavItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Blogs", href: "#blogs" },
];

export interface SocialLink {
    label: string;
    href: string;
}

export const socialLinks: SocialLink[] = [
    {
        label: "GitHub",
        href: "https://github.com/SpyBeast07",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/spybeast07/",
    },
    {
        label: "Email",
        href: "mailto:kggupta.work@gmail.com",
    },
];

export const role = {
    line1: "Developer &",
    line2: "AI Enthusiast",
};

export const email = "kggupta.work@gmail.com";

export const pageHeadings = {
    work: {
        title: "All Projects",
        description: "A collection of my work, ranging from open-source tools to commercial applications.",
    },
    blogs: {
        title: "Writing",
        description: "Thoughts on software engineering, design systems, and the future of AI.",
    },
};

export const resume = {
    url: "/Kushagra_Gupta_updated_Resume.pdf",
    filename: "Kushagra_Gupta_Resume.pdf",
};

export const about = {
    headline: "Nice to meet you. I'm Kushagra.",
    short: [
        "I'm a developer and AI enthusiast with a passion for building pixel-perfect, intuitive user interfaces. I thrive at the intersection of design and engineering, creating robust and scalable code while ensuring a seamless user experience.",
        "Currently, I'm exploring the frontiers of Generative AI and Large Language Models, looking for ways to integrate intelligent agents into everyday web applications.",
    ],
    long: [
        "I'm a developer and AI enthusiast with a passion for building pixel-perfect, intuitive user interfaces. I thrive at the intersection of design and engineering, creating robust and scalable code while ensuring a seamless user experience.",
        "Currently, I'm exploring the frontiers of Generative AI and Large Language Models, looking for ways to integrate intelligent agents into everyday web applications. When I'm not coding, you can find me reading about the latest tech trends or experimenting with new frameworks.",
        "I build modern frontend interfaces and AI-powered applications with a strong focus on performance, motion, and clean architecture.",
    ],
};

export interface Experience {
    title: string;
    subtitle: string;
    date: string;
    location: string;
    type: string;
    description: string;
    tags: string[];
}

export const experiences: Experience[] = [
    {
        title: "Frontend Developer Intern",
        subtitle: "TechCorp Inc.",
        date: "2023 — Present",
        location: "Bangalore, India",
        type: "Internship",
        description: "Developed and maintained critical components for the main product dashboard. Improved site performance by 40% through code splitting and image optimization.",
        tags: ["React", "TypeScript", "Tailwind", "Redux"],
    },
    {
        title: "Freelance Web Developer",
        subtitle: "Self-Employed",
        date: "2021 — 2023",
        location: "Remote",
        type: "Freelance",
        description: "Delivered custom web solutions for 5+ clients including e-commerce sites and portfolio websites. Managed end-to-end development lifecycle.",
        tags: ["Next.js", "Shopify", "Figma"],
    },
];

export interface Education {
    title: string;
    subtitle: string;
    date: string;
    cgpa: string;
    description: string;
}

export const education: Education[] = [
    {
        title: "Computer Science & Engineering",
        subtitle: "Bachelor of Technology",
        date: "2020 — 2024",
        cgpa: "8.8/10",
        description: "Focused on Data Structures, Algorithms, and Artificial Intelligence. Led the technical club and organized 3 major hackathons.",
    },
];

export interface Project {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    githubLink: string;
    demoLink: string;
}

export const projects: Project[] = [
    {
        title: "AI Code Assistant",
        description: "A VS Code extension that uses local LLMs to suggest code completions. 1k+ installs on marketplace.",
        tags: ["Python", "TypeScript", "LlamaCPP"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=AI+Code+Assistant",
        githubLink: "https://github.com",
        demoLink: "https://demo.com"
    },
    {
        title: "Portfolio V1",
        description: "The first iteration of my personal portfolio built with pure HTML/CSS and minimal JS.",
        tags: ["HTML", "CSS", "Gulp"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Portfolio+V1",
        githubLink: "https://github.com",
        demoLink: "https://demo.com"
    },
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics for an online store.",
        tags: ["React", "Next.js", "Tremor"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=E-Commerce+Dashboard",
        githubLink: "https://github.com",
        demoLink: "https://demo.com"
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager with real-time updates and team workspaces.",
        tags: ["Vue.js", "Firebase", "Tailwind"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Task+Manager",
        githubLink: "https://github.com",
        demoLink: "https://demo.com"
    }
];

export interface Blog {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
}

export const blogs: Blog[] = [
    // {
    //     title: "Building Scalable UI Systems",
    //     excerpt: "In modern frontend development, consistency is key. We start by exploring the atomic design methodology and how it applies to React component libraries. This article covers tokenization, theming, and component composition.",
    //     date: "Mar 15, 2024",
    //     readTime: "5 min read",
    //     slug: "#"
    // },
    // {
    //     title: "The Future of AI Agents",
    //     excerpt: "Autonomous agents are rapidly becoming more capable. From planning complex tasks to executing code in sandboxed environments, we are witnessing a paradigm shift in how we interact with software. Here's what you need to know.",
    //     date: "Feb 28, 2024",
    //     readTime: "8 min read",
    //     slug: "#"
    // },
    // {
    //     title: "Understanding React Server Components",
    //     excerpt: "A deep dive into how RSCs change the way we build Next.js applications, covering the benefits of reduced bundle size and direct backend access.",
    //     date: "Jan 10, 2024",
    //     readTime: "6 min read",
    //     slug: "#"
    // },
    // {
    //     title: "Mastering TypeScript Generics",
    //     excerpt: "Generics can be intimidating, but they are essential for building reusable components. Learn patterns for creating flexible and type-safe utilities.",
    //     date: "Dec 05, 2023",
    //     readTime: "10 min read",
    //     slug: "#"
    // }
];
