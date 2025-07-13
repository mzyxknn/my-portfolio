"use client"

import { Home, Briefcase, Award, Code, Folder, Sun, Moon } from "lucide-react"
import { useTheme } from "./ThemeProvider"

interface MobileNavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function MobileNavigation({ activeSection, setActiveSection }: MobileNavigationProps) {
  const { theme, toggleTheme } = useTheme()

  const navigationItems = [
    { id: "home", icon: Home },
    { id: "experience", icon: Briefcase },
    { id: "credentials", icon: Award },
    { id: "skills", icon: Code },
    { id: "projects", icon: Folder },
  ]

  return (
    <nav className="md:hidden fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-2 py-2 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
        {navigationItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`p-2 rounded-full transition-colors ${
                activeSection === item.id
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              <Icon size={20} />
            </button>
          )
        })}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  )
}
