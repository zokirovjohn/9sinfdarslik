import Link from "next/link"
import { ArrowLeft, BookOpen, Code, Layout, Video, CheckCircle, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

// Mock data for courses
const courses = [
  {
    id: "cms-basics",
    title: "CMS tizimlari asoslari",
    description: "CMS nima va undan qanday foydalanish mumkin",
    level: "Boshlang'ich",
    duration: "5 soat",
    lessons: 5,
    exercises: 2,
    image: "/placeholder.svg?height=400&width=600",
    category: "Asosiy",
    rating: 4.5,
    students: 2500,
    progress: 0,
    instructor: "Nodira Karimova",
  },
  {
    id: "wordpress-basics",
    title: "WordPress bilan ishlash",
    description: "WordPress CMS tizimini o'rnatish va sozlash",
    level: "O'rta",
    duration: "8 soat",
    lessons: 8,
    exercises: 4,
    image: "/placeholder.svg?height=400&width=600",
    category: "WordPress",
    rating: 4.8,
    students: 1245,
    progress: 0,
    instructor: "Dilshod Rahimov",
  },
  {
    id: "content-creation",
    title: "Kontent yaratish",
    description: "Sayt uchun kontent yaratish va boshqarish",
    level: "O'rta",
    duration: "6 soat",
    lessons: 6,
    exercises: 3,
    image: "/placeholder.svg?height=400&width=600",
    category: "Kontent",
    rating: 4.6,
    students: 980,
    progress: 0,
    instructor: "Malika Azizova",
  },
  {
    id: "site-management",
    title: "Saytni sozlash va boshqarish",
    description: "Saytni sozlash, xavfsizlik va zaxira nusxalarini yaratish",
    level: "Yuqori",
    duration: "7 soat",
    lessons: 7,
    exercises: 5,
    image: "/placeholder.svg?height=400&width=600",
    category: "Boshqarish",
    rating: 4.7,
    students: 750,
    progress: 0,
    instructor: "Jahongir Tursunov",
  },
  {
    id: "web-design",
    title: "Web-dizayn asoslari",
    description: "Web-dizayn asoslari va WordPress uchun dizayn",
    level: "O'rta",
    duration: "8 soat",
    lessons: 8,
    exercises: 6,
    image: "/placeholder.svg?height=400&width=600",
    category: "Dizayn",
    rating: 4.9,
    students: 1120,
    progress: 0,
    instructor: "Nodira Karimova",
  },
  {
    id: "woocommerce",
    title: "WooCommerce bilan ishlash",
    description: "WordPress yordamida onlayn do'kon yaratish",
    level: "Yuqori",
    duration: "9 soat",
    lessons: 9,
    exercises: 4,
    image: "/placeholder.svg?height=400&width=600",
    category: "E-tijorat",
    rating: 4.7,
    students: 890,
    progress: 0,
    instructor: "Dilshod Rahimov",
  },
  {
    id: "joomla-basics",
    title: "Joomla asoslari",
    description: "Joomla CMS tizimini o'rnatish va sozlash",
    level: "Boshlang'ich",
    duration: "7 soat",
    lessons: 7,
    exercises: 3,
    image: "/placeholder.svg?height=400&width=600",
    category: "Joomla",
    rating: 4.4,
    students: 620,
    progress: 0,
    instructor: "Jahongir Tursunov",
  },
  {
    id: "drupal-basics",
    title: "Drupal asoslari",
    description: "Drupal CMS tizimini o'rnatish va sozlash",
    level: "O'rta",
    duration: "8 soat",
    lessons: 8,
    exercises: 4,
    image: "/placeholder.svg?height=400&width=600",
    category: "Drupal",
    rating: 4.5,
    students: 580,
    progress: 0,
    instructor: "Jahongir Tursunov",
  },
  {
    id: "seo-basics",
    title: "SEO asoslari",
    description: "Qidiruv tizimlarida saytingizni yuqori o'rinlarga chiqarish",
    level: "O'rta",
    duration: "6 soat",
    lessons: 6,
    exercises: 3,
    image: "/placeholder.svg?height=400&width=600",
    category: "SEO",
    rating: 4.8,
    students: 1050,
    progress: 0,
    instructor: "Jahongir Tursunov",
  },
]

// Mock data for categories
const categories = [
  { id: "all", name: "Barcha kurslar", count: courses.length },
  { id: "basic", name: "Asosiy", count: 1 },
  { id: "wordpress", name: "WordPress", count: 2 },
  { id: "joomla", name: "Joomla", count: 1 },
  { id: "drupal", name: "Drupal", count: 1 },
  { id: "content", name: "Kontent", count: 1 },
  { id: "management", name: "Boshqarish", count: 1 },
  { id: "design", name: "Dizayn", count: 1 },
  { id: "ecommerce", name: "E-tijorat", count: 1 },
  { id: "seo", name: "SEO", count: 1 },
]

export default function CatalogPage() {
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
            <h1 className="text-3xl font-bold ml-4">Kurslar katalogi</h1>
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input placeholder="Kurslarni qidirish" className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Kategoriya bo'yicha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha kategoriyalar</SelectItem>
                  <SelectItem value="wordpress">WordPress</SelectItem>
                  <SelectItem value="joomla">Joomla</SelectItem>
                  <SelectItem value="drupal">Drupal</SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="design">Web-dizayn</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Daraja bo'yicha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha darajalar</SelectItem>
                  <SelectItem value="beginner">Boshlang'ich</SelectItem>
                  <SelectItem value="intermediate">O'rta</SelectItem>
                  <SelectItem value="advanced">Yuqori</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
                <div>
                  <h2 className="text-lg font-bold mb-4">Kategoriyalar</h2>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/catalog?category=${category.id}`}
                          className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-slate-100 transition-colors"
                        >
                          <span>{category.name}</span>
                          <Badge variant="secondary">{category.count}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-lg font-bold mb-4">Daraja</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="level-beginner"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="level-beginner" className="ml-2 text-sm text-gray-700">
                        Boshlang'ich
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="level-intermediate"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="level-intermediate" className="ml-2 text-sm text-gray-700">
                        O'rta
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="level-advanced"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="level-advanced" className="ml-2 text-sm text-gray-700">
                        Yuqori
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-lg font-bold mb-4">Davomiyligi</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="duration-short"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="duration-short" className="ml-2 text-sm text-gray-700">
                        0-5 soat
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="duration-medium"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="duration-medium" className="ml-2 text-sm text-gray-700">
                        5-10 soat
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="duration-long"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="duration-long" className="ml-2 text-sm text-gray-700">
                        10+ soat
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-lg font-bold mb-4">Reyting</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rating-4.5"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="rating-4.5" className="ml-2 text-sm text-gray-700 flex items-center">
                        4.5 va undan yuqori
                        <div className="flex ml-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill={star <= 4.5 ? "currentColor" : "none"}
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
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rating-4.0"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="rating-4.0" className="ml-2 text-sm text-gray-700 flex items-center">
                        4.0 va undan yuqori
                        <div className="flex ml-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill={star <= 4 ? "currentColor" : "none"}
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
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="rating-3.5"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="rating-3.5" className="ml-2 text-sm text-gray-700 flex items-center">
                        3.5 va undan yuqori
                        <div className="flex ml-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="12"
                              viewBox="0 0 24 24"
                              fill={star <= 3.5 ? "currentColor" : "none"}
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
                      </label>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <Button className="w-full gap-2">
                    <Filter className="h-4 w-4" /> Filtrlash
                  </Button>
                </div>
              </div>
            </div>

            {/* Course List */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Barcha kurslar ({courses.length})</h2>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Saralash" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Eng yangi</SelectItem>
                    <SelectItem value="popular">Eng mashhur</SelectItem>
                    <SelectItem value="rating">Reyting bo'yicha</SelectItem>
                    <SelectItem value="price-low">Narx: pastdan yuqoriga</SelectItem>
                    <SelectItem value="price-high">Narx: yuqoridan pastga</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <Card key={course.id} className="border-2 hover:border-primary hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="flex items-center gap-2">
                          {course.category === "WordPress" ? (
                            <Layout className="h-5 w-5 text-primary" />
                          ) : course.category === "Kontent" ? (
                            <Code className="h-5 w-5 text-primary" />
                          ) : (
                            <BookOpen className="h-5 w-5 text-primary" />
                          )}
                          {course.title}
                        </CardTitle>
                        <Badge>{course.level}</Badge>
                      </div>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                        <img
                          src={course.image || "/placeholder.svg"}
                          alt={course.title}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                          Subtitrlar mavjud
                        </div>
                      </div>
                      <div className="space-y-4">
                        <p>
                          O'qituvchi: <span className="text-primary">{course.instructor}</span>
                        </p>

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
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href={`/courses/${course.id}`}>Kursni ko'rish</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
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
                      className="h-4 w-4"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                    <span className="sr-only">Oldingi sahifa</span>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-primary text-white hover:bg-primary/90">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="icon">
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
                      className="h-4 w-4"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                    <span className="sr-only">Keyingi sahifa</span>
                  </Button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
