"use client"

import { useState, useCallback, useEffect, useRef } from "react"
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
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInitialRender = useRef(true)
  
  // Reverse projects to show latest first (highest ID first)
  const reversedProjects = [...projects].reverse()

  // Track if this is initial render or return from project detail
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
      setHasAnimated(true)
    }
  }, [])

  // Handle project click with touch optimization
  const handleProjectClick = useCallback((project: Project, showAllState: boolean) => {
    onProjectClick(project, showAllState)
  }, [onProjectClick])

  // Determine if we should animate (only on initial page load)
  const shouldAnimate = !hasAnimated

  return (
    <motion.div 
      initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={shouldAnimate ? { duration: 0.6, delay: 0.1 } : { duration: 0 }}
      className="bg-white dark:bg-[#111111] rounded-2xl shadow-lg border border-gray-200/50 dark:border-[#333333]/50 h-fit"
    >
      <div className="p-6">
        <motion.div 
          initial={shouldAnimate ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldAnimate ? { duration: 0.5, delay: 0.2 } : { duration: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-3">
            <motion.div 
              initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={shouldAnimate ? { duration: 0.5, delay: 0.3 } : { duration: 0 }}
              className="p-2 bg-orange-100 dark:bg-[#333333]/30 rounded-xl"
            >
              <Folder size={20} className="text-orange-600 dark:text-orange-400" />
            </motion.div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Projects</h2>
          </div>
          {reversedProjects.length > 3 && (
            <motion.button 
              initial={shouldAnimate ? { opacity: 0, scale: 0.9 } : { opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={shouldAnimate ? { duration: 0.4, delay: 0.4 } : { duration: 0 }}
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            >
              {showAll ? 'Show Less' : 'View All'}
              {showAll ? <ArrowUp size={16} /> : <ArrowRight size={16} />}
            </motion.button>
          )}
        </motion.div>

        <motion.div 
          initial={shouldAnimate ? { opacity: 0, y: 10 } : { opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldAnimate ? { duration: 0.5, delay: 0.5 } : { duration: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {(showAll ? reversedProjects : reversedProjects.slice(0, 3)).map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              initial={shouldAnimate ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={shouldAnimate ? { duration: 0.5, delay: 0.6 + index * 0.1 } : { duration: 0 }}
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
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  quality={75}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={shouldAnimate ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={shouldAnimate ? { duration: 0.3, delay: 0.8 + index * 0.1 + tagIndex * 0.05 } : { duration: 0 }}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
