import Link from "next/link"
import { ArrowRight, BookOpen, Code, Layout, Video, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  course: {
    id: string
    title: string
    description: string
    level: string
    duration: number
    lessons: number
    exercises: number
    image: string
    category: string
    rating: number
    students: number
    progress: number
    instructor: string
    price: number
    featured?: boolean
    tags?: string[]
  }
  variant?: "default" | "featured" | "compact"
}

export default function CourseCard({ course, variant = "default" }: CourseCardProps) {
  // Helper function to get the appropriate icon based on category
  const getCategoryIcon = () => {
    switch (course.category) {
      case "WordPress":
        return <Layout className="h-5 w-5 text-primary" />
      case "Kontent":
        return <Code className="h-5 w-5 text-primary" />
      default:
        return <BookOpen className="h-5 w-5 text-primary" />
    }
  }

  if (variant === "compact") {
    return (
      <div className="flex items-start gap-3">
        <div className="h-16 w-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
          {getCategoryIcon()}
        </div>
        <div>
          <h3 className="font-medium mb-1">{course.title}</h3>
          <p className="text-sm text-slate-500 mb-1">{course.level}</p>
          <Link href={`/courses/${course.id}`} className="text-primary text-sm hover:underline">
            Batafsil
          </Link>
        </div>
      </div>
    )
  }

  if (variant === "featured") {
    return (
      <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="flex items-center gap-2">
              {getCategoryIcon()}
              {course.title}
            </CardTitle>
            <Badge>{course.level}</Badge>
          </div>
          <CardDescription>{course.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
            <img src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full h-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">Subtitrlar mavjud</div>
            {course.featured && (
              <div className="absolute top-2 left-2">
                <Badge className="bg-yellow-500 hover:bg-yellow-600">Mashhur</Badge>
              </div>
            )}
            {course.price === 0 && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-green-500 hover:bg-green-600">Bepul</Badge>
              </div>
            )}
          </div>
          <p className="mb-4">{course.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Video className="h-4 w-4 text-slate-400" />
              <span>{course.lessons} ta video dars</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-slate-400" />
              <span>{course.exercises} ta amaliy mashq</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" asChild>
            <Link href={`/courses/${course.id}`}>
              Kursni boshlash <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  // Default variant
  return (
    <Card className="border-2 hover:border-primary hover:shadow-lg transition-all h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="flex items-center gap-2">
            {getCategoryIcon()}
            {course.title}
          </CardTitle>
          <Badge>{course.level}</Badge>
        </div>
        <CardDescription>{course.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
          <img src={course.image || "/placeholder.svg"} alt={course.title} className="object-cover w-full h-full" />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">Subtitrlar mavjud</div>
          {course.featured && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-yellow-500 hover:bg-yellow-600">Mashhur</Badge>
            </div>
          )}
          {course.price === 0 && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-green-500 hover:bg-green-600">Bepul</Badge>
            </div>
          )}
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p>
              O'qituvchi: <span className="text-primary">{course.instructor}</span>
            </p>
            {course.price > 0 ? (
              <p className="font-bold">{course.price} USD</p>
            ) : (
              <p className="font-bold text-green-500">Bepul</p>
            )}
          </div>

          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Reyting: {course.rating}</span>
              <span>{course.students} o'quvchi</span>
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={star <= Math.floor(course.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-yellow-500"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Video className="h-4 w-4 text-slate-400" />
              <span>{course.lessons} ta video dars</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-slate-400" />
              <span>{course.exercises} ta amaliy mashq</span>
            </div>
          </div>

          {course.tags && course.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {course.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full" asChild>
          <Link href={`/courses/${course.id}`}>
            Kursni ko'rish <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
