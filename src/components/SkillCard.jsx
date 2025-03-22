"use client"
import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from "react"

const SkillCard = ({ skill }) => {
  const theme = useSelector((state) => state.theme.theme)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    // Create an Intersection Observer to detect when the card is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      {
        root: null, // viewport
        threshold: 0.2, // trigger when 20% of the element is visible
        rootMargin: "0px",
      },
    )

    // Start observing the card element
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    // Clean up the observer when component unmounts
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [hasAnimated])

  return (
    <div
      ref={cardRef}
      className={`${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      } relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 group`}
    >
      {/* Background pattern */}
      <div
        className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity duration-500 ease-in-out"
        style={{ background: `radial-gradient(circle, var(--tw-gradient-stops))` }}
      ></div>

      {/* Content */}
      <div className="p-6 relative z-10">
        <div className="flex items-center mb-6">
          {/* Icon container with gradient background */}
          <div
            className={`flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} text-white p-3 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
          >
            {skill.icon}
          </div>

          <div className="ml-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">{skill.name}</h3>
            <div className="flex items-center mt-1">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Proficiency</span>
              <span className="ml-2 px-2 py-0.5 text-xs font-semibold rounded-md bg-gradient-to-r from-sky-500 to-blue-500 text-white">
                {skill.progress}%
              </span>
            </div>
          </div>
        </div>

        {/* Custom progress bar */}
        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
            style={{
              width: isVisible ? `${skill.progress}%` : "0%",
              transition: "width 1.5s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="absolute inset-0 bg-white opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20"></div>
        <div className="absolute bottom-6 right-6 w-4 h-4 rounded-full bg-gradient-to-br opacity-10 dark:opacity-20"></div>
      </div>
    </div>
  )
}

export default SkillCard

