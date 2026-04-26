export const personal = {
  name: "Harsh Kumar Yadav",
  title: "Full Stack + AI Engineer",
  tagline: "Building intelligent systems that ship.",
  subTagline: "RAG pipelines. Semantic search. Production APIs. From zero to 30+ users.",
  email: "harshyadav2027@gmail.com",
  phone: "+91-7510073759",
  location: "Ghaziabad, UP · India",
  status: "Open to Opportunities",
  degree: "B.Tech CSE (AI) · KIET, AKTU · 2027",
  links: {
    github: "https://github.com/harshyadav2027",
    linkedin: "https://linkedin.com",
    leetcode: "https://leetcode.com",
  },
};

export const projects = [
  {
    id: "lumen",
    number: "01",
    name: "LUMEN",
    subtitle: "AI-Powered PDF Chat Assistant",
    description:
      "Production RAG pipeline with real-time token streaming via SSE. Dual-model fallback (Groq LLaMA-3.3-70B primary → Gemini 2.0 Flash backup) ensures zero-downtime responses. Per-user data isolation in MongoDB with full chat session restoration across browser sessions.",
    tech: ["LangChain", "Pinecone", "Groq", "Gemini", "Node.js", "React", "Firebase", "MongoDB", "SSE"],
    metrics: [
      { value: "0", label: "Downtime Responses" },
      { value: "2x", label: "Model Fallback System" },
      { value: "∞", label: "Session Persistence" },
    ],
    accent: "#6ee7b7",
    year: "2026",
    featured: true,
    github: "https://github.com/harshyadav2027",
  },
  {
    id: "vidyamitra",
    number: "02",
    name: "VidyaMitra",
    subtitle: "AI Career Intelligence Platform",
    description:
      "Production-ready career platform with 30+ active users. AI resume scoring, mock interview coaching, and smart job matching. Gemini 2.0 Flash for intelligence layer. JWT + Google OAuth via Firebase Admin SDK with role-based access control.",
    tech: ["React", "Node.js", "MongoDB Atlas", "Gemini 2.0", "Firebase", "Google OAuth", "RBAC"],
    metrics: [
      { value: "30+", label: "Active Users" },
      { value: "3", label: "AI Features" },
      { value: "100%", label: "Auth Coverage" },
    ],
    accent: "#a78bfa",
    year: "2026",
    featured: false,
    github: "https://github.com/harshyadav2027",
  },
  {
    id: "mern-blog",
    number: "03",
    name: "MERN Blog",
    subtitle: "Full Stack Blogging Platform",
    description:
      "Full-stack MERN platform with JWT authentication, RESTful APIs, nested commenting system. Deployed on Vercel with CI/CD via GitHub. Complete dev lifecycle: schema design, API documentation, production configuration.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel", "CI/CD"],
    metrics: [
      { value: "10+", label: "Active Users" },
      { value: "0", label: "Unauthorized Attempts" },
      { value: "100%", label: "Uptime" },
    ],
    accent: "#f472b6",
    year: "2025",
    featured: false,
    github: "https://github.com/harshyadav2027",
  },
];

export const skills = [
  {
    category: "Frontend",
    icon: "⬡",
    items: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Context API", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    icon: "◈",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "SSE Streaming", "Mongoose"],
  },
  {
    category: "AI / ML",
    icon: "◆",
    items: ["LangChain", "RAG Pipelines", "Google Gemini", "Groq LLaMA-3.3", "Pinecone", "Vector Embeddings"],
  },
  {
    category: "Databases",
    icon: "◉",
    items: ["MongoDB", "MongoDB Atlas", "Pinecone", "Vector Search"],
  },
  {
    category: "Auth & Security",
    icon: "◎",
    items: ["Firebase Auth", "Firebase Admin SDK", "Google OAuth 2.0", "JWT", "RBAC"],
  },
  {
    category: "DevOps & Tools",
    icon: "◇",
    items: ["Git", "GitHub", "Vercel", "Render", "Docker", "Postman", "Figma"],
  },
];

export const experience = [
  {
    role: "Software Development Intern",
    company: "Codveda Technologies",
    period: "Nov 2025 — Dec 2025",
    type: "Internship",
    bullets: [
      "Developed and deployed a full-stack MERN blogging platform serving 10+ active users with RESTful APIs, CRUD ops, and nested commenting.",
      "Engineered JWT-based authentication with secure token refresh logic — reducing unauthorized access attempts to zero.",
      "Collaborated in agile workflow with bi-weekly sprint reviews, PR reviews, and Git-based version control.",
    ],
  },
  {
    role: "Core Team Lead — Administrator & Graphic Lead",
    company: "CPBYTE KIET",
    period: "2024 — Present",
    type: "Leadership",
    bullets: [
      "Organised coding contests and managed club operations for technical events attended by 200+ students.",
      "Produced design assets and led administrative operations for the college's premier coding club.",
    ],
  },
  {
    role: "Web Development Lead",
    company: "DevUp KIET",
    period: "2024 — Present",
    type: "Leadership",
    bullets: [
      "Led a team of 5 developers, conducted weekly workshops on React and Node.js.",
      "Mentored juniors on full-stack project architecture and modern development practices.",
    ],
  },
];

export const achievements = [
  {
    value: "300+",
    label: "LeetCode Problems",
    sub: "Arrays, graphs, DP, trees. Contest rating ~1490.",
    accent: "#6ee7b7",
    countTo: 300,
  },
  {
    value: "Top Finalist",
    label: "Innotech Hackathon",
    sub: "Competing against 100+ teams across India as institute rep.",
    accent: "#a78bfa",
    countTo: null,
  },
  {
    value: "200+",
    label: "Students Impacted",
    sub: "Through CPBYTE KIET technical events and workshops.",
    accent: "#f472b6",
    countTo: 200,
  },
];

export const certifications = [
  { name: "AWS Certified AI Practitioner", year: "2025", icon: "☁" },
  { name: "Palo Alto Networks Cybersecurity", year: "2025", icon: "⚔" },
  { name: "Infosys Power BI Projects", year: "2025", icon: "📊" },
];