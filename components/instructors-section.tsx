"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const instructors = [
  {
    id: 1,
    name: "Dilshod Rahimov",
    role: "WordPress mutaxassisi",
    image: "/placeholder.svg?height=200&width=200",
    bio: "10 yildan ortiq WordPress tajribasi, 100+ loyihalar muallifi",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Nodira Karimova",
    role: "UX/UI dizayner",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Foydalanuvchi tajribasi bo'yicha mutaxassis, 50+ veb-sayt dizaynlari muallifi",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Jahongir Tursunov",
    role: "SEO mutaxassisi",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Qidiruv tizimlari optimizatsiyasi bo'yicha 8 yillik tajriba",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Malika Azizova",
    role: "Kontent menejeri",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Professional kontent yaratish va boshqarish bo'yicha mutaxassis",
    social: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

export default function InstructorsSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Bizning o'qituvchilar</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Tajribali mutaxassislar tomonidan tayyorlangan kurslar va darsliklar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square relative bg-slate-100 overflow-hidden">
                  <Avatar className="h-full w-full rounded-none">
                    <AvatarImage
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="rounded-none text-4xl">{instructor.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-1">{instructor.name}</h3>
                  <p className="text-primary mb-3">{instructor.role}</p>
                  <p className="text-slate-600 text-sm mb-4">{instructor.bio}</p>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                      <a href={instructor.social.facebook} aria-label={`${instructor.name} Facebook`}>
                        <Facebook className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                      <a href={instructor.social.twitter} aria-label={`${instructor.name} Twitter`}>
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full">
                      <a href={instructor.social.linkedin} aria-label={`${instructor.name} LinkedIn`}>
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
