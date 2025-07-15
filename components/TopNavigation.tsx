"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "./ThemeProvider"

interface TopNavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

const roles = ["UI/UX Designer", "Software Developer", "Graphics Designer"]

export default function TopNavigation({ activeSection, setActiveSection }: TopNavigationProps) {
  const { theme, toggleTheme } = useTheme()
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const [currentSection, setCurrentSection] = useState("")
  const typingSpeed = 100 // ms per character
  const deletingSpeed = 50 // ms per character
  const pauseBeforeDelete = 1500 // ms
  const pauseBeforeType = 500 // ms

  useEffect(() => {
    let timer: NodeJS.Timeout
    const currentRole = roles[roleIndex]

    if (isDeleting) {
      setShowCursor(false)
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1))
        if (displayedText.length === 0) {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
          setTimeout(() => setShowCursor(true), pauseBeforeType)
        }
      }, deletingSpeed)
    } else {
      setShowCursor(true)
      timer = setTimeout(
        () => {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1))
          if (displayedText.length === currentRole.length) {
            setIsDeleting(true)
          }
        },
        displayedText.length === currentRole.length ? pauseBeforeDelete : typingSpeed,
      )
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed, deletingSpeed, pauseBeforeDelete])

  // Track which section is actually visible on screen for stable detection
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["experience", "credentials", "skills", "projects"]
      let dominantSection = ""
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
          
          // A section is considered dominant if it takes up at least 25% of screen
          // AND is more visible than other sections
          if (visibilityRatio >= 0.25 && visibilityRatio > maxVisibility) {
            maxVisibility = visibilityRatio
            dominantSection = sectionId
          }
        }
      })
      
      // If no section is significantly visible, don't show any active state
      if (maxVisibility < 0.25) {
        dominantSection = ""
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

  const navigationItems = [
    { id: "experience", label: "Experience" },
    { id: "credentials", label: "Credentials" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ]

  return (
    <nav className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-50 hidden md:block">
      <div className="flex justify-center px-6 py-4">
        <div className="flex items-center justify-between w-[1200px]">
          {/* Left side - Name and animated title */}
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-cyan-500 dark:text-cyan-400">Mc Benny Copper R. Precilla</h1>
            <span className="text-gray-400 dark:text-gray-500">/</span>
            <div className="relative h-6 overflow-hidden min-w-[140px]">
              <span className="block text-gray-600 dark:text-gray-300 text-sm h-6 leading-6 whitespace-nowrap">
                {displayedText}
                <span 
                  className={`inline-block text-cyan-500 dark:text-cyan-400 ml-0.5 ${showCursor ? '' : 'opacity-0'}`}
                  style={{
                    animation: showCursor ? 'blink 1s infinite' : 'none'
                  }}
                >|</span>
              </span>
              <style jsx>{`
                @keyframes blink {
                  0%, 50% { opacity: 1; }
                  51%, 100% { opacity: 0; }
                }
              `}</style>
            </div>
          </div>

          {/* Right side - Navigation and theme toggle */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    currentSection === item.id
                      ? "text-cyan-500 dark:text-cyan-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {currentSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-500 dark:bg-cyan-400"></span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-gray-700 dark:text-white"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
