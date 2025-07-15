"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Design",
      skills: ["Figma", "Illustrator", "Photoshop", "Canva", "Framer"],
    },
    {
      title: "Development",
      skills: ["HTML/CSS", "JavaScript", "Python", "React", "TypeScript", "Tailwind CSS", "Java", "C#", "SQL", "NoSQL"],
    },
    {
      title: "Platforms",
      skills: [
        "Firebase",
        "Android Studio",
        "Visual Studio Code",
        "Pycharm",
        "Github",
        "Clickup",
        "Notion",
      ],
    },
    {
      title: "UX Methods",
      skills: [
        "User Research",
        "Usability Testing",
        "Wireframing",
        "Prototyping",
        "Information Architecture",
        "User Flows",
      ],
    },
    {
      title: "Soft Skills",
      skills: ["Project Management", "Communication", "Adaptability", "Problem Solving", "Analytical Thinking", "Teamwork", "Leadership", "Time Management"],
    },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 h-fit">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-xl">
            <Code size={24} className="text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
        </div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Code size={16} className="text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-gray-600/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
