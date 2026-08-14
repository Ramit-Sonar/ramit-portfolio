import profilePhoto from "@/assets/profile-photo.png"
import skillBridgeImage from "@/assets/skillbridge-project.png"
import queueLessNepalImage from "@/assets/queueless-nepal-project.png"

export type TechIconName =
  | "js"
  | "c"
  | "java"
  | "python"
  | "cpp"
  | "mysql"
  | "html"
  | "css"
  | "react"
  | "node"
  | "express"
  | "reactnative"
  | "mongodb"
  | "git"
  | "docker"
  | "postman"
  | "vscode"
  | "visualstudio"
  | "figma"
  | "django"
  | "postgresql"

export type TechItem = {
  name: string
  icon: TechIconName
}

export type TechGroup = {
  category: string
  items: TechItem[]
}

export type Project = {
  title: string
  description: string
  image: string
  tagLabels: string[]
  features: string[]
  demoLink: string
  codeLink: string
}

export const profileImage = profilePhoto

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export const mobileNavLinks = [
  { label: "Projects", href: "#projects" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
]

export const techStack: TechGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "js" },
      { name: "C", icon: "c" },
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cpp" },
      { name: "SQL", icon: "mysql" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "React", icon: "react" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "node" },
      { name: "Express", icon: "express" },
    ],
  },
  {
    category: "Mobile",
    items: [{ name: "React Native", icon: "reactnative" }],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "vscode" },
      { name: "Visual Studio", icon: "visualstudio" },
      { name: "Figma", icon: "figma" },
    ],
  },
]

export const projects: Project[] = [
  {
    title: "SkillBridge",
    description:
      "SkillBridge is a student micro-work platform that connects students with clients for real-world projects, managing the complete workflow from job posting and application to project completion and review.",
    image: skillBridgeImage,
    tagLabels: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript"],
    features: [
      "Job & Application Management",
      "Application-to-Project Workflow",
      "Deliverable & Revision Tracking",
      "Verification & Review System",
    ],
    demoLink: "https://skill-bridge-hazel-rho.vercel.app/",
    codeLink: "https://github.com/Ramit-Sonar/SkillBridge.git",
  },
  {
    title: "QueueLess Nepal",
    description:
      "A digital queue and token management system that allows users to take tokens online, track live queue status, and reduce unnecessary physical waiting in service-based organizations.",
    image: queueLessNepalImage,
    tagLabels: ["Django", "PostgreSQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Digital token generation",
      "Live queue tracking",
      "Staff queue management",
      "English ⇄ नेपाली language support",
    ],
    demoLink: "#",
    codeLink: "https://github.com/Ramit-Sonar/queueless-nepal.git",
  },
]
