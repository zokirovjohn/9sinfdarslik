import Link from "next/link"
import {
  ArrowRight,
  Bell,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  GraduationCap,
  LayoutDashboard,
  PlayCircle,
  Settings,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Salom, Aziza!</h1>
              <p className="text-slate-600">O'rganishni davom ettirish uchun sizning darslaringiz</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
              <Link href="/dashboard/settings">
                <Button variant="outline" size="icon">
                  <Settings className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard/profile">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Aziza Karimova" />
                  <AvatarFallback>AK</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                    <PlayCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Tugatilgan darslar</p>
                    <h3 className="text-2xl font-bold">12</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Tugatilgan kurslar</p>
                    <h3 className="text-2xl font-bold">2</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Qo'lga kiritilgan sertifikatlar</p>
                    <h3 className="text-2xl font-bold">1</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">O'qish vaqti</p>
                    <h3 className="text-2xl font-bold">28 soat</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* In Progress Courses */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Davom ettirilayotgan kurslar</h2>
                <Link href="/catalog">
                  <Button variant="outline" size="sm" className="gap-1">
                    Barcha kurslar <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                {/* Course 1 */}
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-slate-100 aspect-video md:aspect-auto md:h-auto">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="WordPress bilan ishlash"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Badge className="mb-2">O'rta</Badge>
                          <h3 className="text-xl font-bold mb-1">WordPress bilan ishlash</h3>
                          <p className="text-slate-500 text-sm mb-2">8 ta darsdan 4 tasi tugatilgan</p>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> 4 soat qoldi
                        </Badge>
                      </div>

                      <Progress value={50} className="h-2 mb-4" />

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Dilshod Rahimov" />
                            <AvatarFallback>DR</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-slate-500">Dilshod Rahimov</span>
                        </div>
                        <Link href="/courses/wordpress-basics">
                          <Button size="sm">Davom ettirish</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Course 2 */}
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-slate-100 aspect-video md:aspect-auto md:h-auto">
                      <img
                        src="/placeholder.svg?height=200&width=300"
                        alt="CMS tizimlari asoslari"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <Badge className="mb-2">Boshlang'ich</Badge>
                          <h3 className="text-xl font-bold mb-1">CMS tizimlari asoslari</h3>
                          <p className="text-slate-500 text-sm mb-2">5 ta darsdan 2 tasi tugatilgan</p>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> 3 soat qoldi
                        </Badge>
                      </div>

                      <Progress value={40} className="h-2 mb-4" />

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Nodira Karimova" />
                            <AvatarFallback>NK</AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-slate-500">Nodira Karimova</span>
                        </div>
                        <Link href="/courses/cms-basics">
                          <Button size="sm">Davom ettirish</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Sidebar - Activity and Calendar */}
            <div className="space-y-6">
              {/* Calendar */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    Keyingi darslar
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded p-2 text-center shrink-0">
                      <div className="text-sm font-bold">18</div>
                      <div className="text-xs">Aprel</div>
                    </div>
                    <div>
                      <h4 className="font-medium">WordPress mavzularini sozlash</h4>
                      <p className="text-sm text-slate-500">15:00 - 16:30</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded p-2 text-center shrink-0">
                      <div className="text-sm font-bold">20</div>
                      <div className="text-xs">Aprel</div>
                    </div>
                    <div>
                      <h4 className="font-medium">WordPress plaginlari bilan ishlash</h4>
                      <p className="text-sm text-slate-500">14:00 - 15:30</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded p-2 text-center shrink-0">
                      <div className="text-sm font-bold">24</div>
                      <div className="text-xs">Aprel</div>
                    </div>
                    <div>
                      <h4 className="font-medium">CMS tizimlari tahlili</h4>
                      <p className="text-sm text-slate-500">16:00 - 17:30</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Kalendar ko'rinishi
                  </Button>
                </CardFooter>
              </Card>

              {/* Recent activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LayoutDashboard className="h-5 w-5 text-primary" />
                    So'nggi faollik
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">WordPress o'rnatish</span> darsini tugatdingiz
                      </p>
                      <p className="text-xs text-slate-500">Bugun, 10:30</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">WordPress mavzulari</span> darsini boshladingiz
                      </p>
                      <p className="text-xs text-slate-500">Kecha, 16:45</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">SEO asoslari</span> testidan 90% ball oldingiz
                      </p>
                      <p className="text-xs text-slate-500">2 kun oldin, 14:20</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Trophy className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">CMS asoslari</span> kursini tugatdingiz
                      </p>
                      <p className="text-xs text-slate-500">1 hafta oldin</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Barcha faolliklar
                  </Button>
                </CardFooter>
              </Card>

              {/* Recommended courses */}
              <Card>
                <CardHeader>
                  <CardTitle>Tavsiya etilgan kurslar</CardTitle>
                  <CardDescription>Sizning qiziqishlaringiz asosida</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-slate-100 rounded h-12 w-16 shrink-0 flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary/40" />
                    </div>
                    <div>
                      <h4 className="font-medium">Kontent yaratish</h4>
                      <p className="text-xs text-slate-500">6 soatlik kurs • O'rta daraja</p>
                      <Link href="/courses/content-creation" className="text-primary text-xs hover:underline">
                        Batafsil
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-slate-100 rounded h-12 w-16 shrink-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary/40"
                      >
                        <path d="M12 20h9"></path>
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                        <path d="m15 5 3 3"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Web-dizayn asoslari</h4>
                      <p className="text-xs text-slate-500">8 soatlik kurs • O'rta daraja</p>
                      <Link href="/courses/web-design" className="text-primary text-xs hover:underline">
                        Batafsil
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// For demonstration only - placeholder for the icon used in the code
function Code({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  )
}
