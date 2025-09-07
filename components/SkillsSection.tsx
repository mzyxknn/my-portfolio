"use client"

import { motion } from "framer-motion"
import { Code } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Design Tools",
      skills: ["Figma", "Balsamiq", "Miro", "Illustrator", "Photoshop", "Canva"],
    },
    {
      title: "Development",
      skills: ["HTML/CSS", "JavaScript", "Python", "Reactjs", "Nextjs", "TypeScript", "Tailwind CSS", "Java", "C#", "MySQL", "NoSQL"],
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
      title: "UI/UX Design",
      skills: [
        "User-Centered Design",
        "User Research",
        "User Flows",
        "User Testing",
        "User Persona",
        "User Journey",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
      ],
    },
    {
      title: "Soft Skills",
      skills: ["Analytical thinking", "Communication", "Adaptability", "Detail-Oriented", "Collaboration", "Leadership", "Time Management", "Curiosity"],
    },
  ]

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-white dark:bg-[#111111] rounded-2xl shadow-lg border border-gray-200/50 dark:border-[#333333]/50 h-fit"
    >
      <div className="p-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-3 mb-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-2 bg-green-100 dark:bg-[#333333]/30 rounded-xl"
          >
            <Code size={24} className="text-green-600 dark:text-green-400" />
          </motion.div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="space-y-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 mb-3"
              >
                <Code size={16} className="text-cyan-600 dark:text-cyan-400" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              </motion.div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 + skillIndex * 0.03 }}
                    className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-[#333333]/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
