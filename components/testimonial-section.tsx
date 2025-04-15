"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    id: 1,
    name: "Aziza Karimova",
    role: "Web-dizayner",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Bu platforma menga CMS tizimlarini o'rganishda juda katta yordam berdi. Maxsus imkoniyatlar tufayli men hamma narsani tushunishim oson bo'ldi. Endi men o'z mijozlarim uchun WordPress saytlarini yaratishim mumkin.",
  },
  {
    id: 2,
    name: "Bobur Aliyev",
    role: "Talaba",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Men past eshituvchi talaba sifatida ko'p platformalarda qiyinchilikka duch kelardim. Lekin bu platformada barcha darslar subtitrlar bilan ta'minlangan va vizual ko'rsatmalar juda tushunarli. Bu menga CMS tizimlarini o'rganishda katta yordam berdi.",
  },
  {
    id: 3,
    name: "Gulnora Rahimova",
    role: "Kontent menejeri",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "WordPress bilan ishlash kursini tugatganimdan so'ng, men kontent menejeri sifatida ish topa oldim. Platformadagi amaliy mashqlar va interaktiv topshiriqlar menga haqiqiy tajriba orttirish imkonini berdi.",
  },
]

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">O'quvchilarimiz fikrlari</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Platformamizdan foydalangan o'quvchilarimizning fikrlari va muvaffaqiyat tarixi
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-50 rounded-xl p-8 md:p-10 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="shrink-0">
                  <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                    <AvatarImage
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback>{testimonials[currentIndex].name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-lg mb-6">{testimonials[currentIndex].content}</p>
                  <div>
                    <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-slate-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevTestimonial} aria-label="Oldingi fikr">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial} aria-label="Keyingi fikr">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
