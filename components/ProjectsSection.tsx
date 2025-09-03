"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Folder, ExternalLink, ArrowRight, ArrowUp } from "lucide-react"
import Image from "next/image"
import { projects, type Project } from "../lib/projectsData"

interface ProjectsSectionProps {
  onProjectClick: (project: Project, showAllState: boolean) => void
  initialShowAll?: boolean
}

export default function ProjectsSection({ onProjectClick, initialShowAll = false }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(initialShowAll)
  
  // Reverse projects to show latest first (highest ID first)
  const reversedProjects = [...projects].reverse()

  // Handle project click with touch optimization
  const handleProjectClick = useCallback((project: Project, showAllState: boolean) => {
    onProjectClick(project, showAllState)
  }, [onProjectClick])

  return (
    <div className="bg-white dark:bg-[#111111] rounded-2xl shadow-lg border border-gray-200/50 dark:border-[#333333]/50 h-fit">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-100 dark:bg-[#333333]/30 rounded-xl">
              <Folder size={20} className="text-orange-600 dark:text-orange-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Projects</h2>
          </div>
          {reversedProjects.length > 3 && (
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
          {(showAll ? reversedProjects : reversedProjects.slice(0, 3)).map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleProjectClick(project, showAll)}
              className="group bg-white/60 dark:bg-[#111111]/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-[#333333]/50 hover:shadow-xl transition-all duration-300 cursor-pointer touch-manipulation"
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
                <div className="absolute top-2 right-2 p-1.5 bg-white/90 dark:bg-[#111111]/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <ExternalLink size={14} className="text-gray-700 dark:text-gray-300" />
                </div>
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
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 rounded-lg"
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
