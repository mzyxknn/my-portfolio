import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Custom scrollspy hook
export function useScrollspy(sectionIds: string[], rootMargin = "0px") {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        const visibleSections = entries.filter(entry => entry.isIntersecting)
        
        if (visibleSections.length > 0) {
          // Sort by intersection ratio descending and take the most visible one
          const mostVisible = visibleSections.sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0]
          
          const sectionId = mostVisible.target.id
          
          // Only update if we're not at the very top to prevent blinking
          if (window.scrollY >= 80) {
            setActiveSection(sectionId)
          }
        }
      },
      {
        rootMargin: "-10% 0px -60% 0px", // More sensitive margins for better detection
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    )

    // Observe all sections
    sectionIds.forEach(id => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Enhanced scroll handler for better detection
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Check if at the very top - set to first section (experience) instead of home
      if (scrollY < 80) {
        setActiveSection(sectionIds[0] || "experience")
        return
      }

      // Check if near the bottom of the page (within 10% of bottom)
      if (scrollY + windowHeight >= documentHeight - (documentHeight * 0.1)) {
        // When near bottom, activate the last section
        const lastSectionId = sectionIds[sectionIds.length - 1]
        setActiveSection(lastSectionId)
        return
      }

      // For each section, check if it's in the viewport
      let bestMatch = { section: "", score: 0 }
      
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + scrollY
          const elementBottom = elementTop + rect.height

          // Calculate how much of the section is visible and how close to center
          const viewportTop = scrollY
          const viewportBottom = scrollY + windowHeight
          const visibleTop = Math.max(elementTop, viewportTop)
          const visibleBottom = Math.min(elementBottom, viewportBottom)
          const visibleHeight = Math.max(0, visibleBottom - visibleTop)
          const visibilityRatio = visibleHeight / rect.height

          // Calculate proximity to the ideal position (upper third of viewport)
          const idealPosition = scrollY + windowHeight * 0.25
          const sectionCenter = elementTop + rect.height / 2
          const proximityScore = Math.max(0, 1 - Math.abs(idealPosition - sectionCenter) / windowHeight)

          // Combined score: visibility + proximity
          const score = visibilityRatio * 0.8 + proximityScore * 0.2

          if (score > bestMatch.score && visibilityRatio > 0.15) {
            bestMatch = { section: sectionId, score }
          }
        }
      }

      if (bestMatch.section) {
        setActiveSection(bestMatch.section)
      }
    }

    // Debounced scroll handler to prevent rapid changes
    let scrollTimeout: NodeJS.Timeout
    const debouncedScrollHandler = () => {
      clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(handleScroll, 10)
    }

    window.addEventListener("scroll", debouncedScrollHandler)
    handleScroll() // Check initial position

    return () => {
      observer.disconnect()
      window.removeEventListener("scroll", debouncedScrollHandler)
      clearTimeout(scrollTimeout)
    }
  }, [sectionIds, rootMargin])

  return activeSection
}
