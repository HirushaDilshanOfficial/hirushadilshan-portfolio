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
  instagram: "https://www.instagram.com/hirusha_dilshan_official?igsh=MTlmbm1lcmhkeGU1bA==",
  twitter: "https://x.com/Hirushaofficial",
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
    name: "Wethmi WIjethilaka",
    role: "BSc (Hons) in Data Science Undergraduate, SLIIT",
    avatar: "WW",
    text: "I had the opportunity to work with Hirusha on university projects. He is a responsible and dedicated individual who consistently ensures that tasks are completed on time. His problem-solving skills and team collaboration make him a reliable person to work with. I would recommend him for any academic or software development-related work.",
    rating: 5,
    color: "#6366f1",
  },
  {
    name: "Umangi Anjalika",
    role: "BSc (Hons) in Data Science Undergraduate, SLIIT",
    avatar: "UA",
    text: "I had the pleasure of working with Hirusha on our university project, PETVERSE, from July to November 2025. He proved to be a dedicated and reliable team member who made meaningful contributions to the project's development and integration. Hirusha consistently demonstrated a strong work ethic and attention to detail, ensuring his tasks were completed on time and to a high standard. He was equally strong on the human side, approachable, supportive, and always willing to help teammates through challenges. His positive attitude helped maintain team morale during the more demanding phases of the project. What stood out most was his sense of responsibility. He took full ownership of his tasks, followed through on every commitment, and built genuine trust within the team. His reliability made collaboration smooth and kept the project on track. The successful completion of PETVERSE reflects our team's collective effort, and Hirusha's contribution played a key role in that outcome. I would confidently recommend him and would welcome the opportunity to work with him again.",
    rating: 5,
    color: "#22d3ee",
  },
  {
    name: "Dilshara Thilakarathne",
    role: "BSc (Hons) in Software Engineering Undergraduate, SLIIT",
    avatar: "DT",
    text: "I had the opportunity to work with Hirusha on university group projects and truly appreciate his teamwork and collaborative approach. He communicates ideas clearly, stays calm under pressure, and contributes effectively to team discussions. He is responsible with his tasks and consistently delivers work on time. His adaptability, patience, and willingness to support others make him a valuable team member in group settings. Overall, I found him reliable, cooperative, and easy to work with, and I would confidently recommend him for academic or software development-related opportunities.",
    rating: 5,
    color: "#f59e0b",
  },
];
