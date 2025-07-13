"use client"
import { useState } from "react"
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

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home") // Default to home
  const [selectedProject, setSelectedProject] = useState(null)

  const handleSetActiveSection = (sectionId: string) => {
    setActiveSection(sectionId)
    let targetElement: HTMLElement | null = null

    if (sectionId === "home") {
      // Scroll to the very top of the main content area, which includes the sidebar
      targetElement = document.getElementById("main-content-wrapper")
    } else {
      targetElement = document.getElementById(sectionId)
    }

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" })
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
                {/* Each section wrapped with an ID and scroll-margin-top */}
                <section id="experience" className="scroll-mt-[80px]">
                  <ExperienceSection />
                </section>
                <section id="credentials" className="mt-12 scroll-mt-[80px]">
                  <CredentialsSection />
                </section>
                <section id="skills" className="mt-12 scroll-mt-[80px]">
                  <SkillsSection />
                </section>
                <section id="projects" className="mt-12 scroll-mt-[80px]">
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
