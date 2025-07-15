"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Folder, ExternalLink, ArrowRight, ArrowUp } from "lucide-react"
import Image from "next/image"

interface Project {
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
}

interface ProjectsSectionProps {
  onProjectClick: (project: Project, showAllState: boolean) => void
  initialShowAll?: boolean
}

export default function ProjectsSection({ onProjectClick, initialShowAll = false }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(initialShowAll)
  const projects = [
    {
      id: 1,
      title: "MURPHY: An Interactive Mobile Game for Science 3",
      category: "Mobile Game",
      description: "An educational mobile game designed for Grade 3 students, combining science lessons with interactive stories, games, and quizzes.",
      image: "/project/murphy/murphy.png?height=200&width=300",
      tags: ["Mobile Game", "Game Development", "Game-Based Learning"],
      client: "Capstone Project",
      timeline: "4 months (2024)",
      role: "Game Developer & Designer",
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
      id: 2,
      title: "Document Management System",
      category: "Web Application",
      description: "A web-based system built to streamline document tracking and management for the Local Government Unit of San Vicente, Camarines Norte.",
      image: "/placeholder.svg?height=200&width=300",
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
      gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
    {
      id: 3,
      title: "Botanica",
      category: "Mobile Application",
      description:
        "A mobile app designed to monitor and control an Arduino-powered smart plant care system.",
      image: "/placeholder.svg?height=200&width=300",
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
      gallery: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    },
    {
      id: 4,
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
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 h-fit">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-xl">
              <Folder size={20} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Recent Projects</h2>
          </div>
          {projects.length > 3 && (
            <button 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {showAll ? 'Show Less' : 'View All'}
              {showAll ? <ArrowUp size={16} /> : <ArrowRight size={16} />}
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onProjectClick(project, showAll)}
              className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <button className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-gray-800/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink size={14} className="text-gray-700 dark:text-gray-300" />
                </button>
              </div>

              <div className="p-4">
                <div className="mb-1">
                  <span className="text-xs font-medium text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{project.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
