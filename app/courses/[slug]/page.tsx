import Link from "next/link"
import {
  ArrowLeft,
  BookOpen,
  Video,
  CheckCircle,
  Clock,
  Users,
  Award,
  Play,
  Download,
  FileText,
  MessageSquare,
  Hand,
  Code,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

// This is a mock function to simulate getting course data
// In a real application, this would fetch data from an API or database
function getCourseData(slug: string) {
  // Mock data for WordPress course
  if (slug === "wordpress-basics") {
    return {
      id: "wordpress-basics",
      title: "WordPress bilan ishlash",
      description: "WordPress CMS tizimini o'rnatish va sozlash",
      level: "O'rta",
      duration: "8 soat",
      lessons: 8,
      exercises: 4,
      students: 1245,
      rating: 4.8,
      instructor: "Dilshod Rahimov",
      lastUpdated: "15.06.2023",
      progress: 0,
      image: "/placeholder.svg?height=400&width=600",
      modules: [
        {
          id: "module-1",
          title: "WordPress asoslari",
          lessons: [
            {
              id: "lesson-1-1",
              title: "WordPress nima va nima uchun kerak",
              duration: "15 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "lesson-1-2",
              title: "WordPress o'rnatish va sozlash",
              duration: "25 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "lesson-1-3",
              title: "WordPress boshqaruv paneli bilan tanishish",
              duration: "20 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "exercise-1-1",
              title: "WordPress o'rnatish va sozlash bo'yicha amaliy mashq",
              duration: "30 daqiqa",
              type: "exercise",
              completed: false,
            },
          ],
        },
        {
          id: "module-2",
          title: "WordPress mavzulari",
          lessons: [
            {
              id: "lesson-2-1",
              title: "WordPress mavzulari nima va ularni qanday tanlash",
              duration: "18 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "lesson-2-2",
              title: "Mavzuni o'rnatish va sozlash",
              duration: "22 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "lesson-2-3",
              title: "Mavzuni moslashtirish",
              duration: "30 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "exercise-2-1",
              title: "WordPress mavzusini o'rnatish va sozlash bo'yicha amaliy mashq",
              duration: "40 daqiqa",
              type: "exercise",
              completed: false,
            },
          ],
        },
        {
          id: "module-3",
          title: "WordPress plaginlari",
          lessons: [
            {
              id: "lesson-3-1",
              title: "WordPress plaginlari nima va ularni qanday tanlash",
              duration: "20 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "lesson-3-2",
              title: "Asosiy plaginlarni o'rnatish va sozlash",
              duration: "35 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "exercise-3-1",
              title: "WordPress plaginlarini o'rnatish va sozlash bo'yicha amaliy mashq",
              duration: "45 daqiqa",
              type: "exercise",
              completed: false,
            },
          ],
        },
        {
          id: "module-4",
          title: "WordPress xavfsizligi",
          lessons: [
            {
              id: "lesson-4-1",
              title: "WordPress saytini xavfsizligini ta'minlash",
              duration: "25 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "lesson-4-2",
              title: "Zaxira nusxalarini yaratish",
              duration: "15 daqiqa",
              type: "video",
              completed: false,
            },
            {
              id: "exercise-4-1",
              title: "WordPress xavfsizligi bo'yicha amaliy mashq",
              duration: "30 daqiqa",
              type: "exercise",
              completed: false,
            },
          ],
        },
      ],
    }
  }

  // Default data for other courses
  return {
    id: slug,
    title: "CMS tizimlari asoslari",
    description: "CMS nima va undan qanday foydalanish mumkin",
    level: "Boshlang'ich",
    duration: "5 soat",
    lessons: 5,
    exercises: 2,
    students: 2500,
    rating: 4.5,
    instructor: "Nodira Karimova",
    lastUpdated: "10.05.2023",
    progress: 0,
    image: "/placeholder.svg?height=400&width=600",
    modules: [
      {
        id: "module-1",
        title: "CMS tizimlari haqida",
        lessons: [
          {
            id: "lesson-1-1",
            title: "CMS nima va nima uchun kerak",
            duration: "15 daqiqa",
            type: "video",
            completed: false,
          },
          {
            id: "lesson-1-2",
            title: "CMS tizimlarining turlari",
            duration: "20 daqiqa",
            type: "video",
            completed: false,
          },
          {
            id: "exercise-1-1",
            title: "CMS tizimlarini taqqoslash bo'yicha amaliy mashq",
            duration: "30 daqiqa",
            type: "exercise",
            completed: false,
          },
        ],
      },
      {
        id: "module-2",
        title: "CMS tizimlarini tanlash",
        lessons: [
          {
            id: "lesson-2-1",
            title: "CMS tizimini tanlash mezonlari",
            duration: "18 daqiqa",
            type: "video",
            completed: false,
          },
          {
            id: "lesson-2-2",
            title: "Mashhur CMS tizimlari bilan tanishish",
            duration: "25 daqiqa",
            type: "video",
            completed: false,
          },
          {
            id: "exercise-2-1",
            title: "Loyiha uchun CMS tizimini tanlash bo'yicha amaliy mashq",
            duration: "35 daqiqa",
            type: "exercise",
            completed: false,
          },
        ],
      },
    ],
  }
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourseData(params.slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center mb-8">
            <Link href="/courses">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> Barcha kurslar
              </Button>
            </Link>
          </div>

          {/* Course Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <Badge>{course.level}</Badge>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Oxirgi yangilanish: {course.lastUpdated}</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-slate-600 mb-6">{course.description}</p>

                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center">
                    <Video className="h-5 w-5 text-primary mr-2" />
                    <span>{course.lessons} ta video dars</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-2" />
                    <span>{course.exercises} ta amaliy mashq</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <span>Davomiyligi: {course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <span>{course.students} o'quvchi</span>
                  </div>
                </div>

                <div className="flex items-center mb-8">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt={course.instructor}
                    className="h-12 w-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-medium">O'qituvchi</p>
                    <p className="text-primary">{course.instructor}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    <Play className="h-4 w-4" /> Kursni boshlash
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Download className="h-4 w-4" /> Materiallari yuklab olish
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Kurs ma'lumotlari</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 mb-4">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 rounded-full h-16 w-16 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Award className="h-5 w-5 text-yellow-500 mr-2" />
                        <span className="font-medium">Reyting</span>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium mr-1">{course.rating}</span>
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
                    </div>
                    <p className="text-sm text-slate-500">{course.students} o'quvchi tomonidan baholangan</p>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium mb-2">Kurs o'z ichiga oladi:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Video className="h-4 w-4 text-slate-400 mr-2" />
                        <span>{course.lessons} ta video dars</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-slate-400 mr-2" />
                        <span>{course.exercises} ta amaliy mashq</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <FileText className="h-4 w-4 text-slate-400 mr-2" />
                        <span>Yuklab olinadigan materiallar</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <MessageSquare className="h-4 w-4 text-slate-400 mr-2" />
                        <span>O'qituvchi bilan muloqot</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Award className="h-4 w-4 text-slate-400 mr-2" />
                        <span>Kurs sertifikati</span>
                      </li>
                      <li className="flex items-center text-sm">
                        <Hand className="h-4 w-4 text-slate-400 mr-2" />
                        <span>Imo-ishora tili tarjimasi</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Kursni boshlash</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Course Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="content">
                <TabsList className="mb-6">
                  <TabsTrigger value="content">Kurs tarkibi</TabsTrigger>
                  <TabsTrigger value="description">Batafsil ma'lumot</TabsTrigger>
                  <TabsTrigger value="reviews">Fikrlar</TabsTrigger>
                </TabsList>

                <TabsContent value="content" className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-6">Kurs tarkibi</h2>

                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 text-sm text-slate-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Video className="h-4 w-4 mr-1" />
                          <span>{course.lessons} ta video dars</span>
                        </div>
                        <div className="flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span>{course.exercises} ta amaliy mashq</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Jami davomiyligi: {course.duration}</span>
                      </div>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {course.modules.map((module, index) => (
                        <AccordionItem key={module.id} value={module.id} className="border rounded-lg overflow-hidden">
                          <AccordionTrigger className="px-6 py-4 hover:bg-slate-50">
                            <div className="flex items-center text-left">
                              <span className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center mr-3">
                                {index + 1}
                              </span>
                              <div>
                                <h3 className="font-medium">{module.title}</h3>
                                <p className="text-sm text-slate-500">
                                  {module.lessons.length} ta dars •{" "}
                                  {module.lessons.filter((l) => l.type === "exercise").length} ta amaliy mashq
                                </p>
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-0">
                            <ul className="divide-y">
                              {module.lessons.map((lesson) => (
                                <li key={lesson.id} className="px-6 py-3 hover:bg-slate-50">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      {lesson.type === "video" ? (
                                        <Video className="h-5 w-5 text-slate-400 mr-3" />
                                      ) : (
                                        <CheckCircle className="h-5 w-5 text-slate-400 mr-3" />
                                      )}
                                      <div>
                                        <p className="font-medium">{lesson.title}</p>
                                        <p className="text-sm text-slate-500">{lesson.duration}</p>
                                      </div>
                                    </div>
                                    <Button variant="ghost" size="sm" className="gap-1">
                                      <Play className="h-4 w-4" /> Boshlash
                                    </Button>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>

                <TabsContent value="description" className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-6">Kurs haqida</h2>

                    <div className="prose prose-slate max-w-none">
                      <p>
                        Bu kursda siz {course.title} haqida batafsil ma'lumot olasiz. Kurs davomida nazariy bilimlar
                        bilan bir qatorda amaliy ko'nikmalarni ham egallab borasiz.
                      </p>

                      <h3>Kurs kimlar uchun mo'ljallangan?</h3>
                      <ul>
                        <li>CMS tizimlarini o'rganishni xohlovchilar</li>
                        <li>Web-sayt yaratishni o'rganmoqchi bo'lganlar</li>
                        <li>O'z bilimlarini oshirmoqchi bo'lgan web-dizaynerlar</li>
                        <li>Kontent menejeri bo'lib ishlashni xohlovchilar</li>
                      </ul>

                      <h3>Kursni tugatgandan so'ng qanday ko'nikmalarni egallaysiz?</h3>
                      <ul>
                        <li>CMS tizimlarini o'rnatish va sozlash</li>
                        <li>Web-saytlar yaratish va ularni boshqarish</li>
                        <li>Kontent yaratish va uni boshqarish</li>
                        <li>SEO asoslarini tushunish</li>
                        <li>Web-saytlarni xavfsizligini ta'minlash</li>
                      </ul>

                      <h3>Kurs uchun talab qilinadigan bilimlar</h3>
                      <p>Kursni o'zlashtirish uchun sizdan quyidagi bilimlar talab qilinadi:</p>
                      <ul>
                        <li>Kompyuter savodxonligi</li>
                        <li>Internet bilan ishlash asosiy ko'nikmalari</li>
                        <li>HTML va CSS haqida boshlang'ich tushunchalar (ixtiyoriy)</li>
                      </ul>

                      <h3>Maxsus imkoniyatlar</h3>
                      <p>Kursimiz past eshituvchi talabalar uchun quyidagi maxsus imkoniyatlar bilan jihozlangan:</p>
                      <ul>
                        <li>Barcha video darslarda subtitrlar</li>
                        <li>Imo-ishora tili tarjimasi</li>
                        <li>Matnli darsliklar</li>
                        <li>Vizual ko'rsatmalar</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="reviews" className="space-y-6">
                  <div className="bg-white rounded-lg shadow-sm p-6">
                    <h2 className="text-xl font-bold mb-6">O'quvchilar fikrlari</h2>

                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                      <div className="md:w-1/3">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-primary mb-2">{course.rating}</div>
                          <div className="flex justify-center mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
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
                          <p className="text-slate-500">{course.students} o'quvchi fikri</p>
                        </div>
                      </div>

                      <div className="md:w-2/3">
                        <div className="space-y-3">
                          {[5, 4, 3, 2, 1].map((rating) => {
                            const percent =
                              rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : rating === 2 ? 2 : 1
                            return (
                              <div key={rating} className="flex items-center">
                                <div className="flex items-center w-20">
                                  <span className="mr-2">{rating}</span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-yellow-500"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                </div>
                                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-primary" style={{ width: `${percent}%` }}></div>
                                </div>
                                <div className="w-12 text-right text-sm text-slate-500">{percent}%</div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {/* Review 1 */}
                      <div className="border-b pb-6">
                        <div className="flex items-start gap-4">
                          <img
                            src="/placeholder.svg?height=50&width=50"
                            alt="Aziza Karimova"
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex items-center mb-1">
                              <h3 className="font-medium mr-2">Aziza Karimova</h3>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
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
                            <div className="text-sm text-slate-500 mb-2">2 hafta oldin</div>
                            <p>
                              Bu kurs menga CMS tizimlarini o'rganishda juda katta yordam berdi. Maxsus imkoniyatlar
                              tufayli men hamma narsani tushunishim oson bo'ldi. Endi men o'z mijozlarim uchun WordPress
                              saytlarini yaratishim mumkin.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Review 2 */}
                      <div className="border-b pb-6">
                        <div className="flex items-start gap-4">
                          <img
                            src="/placeholder.svg?height=50&width=50"
                            alt="Bobur Aliyev"
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex items-center mb-1">
                              <h3 className="font-medium mr-2">Bobur Aliyev</h3>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star, index) => (
                                  <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill={index < 4 ? "currentColor" : "none"}
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
                            <div className="text-sm text-slate-500 mb-2">1 oy oldin</div>
                            <p>
                              Men past eshituvchi talaba sifatida ko'p platformalarda qiyinchilikka duch kelardim. Lekin
                              bu platformada barcha darslar subtitrlar bilan ta'minlangan va vizual ko'rsatmalar juda
                              tushunarli. Bu menga CMS tizimlarini o'rganishda katta yordam berdi.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Review 3 */}
                      <div>
                        <div className="flex items-start gap-4">
                          <img
                            src="/placeholder.svg?height=50&width=50"
                            alt="Gulnora Rahimova"
                            className="h-12 w-12 rounded-full object-cover"
                          />
                          <div>
                            <div className="flex items-center mb-1">
                              <h3 className="font-medium mr-2">Gulnora Rahimova</h3>
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
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
                            <div className="text-sm text-slate-500 mb-2">3 oy oldin</div>
                            <p>
                              WordPress bilan ishlash kursini tugatganimdan so'ng, men kontent menejeri sifatida ish
                              topa oldim. Platformadagi amaliy mashqlar va interaktiv topshiriqlar menga haqiqiy tajriba
                              orttirish imkonini berdi.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Related Courses */}
                <Card>
                  <CardHeader>
                    <CardTitle>O'xshash kurslar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="h-16 w-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                        <BookOpen className="h-8 w-8 text-primary/40" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">CMS tizimlari asoslari</h3>
                        <p className="text-sm text-slate-500 mb-1">Boshlang'ich</p>
                        <Link href="/courses/cms-basics" className="text-primary text-sm hover:underline">
                          Batafsil
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-16 w-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                        <Code className="h-8 w-8 text-primary/40" />
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Kontent yaratish</h3>
                        <p className="text-sm text-slate-500 mb-1">O'rta</p>
                        <Link href="/courses/content-creation" className="text-primary text-sm hover:underline">
                          Batafsil
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="h-16 w-16 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary/40"
                        >
                          <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium mb-1">Saytni sozlash va boshqarish</h3>
                        <p className="text-sm text-slate-500 mb-1">Yuqori</p>
                        <Link href="/courses/site-management" className="text-primary text-sm hover:underline">
                          Batafsil
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Tutorials */}
                <Card>
                  <CardHeader>
                    <CardTitle>Foydali darsliklar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">WordPress o'rnatish</h3>
                        <Link href="/tutorials/wordpress-installation" className="text-primary text-sm hover:underline">
                          O'qish
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">WordPress xavfsizligi</h3>
                        <Link href="/tutorials/wordpress-security" className="text-primary text-sm hover:underline">
                          O'qish
                        </Link>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">WordPress tezligini oshirish</h3>
                        <Link href="/tutorials/wordpress-speed" className="text-primary text-sm hover:underline">
                          O'qish
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Support */}
                <Card className="bg-primary text-white">
                  <CardHeader>
                    <CardTitle>Yordam kerakmi?</CardTitle>
                    <CardDescription className="text-primary-foreground/90">
                      Savollaringiz bo'lsa, bizga murojaat qiling
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5" />
                      <span>O'qituvchi bilan bog'lanish</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5" />
                      <span>Muhokama forumiga qo'shilish</span>
                    </div>
                    <div className="flex items-center gap-3">
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
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        <path d="M14 8.5a2.5 2.5 0 0 0-5 0c0 2.5 2.5 1.5 2.5 4"></path>
                        <path d="M12 16v.01"></path>
                      </svg>
                      <span>Yordam markaziga murojaat qilish</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="w-full">
                      Yordam so'rash
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
