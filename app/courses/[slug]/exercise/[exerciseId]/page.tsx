import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Clock,
  Download,
  FileText,
  HelpCircle,
  MessageSquare,
  Play,
  Save,
  Send,
  ThumbsUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

// This is a mock function to simulate getting exercise data
function getExerciseData(slug: string, exerciseId: string) {
  return {
    id: exerciseId,
    title: "WordPress o'rnatish va sozlash bo'yicha amaliy mashq",
    duration: "30 daqiqa",
    type: "exercise",
    completed: false,
    courseTitle: "WordPress bilan ishlash",
    courseSlug: slug,
    description: `
      Bu amaliy mashqda siz WordPress CMS tizimini o'rnatish va dastlabki sozlash jarayonini amalda qo'llaysiz.
      Mashq davomida siz WordPress o'rnatish, ma'lumotlar bazasini yaratish, WordPress-ni sozlash va asosiy plaginlarni o'rnatish kabi amallarni bajarasiz.
    `,
    objectives: [
      "WordPress o'rnatish jarayonini amalda qo'llash",
      "Ma'lumotlar bazasini yaratish va sozlash",
      "WordPress-ni dastlabki sozlash",
      "Asosiy plaginlarni o'rnatish va sozlash",
    ],
    prerequisites: ["Hosting va domen", "FTP mijozi (ixtiyoriy)", "WordPress haqida asosiy tushunchalar"],
    tasks: [
      {
        id: "task-1",
        title: "WordPress-ni yuklab olish va o'rnatish",
        description: "WordPress-ni rasmiy saytidan yuklab oling va uni hosting serveringizga o'rnating.",
        steps: [
          "WordPress-ni wordpress.org saytidan yuklab oling",
          "WordPress fayllarini hosting serveringizga yuklang",
          "Ma'lumotlar bazasini yarating",
          "WordPress o'rnatish jarayonini boshlang va yakunlang",
        ],
        resources: [
          {
            title: "WordPress o'rnatish qo'llanmasi",
            type: "pdf",
            url: "#",
          },
          {
            title: "WordPress o'rnatish video qo'llanmasi",
            type: "video",
            url: "#",
          },
        ],
      },
      {
        id: "task-2",
        title: "WordPress-ni dastlabki sozlash",
        description: "WordPress o'rnatilgandan so'ng, dastlabki sozlashlarni amalga oshiring.",
        steps: [
          "Permalink strukturasini o'zgartiring",
          "Mavzu tanlang va o'rnating",
          "Asosiy plaginlarni o'rnating",
          "Xavfsizlik sozlamalarini sozlang",
        ],
        resources: [
          {
            title: "WordPress sozlash qo'llanmasi",
            type: "pdf",
            url: "#",
          },
        ],
      },
      {
        id: "task-3",
        title: "Asosiy sahifalarni yaratish",
        description: "WordPress saytingiz uchun asosiy sahifalarni yarating.",
        steps: [
          "Asosiy sahifa yarating",
          "Biz haqimizda sahifasini yarating",
          "Xizmatlar sahifasini yarating",
          "Aloqa sahifasini yarating",
        ],
        resources: [
          {
            title: "WordPress sahifalar yaratish qo'llanmasi",
            type: "pdf",
            url: "#",
          },
        ],
      },
    ],
    quiz: {
      title: "WordPress o'rnatish va sozlash bo'yicha test",
      description: "Bu test orqali WordPress o'rnatish va sozlash bo'yicha bilimlaringizni tekshiring.",
      questions: [
        {
          id: "q1",
          question: "WordPress o'rnatish uchun quyidagilardan qaysi biri kerak emas?",
          options: ["Hosting xizmati", "Domen nomi", "FTP mijozi", "Adobe Photoshop"],
          correctAnswer: 3,
        },
        {
          id: "q2",
          question: "WordPress o'rnatish uchun qanday ma'lumotlar bazasi kerak?",
          options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"],
          correctAnswer: 0,
        },
        {
          id: "q3",
          question: "WordPress-ni dastlabki sozlashda quyidagilardan qaysi biri tavsiya etilmaydi?",
          options: [
            "Permalink strukturasini o'zgartirish",
            "Mavzu tanlash",
            "Asosiy plaginlarni o'rnatish",
            "Administrator foydalanuvchi nomini 'admin' qilib qoldirish",
          ],
          correctAnswer: 3,
        },
        {
          id: "q4",
          question: "WordPress-da SEO optimizatsiyasi uchun qaysi plagin eng mashhur?",
          options: ["Akismet", "Yoast SEO", "Contact Form 7", "WooCommerce"],
          correctAnswer: 1,
        },
        {
          id: "q5",
          question: "WordPress-da permalink strukturasini o'zgartirish uchun qaysi bo'limga o'tish kerak?",
          options: [
            "Sozlamalar > Umumiy",
            "Sozlamalar > Doimiy havolalar",
            "Ko'rinish > Mavzular",
            "Plaginlar > Yangi qo'shish",
          ],
          correctAnswer: 1,
        },
      ],
    },
    nextExercise: {
      id: "exercise-2-1",
      title: "WordPress mavzusini o'rnatish va sozlash bo'yicha amaliy mashq",
    },
    prevExercise: {
      id: "lesson-1-3",
      title: "WordPress boshqaruv paneli bilan tanishish",
    },
  }
}

export default function ExercisePage({ params }: { params: { slug: string; exerciseId: string } }) {
  const exercise = getExerciseData(params.slug, params.exerciseId)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center mb-8">
            <Link href={`/courses/${params.slug}`}>
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> {exercise.courseTitle} kursiga qaytish
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Exercise Header */}
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h1 className="text-2xl font-bold mb-4">{exercise.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-500">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    <span>Amaliy mashq</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Taxminiy vaqt: {exercise.duration}</span>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p>{exercise.description}</p>

                  <h3>Maqsadlar:</h3>
                  <ul>
                    {exercise.objectives.map((objective, index) => (
                      <li key={index}>{objective}</li>
                    ))}
                  </ul>

                  <h3>Talab qilinadigan bilimlar:</h3>
                  <ul>
                    {exercise.prerequisites.map((prerequisite, index) => (
                      <li key={index}>{prerequisite}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Exercise Content */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <Tabs defaultValue="tasks">
                  <TabsList className="mb-6">
                    <TabsTrigger value="tasks">Vazifalar</TabsTrigger>
                    <TabsTrigger value="quiz">Test</TabsTrigger>
                    <TabsTrigger value="submission">Topshirish</TabsTrigger>
                    <TabsTrigger value="discussion">Muhokama</TabsTrigger>
                  </TabsList>

                  <TabsContent value="tasks" className="space-y-6">
                    <div className="space-y-8">
                      {exercise.tasks.map((task, taskIndex) => (
                        <div key={task.id} className="border rounded-lg p-6">
                          <div className="flex items-start gap-4">
                            <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center shrink-0">
                              {taskIndex + 1}
                            </div>
                            <div className="space-y-4 w-full">
                              <div>
                                <h3 className="text-xl font-medium mb-2">{task.title}</h3>
                                <p className="text-slate-600">{task.description}</p>
                              </div>

                              <div>
                                <h4 className="font-medium mb-2">Qadamlar:</h4>
                                <ul className="space-y-2">
                                  {task.steps.map((step, stepIndex) => (
                                    <li key={stepIndex} className="flex items-center gap-2">
                                      <Checkbox id={`task-${taskIndex}-step-${stepIndex}`} />
                                      <label
                                        htmlFor={`task-${taskIndex}-step-${stepIndex}`}
                                        className="text-sm text-slate-600"
                                      >
                                        {step}
                                      </label>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {task.resources && task.resources.length > 0 && (
                                <div>
                                  <h4 className="font-medium mb-2">Resurslar:</h4>
                                  <ul className="space-y-2">
                                    {task.resources.map((resource, resourceIndex) => (
                                      <li key={resourceIndex} className="flex items-center gap-2">
                                        {resource.type === "pdf" ? (
                                          <FileText className="h-4 w-4 text-primary" />
                                        ) : (
                                          <Play className="h-4 w-4 text-primary" />
                                        )}
                                        <a href={resource.url} className="text-sm text-primary hover:underline">
                                          {resource.title}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              <div className="pt-4 border-t flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                  <Checkbox id={`task-${taskIndex}-complete`} />
                                  <label htmlFor={`task-${taskIndex}-complete`} className="text-sm font-medium">
                                    Bu vazifani tugatdim
                                  </label>
                                </div>
                                <Button variant="outline" size="sm" className="gap-1">
                                  <HelpCircle className="h-4 w-4" /> Yordam so'rash
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="quiz">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-bold mb-2">{exercise.quiz.title}</h2>
                        <p className="text-slate-600 mb-6">{exercise.quiz.description}</p>
                      </div>

                      <div className="space-y-8">
                        {exercise.quiz.questions.map((question, questionIndex) => (
                          <div key={question.id} className="border rounded-lg p-6">
                            <h3 className="text-lg font-medium mb-4">
                              {questionIndex + 1}. {question.question}
                            </h3>
                            <RadioGroup>
                              {question.options.map((option, optionIndex) => (
                                <div key={optionIndex} className="flex items-center space-x-2 py-2">
                                  <RadioGroupItem
                                    value={optionIndex.toString()}
                                    id={`q${questionIndex}-option-${optionIndex}`}
                                  />
                                  <Label htmlFor={`q${questionIndex}-option-${optionIndex}`}>{option}</Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        ))}
                      </div>

                      <div className="flex justify-between pt-4">
                        <Button variant="outline">Saqlash</Button>
                        <Button>Tekshirish</Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="submission">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-xl font-bold mb-2">Amaliy mashqni topshirish</h2>
                        <p className="text-slate-600 mb-6">
                          Amaliy mashqni tugatgandan so'ng, quyidagi formani to'ldiring va ishingizni topshiring.
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2">Qilingan ishlar haqida qisqacha ma'lumot:</h3>
                          <Textarea
                            placeholder="Amaliy mashq davomida qilgan ishlaringiz haqida qisqacha ma'lumot bering..."
                            className="min-h-32"
                          />
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Qiyinchiliklar va ularni qanday hal qilganingiz:</h3>
                          <Textarea
                            placeholder="Amaliy mashq davomida duch kelgan qiyinchiliklar va ularni qanday hal qilganingiz haqida yozing..."
                            className="min-h-32"
                          />
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Sayt URL manzili (agar mavjud bo'lsa):</h3>
                          <input
                            type="url"
                            placeholder="https://example.com"
                            className="w-full p-2 border rounded-md"
                          />
                        </div>

                        <div>
                          <h3 className="font-medium mb-2">Skrinshot yoki video:</h3>
                          <div className="border-2 border-dashed rounded-md p-8 text-center">
                            <p className="text-slate-500 mb-4">
                              Skrinshot yoki videoni shu yerga tashlang yoki faylni tanlang
                            </p>
                            <Button variant="outline">Fayl tanlash</Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between pt-4 border-t">
                        <Button variant="outline" className="gap-1">
                          <Save className="h-4 w-4" /> Qoralama sifatida saqlash
                        </Button>
                        <Button className="gap-1">
                          <Send className="h-4 w-4" /> Topshirish
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="discussion">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-lg">Muhokama (5 ta izoh)</h3>
                        <Button className="gap-1">
                          <MessageSquare className="h-4 w-4" /> Yangi izoh qo'shish
                        </Button>
                      </div>

                      <div className="space-y-6">
                        {/* Comment 1 */}
                        <div className="border-b pb-6">
                          <div className="flex items-start gap-4">
                            <img
                              src="/placeholder.svg?height=50&width=50"
                              alt="Aziza Karimova"
                              className="h-10 w-10 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-medium">Aziza Karimova</h4>
                                <span className="text-sm text-slate-500">2 kun oldin</span>
                              </div>
                              <p className="text-slate-600 mb-3">
                                WordPress o'rnatish jarayonida ma'lumotlar bazasini yaratishda muammoga duch keldim.
                                Hosting boshqaruv panelida MySQL bo'limini topa olmayapman. Qanday qilishim kerak?
                              </p>
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                  <ThumbsUp className="h-4 w-4" /> 3
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                  <MessageSquare className="h-4 w-4" /> Javob berish
                                </Button>
                              </div>

                              {/* Reply */}
                              <div className="mt-4 ml-6 pl-4 border-l">
                                <div className="flex items-start gap-4">
                                  <img
                                    src="/placeholder.svg?height=50&width=50"
                                    alt="Dilshod Rahimov"
                                    className="h-8 w-8 rounded-full object-cover"
                                  />
                                  <div>
                                    <div className="flex items-center justify-between mb-1">
                                      <h4 className="font-medium">
                                        Dilshod Rahimov{" "}
                                        <span className="text-primary text-sm font-normal ml-2">O'qituvchi</span>
                                      </h4>
                                      <span className="text-sm text-slate-500">1 kun oldin</span>
                                    </div>
                                    <p className="text-slate-600 mb-3">
                                      Salom Aziza! Hosting provayderingizga qarab, ma'lumotlar bazasi bo'limi turli
                                      nomlarda bo'lishi mumkin. Ko'pincha "Databases", "MySQL Databases" yoki "Database
                                      Manager" deb nomlanadi. Agar topa olmasangiz, hosting provayderingizning yordam
                                      markaziga murojaat qiling.
                                    </p>
                                    <div className="flex items-center gap-4">
                                      <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                        <ThumbsUp className="h-4 w-4" /> 2
                                      </Button>
                                      <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                        <MessageSquare className="h-4 w-4" /> Javob berish
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Comment 2 */}
                        <div>
                          <div className="flex items-start gap-4">
                            <img
                              src="/placeholder.svg?height=50&width=50"
                              alt="Bobur Aliyev"
                              className="h-10 w-10 rounded-full object-cover"
                            />
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-medium">Bobur Aliyev</h4>
                                <span className="text-sm text-slate-500">5 kun oldin</span>
                              </div>
                              <p className="text-slate-600 mb-3">
                                Amaliy mashqni tugatdim. WordPress o'rnatish va sozlash jarayoni juda qiziqarli ekan.
                                Ayniqsa, plaginlarni o'rnatish va sozlash qismi menga juda yoqdi.
                              </p>
                              <div className="flex items-center gap-4">
                                <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                  <ThumbsUp className="h-4 w-4" /> 5
                                </Button>
                                <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                  <MessageSquare className="h-4 w-4" /> Javob berish
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        Barcha izohlarni ko'rish
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button variant="outline" className="gap-1" asChild>
                  <Link href={`/courses/${params.slug}/lesson/${exercise.prevExercise.id}`}>
                    <ArrowLeft className="h-4 w-4" /> {exercise.prevExercise.title}
                  </Link>
                </Button>
                <Button className="gap-1" asChild>
                  <Link href={`/courses/${params.slug}/exercise/${exercise.nextExercise.id}`}>
                    {exercise.nextExercise.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              {/* Exercise Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Jarayon</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Vazifalar</span>
                      <span>0/3</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Test</span>
                      <span>0/5</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Topshirish</span>
                      <span>Topshirilmagan</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Amaliy mashqni tugatish</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="exercise-complete" />
                      <label htmlFor="exercise-complete" className="text-sm">
                        Bu amaliy mashqni tugatdim
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card>
                <CardHeader>
                  <CardTitle>Resurslar</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">WordPress o'rnatish qo'llanmasi</h3>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" /> Yuklab olish
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">WordPress sozlash tekshirish ro'yxati</h3>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" /> Yuklab olish
                        </Button>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Play className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">WordPress o'rnatish video qo'llanmasi</h3>
                        <Button variant="outline" size="sm" className="gap-1">
                          <Play className="h-4 w-4" /> Ko'rish
                        </Button>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Help */}
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle>Yordam kerakmi?</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    Amaliy mashq davomida qiyinchiliklarga duch kelsangiz, yordam so'rang
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5" />
                    <span>O'qituvchi bilan bog'lanish</span>
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
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5"></path>
                    </svg>
                    <span>Muhokama forumiga qo'shilish</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <HelpCircle className="h-5 w-5" />
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
      </main>
      <Footer />
    </div>
  )
}
