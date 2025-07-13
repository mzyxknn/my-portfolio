"use client"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import { useEffect } from "react"

interface ProjectDetailProps {
  project: any
  onBack: () => void
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const moreProjects = [
    {
      id: 2,
      title: "Finance Dashboard",
      category: "Web Application",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      title: "E-Commerce Redesign",
      category: "UX Case Study",
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  useEffect(() => {
    // Scroll to the top when the component mounts or project changes
    window.scrollTo(0, 0)
  }, [project])

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-8">
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

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Project Overview */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
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
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                <ExternalLink size={16} />
                View Live Project
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors text-sm font-medium">
                <Github size={16} />
                View Source Code
              </button>
            </div>
          </div>

          {/* Project Gallery */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.gallery?.map((image: string, index: number) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Project Details */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
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
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">More Projects</h3>
            <div className="space-y-3">
              {moreProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="flex gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                >
                  <Image
                    src={proj.image || "/placeholder.svg"}
                    alt={proj.title}
                    width={60}
                    height={40}
                    className="rounded object-cover"
                  />
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium text-sm">{proj.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">{proj.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <p className="text-gray-500 dark:text-gray-400 text-sm">© 2025 Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  )
}
