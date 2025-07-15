"use client"
import { useState, useRef } from "react"
import { useScrollspy } from "../lib/utils"
import TopNavigation from "../components/TopNavigation"
import MobileNavigation from "../components/MobileNavigation"
import Sidebar from "../components/Sidebar"
import ExperienceSection from "../components/ExperienceSection"
import CredentialsSection from "../components/CredentialsSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import ProjectDetail from "../components/ProjectDetail"
import AnimatedBackground from "../components/AnimatedBackground"
import { ThemeProvider } from "../components/ThemeProvider"

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

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [manualActiveSection, setManualActiveSection] = useState<string | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Define section IDs for scrollspy
  const sectionIds = ["experience", "credentials", "skills", "projects"]
  
  // Use scrollspy hook to automatically detect active section
  const scrollspyActiveSection = useScrollspy(sectionIds)
  
  // Use manual selection if available, otherwise use scrollspy
  const activeSection = manualActiveSection || scrollspyActiveSection

  const handleSetActiveSection = (sectionId: string) => {
    // Set manual active section immediately
    setManualActiveSection(sectionId)
    
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    
    if (sectionId === "home") {
      // Scroll to the very top smoothly
      window.scrollTo({ top: 0, behavior: "smooth" })
      
      // After scrolling to top, let scrollspy take over (it will return "experience")
      scrollTimeoutRef.current = setTimeout(() => {
        setManualActiveSection(null)
      }, 800)
      return
    }

    const targetElement = document.getElementById(sectionId)
    if (targetElement) {
      // Get the top navigation height to account for sticky header
      const topNavHeight = 72 // Approximate height of top navigation
      const elementTop = targetElement.offsetTop - topNavHeight - 20 // 20px extra margin
      
      // Smooth scroll to the calculated position
      window.scrollTo({
        top: elementTop,
        behavior: "smooth"
      })
      
      // Clear manual selection after scroll completes
      scrollTimeoutRef.current = setTimeout(() => {
        setManualActiveSection(null)
      }, 800)
    }
  }

  if (selectedProject) {
    return (
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
          <AnimatedBackground />
          <div className="relative z-10">
            <TopNavigation activeSection={activeSection} setActiveSection={handleSetActiveSection} />
            <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
            <MobileNavigation activeSection={activeSection} setActiveSection={handleSetActiveSection} />
          </div>
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <TopNavigation activeSection={activeSection} setActiveSection={handleSetActiveSection} />
          <div id="main-content-wrapper" className="flex justify-center px-6 py-8 pb-24 md:pb-8">
            <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1200px] min-h-[calc(100vh-56px)]">
              {/* Sidebar - always present */}
              <div className="w-full md:w-80 md:flex-shrink-0">
                <Sidebar />
              </div>
              {/* Main content area - all sections rendered here */}
              <div className="w-full md:w-[880px] md:flex-shrink-0">
                {/* Each section wrapped with an ID */}
                <section id="experience">
                  <ExperienceSection />
                </section>
                <section id="credentials" className="mt-12">
                  <CredentialsSection />
                </section>
                <section id="skills" className="mt-12">
                  <SkillsSection />
                </section>
                <section id="projects" className="mt-12">
                  <ProjectsSection onProjectClick={setSelectedProject} />
                </section>
              </div>
            </div>
          </div>
          {/* Footer */}
          <footer className="flex justify-center px-6 py-4 pb-24 md:pb-4">
            <div className="w-full max-w-[1200px] text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                © 2025 Mc Benny Copper R. Precilla. All rights reserved.
              </p>
            </div>
          </footer>
          <MobileNavigation activeSection={activeSection} setActiveSection={handleSetActiveSection} />
        </div>
      </div>
    </ThemeProvider>
  )
}
