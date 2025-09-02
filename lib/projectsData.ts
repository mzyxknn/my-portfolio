export interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  client: string
  timeline: string
  role: string
  overview: string
  features: string[]
  technologies: string[]
  gallery: string[]
  liveUrl?: string
  sourceUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CNSC I-FIND",
    category: "Mobile Application",
    description:
      "A mobile app that allows students and staff to report, track, and recover lost-and-found items on campus.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Mobile App", "Lost and Found", "Campuswide"],
    client: "Academic Project - CNSC PICRO",
    timeline: "4 months (2023)",
    role: "Mobile Developer & UI/UX Designer",
    overview:
      "CNSC I-FIND is a mobile application developed to improve the lost-and-found process within Camarines Norte State College. The app enables users to report lost or found items, track status updates, and facilitate communication between item finders and owners. The project aimed to reduce unclaimed items and streamline the recovery process.",
    features: [
      "Lost and found item reporting.",
      "Item tracking and status updates.",
      "Search and filter functionality.",
      "Reward system for item finders.",
      "Clean, student-friendly UI",
    ],
    technologies: ["Android Studio", "Java", "Figma", "Balsamiq"],
    gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: 2,
    title: "Botanica",
    category: "Mobile Application",
    description:
      "A mobile app designed to monitor and control an Arduino-powered smart plant care system.",
    image:  "/project/botanica/botanica1.png?height=400&width=300",
    tags: ["Mobile App", "Smart Plant Care", "IoT", "Arduino"],
    client: "Academic Project – Robotics",
    timeline: "3 months (2023)",
    role: "Mobile Developer & UI/UX Designer",
    overview:
      "Botanica is a mobile application developed as part of a smart plant care project. The app connects to an Arduino-based system to automate and monitor plant care using real-time sensor data. Designed for ease of use, the app allows users to manage watering schedules, monitor soil moisture, and control the system manually or automatically.",
    features: [
      "Scheduled and manual watering controls.",
      "Real-time sensor monitoring (moisture, water level, etc.)",
      "Automation based on sensor thresholds.",
      "Clean, user-friendly UI with responsive layout.",
      "Wi-Fi integration with Arduino.",
    ],
    technologies: ["Android Studio", "Java", "Figma"],
    gallery: [
      "/project/botanica/botanica1.png?height=400&width=300",
      "/project/botanica/botanica2.png?height=400&width=300",
      "/project/botanica/botanica3.png?height=400&width=300",
    ],
  },
  {
    id: 3,
    title: "Document Management System",
    category: "Web Application",
    description: "A web-based system built to streamline document tracking and management for the Local Government Unit of San Vicente, Camarines Norte.",
    image: "/project/dms/dms.png?height=200&width=300",
    tags: ["React", "Firebase", "Web App", "Management system"],
    client: "Academic Project – San Vicente LGU",
    timeline: "4 months (2024)",
    role: "UI/UX Designer",
    overview:
      "Designed and contributed to the development of the document management system for an academic project, based on real-world requirements gathered through interviews with San Vicente LGU staff. The system was designed to improve the tracking, storage, and retrieval of internal and external documents within the LGU.",
    features: [
      "User access control with authentication",
      "Document tracking and status updates",
      "Search and filtering functionality",
      "Dashboard for quick access to document logs",
      "Role-based permissions",
    ],
    technologies: ["React", "HTML & CSS", "Javascript", "TypeScript", "Tailwind CSS", "Firebase"],
    gallery: [
      "/project/dms/dms.png?height=200&width=300",
      "/project/dms/dms2.png?height=200&width=300"],
  },
  {
    id: 4,
    title: "MURPHY: An Interactive Mobile Game for Science 3",
    category: "Mobile Game",
    description: "An educational mobile game designed for Grade 3 students, combining science lessons with interactive stories, games, and quizzes.",
    image: "/project/murphy/murphy.png?height=200&width=300",
    tags: ["Mobile Game", "Game Development", "Game-Based Learning"],
    client: "Capstone Project",
    timeline: "4 months (2024)",
    role: "Game Developer & UI/UX Designer",
    overview:
      "MURPHY is a 2D interactive mobile game developed as a capstone project, aimed at enhancing science learning for third-grade students. The game integrates lessons from the Science 3 curriculum with storytelling, gamified learning, and interactive assessments. It provides an engaging alternative to traditional learning methods, promoting both fun and comprehension.",
    features: [
      "Contains the 4 units of Science 3 curriculum.",
      "Narrated stories to contextualize scientific concepts.",
      "Interactive games and summative assessments with instant feedback.",
      "Child-friendly UI with original assets and illustrations.",
      "Progress tracking and lesson-based game flow.",
    ],
    technologies: ["Unity", "C#", "Visual Studio", "Adobe Illustrator", "Figma", "Canva"],
    gallery: [
      "/project/murphy/murph1.png?height=400&width=300",
      "/project/murphy/murph2.png?height=400&width=300",
      "/project/murphy/murph3.png?height=400&width=300",
      "/project/murphy/murph4.png?height=400&width=300",
    ],
  },
  {
    id: 5,
    title: "Tiny Treasures Website",
    category: "Website",
    description: "A modern website which promotes handcrafted products for a local small business.",
    image: "/project/ttweb/ttweb.png?height=200&width=300",
    tags: ["Website", "Modern", "EmailJS", "Easy Navigation"],
    client: "Personal Project",
    timeline: "1 week (July, 2025)",
    role: "Web Developer & UI/UX Designer",
    overview:
      "Designed and developed a responsive website for Tiny Treasures, a local small business specializing in handcrafted products. The website serves as an online storefront, showcasing the unique offerings of the business while providing an easy-to-navigate user experience.",
    features: [
      "Easy navigation with a clean, modern design",
      "Responsive layout for mobile and desktop",
      "Product catalog for showcasing handcrafted items",
      "Contact form for inquiries",
      "1 pager with smooth scrolling",
    ],
    technologies: ["React","TypeScript", "Tailwind CSS", "Shadcn UI"],
    gallery: [
      "/project/ttweb/ttweb.png?height=400&width=300",  
      "/project/ttweb/tinytreasures2.jpeg?height=400&width=300"],
    liveUrl: "https://tiny-treasures-web.vercel.app/",
  },
] 