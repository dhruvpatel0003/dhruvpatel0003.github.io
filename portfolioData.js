const PORTFOLIO_DATA = {
  profile: {
    name: "Dhruv Patel",
    title: "Software Engineer • AI Systems & Product Engineering",
    location: "Hoboken, NJ",
    email: "dhruvpatel150203@gmail.com",
    phone: "551-289-6351",
    bio: "Software Engineer and M.S. Software Engineering student at Stevens Institute of Technology, with experience at S&P Global. I build full-stack applications, AI-assisted systems, and products grounded in software engineering practices.",
    resumeUrl: "resume.pdf",
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/dhruvpatel0003",
        icon: "fa-brands fa-github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dhruv-patel-4033a0255/",
        icon: "fa-brands fa-linkedin",
      },
      {
        name: "Email",
        url: "mailto:dhruvpatel150203@gmail.com",
        icon: "fa-solid fa-envelope",
      },
    ],
  },
  projects: [
    {
      id: "eduresumepro",
      title: "EduResumePRO",
      period: "Jan 2026 – Jun 2026",
      role: "Full-Stack Developer",
      category: "Software Project",
      status: "Project work",
      description:
        "Full-stack application using React and Node.js, with Prometheus and Grafana monitoring, Docker containers, and GitHub Actions CI/CD workflows.",
      tech: [
        "React",
        "Node.js",
        "Docker",
        "Prometheus",
        "Grafana",
        "GitHub Actions",
        "CI/CD",
      ],
      github: "https://github.com/dhruvpatel0003/eduResumePRO",
      demo: "",
      lifecycle: [],
    },
    {
      id: "chatcollab",
      title: "ChatCollab — Local Human–AI Team Collaboration",
      period: "Oct 2026",
      role: "Research & Local Prototype Planning",
      category: "Software Project",
      status: "Local adaptation planned",

      description:
        "Exploring a local adaptation of the ChatCollab human–AI software-team framework, where role-based AI agents collaborate with people on software tasks. Proposed prototype uses Ollama, a Python event orchestrator and a Streamlit interaction timeline, with optional Slack integration and collaboration analysis.",

      tech: [
        "Ollama",
        "Python",
        "Multi-Agent Systems",
        "Streamlit",
        "Human–AI Collaboration",
      ],

      github: "https://github.com/dhruvpatel0003/ssw625-ChatCollab",
      lifecycle: [
        {
          name: "Review Original ChatCollab Framework",
          status: "completed",
        },
        {
          name: "Local Prototype Requirements",
          status: "completed",
        },
        {
          name: "Architecture & Agent Roles",
          status: "completed",
        },
        {
          name: "Ollama & Orchestration Implementation",
          status: "completed",
        },
        {
          name: "Collaboration Analysis & Testing",
          status: "completed",
        },
        {
          name: "Demo & Evaluation",
          status: "completed",
        },
      ],
    },
    {
      id: "agentic-paper-trader",
      title: "Agentic Paper Trader",
      period: "Sep 2026 – Present",
      role: "Full-Stack Developer & System Design Contributor",
      category: "Software Project",
      status: "In development",
      description:
        "AI-powered paper-trading platform generating BUY/SELL/HOLD proposals from technical indicators and structured LLM outputs, with deterministic risk checks, human approval, audit history and an emergency kill switch.",
      tech: [
        "Next.js",
        "FastAPI",
        "PostgreSQL",
        "Celery",
        "Redis",
        "LLM APIs",
        "Alpaca Paper API",
      ],
      github: "https://github.com/sandhya1631/agentic-paper-trader",
      demo: "",
      figma: {
        url: "https://www.figma.com/design/Kqvkhdyba8CkbC9XTzaKDi/AgenticPaperTrader?node-id=22-7782&t=P4kVa2erPsRlR7Yk-1",
        screenshots: [
          {
            src: "assets/images/agentic-dashboard.png",
            alt: "Agentic Paper Trader portfolio dashboard",
          },
        ],
        note: "AI-assisted desktop prototype created using Figma Agent; requirements translated into operator workflows and interface screens.",
      },
      lifecycle: [
        { name: "Requirements & Scope", status: "completed" },
        { name: "System Architecture", status: "in-progress" },
        { name: "Figma Prototype", status: "in-progress" },
        { name: "Implementation", status: "in-progress" },
        { name: "Testing & Validation", status: "not-started" },
        { name: "Release & Evaluation", status: "not-started" },
      ],
    },

    {
      id: "template-maker",
      title: "Local-First AI Template Maker",
      period: "2026 – Present",
      role: "Independent Developer & System Designer",
      category: "Product Engineering",
      status: "Requirements in progress",
      description:
        "Planning a local-first AI-assisted template creation system with reusable brand assets, editable designs, prompt optimization, local inference and an architecture that can evolve into an API-powered SaaS product.",
      tech: [
        "Ollama",
        "Local LLMs",
        "Requirements Engineering",
        "Modular Architecture",
      ],
      github: "",
      demo: "",
      lifecycle: [
        { name: "Discovery & Requirements", status: "in-progress" },
        { name: "Feasibility & Costing", status: "not-started" },
        { name: "Architecture & Design", status: "not-started" },
        { name: "UI/UX Prototype", status: "not-started" },
        { name: "Implementation", status: "not-started" },
        { name: "Testing & Validation", status: "not-started" },
        { name: "Deployment & Evaluation", status: "not-started" },
      ],
    },
    {
      id: "bakery-erp",
      title: "Bakery ERP & Wholesale Platform",
      period: "2026 – Present",
      role: "Product Planning & System Design",
      category: "Product Engineering",
      status: "Discovery & market research",
      description:
        "Exploring an integrated bakery ERP for Acorn Bakers covering production, inventory, customer orders, wholesale distribution and reporting, with a long-term goal of commercialization as a SaaS platform.",
      tech: [
        "ERP Requirements",
        "Competitor Analysis",
        "Systems Design",
        "SaaS Planning",
      ],
      github: "",
      demo: "",
      lifecycle: [
        { name: "Market & Competitor Research", status: "in-progress" },
        { name: "Requirements Definition", status: "not-started" },
        { name: "Cost & Feasibility Analysis", status: "not-started" },
        { name: "Architecture & Design", status: "not-started" },
        { name: "Implementation", status: "not-started" },
        { name: "Testing & Validation", status: "not-started" },
        { name: "Pilot & Deployment", status: "not-started" },
      ],
    },
  ],
  research: [
    {
      title: "SpecMine: Specification Completeness & Verifiability",
      kind: "Empirical Software Engineering Research",
      status: "Ongoing",
      description:
        "Studying whether completeness, verifiability and unresolved information in software specifications are associated with smoother spec-to-code implementation using the SpecMine dataset. Association is being investigated, not assumed.",
      topics: [
        "SpecMine",
        "Requirements Quality",
        "Pull Requests",
        "Empirical Analysis",
      ],
      url: "",
    },
    {
      title: "Ariane 5 — Systems Engineering Failure Analysis",
      kind: "Course Case Study",
      status: "Coursework",
      description:
        "Systems engineering analysis of the Ariane 5 failure, including stakeholders, context and external systems, requirements development, verification, validation and corrective planning.",
      topics: ["Systems Engineering", "RD/VER/VAL", "Failure Analysis"],
      url: "",
    },
    {
      title:
        "Verification vs. Validation — System Integration Individual Study",
      kind: "Academic Case Study",
      status: "In progress",
      description:
        "Examining the distinction between building a system according to its specifications (verification) and ensuring it meets stakeholder needs (validation), including the risks of conflating the two.",
      topics: ["Verification", "Validation", "Systems Thinking"],
      url: "",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "C#",
        "Dart",
        "HTML/CSS",
      ],
    },
    {
      category: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Express", "FastAPI", "Flutter"],
    },
    {
      category: "Data & Storage",
      items: [
        "PostgreSQL",
        "MongoDB",
        "SQL Server",
        "Firebase",
        "Supabase",
        "Redis",
      ],
    },
    {
      category: "Tools & Practices",
      items: [
        "Docker",
        "Git",
        "GitHub Actions",
        "REST APIs",
        "Prometheus",
        "Grafana",
        "Celery",
        "Figma",
        "Ollama",
      ],
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "S&P Global",
      location: "Ahmedabad, India",
      period: "Jul 2024 – Aug 2025",
      highlights: [
        "Developed reusable React micro-frontend components across internal applications.",
        "Collaborated with backend and QA teams on API contracts, state management and production issue resolution.",
        "Participated in Agile sprints, requirements discussions, code reviews and incremental delivery.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "S&P Global",
      location: "Ahmedabad, India",
      period: "Jan 2024 – Jun 2024",
      highlights: [
        "Supported frontend and .NET API development using internal visualization tools.",
        "Optimized SQL queries and stored procedures in Microsoft SQL Server.",
        "Participated in debugging, code reviews and Agile development.",
      ],
    },
  ],
  education: [
    {
      school: "Stevens Institute of Technology",
      location: "Hoboken, NJ",
      degree: "M.S. in Software Engineering",
      period: "Expected May 2027",
      grade: "CGPA: 3.44",
    },
    {
      school: "Ahmedabad University",
      location: "Ahmedabad, India",
      degree: "B.Tech. in Computer Science and Engineering",
      period: "May 2024",
      grade: "CGPA: 3.0 / 4.0",
    },
  ],
};
