import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Volume2,
  Settings,
  Download,
  MessageSquare,
  ThumbsUp,
  ThumbsDown,
  Hand,
  FileText,
  Maximize,
  SkipBack,
  SkipForward,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

// This is a mock function to simulate getting lesson data
function getLessonData(slug: string, lessonId: string) {
  return {
    id: lessonId,
    title: "WordPress o'rnatish va sozlash",
    duration: "25 daqiqa",
    type: "video",
    completed: false,
    courseTitle: "WordPress bilan ishlash",
    courseSlug: slug,
    videoUrl: "/placeholder.svg?height=400&width=600",
    transcript: `
      Assalomu alaykum, hurmatli o'quvchilar!

      Bugungi darsimizda WordPress CMS tizimini o'rnatish va dastlabki sozlash jarayonini ko'rib chiqamiz.

      WordPress - bu dunyodagi eng mashhur kontent boshqarish tizimi bo'lib, internet saytlarning 30% dan ortig'i aynan WordPress yordamida yaratilgan.

      WordPress o'rnatish uchun bizga quyidagilar kerak bo'ladi:
      - Domen nomi (masalan, example.com)
      - Hosting xizmati (PHP va MySQL qo'llab-quvvatlaydigan)
      - FTP mijozi (ixtiyoriy)

      Keling, WordPress o'rnatish jarayonini qadamba-qadam ko'rib chiqamiz.

      1-qadam: Hosting va domen tanlash
      WordPress o'rnatish uchun avvalo hosting xizmati va domen nomini tanlashingiz kerak. Buning uchun quyidagi hosting provayderlaridan foydalanishingiz mumkin:
      - Bluehost (WordPress tomonidan tavsiya etilgan)
      - SiteGround
      - HostGator
      - DreamHost

      2-qadam: WordPress-ni yuklab olish
      WordPress-ni rasmiy saytidan yuklab olishingiz mumkin: wordpress.org/download

      3-qadam: Ma'lumotlar bazasini yaratish
      WordPress o'rnatish uchun MySQL ma'lumotlar bazasi kerak bo'ladi. Uni yaratish uchun:
      - Hosting boshqaruv paneliga kiring
      - MySQL ma'lumotlar bazasi bo'limini toping
      - Yangi ma'lumotlar bazasini yarating
      - Ma'lumotlar bazasi foydalanuvchisini yarating va unga to'liq huquqlarni bering
      - Ma'lumotlar bazasi nomi, foydalanuvchi nomi va parolni yozib oling

      4-qadam: WordPress fayllarini yuklash
      Agar hosting provayderingiz "bir marta bosish bilan o'rnatish" xizmatini taklif qilmasa, WordPress fayllarini quyidagicha yuklashingiz kerak:
      - WordPress-ni yuklab oling va arxivdan chiqaring
      - FTP mijozi yordamida fayllarni serverga yuklang
      - Fayllarni asosiy katalogga yuklang (odatda "public_html" yoki "www")

      5-qadam: O'rnatish jarayonini boshlash
      WordPress fayllarini yuklagandan so'ng, brauzeringizda domen nomingizni oching. O'rnatish jarayoni avtomatik ravishda boshlanadi.
      - Tilni tanlang (o'zbek tilini tanlash uchun "O'zbekcha" ni tanlang)
      - Ma'lumotlar bazasi ma'lumotlarini kiriting (ma'lumotlar bazasi nomi, foydalanuvchi nomi, parol, host)
      - Sayt sarlavhasi va administrator ma'lumotlarini kiriting
      - O'rnatishni yakunlang

      6-qadam: Dastlabki sozlashlar
      WordPress o'rnatilgandan so'ng, quyidagi dastlabki sozlashlarni amalga oshirish tavsiya etiladi:
      - Permalink strukturasini o'zgartirish: Sozlamalar > Doimiy havolalar bo'limiga o'ting va "Post nomi" variantini tanlang.
      - Mavzu tanlash: Ko'rinish > Mavzular bo'limiga o'ting va o'zingizga yoqqan mavzuni tanlang.
      - Asosiy plaginlarni o'rnatish:
        - Yoast SEO - SEO optimizatsiyasi uchun
        - Wordfence Security - xavfsizlik uchun
        - WP Super Cache - sayt tezligini oshirish uchun
        - Contact Form 7 - aloqa formalarini yaratish uchun
      - Xavfsizlik sozlamalari: Kuchli parollardan foydalaning va ikki bosqichli autentifikatsiyani yoqing.

      7-qadam: Kontent qo'shish
      WordPress o'rnatilgandan va sozlangandan so'ng, saytingizga kontent qo'shishni boshlashingiz mumkin:
      - Sahifalar yaratish: Asosiy sahifa, Biz haqimizda, Xizmatlar, Aloqa kabi sahifalarni yarating.
      - Postlar yozish: Blog bo'limiga postlar qo'shing.
      - Menyu yaratish: Ko'rinish > Menyular bo'limida sayt navigatsiyasini sozlang.

      Xulosa
      WordPress o'rnatish va dastlabki sozlash jarayoni nisbatan oson. Ushbu qo'llanmaga amal qilsangiz, tez orada o'z saytingizni ishga tushirishingiz mumkin. WordPress-ning keng imkoniyatlari va moslashuvchanligi tufayli, siz har qanday turdagi saytni yaratishingiz mumkin - shaxsiy blog, korporativ sayt, onlayn do'kon va boshqalar.

      Keyingi darsimizda WordPress mavzularini tanlash va sozlash haqida gaplashamiz.

      Rahmat, ko'rishguncha!
    `,
    nextLesson: {
      id: "lesson-1-3",
      title: "WordPress boshqaruv paneli bilan tanishish",
    },
    prevLesson: {
      id: "lesson-1-1",
      title: "WordPress nima va nima uchun kerak",
    },
    relatedLessons: [
      {
        id: "lesson-2-1",
        title: "WordPress mavzulari nima va ularni qanday tanlash",
      },
      {
        id: "lesson-3-1",
        title: "WordPress plaginlari nima va ularni qanday tanlash",
      },
    ],
  }
}

export default function LessonPage({ params }: { params: { slug: string; lessonId: string } }) {
  const lesson = getLessonData(params.slug, params.lessonId)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center mb-8">
            <Link href={`/courses/${params.slug}`}>
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> {lesson.courseTitle} kursiga qaytish
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Video Player */}
              <div className="bg-black rounded-lg overflow-hidden">
                <div className="relative">
                  <div className="aspect-video bg-slate-800 flex items-center justify-center">
                    <img
                      src={lesson.videoUrl || "/placeholder.svg"}
                      alt={lesson.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-primary/90 rounded-full h-16 w-16 flex items-center justify-center cursor-pointer hover:bg-primary transition-colors">
                        <Play className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Sign Language Interpreter */}
                    <div className="absolute bottom-4 right-4 w-1/4 aspect-video bg-slate-900 rounded-lg overflow-hidden border-2 border-white">
                      <div className="w-full h-full flex items-center justify-center">
                        <Hand className="h-8 w-8 text-white" />
                        <span className="text-white text-sm ml-2">Imo-ishora tili</span>
                      </div>
                    </div>

                    {/* Subtitles */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-center">
                      WordPress o'rnatish uchun avvalo hosting xizmati va domen nomini tanlashingiz kerak.
                    </div>
                  </div>

                  {/* Video Controls */}
                  <div className="bg-slate-900 text-white p-3">
                    <div className="flex flex-col space-y-2">
                      <Progress value={30} className="h-1" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <SkipBack className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <SkipForward className="h-4 w-4" />
                          </Button>
                          <div className="text-sm">7:30 / 25:00</div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <Volume2 className="h-4 w-4" />
                          </Button>
                          <select className="bg-slate-800 text-white text-sm rounded px-2 py-1 border-none">
                            <option value="1">1x</option>
                            <option value="1.25">1.25x</option>
                            <option value="1.5">1.5x</option>
                            <option value="1.75">1.75x</option>
                            <option value="2">2x</option>
                          </select>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <Hand className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <FileText className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-white">
                            <Maximize className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lesson Content */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-2xl font-bold mb-4">{lesson.title}</h1>

                <Tabs defaultValue="overview">
                  <TabsList className="mb-6">
                    <TabsTrigger value="overview">Dars haqida</TabsTrigger>
                    <TabsTrigger value="transcript">Transkript</TabsTrigger>
                    <TabsTrigger value="resources">Materiallar</TabsTrigger>
                    <TabsTrigger value="discussion">Muhokama</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-500">
                      <div className="flex items-center">
                        <Play className="h-4 w-4 mr-1" />
                        <span>{lesson.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>Transkript mavjud</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        <span>Yuklab olinadigan materiallar</span>
                      </div>
                      <div className="flex items-center">
                        <Hand className="h-4 w-4 mr-1" />
                        <span>Imo-ishora tili</span>
                      </div>
                    </div>

                    <div className="prose prose-slate max-w-none">
                      <p>
                        Bu darsda siz WordPress CMS tizimini o'rnatish va dastlabki sozlash jarayonini o'rganasiz.
                        WordPress - bu dunyodagi eng mashhur kontent boshqarish tizimi bo'lib, internet saytlarning 30%
                        dan ortig'i aynan WordPress yordamida yaratilgan.
                      </p>

                      <h3>Darsda o'rganiladigan mavzular:</h3>
                      <ul>
                        <li>WordPress o'rnatish uchun kerakli narsalar</li>
                        <li>Hosting va domen tanlash</li>
                        <li>WordPress-ni yuklab olish</li>
                        <li>Ma'lumotlar bazasini yaratish</li>
                        <li>WordPress fayllarini yuklash</li>
                        <li>O'rnatish jarayonini boshlash</li>
                        <li>Dastlabki sozlashlar</li>
                      </ul>

                      <h3>Darsdan so'ng siz quyidagi ko'nikmalarni egallaysiz:</h3>
                      <ul>
                        <li>WordPress CMS tizimini o'rnatish</li>
                        <li>WordPress-ni dastlabki sozlash</li>
                        <li>WordPress boshqaruv paneli bilan ishlash</li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="gap-1">
                          <ThumbsUp className="h-4 w-4" /> Foydali (24)
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1">
                          <ThumbsDown className="h-4 w-4" /> Foydali emas (2)
                        </Button>
                      </div>
                      <Button variant="outline" size="sm" className="gap-1">
                        <MessageSquare className="h-4 w-4" /> Savol berish
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="transcript">
                    <div className="prose prose-slate max-w-none">
                      <div className="mb-4 flex justify-between">
                        <Button variant="outline" size="sm" className="gap-1">
                          <Download className="h-4 w-4" /> Transkriptni yuklab olish
                        </Button>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" className="gap-1">
                            <FileText className="h-4 w-4" /> Matnni nusxalash
                          </Button>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Volume2 className="h-4 w-4" /> O'qib berish
                          </Button>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg max-h-96 overflow-y-auto">
                        <p>{lesson.transcript}</p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="resources">
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg">Yuklab olinadigan materiallar</h3>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-primary mr-3" />
                            <span>WordPress o'rnatish qo'llanmasi.pdf</span>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Download className="h-4 w-4" /> Yuklab olish
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-primary mr-3" />
                            <span>WordPress o'rnatish tekshirish ro'yxati.pdf</span>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Download className="h-4 w-4" /> Yuklab olish
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-primary mr-3" />
                            <span>WordPress dastlabki sozlash qo'llanmasi.pdf</span>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Download className="h-4 w-4" /> Yuklab olish
                          </Button>
                        </div>
                      </div>

                      <h3 className="font-medium text-lg mt-6">Foydali havolalar</h3>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                          <div className="flex items-center">
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
                              className="text-primary mr-3"
                            >
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            <span>WordPress rasmiy sayti</span>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
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
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Ochish
                          </Button>
                        </div>

                        <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50">
                          <div className="flex items-center">
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
                              className="text-primary mr-3"
                            >
                              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                            </svg>
                            <span>WordPress o'rnatish bo'yicha rasmiy qo'llanma</span>
                          </div>
                          <Button variant="outline" size="sm" className="gap-1">
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
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                              <polyline points="15 3 21 3 21 9"></polyline>
                              <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            Ochish
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="discussion">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-lg">Muhokama (12 ta izoh)</h3>
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
                                Juda foydali dars! WordPress o'rnatish jarayonini juda tushunarli tushuntirib berdingiz.
                                Ayniqsa, imo-ishora tili tarjimasi juda yaxshi ishlayapti, rahmat!
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
                  <Link href={`/courses/${params.slug}/lesson/${lesson.prevLesson.id}`}>
                    <ArrowLeft className="h-4 w-4" /> {lesson.prevLesson.title}
                  </Link>
                </Button>
                <Button className="gap-1" asChild>
                  <Link href={`/courses/${params.slug}/lesson/${lesson.nextLesson.id}`}>
                    {lesson.nextLesson.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              {/* Course Progress */}
              <Card>
                <CardHeader>
                  <CardTitle>Kurs jarayoni</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Umumiy jarayon</span>
                      <span>30%</span>
                    </div>
                    <Progress value={30} className="h-2" />
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">Darsni tugatish</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="lesson-complete" />
                      <label htmlFor="lesson-complete" className="text-sm">
                        Bu darsni tugatdim
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Content */}
              <Card>
                <CardHeader>
                  <CardTitle>Kurs tarkibi</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="module-1">
                      <AccordionTrigger>
                        <div className="flex items-center text-left">
                          <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center mr-2 text-sm">
                            1
                          </span>
                          <span>WordPress asoslari</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-8">
                          <li className="text-sm">
                            <Link href="#" className="flex items-center text-slate-600 hover:text-primary">
                              <Play className="h-3 w-3 mr-2" />
                              WordPress nima va nima uchun kerak
                            </Link>
                          </li>
                          <li className="text-sm">
                            <Link href="#" className="flex items-center text-primary font-medium">
                              <Play className="h-3 w-3 mr-2" />
                              WordPress o'rnatish va sozlash
                            </Link>
                          </li>
                          <li className="text-sm">
                            <Link href="#" className="flex items-center text-slate-600 hover:text-primary">
                              <Play className="h-3 w-3 mr-2" />
                              WordPress boshqaruv paneli bilan tanishish
                            </Link>
                          </li>
                          <li className="text-sm">
                            <Link href="#" className="flex items-center text-slate-600 hover:text-primary">
                              <CheckCircle className="h-3 w-3 mr-2" />
                              WordPress o'rnatish va sozlash bo'yicha amaliy mashq
                            </Link>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="module-2">
                      <AccordionTrigger>
                        <div className="flex items-center text-left">
                          <span className="bg-primary/10 text-primary rounded-full h-6 w-6 flex items-center justify-center mr-2 text-sm">
                            2
                          </span>
                          <span>WordPress mavzulari</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-2 pl-8">
                          <li className="text-sm">
                            <Link href="#" className="flex items-center text-slate-600 hover:text-primary">
                              <Play className="h-3 w-3 mr-2" />
                              WordPress mavzulari nima va ularni qanday tanlash
                            </Link>
                          </li>
                          <li className="text-sm">
                            <Link href="#" className="flex items-center text-slate-600 hover:text-primary">
                              <Play className="h-3 w-3 mr-2" />
                              Mavzuni o'rnatish va sozlash
                            </Link>
                          </li>
                          <li className="text-sm">
                            <Link href="#" className="flex items-center text-slate-600 hover:text-primary">
                              <Play className="h-3 w-3 mr-2" />
                              Mavzuni moslashtirish
                            </Link>
                          </li>
                          <li className="text-sm">
                            <Link href="#" className="flex items-center text-slate-600 hover:text-primary">
                              <CheckCircle className="h-3 w-3 mr-2" />
                              WordPress mavzusini o'rnatish va sozlash bo'yicha amaliy mashq
                            </Link>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              {/* Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Eslatmalar</CardTitle>
                  <CardDescription>Dars davomida eslatmalar qo'shing</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full h-32 p-3 border rounded-md"
                    placeholder="Bu yerga eslatmalaringizni yozing..."
                  ></textarea>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Saqlash</Button>
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
