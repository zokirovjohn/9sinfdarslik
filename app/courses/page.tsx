"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Code, Layout, Video, CheckCircle, Search, Filter, Star, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import AccessibilityControls from "@/components/accessibility-controls"

// Course type definitions
type CourseLevel = "beginner" | "intermediate" | "advanced"
type CourseCategory = "wordpress" | "joomla" | "drupal" | "seo" | "design" | "ecommerce" | "security" | "performance"

interface Course {
  id: string
  title: string
  description: string
  category: CourseCategory
  level: CourseLevel
  lessons: number
  exercises: number
  duration: number // in hours
  progress: number // 0-100
  instructor: string
  rating: number // 0-5
  students: number
  price: number | null // null means free
  image: string
  tags: string[]
  featured: boolean
  popular: boolean
  new: boolean
}

// Sample courses data
const coursesData: Course[] = [
  {
    id: "cms-basics",
    title: "CMS tizimlari asoslari",
    description: "CMS nima va undan qanday foydalanish mumkin",
    category: "wordpress",
    level: "beginner",
    lessons: 5,
    exercises: 2,
    duration: 3,
    progress: 0,
    instructor: "Aziz Karimov",
    rating: 4.8,
    students: 1250,
    price: null,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["cms", "basics", "introduction"],
    featured: true,
    popular: true,
    new: false,
  },
  {
    id: "wordpress-basics",
    title: "WordPress bilan ishlash",
    description: "WordPress CMS tizimini o'rnatish va sozlash",
    category: "wordpress",
    level: "intermediate",
    lessons: 8,
    exercises: 4,
    duration: 6,
    progress: 0,
    instructor: "Malika Rahimova",
    rating: 4.9,
    students: 980,
    price: 299000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["wordpress", "installation", "setup"],
    featured: true,
    popular: true,
    new: false,
  },
  {
    id: "content-creation",
    title: "Kontent yaratish",
    description: "Sayt uchun kontent yaratish va boshqarish",
    category: "seo",
    level: "intermediate",
    lessons: 6,
    exercises: 3,
    duration: 4,
    progress: 0,
    instructor: "Nilufar Qodirova",
    rating: 4.7,
    students: 750,
    price: 249000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["content", "seo", "management"],
    featured: false,
    popular: false,
    new: true,
  },
  {
    id: "site-management",
    title: "Saytni sozlash va boshqarish",
    description: "Saytni sozlash, xavfsizlik va zaxira nusxalarini yaratish",
    category: "security",
    level: "advanced",
    lessons: 7,
    exercises: 5,
    duration: 5,
    progress: 0,
    instructor: "Bobur Aliyev",
    rating: 4.9,
    students: 620,
    price: 349000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["security", "backup", "management"],
    featured: false,
    popular: true,
    new: false,
  },
  {
    id: "practical-project",
    title: "Amaliy loyiha",
    description: "O'z web-kurs saytingizni yaratish",
    category: "wordpress",
    level: "advanced",
    lessons: 10,
    exercises: 1,
    duration: 8,
    progress: 0,
    instructor: "Aziz Karimov",
    rating: 5.0,
    students: 480,
    price: 499000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["project", "practical", "wordpress"],
    featured: true,
    popular: false,
    new: true,
  },
  {
    id: "web-design",
    title: "Web-dizayn asoslari",
    description: "Web-dizayn asoslari va WordPress uchun dizayn",
    category: "design",
    level: "intermediate",
    lessons: 8,
    exercises: 6,
    duration: 7,
    progress: 0,
    instructor: "Malika Rahimova",
    rating: 4.6,
    students: 850,
    price: 399000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["design", "wordpress", "themes"],
    featured: false,
    popular: true,
    new: false,
  },
  {
    id: "woocommerce",
    title: "WooCommerce bilan ishlash",
    description: "WordPress yordamida onlayn do'kon yaratish",
    category: "ecommerce",
    level: "advanced",
    lessons: 9,
    exercises: 4,
    duration: 8,
    progress: 0,
    instructor: "Bobur Aliyev",
    rating: 4.8,
    students: 720,
    price: 449000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["woocommerce", "ecommerce", "shop"],
    featured: true,
    popular: true,
    new: false,
  },
  {
    id: "joomla-basics",
    title: "Joomla asoslari",
    description: "Joomla CMS tizimini o'rnatish va undan foydalanish bo'yicha qo'llanma",
    category: "joomla",
    level: "beginner",
    lessons: 7,
    exercises: 3,
    duration: 5,
    progress: 0,
    instructor: "Aziz Karimov",
    rating: 4.5,
    students: 520,
    price: 299000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["joomla", "cms", "basics"],
    featured: false,
    popular: false,
    new: false,
  },
  {
    id: "drupal-basics",
    title: "Drupal asoslari",
    description: "Drupal CMS tizimini o'rnatish va undan foydalanish bo'yicha qo'llanma",
    category: "drupal",
    level: "intermediate",
    lessons: 8,
    exercises: 4,
    duration: 6,
    progress: 0,
    instructor: "Bobur Aliyev",
    rating: 4.7,
    students: 480,
    price: 349000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["drupal", "cms", "basics"],
    featured: false,
    popular: false,
    new: true,
  },
  {
    id: "wordpress-speed",
    title: "WordPress saytlarini tezlashtirish",
    description: "WordPress saytlarini tezlashtirish va optimizatsiya qilish usullari",
    category: "performance",
    level: "intermediate",
    lessons: 6,
    exercises: 3,
    duration: 4,
    progress: 0,
    instructor: "Bobur Aliyev",
    rating: 4.9,
    students: 680,
    price: 299000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["wordpress", "performance", "optimization"],
    featured: false,
    popular: true,
    new: false,
  },
  {
    id: "wordpress-security",
    title: "WordPress xavfsizlik choralari",
    description: "WordPress saytingizni xavfsizligini ta'minlash bo'yicha qo'llanma",
    category: "security",
    level: "intermediate",
    lessons: 7,
    exercises: 4,
    duration: 5,
    progress: 0,
    instructor: "Aziz Karimov",
    rating: 4.8,
    students: 590,
    price: 349000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["wordpress", "security", "protection"],
    featured: false,
    popular: false,
    new: true,
  },
  {
    id: "seo-guide",
    title: "SEO optimizatsiya qo'llanmasi",
    description: "CMS tizimlari uchun SEO optimizatsiya qo'llanmasi",
    category: "seo",
    level: "intermediate",
    lessons: 8,
    exercises: 5,
    duration: 6,
    progress: 0,
    instructor: "Nilufar Qodirova",
    rating: 4.7,
    students: 720,
    price: 399000,
    image: "/placeholder.svg?height=200&width=300",
    tags: ["seo", "optimization", "marketing"],
    featured: true,
    popular: true,
    new: false,
  },
]

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<CourseCategory[]>([])
  const [selectedLevels, setSelectedLevels] = useState<CourseLevel[]>([])
  const [selectedDuration, setSelectedDuration] = useState<string>("")
  const [selectedRating, setSelectedRating] = useState<string>("")
  const [showFreeOnly, setShowFreeOnly] = useState(false)
  const [sortBy, setSortBy] = useState<string>("popular")
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(coursesData)
  const coursesPerPage = 6

  // Filter courses based on all criteria
  useEffect(() => {
    let result = coursesData.filter(course => {
      // Search query filter
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category)
      
      // Level filter
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level)
      
      // Duration filter
      const matchesDuration = !selectedDuration || 
        (selectedDuration === "short" && course.duration <= 4) ||
        (selectedDuration === "medium" && course.duration > 4 && course.duration <= 8) ||
        (selectedDuration === "long" && course.duration > 8)
      
      // Rating filter
      const matchesRating = !selectedRating || 
        (selectedRating === "4plus" && course.rating >= 4) ||
        (selectedRating === "4.5plus" && course.rating >= 4.5) ||
        (selectedRating === "5" && course.rating === 5)
      
      // Free courses filter
      const matchesFree = !showFreeOnly || course.price === null
      
      return matchesSearch && matchesCategory && matchesLevel && matchesDuration && matchesRating && matchesFree
    })
    
    // Sort courses
    switch (sortBy) {
      case "popular":
        result = result.sort((a, b) => b.students - a.students)
        break
      case "rating":
        result = result.sort((a, b) => b.rating - a.rating)
        break
      case "newest":
        result = result.sort((a, b) => (b.new ? 1 : 0) - (a.new ? 1 : 0))
        break
      case "priceAsc":
        result = result.sort((a, b) => (a.price || 0) - (b.price || 0))
        break
      case "priceDesc":
        result = result.sort((a, b) => (b.price || 0) - (a.price || 0))
        break
      default:
        break
    }
    
    setFilteredCourses(result)
    setCurrentPage(1) // Reset to first page when filters change
  }, [searchQuery, selectedCategories, selectedLevels, selectedDuration, selectedRating, showFreeOnly, sortBy])

  // Toggle category selection
  const toggleCategory = (category: CourseCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    )
  }
  
  // Toggle level selection
  const toggleLevel = (level: CourseLevel) => {
    setSelectedLevels(prev => 
      prev.includes(level) 
        ? prev.filter(l => l !== level) 
        : [...prev, level]
    )
  }
  
  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategories([])
    setSelectedLevels([])
    setSelectedDuration("")
    setSelectedRating("")
    setShowFreeOnly(false)
    setSortBy("popular")
  }
  
  // Get current courses for pagination
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse)
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage)
  
  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)
  
  // Get level badge color
  const getLevelBadgeColor = (level: CourseLevel) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800 hover:bg-green-200"
      case "intermediate":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200"
      case "advanced":
        return "bg-purple-100 text-purple-800 hover:bg-purple-200"
      default:
        return "bg-slate-100 text-slate-800 hover:bg-slate-200"
    }
  }
  
  // Get category icon
  const getCategoryIcon = (category: CourseCategory) => {
    switch (category) {
      case "wordpress":
        return <BookOpen className="h-5 w-5 text-primary" />
      case "joomla":
        return <Layout className="h-5 w-5 text-primary" />
      case "drupal":
        return <Code className="h-5 w-5 text-primary" />
      case "seo":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        )
      case "design":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
            <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
            <path d="M12 2v2"></path>
            <path d="M12 22v-2"></path>
            <path d="m17 20.66-1-1.73"></path>
            <path d="M11 10.27 7 3.34"></path>
            <path d="m20.66 17-1.73-1"></path>
            <path d="m3.34 7 1.73 1"></path>
            <path d="M14 12h8"></path>
            <path d="M2 12h2"></path>
            <path d="m20.66 7-1.73 1"></path>
            <path d="m3.34 17 1.73-1"></path>
            <path d="m17 3.34-1 1.73"></path>
            <path d="m7 20.66 1-1.73"></path>
          </svg>
        )
      case "ecommerce":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
            <path d="M3 6h18"></path>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        )
      case "security":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        )
      case "performance":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
          >
            <path d="m13 2-2 2.5h3L12 7"></path>
            <path d="M12 22v-3"></path>
            <path d="M12 17v-2"></path>
            <path d="M12 11V9"></path>
            <path d="m17 8 5 3-5 3"></path>
            <path d="m7 8-5 3 5 3"></path>
          </svg>
        )
      default:
        return <BookOpen className="h-5 w-5 text-primary" />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> Asosiy sahifa
              </Button>
            </Link>
            <h1 className="text-3xl font-bold ml-4">Barcha kurslar</h1>
          </div>

          {/* Featured Courses */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Tavsiya etilgan kurslar</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coursesData
                .filter(course => course.featured)
                .slice(0, 3)
                .map(course => (
                  <Card key={course.id} className="border-2 hover:border-primary hover:shadow-lg transition-all">
                    <div className="relative">
                      <img 
                        src={course.image || "/placeholder.svg"} 
                        alt={course.title} 
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      {course.price === null ? (
                        <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">Bepul</Badge>
                      ) : null}
                      {course.new ? (
                        <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">Yangi</Badge>
                      ) : null}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="flex items-center gap-2">
                          {getCategoryIcon(course.category)}
                          <span className="line-clamp-1">{course.title}</span>
                        </CardTitle>
                        <Badge className={getLevelBadgeColor(course.level)}>
                          {course.level === "beginner" ? "Boshlang'ich" : 
                           course.level === "intermediate" ? "O'rta" : "Yuqori"}
                        </Badge>
                      </div>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-slate-400" />
                            <span>{course.students} o'quvchi</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span>{course.rating.toFixed(1)}</span>
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
                          <div className="flex items-center gap-1 col-span-2">
                            <Clock className="h-4 w-4 text-slate-400" />
                            <span>{course.duration} soatlik kurs</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-3">
                      {course.price !== null ? (
                        <div className="text-lg font-bold text-primary w-full text-center">
                          {new Intl.NumberFormat('uz-UZ').format(course.price)} so'm
                        </div>
                      ) : (
                        <div className="text-lg font-bold text-green-600 w-full text-center">
                          Bepul
                        </div>
                      )}
                      <Button className="w-full" asChild>
                        <Link href={`/courses/${course.id}`}>
                          Kursni ko'rish
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input 
                  placeholder="Kurslarni qidirish" 
                  className="pl-10" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Saralash" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Mashhurlik bo'yicha</SelectItem>
                  <SelectItem value="rating">Reyting bo'yicha</SelectItem>
                  <SelectItem value="newest">Yangi qo'shilganlar</SelectItem>
                  <SelectItem value="priceAsc">Narx: pastdan yuqoriga</SelectItem>
                  <SelectItem value="priceDesc">Narx: yuqoridan pastga</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center">
                      <Filter className="mr-2 h-4 w-4" />
                      <span>Kategoriya</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {selectedCategories.length || "Barchasi"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes("wordpress")}
                    onCheckedChange={() => toggleCategory("wordpress")}
                  >
                    WordPress
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes("joomla")}
                    onCheckedChange={() => toggleCategory("joomla")}
                  >
                    Joomla
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes("drupal")}
                    onCheckedChange={() => toggleCategory("drupal")}
                  >
                    Drupal
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes("seo")}
                    onCheckedChange={() => toggleCategory("seo")}
                  >
                    SEO
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes("design")}
                    onCheckedChange={() => toggleCategory("design")}
                  >
                    Web-dizayn
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes("ecommerce")}
                    onCheckedChange={() => toggleCategory("ecommerce")}
                  >
                    E-tijorat
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes("security")}
                    onCheckedChange={() => toggleCategory("security")}
                  >
                    Xavfsizlik
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedCategories.includes("performance")}
                    onCheckedChange={() => toggleCategory("performance")}
                  >
                    Tezlashtirish
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4"
                      >
                        <path d="M2 20h.01"></path>
                        <path d="M7 20v-4"></path>
                        <path d="M12 20v-8"></path>
                        <path d="M17 20V8"></path>
                        <path d="M22 4v16"></path>
                      </svg>
                      <span>Daraja</span>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {selectedLevels.length || "Barchasi"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuCheckboxItem
                    checked={selectedLevels.includes("beginner")}
                    onCheckedChange={() => toggleLevel("beginner")}
                  >
                    Boshlang'ich
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedLevels.includes("intermediate")}
                    onCheckedChange={() => toggleLevel("intermediate")}
                  >
                    O'rta
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedLevels.includes("advanced")}
                    onCheckedChange={() => toggleLevel("advanced")}
                  >
                    Yuqori
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                <SelectTrigger>
                  <SelectValue placeholder="Davomiyligi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all" >Barcha davomiyliklar</SelectItem>
                  <SelectItem value="short">Qisqa ({'<'} 4 soat)</SelectItem>
                  <SelectItem value="medium">O'rta (4-8 soat)</SelectItem>
                  <SelectItem value="long">Uzoq ({'>'} 8 soat)</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger>
                  <SelectValue placeholder="Reyting" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Barcha reytinglar</SelectItem>
                  <SelectItem value="4plus">4.0 va undan yuqori</SelectItem>
                  <SelectItem value="4.5plus">4.5 va undan yuqori</SelectItem>
                  <SelectItem value="5">Faqat 5.0</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center mt-4 justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="freeOnly" 
                  checked={showFreeOnly}
                  onCheckedChange={(checked) => setShowFreeOnly(checked as boolean)}
                />
                <Label htmlFor="freeOnly">Faqat bepul kurslar</Label>
              </div>
              
              <Button variant="outline" size="sm" onClick={resetFilters}>
                Filtrlarni tozalash
              </Button>
            </div>
          </div>

          {/* Course List */}
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto text-slate-300 mb-4"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <h3 className="text-xl font-medium text-slate-700">Kurslar topilmadi</h3>
              <p className="text-slate-500 mt-2">Qidiruv so'rovingizni o'zgartiring yoki filtrlarni tozalang</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={resetFilters}
              >
                Filtrlarni tozalash
              </Button>
            </div>
          ) : (
            <>
              <div className="mb-4 flex justify-between items-center">
                <p className="text-slate-600">{filteredCourses.length} ta kurs topildi</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {currentCourses.map((course) => (
                  <Card key={course.id} className="border-2 hover:border-primary hover:shadow-lg transition-all">
                    <div className="relative">
                      <img 
                        src={course.image || "/placeholder.svg"} 
                        alt={course.title} 
                        className="w-full h-40 object-cover rounded-t-lg"
                      />
                      {course.price === null ? (
                        <Badge className="absolute top-2 right-2 bg-green-500 hover:bg-green-600">Bepul</Badge>
                      ) : null}
                      {course.new ? (
                        <Badge className="absolute top-2 left-2 bg-blue-500 hover:bg-blue-600">Yangi</Badge>
                      ) : null}
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="flex items-center gap-2">
                          {getCategoryIcon(course.category)}
                          <span className="line-clamp-1">{course.title}</span>
                        </CardTitle>
                        <Badge className={getLevelBadgeColor(course.level)}>
                          {course.level === "beginner" ? "Boshlang'ich" : 
                           course.level === "intermediate" ? "O'rta" : "Yuqori"}
                        </Badge>
                      </div>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-slate-400" />
                            <span>{course.students} o'quvchi</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-yellow-400" />
                            <span>{course.rating.toFixed(1)}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div className="flex items-center gap-1">
                            <Video className="h-4 w-4 text-slate\
