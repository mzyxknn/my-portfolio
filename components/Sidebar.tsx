"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Instagram,
  Facebook,
  Linkedin,
  Github,
  User,
  Mail,
  MapPin,
  Clock,
  Briefcase,
  FileText,
  Languages,
  Target,
  Send,
} from "lucide-react"
import Image from "next/image"

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<"about" | "contact">("about")

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/mcbennycopperprecillla/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/mzyxknn", label: "GitHub" },
    { icon: Facebook, href: "https://www.facebook.com/mcben.precilla", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/mcbn_prcll/", label: "Instagram" },
  ]

  const tags = ["UI/UX Designer", "Software Developer", "Graphics Designer", , "Technical Support"]

  const languageSkills = [
    { name: "English", level: "Intermediate", percentage: 85 },
    { name: "Tagalog", level: "Native", percentage: 100 },
  ]

  const handleSendEmail = () => {
    if (typeof window !== 'undefined') {
      const email = "mcbencopper04@gmail.com"
      const subject = "Subject"
      const body = "Hello Mc Benny, I would like to discuss a potential opportunity with you."
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`
      window.open(gmailUrl, "_blank")
    }
  }

  const handleResumeClick = () => {
    if (typeof window !== 'undefined') {
      // Open PDF in new tab for viewing
      window.open("/Resume_Precilla, Mc Benny Copper.pdf", "_blank")
      
      // Optionally trigger download as well
      // Uncomment the lines below if you want automatic download
      // const link = document.createElement('a')
      // link.href = "/resume.pdf"
      // link.download = "Mc_Benny_Copper_Resume.pdf"
      // link.click()
    }
  }

  return (
    <div className="bg-white dark:bg-[#111111] rounded-2xl shadow-lg border border-gray-200/50 dark:border-[#333333]/50 h-fit sticky top-[56px]">
      {/* Profile Section */}
              <div className="p-6 text-center border-b border-gray-200/50 dark:border-[#333333]/50">
        <div className="w-32 h-32 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700">
          <Image
            src="/profile.jpg?height=128&width=128"
            alt="Mc Benny Copper R. Precilla"
            width={128}
            height={128}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Mc Benny Copper R. Precilla</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">Open for Junior or Entry Level Position</p>{/*UI/UX Designer • Software Developer*/}
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">Talisay, Camarines Norte, Philippines, 4602</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-[#333333] text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-2 mb-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="p-2 rounded-lg bg-gray-100 dark:bg-[#333333] hover:bg-gray-200 dark:hover:bg-[#444444] transition-colors"
              aria-label={label}
            >
              <Icon size={16} className="text-gray-600 dark:text-gray-300" />
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button 
            onClick={handleResumeClick}
            className="flex-1 flex items-center justify-center gap-1 py-2 px-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors"
          >
            <FileText size={14} />
            Resume
          </button>
          <button
            onClick={handleSendEmail}
            className="flex-1 flex items-center justify-center gap-1 py-2 px-2 bg-transparent border border-gray-300 dark:border-[#333333] hover:bg-gray-50 dark:hover:bg-[#111111] text-gray-700 dark:text-gray-300 text-xs font-medium rounded-lg transition-colors"
          >
            <Send size={14} />
            Email
          </button>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="p-4">
        <div className="flex rounded-xl bg-gray-100 dark:bg-[#333333] p-1 mb-4">
          <button
            onClick={() => setActiveTab("about")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "about"
                ? "bg-white dark:bg-[#111111] text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <User size={14} />
            About
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "contact"
                ? "bg-white dark:bg-[#111111] text-gray-900 dark:text-white shadow-sm"
                : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            }`}
          >
            <Mail size={14} />
            Contact
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          {activeTab === "about" && (
            <>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <User size={14} className="text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm">About Me</h3>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  BS Information Technology graduate with a solid foundation in IT, adaptable to diverse challenges, 
                  and eager to apply skills and knowledge in an entry-level role.
                  {/*I am a BS Information Technology graduate from Camarines Norte State College with hands-on experience
                  in software development and UI/UX design, having built functional applications and created wireframes,
                  prototypes, and visual designs during academic projects and internship. A fast learner with a
                  proactive mindset, I&apos;m eager to grow and contribute to industry-level projects in both fields.*/}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Target size={14} className="text-green-600 dark:text-green-400" />
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">Professional Focus</h4>
                </div>
                <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Creating user-centered digital solutions</li>
                  <li>• Developing modern software applications</li>
                  <li>• Designing impactful visuals and branding</li>
                  <li>• Delivering reliable technical support</li>
                  {/*<li>• Collaborating closely with cross-functional Agile teams to deliver functional, scalable applications with user-centered design and technical alignment.</li>
                  <li>• Collaborating closely with cross-functional Agile teams to ensure design aligns with sprint goals and technical feasibility.</li>
                  <li>• Collaborating in agile teams to deliver functional, scalable applications with clarity and structure.</li>
                  <li>• Designing visually compelling graphics and branding materials for digital and print media.</li>*/}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Languages size={14} className="text-purple-600 dark:text-purple-400" />
                  <h4 className="font-medium text-gray-900 dark:text-white text-sm">Languages</h4>
                </div>
                <div className="space-y-3">
                  {languageSkills.map((lang) => (
                    <div key={lang.name}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600 dark:text-gray-300">{lang.name}</span>
                        <span className="text-gray-900 dark:text-white font-medium">{lang.level}</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-[#111111] rounded-full h-1.5">
                        <div
                          className="bg-blue-600 dark:bg-blue-400 h-1.5 rounded-full transition-all duration-300"
                          style={{ width: `${lang.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 p-2 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium text-green-700 dark:text-green-300">Available for work</span>
              </div>
            </>
          )}

          {activeTab === "contact" && (
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Mail size={14} className="text-gray-500 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">mcbencopper04@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <svg
                  className="w-[14px] h-[14px] text-gray-500 dark:text-gray-400 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Phone</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">09916114295</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <MapPin size={14} className="text-gray-500 dark:text-gray-400 mt-0.5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Current Address</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Talisay, Camarines Norte, Philippines, 4602</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="flex-shrink-0">
                  <MapPin size={14} className="text-gray-500 dark:text-gray-400 mt-0.5" />
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Secondary Address</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Donna St. 1707 L3 B2, Greenvale 1, Marcelo Green Village, Parañaque, Metro Manila, 1700</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={14} className="text-gray-500 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Working Hours</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Monday - Friday, flexible hours (PST)</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Briefcase size={14} className="text-gray-500 dark:text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-medium text-gray-900 dark:text-white">Availability</p>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {["WFH","Hybrid", "Remote", "On-site"].map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 text-xs bg-blue-100 dark:bg-[#333333] text-blue-700 dark:text-blue-300 rounded-lg"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
