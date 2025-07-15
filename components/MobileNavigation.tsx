"use client"

import { useState, useEffect } from "react"
import { Home, Briefcase, Award, Code, Folder, Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

interface MobileNavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function MobileNavigation({ activeSection, setActiveSection }: MobileNavigationProps) {
  const { theme, toggleTheme } = useTheme()
  const [currentSection, setCurrentSection] = useState("home")

  const navigationItems = [
    { id: "home", icon: Home, name: "Home" },
    { id: "experience", icon: Briefcase, name: "Experience" },
    { id: "credentials", icon: Award, name: "Credentials" },
    { id: "skills", icon: Code, name: "Skills" },
    { id: "projects", icon: Folder, name: "Projects" },
  ]

  // Track which section is actually visible on screen
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["experience", "credentials", "skills", "projects"]
      let dominantSection = "home"
      let maxVisibility = 0
      
      // Check each section to see which one is most visible
      sectionIds.forEach(sectionId => {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          const windowHeight = window.innerHeight
          
          // Calculate how much of the section is visible
          const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0))
          const visibilityRatio = visibleHeight / windowHeight
          
          // A section is considered dominant if it takes up at least 30% of screen
          // AND is more visible than other sections
          if (visibilityRatio >= 0.3 && visibilityRatio > maxVisibility) {
            maxVisibility = visibilityRatio
            dominantSection = sectionId
          }
        }
      })
      
      // If no section is significantly visible, stay with home
      if (maxVisibility < 0.3) {
        dominantSection = "home"
      }
      
      setCurrentSection(dominantSection)
    }

    // Check initial position
    handleScroll()

    // Add scroll listener
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        {navigationItems.map((item) => {
          const Icon = item.icon
          
          // Use the detected current section or manual selection
          const isActive = currentSection === item.id
          
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-blue-500 text-white min-w-fit"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 min-w-fit"
              }`}
            >
              <Icon size={20} />
              {isActive && (
                <span className="text-sm font-medium whitespace-nowrap">
                  {item.name}
                </span>
              )}
            </button>
          )
        })}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 px-3 py-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors min-w-fit"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  )
}
