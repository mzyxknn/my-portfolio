"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap } from "lucide-react"
import Image from "next/image"

export default function CredentialsSection() {
  const certifications = [
    {
      title: "Create High-Fidelity Designs and Prototypes in Figma",
      issuer: "Coursera",
      year: "2025",
      logo: "/logos/uxd.png",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      issuer: "Coursera",
      year: "2025",
      logo: "/logos/uxd.png",
    },
    {
      title: "Conduct UX Research and Test Early Concepts",
      issuer: "Coursera",
      year: "2025",
      logo: "/logos/uxd.png",
    },
    {
      title: "Build Wireframes and Low-Fidelity Prototypes",
      issuer: "Coursera",
      year: "2025",
      logo: "/logos/uxd.png",
    },
    {
      title: "Start the UX Design Process: Empathize, Define, and Ideate",
      issuer: "Coursera",
      year: "2025",
      logo: "/logos/uxd.png",
    },
    {
      title: "Office of the CISO Institute: Cybersecurity Essentials",
      issuer: "Coursera",
      year: "2025",
      logo: "/logos/ciso.png",
    },
    
    {
      title: "Google AI Essentials Certificate",
      issuer: "Coursera",
      year: "2024",
      logo: "/logos/google-ai.png",
    },
    {
      title: "Bicol IT Students Congress (BITSCON) 2024",
      issuer: "Camarines Norte State College",
      year: "2024",
      logo: "/logos/bitscon.png",
    },
    {
      title: "ON CLICK 2.0: Logo Design Workshop Certificate",
      issuer: "ONCLICK",
      year: "2022",
      logo: "/logos/onclick.png",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      school: "Camarines Norte State College",
      period: "2021-2025",
      logo: "/logos/cnsc.png",
    },
    {
      degree: "Science, Technology, Engineering, and Mathematics (STEM)",
      school: "Vinzons Pilot High School",
      period: "2019-2021",
      logo: "/logos/vphs.png",
    },
  ]

  const skills = [
    "UI Design",
    "UX Research",
    "Design Systems",
    "Wireframing",
    "Prototyping",
    "User Testing",
    "Accessibility",
    "Design Thinking",
    "Responsive Design",
    "Agile & Scrum Workflow",
    "Mobile & Web Development",
  ]

  return (
    <div className="bg-white dark:bg-[#111111] rounded-2xl shadow-lg border border-gray-200/50 dark:border-[#333333]/50 h-fit">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-purple-100 dark:bg-[#333333]/30 rounded-xl">
            <Award size={24} className="text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Credentials</h2>
        </div>

        {/* Professional Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Professional Certifications</h3>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#333333]/50 rounded-xl border border-gray-200/50 dark:border-[#333333]/30"
              >
                <div className="w-12 h-12 bg-gray-200 dark:bg-[#333333] rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={cert.logo}
                    alt={cert.issuer}
                    width={40}
                    height={40}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={20} className="text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h3>
          </div>
          <div className="space-y-3">
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-[#333333]/50 rounded-xl border border-gray-200/50 dark:border-[#333333]/30"
              >
                <div className="w-12 h-12 bg-gray-200 dark:bg-[#333333] rounded-lg flex items-center justify-center overflow-hidden">
                  <Image
                    src={edu.logo}
                    alt={edu.school}
                    width={40}
                    height={40}
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {edu.school} • {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Award size={20} className="text-cyan-600 dark:text-cyan-400" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Skills & Expertise</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-[#333333]/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
