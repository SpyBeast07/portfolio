
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
        description: "A collection of my work, ranging from AI research to full-stack applications.",
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
        "I'm a Developer & AI Enthusiast with expertise in Full Stack Development and Generative AI. I have experience building scalable web applications and AI-powered agents, with a strong foundation in Data Structures and Algorithms.",
        "Currently, I'm exploring the frontiers of RAG (Retrieval-Augmented Generation) and Large Language Models, looking for ways to integrate intelligent agents into everyday web applications.",
    ],
    long: [
        "I'm a Developer & AI Enthusiast with expertise in Full Stack Development and Generative AI. I have experience building scalable web applications and AI-powered agents, with a strong foundation in Data Structures and Algorithms.",
        "My technical toolkit spans across the full stack—from React and Node.js to PyTorch and Google Cloud. I have a proven track record of delivering production-grade applications, whether it's optimising MERN stack architectures or engineering high-performance RAG systems.",
        "When I'm not coding, you can find me diving deep into research papers on Transformers or experimenting with new frameworks to push the boundaries of what's possible.",
        "I build modern frontend interfaces and AI-powered applications with a strong focus on performance, motion, and clean architecture."
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
        title: "Full Stack Development Intern",
        subtitle: "Dobby Ads",
        date: "May 2025 — July 2025",
        location: "Remote",
        type: "Internship",
        description: "Built & deployed two MERN-based web applications with MongoDB, designing scalable architecture. Automated 30+ Cypress test cases, reducing post-release bugs by 25% and implemented Prometheus + Grafana dashboards for real-time API monitoring.",
        tags: ["MERN", "MongoDB", "Cypress", "Prometheus", "Grafana"],
    },
    {
        title: "Android Development Intern",
        subtitle: "Vedic Bodhi Pvt. Ltd.",
        date: "May 2024 — July 2024",
        location: "Remote",
        type: "Internship",
        description: "Developed secure user authentication with Firebase and integrated REST APIs for real-time updates. Enhanced app performance and user experience through optimized API calls and responsive UI design.",
        tags: ["Android", "Firebase", "REST APIs"],
    },
];

export interface Education {
    title: string;
    subtitle: string;
    date: string;
    cgpa?: string;
    description: string;
    related?: Education[];
}

export const education: Education[] = [
    {
        title: "Computer Science & Engineering",
        subtitle: "JK Lakshmipat University, Jaipur",
        date: "Expected 2026",
        cgpa: "7.6/10",
        description: "Bachelor of Technology. Focused on Data Structures, Algorithms, and AI.",
        related: [
            {
                title: "Semester Exchange Student",
                subtitle: "IIIT, Hyderabad",
                date: "Monsoon 2025",
                description: "Focused on advanced Computer Science curriculum.",
            },
            {
                title: "Semester Exchange Student",
                subtitle: "IIT, Gandhinagar",
                date: "December 2023",
                cgpa: "7/10",
                description: "Completed a semester exchange with a focus on core engineering principles.",
            },
        ]
    },
];

export const skills = {
    languagesAndCore: ["Python", "C++", "Java", "JavaScript", "Bash"],
    frontend: ["HTML", "CSS", "React", "React Hook Form", "TanStack", "Axios", "Zod", "Zustand"],
    backendAndAPIs: ["Node.js", "FastAPI", "REST APIs", "JWT Authentication", "SQLAlchemy", "Alembic", "Pydantic", "Uvicorn (ASGI)"],
    dataMLAndVisualization: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "SciPy", "OpenCV", "Matplotlib"],
    databasesCloudAndMonitoring: ["MongoDB", "MySQL", "PostgreSQL", "Docker", "Firebase", "Google Cloud Platform (GCP)", "Vercel", "Prometheus", "Grafana", "Elasticsearch"],
    toolsAndProductivity: ["Git", "GitHub", "Postman", "Cypress", "Mocha", "Streamlit", "Figma", "LaTeX", "Microsoft Excel", "Notion"],
};

export interface Project {
    title: string;
    description: string;
    tags: string[];
    image?: string;
    githubLink: string;
    demoLink?: string;
}

export const projects: Project[] = [
    {
        title: "Legal Redline Sandbox",
        description: "Top 20 global finish in GenAI Hackathon. Spearheaded Google Cloud infrastructure (CloudSQL, Docker) and implemented an async notification system for real-time contract analysis.",
        tags: ["Python", "FastAPI", "React", "Google Cloud", "Gemini API"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Legal+Redline",
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "SME AI Agent",
        description: "Production-grade RAG system with 95%+ retrieval consistency using Elasticsearch and FAISS. Designed a FastAPI-based server with async pipelines achieving <800ms latency.",
        tags: ["RAG", "LangChain", "Elasticsearch", "Docker", "FastAPI"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=SME+AI+Agent",
        githubLink: "#",
    },
    {
        title: "Byte-Latent Transformer",
        description: "Developed a novel BLT model in PyTorch matching character-level baselines but with a 91% reduction in sequence length. Analyzed performance trade-offs vs standard tokenization.",
        tags: ["PyTorch", "NLP", "Transformers", "Research"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Byte-Latent+Transformer",
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "Multilingual Language Model",
        description: "Trained an 18.5M parameter transformer on 400M tokens (English-Hindi-Bengali). Implemented SentencePiece tokenizer and Fine-tuned Gemma-270M with LoRA.",
        tags: ["PyTorch", "LoRA", "Multilingual", "LLMs"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Multilingual+LLM",
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "ALPR System",
        description: "End-to-end Automatic License Plate Recognition pipeline using a custom 5-layer CNN (71.48% IoU) and EasyOCR. Optimized for real-time inference with TTA.",
        tags: ["Computer Vision", "PyTorch", "EasyOCR", "CNN"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=ALPR+System",
        githubLink: "#",
        demoLink: "#"
    },
    {
        title: "Netflix Clone",
        description: "Scalable frontend architecture with reusable React components and effective state management. Fully responsive UI optimized for cross-device compatibility.",
        tags: ["React.js", "Frontend", "UI/UX"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Netflix+Clone",
        githubLink: "#",
        demoLink: "#"
    }
];

export interface Blog {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    image?: string;
}

export const blogs: Blog[] = [
    // {
    //     title: "Building Scalable UI Systems",
    //     excerpt: "In modern frontend development, consistency is key. We start by exploring the atomic design methodology and how it applies to React component libraries.",
    //     date: "Mar 15, 2024",
    //     readTime: "5 min read",
    //     slug: "#",
    //     image: "https://placehold.co/600x400/222/FFF?text=UI+Systems"
    // }
];
