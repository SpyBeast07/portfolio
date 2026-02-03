
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

export const resume = {
    url: "/Kushagra_Gupta_updated_Resume.pdf",
    filename: "Kushagra_Gupta_Resume.pdf",
};

export const about = {
    headline: "Nice to meet you. I'm Kushagra.",
    short: [
        "I work as a Software Developer at Eurobliz, focusing on full-stack web applications and AI integrations.",
        "I studied Computer Science and Engineering at JKLU, Jaipur, with visiting semesters at IIIT Hyderabad and IIT Gandhinagar.",
        // Your hobbies and something about your personality and curosity
        "Currently, I'm exploring the frontiers of RAG (Retrieval-Augmented Generation) and Large Language Models, looking for ways to integrate intelligent agents into everyday web applications.",
    ],
    long: [
        "I'm a Developer & AI Enthusiast with expertise in Full Stack Development and Generative AI. I have experience building scalable web applications and AI-powered agents, with a strong foundation in Data Structures and Algorithms.",
        "My technical toolkit spans across the full stack—from React and Node.js to PyTorch and Google Cloud. I have a proven track record of delivering production-grade applications, whether it's optimising MERN stack architectures or engineering high-performance RAG systems.",
        "When I'm not coding, you can find me diving deep into research papers on Transformers or experimenting with new frameworks to push the boundaries of what's possible.",
        // Star line!! Do not remove it.
        "I build like a one-person team by leveraging AI as a productivity multiplier.\nAI doesn’t replace learning for me — it reduces manual overhead, just as calculators enhanced mathematics rather than ending it.\nI still focus on fundamentals, problem-solving, and understanding systems deeply."
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
        title: "Software Development Intern",
        subtitle: "Eurobliz",
        date: "Jan 2026 — Current",
        location: "Remote",
        type: "Internship",
        description: "Working on building a scalable web application with a focus on performance, motion, and clean architecture using different technologies and tech-stacks.",
        tags: ["Frontend", "Backend"],
    },
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
        subtitle: "Vedic Bodhi Technologies Pvt Ltd",
        date: "May 2024 — July 2024",
        location: "Remote",
        type: "Internship",
        description: "Developed secure user authentication with Firebase and integrated REST APIs for real-time updates. Enhanced app performance and user experience through optimized API calls and responsive UI design.",
        tags: ["Android", "Kotlin", "Firebase", "REST APIs"],
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
        description: "Focused on Data Structures, Algorithms, and specialized in Artificial Intelligence.\nCoursework includes Algorithms, Object-Oriented Programming, Operating Systems, AI, DBMS, Computer Networks.",
        related: [
            {
                title: "Semester Exchange Student",
                subtitle: "IIIT, Hyderabad",
                date: "Monsoon 2025",
                cgpa: "7.3/10",
                description: "Focused on advanced Computer Science curriculum.\nCoursework includes Language Models and Agents, Information Retrieval and Extraction, Digital Image Processing and Product Marketing.",
            },
            {
                title: "Semester Exchange Student",
                subtitle: "IIT, Gandhinagar",
                date: "December 2023",
                description: "Completed a semester exchange with a focus on core engineering principles like DSA, Discrete mathematics, Numerical Methods and Optimization, etc.",
            },
        ]
    },
    {
        title: "Class 12th",
        subtitle: "S G International School",
        date: "2021",
        cgpa: "89%",
        description: "",
    },
    {
        title: "Class 10th",
        subtitle: "Children's Academy",
        date: "2019",
        cgpa: "72%",
        description: "",
    },
];

export const skills = {
    languagesAndCore: ["Python", "C++", "Java", "JavaScript", "Bash"],
    frontend: ["HTML", "CSS", "React", "React Hook Form", "TanStack", "Axios", "Zod", "Zustand"],
    backendAndAPIs: ["Node.js", "FastAPI", "REST APIs", "JWT Authentication", "SQLAlchemy", "Alembic", "Pydantic", "Uvicorn (ASGI)"],
    dataMLAndVisualization: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "Scikit-learn", "SciPy", "OpenCV", "Matplotlib", "Retrieval-Augmented Generation (RAG)", "Langchain", "Computer Vision (CV)", "Vector Databases", "Statistical Analysis"],
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
    category: "Artificial Intelligence" | "Web Development" | "Research";
}

export const projects: Project[] = [
    {
        title: "SME AI Agent",
        description: "Production-grade RAG system with 95%+ retrieval consistency using Elasticsearch and FAISS. Designed a FastAPI-based server with async pipelines achieving <800ms latency.",
        tags: ["RAG", "LangChain", "Elasticsearch", "Docker", "FastAPI"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=SME+AI+Agent",
        githubLink: "https://github.com/SpyBeast07/sme-rag-agent",
        category: "Artificial Intelligence",
    },
    {
        title: "Legal Redline Sandbox",
        description: "Advanced to the Top 90 teams globally in a GenAI hackathon. Spearheaded Google Cloud infrastructure (CloudSQL, Docker) and implemented an async notification system for real-time contract analysis.",
        tags: ["Python", "FastAPI", "React.js", "Google Cloud", "Gemini API"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Legal+Redline",
        githubLink: "https://github.com/IshitaAgarwal05/Legal_Redline_Sandbox",
        category: "Artificial Intelligence",
    },
    {
        title: "Multilingual Language Model",
        description: "Trained an 18.5M parameter transformer on 400M tokens. Implemented SentencePiece tokenizer and Fine-tuned Gemma-270M with LoRA. Built custom data pipelines for cleaning and segmentation.",
        tags: ["PyTorch", "LoRA", "Multilingual", "LLMs"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Multilingual+LLM",
        githubLink: "https://github.com/SpyBeast07/Multilingual-LM",
        category: "Artificial Intelligence",
    },
    {
        title: "Byte-Latent Transformer",
        description: "Developed a novel BLT model in PyTorch matching character-level baselines but with a 91% reduction in sequence length. Analyzed performance trade-offs vs standard tokenization.",
        tags: ["PyTorch", "NLP", "Transformers", "Research"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Byte-Latent+Transformer",
        githubLink: "https://github.com/SpyBeast07/BLT_vs_traditional",
        category: "Research",
    },
    {
        title: "Netflix Clone",
        description: "Designed a scalable frontend architecture with reusable React components and managed state effectively. Built a fully responsive UI, optimizing for cross-device compatibility.",
        tags: ["React.js", "Frontend", "UI/UX"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Netflix+Clone",
        githubLink: "https://github.com/SpyBeast07/netflix-clone-react",
        demoLink: "https://netlix-clone-react.netlify.app/",
        category: "Web Development",
    },
    {
        title: "ALPR System",
        description: "End-to-end ALPR pipeline using a custom 5-layer CNN (71.48% IoU) and EasyOCR. Optimized for real-time inference with TTA. Trained on a curated dataset of ~9,600 images.",
        tags: ["Computer Vision", "PyTorch", "EasyOCR", "CNN"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=ALPR+System",
        githubLink: "https://github.com/SpyBeast07/ALPR-CNN-EasyOCR",
        category: "Artificial Intelligence",
    },
    {
        title: "E-Waste Management Analysis",
        description: "Analyzed 15+ datasets on e-waste from emerging and developed economies using Python and statistical methods. Proposed scalable, data-driven waste reduction strategies.",
        tags: ["Python", "Statistical Analysis", "Research"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=E-Waste+Management",
        githubLink: "https://github.com/SpyBeast07/E-waste_research_paper_analysis",
        category: "Research",
    },
    {
        title: "Malware Detection AI",
        description: "Engineered a machine learning-based malware classifier achieving over 90% detection accuracy. Utilized Wireshark and Docker to analyze network packets for malicious patterns.",
        tags: ["AI", "Machine Learning", "Wireshark", "Docker"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Malware+Detection",
        githubLink: "https://github.com/SpyBeast07/ML-Based-Intrusion-Detection",
        category: "Research",
    },
    {
        title: "Spardha Website",
        description: "Collaborated to develop the official Spardha website. Built responsive UI with 5+ interactive features; deployed via Vercel with optimized load time under 2s.",
        tags: ["HTML", "CSS", "JavaScript", "Frontend"],
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Spardha+Website",
        githubLink: "https://github.com/SpyBeast07/Spardha_Website_25",
        demoLink: "https://spardha-jklu.vercel.app",
        category: "Web Development",
    }
];

export const pageHeadings = {
    work: {
        title: "Projects",
        description: `${projects.length}+ projects built across web, AI, and tooling`,
    },
    blogs: {
        title: "Writing",
        description: "Thoughts on software engineering, design systems, and the future of AI.",
    },
};

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
