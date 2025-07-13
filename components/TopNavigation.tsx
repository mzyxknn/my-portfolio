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
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? "text-cyan-500 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 border-b-2 border-cyan-500 dark:border-cyan-400"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
