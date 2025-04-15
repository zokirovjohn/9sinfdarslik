"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, BookOpen, Award, Globe } from "lucide-react"

export default function StatisticsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    students: 0,
    courses: 0,
    graduates: 0,
    countries: 0,
  })

  const targetCounts = {
    students: 5000,
    courses: 25,
    graduates: 1200,
    countries: 15,
  }

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("statistics-section")
      if (element) {
        const position = element.getBoundingClientRect()
        if (position.top < window.innerHeight && position.bottom >= 0) {
          setIsVisible(true)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check on initial load

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000 // 2 seconds
      const interval = 20 // Update every 20ms
      const steps = duration / interval

      const incrementValues = {
        students: targetCounts.students / steps,
        courses: targetCounts.courses / steps,
        graduates: targetCounts.graduates / steps,
        countries: targetCounts.countries / steps,
      }

      let currentStep = 0

      const timer = setInterval(() => {
        currentStep++
        setCounts({
          students: Math.min(Math.round(incrementValues.students * currentStep), targetCounts.students),
          courses: Math.min(Math.round(incrementValues.courses * currentStep), targetCounts.courses),
          graduates: Math.min(Math.round(incrementValues.graduates * currentStep), targetCounts.graduates),
          countries: Math.min(Math.round(incrementValues.countries * currentStep), targetCounts.countries),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <section id="statistics-section" className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-4xl font-bold mb-2">{counts.students.toLocaleString()}+</h3>
            <p className="text-slate-600">O'quvchilar</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-4xl font-bold mb-2">{counts.courses}+</h3>
            <p className="text-slate-600">Kurslar</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Award className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-4xl font-bold mb-2">{counts.graduates.toLocaleString()}+</h3>
            <p className="text-slate-600">Bitiruvchilar</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-4xl font-bold mb-2">{counts.countries}+</h3>
            <p className="text-slate-600">Mamlakatlar</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
