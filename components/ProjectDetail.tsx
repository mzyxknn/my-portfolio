"use client"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useEffect, useState, useRef, useCallback } from "react"

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
  liveUrl?: string
  sourceUrl?: string
}

interface ProjectDetailProps {
  project: Project
  onBack: () => void
  allProjects?: Project[]
  onProjectClick?: (project: Project) => void
}

export default function ProjectDetail({ project, onBack, allProjects = [], onProjectClick }: ProjectDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMessage, setModalMessage] = useState("")
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [selectedImageSrc, setSelectedImageSrc] = useState<string | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const imageRef = useRef<HTMLImageElement>(null)
  const [initialDistance, setInitialDistance] = useState(0)
  const [initialZoom, setInitialZoom] = useState(1)

  const handleOpenLink = (url: string | undefined, fallbackMessage: string) => {
    if (url && typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }
    setModalMessage(fallbackMessage)
    setIsModalOpen(true)
  }

  const openImageModal = (src: string) => {
    setSelectedImageSrc(src)
    setIsImageModalOpen(true)
    setZoomLevel(1) // Reset zoom on new image
  }

  const closeImageModal = () => {
    setIsImageModalOpen(false)
    setSelectedImageSrc(null)
    setZoomLevel(1) // Reset zoom on close
  }

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.5))
  }

  // Helper function to get distance between two touch points
  const getDistance = useCallback((touches: React.TouchList) => {
    if (touches.length < 2) return 0
    const touch1 = touches[0]
    const touch2 = touches[1]
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) + 
      Math.pow(touch2.clientY - touch1.clientY, 2)
    )
  }, [])

  // Touch event handlers for pinch-to-zoom
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const distance = getDistance(e.touches)
      setInitialDistance(distance)
      setInitialZoom(zoomLevel)
      e.preventDefault()
    }
  }, [getDistance, zoomLevel])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistance > 0) {
      const currentDistance = getDistance(e.touches)
      const scale = currentDistance / initialDistance
      const newZoom = Math.min(Math.max(initialZoom * scale, 0.5), 3)
      setZoomLevel(newZoom)
      e.preventDefault()
    }
  }, [getDistance, initialDistance, initialZoom])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      setInitialDistance(0)
      setInitialZoom(1)
    }
  }, [])

  // Get related projects for "More Projects" section
  const getRelatedProjects = (currentProject: Project, projects: Project[]) => {
    // Filter out the current project
    const otherProjects = projects.filter(p => p.id !== currentProject.id)
    
    if (otherProjects.length === 0) return []
    
    // First, try to find projects from the same category
    const sameCategory = otherProjects.filter(p => p.category === currentProject.category)
    
    // If we have projects from same category, prioritize them
    if (sameCategory.length >= 2) {
      return sameCategory.slice(0, 2)
    }
    
    // If we have 1 from same category, get 1 more from different category
    if (sameCategory.length === 1) {
      const differentCategory = otherProjects.filter(p => p.category !== currentProject.category)
      return [
        ...sameCategory,
        ...differentCategory.slice(0, 1)
      ]
    }
    
    // If no projects from same category, return 2 most recent (by ID - assuming higher ID = more recent)
    return otherProjects
      .sort((a, b) => b.id - a.id)
      .slice(0, 2)
  }

  const relatedProjects = getRelatedProjects(project, allProjects)

  useEffect(() => {
    // Scroll to the top when the component mounts or project changes
    window.scrollTo(0, 0)
  }, [project])

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 py-8 pb-24 md:pb-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Portfolio
      </button>

      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-8 h-64">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <span className="text-sm font-medium text-cyan-400 uppercase tracking-wide">{project.category}</span>
          <h1 className="text-3xl font-bold mt-1">{project.title}</h1>
          <p className="text-gray-200 mt-2 max-w-2xl">{project.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main Content */}
        <div className="col-span-1 lg:col-span-2 space-y-6 lg:space-y-8">
          {/* Project Overview */}
          <div className="bg-white dark:bg-[#111111] rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-[#333333]/50">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">{project.overview}</p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h3>
              <ul className="space-y-2">
                {project.features?.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                    <span className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleOpenLink(project.liveUrl, "No live link provided yet.")}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
              >
                <ExternalLink size={16} />
                View Live Project
              </button>
              <button
                onClick={() => handleOpenLink(project.sourceUrl, "No source code link provided yet.")}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-[#333333] hover:bg-gray-200 dark:hover:bg-[#555555] text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium"
              >
                <Github size={16} />
                View Source Code
              </button>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="bg-white dark:bg-[#111111] rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-[#333333]/50">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Gallery</h2>
            <div className={`grid gap-4 ${
              project.gallery?.length === 1 
                ? 'grid-cols-1' 
                : project.gallery?.length === 2 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : 'grid-cols-1 md:grid-cols-2'
            }`}>
              {project.gallery?.map((image: string, index: number) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => openImageModal(image)}
                  className="group relative aspect-video rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-1 space-y-4 lg:space-y-6">
          {/* Project Details */}
          <div className="bg-white dark:bg-[#111111] rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-[#333333]/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Project Details</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Client</p>
                <p className="text-gray-900 dark:text-white font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Timeline</p>
                <p className="text-gray-900 dark:text-white font-medium">{project.timeline}</p>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Role</p>
                <p className="text-gray-900 dark:text-white font-medium">{project.role}</p>
              </div>
            </div>
          </div>

          {/* More Projects */}
          {relatedProjects.length > 0 && (
            <div className="bg-white dark:bg-[#111111] rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-[#333333]/50">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">More Projects</h3>
              <div className="space-y-3">
                {relatedProjects.map((proj) => (
                  <div
                    key={proj.id}
                    className="flex gap-3 p-3 bg-gray-100 dark:bg-[#333333] rounded-lg hover:bg-gray-200 dark:hover:bg-[#555555] transition-colors cursor-pointer"
                    onClick={() => onProjectClick?.(proj)}
                  >
                    <Image
                      src={proj.image || "/placeholder.svg"}
                      alt={proj.title}
                      width={60}
                      height={40}
                      className="rounded object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-gray-900 dark:text-white font-medium text-sm truncate">{proj.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-xs">{proj.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-[#333333]">
        <p className="text-gray-500 dark:text-gray-400 text-sm">© 2025 Mc Benny Copper R. Precilla. All rights reserved.</p>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white dark:bg-[#111111] p-6 shadow-xl border border-gray-200/50 dark:border-[#333333]/50">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Notice</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{modalMessage}</p>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {isImageModalOpen && selectedImageSrc && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          onClick={closeImageModal}
        >
          <div
            className="relative bg-white dark:bg-[#111111] rounded-xl shadow-xl border border-gray-200/50 dark:border-[#333333]/50 max-w-[90vw] max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Controls */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-[#333333]">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Zoom:</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{Math.round(zoomLevel * 100)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Zoom out"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#555555] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.5}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Zoom in"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#555555] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button
                  type="button"
                  aria-label="Close image"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#555555] transition-colors"
                  onClick={closeImageModal}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Image Container */}
            <div className="p-4 overflow-auto max-h-[calc(90vh-80px)]">
              <div className="flex items-center justify-center touch-none">
                <img
                  ref={imageRef}
                  src={selectedImageSrc}
                  alt="Project screenshot"
                  className="max-w-full max-h-full object-contain transition-transform duration-200 select-none touch-manipulation"
                  style={{ transform: `scale(${zoomLevel})` }}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
