"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])

  const blobs = [
    { color: "bg-pink-300/20", size: "w-96 h-96", delay: 0 },
    { color: "bg-cyan-300/20", size: "w-80 h-80", delay: 2 },
    { color: "bg-blue-300/20", size: "w-72 h-72", delay: 4 },
    { color: "bg-purple-300/20", size: "w-64 h-64", delay: 1 },
    { color: "bg-indigo-300/20", size: "w-88 h-88", delay: 3 },
  ]

  if (!isClient) {
    return <div className="absolute inset-0 overflow-hidden pointer-events-none" />
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Boxes Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.08] dark:opacity-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #666666 1px, transparent 1px),
            linear-gradient(180deg, #666666 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      {/* White boxes for dark mode */}
      <div 
        className="absolute inset-0 opacity-0 dark:opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(90deg, #ffffff 1px, transparent 1px),
            linear-gradient(180deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${blob.color} ${blob.size}`}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: blob.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${(index * 23 + 15) % 80}%`,
            top: `${(index * 17 + 25) % 70}%`,
          }}
        />
      ))}
    </div>
  )
}
