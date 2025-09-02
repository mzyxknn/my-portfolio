"use client"

import { motion } from "framer-motion"
import { Briefcase, CheckCircle } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Junior UI/UX Designer and Creative Intern",
      company: "SWRTech",
      period: "January 2025 - May 2025",
      description:
        "Designed visual assets for A/B testing during a social media campaign, then created the final visuals for Facebook and Instagram based on performance insights. Completed two UI design challenges for mobile and tablet to improve my structured design process. Developed internal branding materials, and contributed to mobile and web UI designs for the company's internal product, Projectflow.",
      achievements: [
        "Designed wireframes, prototypes, and core mobile/web pages including landing, workflow, and navigation screens for the internal product Projectflow.",
        "Designed visual assets for A/B testing and visual design for the actual posting for Facebook and Instagram campaigns.",
        "Produced high-performing social media assets: image posts, carousels, and videos.",
        "Completed 2 UI challenges for mobile and tablet to strengthen structured design skills.",
        "Developed internal branding materials: polo shirts, ID cards, lanyards design.",
        "Managed tasks using ClickUp and participated in daily stand-ups and retrospectives within an Agile environment to share updates, reflect on progress, and stay aligned with team goals.",
      ],
      skills: ["Figma", "Canva", "Adobe Photoshop","Adobe Illustrator", "Prototyping", "User Research", "Content Creation", "Social Media Visual Design", "Internal Branding"],
    },
    /*{
      title: "Software Developer",
      company: "Digital Solutions",
      period: "2019 - 2021",
      description:
        "Developed responsive web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built 12+ client projects across fintech, healthcare, and e-commerce",
        "Improved application performance by 40% through code optimization",
        "Mentored junior developers and facilitated knowledge sharing sessions",
      ],
      skills: ["React", "TypeScript", "Node.js", "MongoDB"],
    },
    {
      title: "UI/UX Intern",
      company: "Creative Solutions",
      period: "2017 - 2018",
      description:
        "Assisted the design team in creating visual assets and interface components. Participated in brainstorming sessions and contributed to the design of marketing websites and mobile applications.",
      achievements: [
        "Redesigned the company website, improving mobile responsiveness",
        "Created a component library that streamlined the design process",
        "Conducted competitive analysis for 5 client projects",
      ],
      skills: ["Adobe Creative Suite", "HTML/CSS", "Wireframing"],
    },*/
  ]

  return (
    <div className="bg-white dark:bg-[#111111] rounded-2xl shadow-lg border border-gray-200/50 dark:border-[#333333]/50 h-fit">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-blue-100 dark:bg-[#333333]/30 rounded-xl">
            <Briefcase size={20} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-6 border-l-2 border-gray-200 dark:border-[#333333] last:border-l-0 pb-6 last:pb-0"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-[#111111]"></div>

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-cyan-600 dark:text-cyan-400 font-medium text-sm">{exp.company}</p>
                </div>
                <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 lg:mt-0">{exp.period}</span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">{exp.description}</p>

              <div className="mb-3">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Key Achievements</h4>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-gray-600 dark:text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-1">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {skill}
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
