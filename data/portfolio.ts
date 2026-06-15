// Portfolio Data — Easy to customize!
export const personalInfo = {
  name: "Hirusha Dilshan",
  title: "IT Undergraduate @ SLIIT | DevOps Enthusiast",
  tagline: "Passionate about learning and building modern, scalable infrastructure.",
  bio: "I am a 3rd-year Information Technology undergraduate student at SLIIT. I'm highly passionate about building robust systems and currently leaning heavily towards the DevOps side. I am actively looking for an internship opportunity where I can apply my academic knowledge to real-world infrastructure, deployment pipelines, and backend challenges.",
  email: "hello.hirushadilshan@gmail.com",
  phone: "+94 776764036",
  address: "9D , Sapugaskanda , Makola , Sri Lanka",
  availability: "Looking for Internship",
  github: "https://github.com/HirushaDilshanOfficial",
  linkedin: "https://www.linkedin.com/in/hirusha-dilshan/",
  instagram: "https://instagram.com/", // Add your instagram link here 
  twitter: "https://twitter.com/hirushadilshan",
  resume: "/Hirusha_Dilshan_Resume.pdf",
};

export const stats = [
  { value: "3+", label: "Years Programming" },
  { value: "7+", label: "Academic Projects" },
  { value: "100%", label: "Dedication" },
];

export const skills = {
  languages: [
    { name: "TypeScript", level: 60, icon: "ts" },
    { name: "JavaScript", level: 65, icon: "js" },
    { name: "C", level: 80, icon: "c" },
    { name: "C++", level: 70, icon: "cpp" },
    { name: "Java", level: 58, icon: "java" },
  ],
  frontend: [
    { name: "React / Next.js", level: 68, icon: "react" },
    { name: "Vue.js", level: 82, icon: "vue" },
    { name: "Tailwind CSS", level: 95, icon: "tailwind" },
  ],
  backend: [
    { name: "Node.js", level: 95, icon: "node" },
    { name: "SQL", level: 85, icon: "database" },
    { name: "Express.js", level: 80, icon: "express" },
    { name: "MongoDB", level: 85, icon: "mongodb" },
    { name: "Neon DB", level: 80, icon: "database" },
    { name: "Prisma", level: 85, icon: "database" },
    { name: "Linux", level: 90, icon: "server" },
  ],
};

export const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Node.js", color: "#339933" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Docker", color: "#2496ED" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#ffffff" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Neon DB", color: "#00E599" },
  { name: "Prisma", color: "#2D3748" },
  { name: "Linux", color: "#FCC624" },
];

export const experience = [
  {
    company: "TechNova Labs",
    role: "Senior Software Engineer",
    period: "2022 — Present",
    location: "San Francisco, CA",
    description:
      "Led development of mission-critical microservices handling 2M+ daily active users. Architected a real-time analytics platform that reduced decision latency by 70%.",
    achievements: [
      "Reduced API response times by 65% through Redis caching and query optimization",
      "Led a team of 8 engineers to ship 3 major product releases on schedule",
      "Designed event-driven architecture that scaled to 10M events/day",
      "Mentored 4 junior engineers, 2 of whom were promoted",
    ],
    tech: ["React", "Node.js", "Kubernetes", "PostgreSQL", "Redis"],
    color: "#6366f1",
  },
  {
    company: "CloudScale Inc.",
    role: "Software Engineer II",
    period: "2020 — 2022",
    location: "Remote",
    description:
      "Built and maintained SaaS platform serving Fortune 500 clients. Spearheaded migration from monolith to microservices, enabling the team to ship features 3x faster.",
    achievements: [
      "Migrated legacy monolith to microservices, reducing deploy time from 2hrs to 8min",
      "Built CI/CD pipeline with zero-downtime deployments",
      "Implemented data pipeline processing 500GB/day",
      "Increased test coverage from 30% to 92%",
    ],
    tech: ["Vue.js", "Python", "Docker", "AWS", "MongoDB"],
    color: "#22d3ee",
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2018 — 2020",
    location: "Austin, TX",
    description:
      "Founding engineer at early-stage fintech startup. Built core product from scratch and scaled it to 50,000 paying customers in 18 months.",
    achievements: [
      "Built MVP in 3 months that secured $2M seed funding",
      "Designed and implemented real-time payment processing system",
      "Scaled infrastructure from 0 to 50K users on tight budget",
      "Achieved 99.9% uptime SLA with zero security incidents",
    ],
    tech: ["React", "Node.js", "Stripe", "PostgreSQL", "Heroku"],
    color: "#f59e0b",
  },
];

export const projects = [
  {
    title: "Easy Stay — Boarding Management System",
    description:
      "A full-stack boarding management system connecting students with boarding house owners, enabling property search, booking, and rent management.",
    longDescription:
      "Implemented role-based access control (Admin, Owner, Student), JWT authentication, image uploads via Cloudinary, and an admin dashboard for system monitoring.",
    image: "/Easystay.jpeg",
    tags: ["React 19", "Node.js (Express 5)", "MongoDB", "JWT", "Cloudinary", "Tailwind CSS", "MUI"],
    category: "Full Stack",
    live: "",
    github: "https://github.com/HirushaDilshanOfficial/Easystay.git",
    featured: true,
    metrics: ["Role-based Access", "Booking Management"],
    color: "#6366f1",
  },
  {
    title: "SpaceSync — Smart Campus Operations Hub",
    description:
      "A full-stack campus management system for facility booking, maintenance tickets, and resource management with role-based access.",
    longDescription:
      "Implemented booking conflict detection, incident reporting, notifications, and an admin dashboard with analytics and reports.",
    image: "/Screenshot 2026-06-12 at 21.12.43.png",
    tags: ["Java 21", "Spring Boot", "React 19", "MySQL", "JWT", "OAuth2", "Tailwind CSS", "Cloudinary"],
    category: "Full Stack",
    live: "",
    github: "https://github.com/HirushaDilshanOfficial/SpaceSync.git",
    featured: true,
    metrics: ["Conflict Detection", "Analytics Dashboard"],
    color: "#22d3ee",
  },
  {
    title: "Cloudex — SaaS Restaurant Management Platform",
    description:
      "A multi-tenant SaaS platform for restaurant operations featuring POS, inventory management, order processing, real-time updates, and analytics.",
    longDescription:
      "Leveraged Docker containerization, Redis caching, and Socket.io for real-time communication across multiple tenants.",
    image: "/Cloudex.jpeg",
    tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Redis", "Socket.io", "Docker"],
    category: "SaaS",
    live: "https://cloudex-posh.vercel.app/",
    github: "https://github.com/HirushaDilshanOfficial/Cloudex.git",
    featured: true,
    metrics: ["Multi-tenant", "Real-time Updates", "Dockerized"],
    color: "#f59e0b",
  },
  {
    title: "PETVERSES — Pet Services & E-Commerce Platform",
    description:
      "A full-stack pet services marketplace for service bookings, product purchases, and online payments with role-based access.",
    longDescription:
      "Implemented KYC verification, appointment management, loyalty points, reviews, and analytics dashboards.",
    image: "/Petverse.jpeg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth", "Cloudinary", "Tailwind CSS"],
    category: "E-Commerce",
    live: "",
    github: "https://github.com/HirushaDilshanOfficial/PETVERSES.git",
    featured: true,
    metrics: ["KYC Verification", "Loyalty Points"],
    color: "#ec4899",
  },
  {
    title: "Urban Heaven — Online Apartment Sales System",
    description:
      "A web-based apartment sales and reservation platform with role-based access control (Admin, Manager, Seller, Buyer).",
    longDescription:
      "Features included apartment listing management, property reservations, notice publishing, image uploads, user management, and analytics dashboards.",
    image: "/urban_heaven.png",
    tags: ["PHP", "MySQL", "JavaScript", "jQuery", "Chart.js", "Bootstrap"],
    category: "Web App",
    live: "",
    github: "https://github.com/HirushaDilshanOfficial/Online_Apartment_Salles-System.git",
    featured: false,
    metrics: ["Role-based Access", "Analytics Dashboard"],
    color: "#8b5cf6",
  },
  {
    title: "Vehicle Spare Parts Management System",
    description:
      "A web-based spare parts management system with role-based access control.",
    longDescription:
      "Implemented inventory management, order processing, stock tracking, and CRUD operations using Java EE, JSP, and MySQL.",
    image: "/motorbay.jpeg",
    tags: ["Java Servlets", "JSP", "JDBC", "MySQL", "Apache Tomcat"],
    category: "Web App",
    live: "",
    github: "https://github.com/HirushaDilshanOfficial/Online-Vehicle-SpareParts-Management-System-SLIIT.git",
    featured: false,
    metrics: ["Inventory Tracking", "Order Processing"],
    color: "#10b981",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechNova Labs",
    avatar: "SC",
    text: "Alex is an exceptional engineer who thinks in systems. He doesn't just write code — he architects solutions. His ability to translate complex business requirements into elegant technical implementations is truly rare. He's the kind of engineer every CTO wants on their team.",
    rating: 5,
    color: "#6366f1",
  },
  {
    name: "Marcus Johnson",
    role: "CEO at CloudScale Inc.",
    avatar: "MJ",
    text: "Working with Alex was transformative for our product. He delivered our microservices migration 2 weeks early, and the quality was outstanding. More importantly, he coached our junior team to become 10x more effective. He understands the business side too — not just the code.",
    rating: 5,
    color: "#22d3ee",
  },
  {
    name: "Priya Patel",
    role: "VP Engineering at StartupXYZ",
    avatar: "PP",
    text: "Alex built our entire MVP infrastructure from scratch in 3 months. That work directly contributed to us closing our seed round. He's proactive, communicates clearly with all stakeholders — technical and non-technical — and consistently over-delivers.",
    rating: 5,
    color: "#f59e0b",
  },
  {
    name: "David Kim",
    role: "Product Manager at TechNova Labs",
    avatar: "DK",
    text: "Alex has that rare ability to bridge engineering and product. He always asks 'why' before jumping to 'how', which leads to better solutions. His features have directly driven a 40% increase in our core engagement metrics.",
    rating: 5,
    color: "#10b981",
  },
];
