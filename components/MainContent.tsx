"use client"

import { motion } from "framer-motion"
import ExperienceSection from "./ExperienceSection"
import CredentialsSection from "./CredentialsSection"
import SkillsSection from "./SkillsSection"
import ProjectsSection from "./ProjectsSection"

export default function MainContent() {
  return (
    <main className="flex-1 p-6 lg:p-8 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <ExperienceSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CredentialsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <SkillsSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ProjectsSection onProjectClick={() => {}} />
      </motion.div>
    </main>
  )
}
