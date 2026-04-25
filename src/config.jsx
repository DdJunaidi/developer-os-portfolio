// src/config.jsx

//==============================
//  PORTFOLIO CONTENT CONFIG
//==============================
// This file controls most of the text/content shown in the portfolio.
// Update this file first when you want to change:
// - name
// - headline
// - projects
// - skills
// - certifications
// - contact links

export const SITE_CONFIG = {
  name: "Junaidi Bin Samsudin",

  role: "Full Stack Developer",

  location: "Singapore",

  status: "Currently building software at NAVTOR",

  headline:
    "Full Stack Developer building AI-powered web products with Django, React, Node.js, REST APIs and MySQL.",

  shortIntro:
    "I bridge real-world operational experience, support engineering, Agile practice and modern full-stack development.",

  email: "ddjunaidi@outlook.com",

  resumeUrl: "/portfolio_v3/Junaidi_CV.pdf",

  links: {
    github: "https://github.com/DdJunaidi",
    linkedin: "https://www.linkedin.com/in/junaidi-samsudin-24034462/",
  },

  metrics: [
    { value: "10+", label: "Years technical & operational experience" },
    { value: "3+", label: "Full-stack products built" },
    { value: "100%", label: "Development role at NAVTOR" },
    { value: "CSM", label: "Agile / Scrum certified" },
  ],

  currentFocus: [
    "Development work at NAVTOR",
    "MSc Computer Science — Software Engineering",
    "AI-enabled full-stack applications",
    "Clean APIs, useful UX and maintainable code",
  ],

  projects: [
    {
      id: 1,
      title: "SmartShop — AI E-commerce",
      description:
        "Flagship full-stack e-commerce project with personalized recommendations, Gemini-powered AI chatbot, smart search, product descriptions, JWT auth, reviews, cart and order flow.",
      link: "https://github.com/DdJunaidi/smartshop",
      type: "Flagship Project",
      stack: ["Django", "DRF", "React", "Gemini AI", "JWT", "MySQL"],
      size: "md:col-span-3 md:row-span-2",
      featured: true,
    },
    {
      id: 2,
      title: "TasteMatch — Local Food Discovery",
      description:
        "Quiz-based recommendation platform helping tourists discover authentic local food vendors using Django, React and a Node.js matching service.",
      link: "https://github.com/DdJunaidi/tastematch",
      type: "Capstone Project",
      stack: ["Django", "React", "Node.js", "MySQL"],
      size: "md:col-span-2 md:row-span-1",
    },
    {
      id: 3,
      title: "Silent Library",
      description:
        "Library web application with book catalogue, events, authentication and admin management features.",
      link: "https://github.com/ddjunaidi/silentlibrary_project",
      type: "Full Stack App",
      stack: ["Django", "MySQL", "Bootstrap"],
      size: "md:col-span-1 md:row-span-1",
    },
  ],

  capabilities: [
    {
      title: "Backend",
      skills: ["Python", "Django", "DRF", "REST APIs", "JWT"],
    },
    {
      title: "Frontend",
      skills: ["React", "Vite", "Tailwind", "Bootstrap"],
    },
    {
      title: "Database",
      skills: ["MySQL", "SQLite", "Schema Design"],
    },
    {
      title: "AI / Product",
      skills: ["Gemini API", "Prompt Engineering", "AI Search", "Summaries"],
    },
    {
      title: "Quality",
      skills: ["Pytest", "Postman", "Lighthouse", "Locust"],
    },
    {
      title: "Ways of Working",
      skills: ["Agile", "Scrum", "CSM", "CSPO"],
    },
  ],

  certifications: [
    {
      name: "CSM®",
      org: "Scrum Alliance",
      badge: "/portfolio_v3/badges/sa-csm-600.png",
    },
    {
      name: "CSPO®",
      org: "Scrum Alliance",
      badge: "/portfolio_v3/badges/sa-cspo-600.png",
    },
    {
      name: "Prompt Engineering",
      org: "PMI",
      badge: "/portfolio_v3/badges/pmi-ai.png",
    },
    {
      name: "GenAI for PM",
      org: "PMI",
      badge: "/portfolio_v3/badges/GenAI-PM.png",
    },
  ],
};