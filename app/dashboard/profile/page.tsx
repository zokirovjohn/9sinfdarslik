import Link from "next/link"
import {
  ArrowLeft,
  AtSign,
  Award,
  BookOpen,
  Calendar,
  Edit,
  GraduationCap,
  Languages,
  MapPin,
  Phone,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center mb-8">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold ml-4">Profil</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <CardContent className="p-6 flex flex-col items-center">
                  <div className="relative mb-4">
                    <Avatar className="h-32 w-32 border-4 border-white shadow-md">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Aziza Karimova" />
                      <AvatarFallback className="text-4xl">AK</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="secondary" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="text-2xl font-bold">Aziza Karimova</h2>
                  <p className="text-slate-500 mb-4">Web-dizayner</p>
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="gap-1">
                      <User className="h-3 w-3" /> O'quvchi
                    </Badge>
                    <Badge variant="outline" className="gap-1">
                      <Calendar className="h-3 w-3" /> 2022 yildan beri
                    </Badge>
                  </div>
                  <Button className="w-full">Profilni tahrirlash</Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Aloqa ma'lumotlari</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <AtSign className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Email</p>
                      <p className="font-medium">aziza.karimova@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Telefon</p>
                      <p className="font-medium">+998 90 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Manzil</p>
                      <p className="font-medium">Toshkent, O'zbekiston</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Languages className="h-5 w-5 text-primary shrink-0" />
                    <div>
                      <p className="text-sm text-slate-500">Tillar</p>
                      <p className="font-medium">O'zbek, Rus, Ingliz</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Ko'nikmalar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">WordPress</Badge>
                    <Badge variant="secondary">UI/UX</Badge>
                    <Badge variant="secondary">Figma</Badge>
                    <Badge variant="secondary">Responsive Design</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="courses" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="courses">Kurslar</TabsTrigger>
                  <TabsTrigger value="certificates">Sertifikatlar</TabsTrigger>
                  <TabsTrigger value="achievements">Yutuqlar</TabsTrigger>
                  <TabsTrigger value="about">Ma'lumot</TabsTrigger>
                </TabsList>

                {/* Courses Tab */}
                <TabsContent value="courses" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Mening kurslarim</h2>
                    <Badge variant="outline">Jami: 4 ta kurs</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Completed Course */}
                    <Card className="overflow-hidden border-green-200">
                      <div className="bg-green-50 px-4 py-1 text-xs text-green-700 font-medium">Tugatilgan</div>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-slate-100 rounded h-16 w-16 shrink-0 flex items-center justify-center">
                            <BookOpen className="h-8 w-8 text-primary/40" />
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">CMS tizimlari asoslari</h3>
                            <div className="text-xs text-slate-500 mb-2">Boshlang'ich • 5 soat</div>
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200"
                            >
                              100% tugatilgan
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-4 py-3 bg-slate-50 flex justify-between">
                        <div className="text-xs text-slate-500">Tugatilgan sana: 15/03/2023</div>
                        <Link href="/courses/cms-basics" className="text-primary text-xs font-medium hover:underline">
                          Ko'rish
                        </Link>
                      </CardFooter>
                    </Card>

                    {/* In Progress Course 1 */}
                    <Card className="overflow-hidden border-blue-200">
                      <div className="bg-blue-50 px-4 py-1 text-xs text-blue-700 font-medium">Davom etmoqda</div>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-slate-100 rounded h-16 w-16 shrink-0 flex items-center justify-center">
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
                              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                              <line x1="3" x2="21" y1="9" y2="9"></line>
                              <line x1="9" x2="9" y1="21" y2="9"></line>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">WordPress bilan ishlash</h3>
                            <div className="text-xs text-slate-500 mb-2">O'rta • 8 soat</div>
                            <Badge
                              variant="outline"
                              className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
                            >
                              50% tugatilgan
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-4 py-3 bg-slate-50 flex justify-between">
                        <div className="text-xs text-slate-500">Boshlangan sana: 10/04/2023</div>
                        <Link
                          href="/courses/wordpress-basics"
                          className="text-primary text-xs font-medium hover:underline"
                        >
                          Davom ettirish
                        </Link>
                      </CardFooter>
                    </Card>

                    {/* In Progress Course 2 */}
                    <Card className="overflow-hidden border-blue-200">
                      <div className="bg-blue-50 px-4 py-1 text-xs text-blue-700 font-medium">Davom etmoqda</div>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-slate-100 rounded h-16 w-16 shrink-0 flex items-center justify-center">
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
                              <polyline points="16 18 22 12 16 6"></polyline>
                              <polyline points="8 6 2 12 8 18"></polyline>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Kontent yaratish</h3>
                            <div className="text-xs text-slate-500 mb-2">O'rta • 6 soat</div>
                            <Badge
                              variant="outline"
                              className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200"
                            >
                              40% tugatilgan
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-4 py-3 bg-slate-50 flex justify-between">
                        <div className="text-xs text-slate-500">Boshlangan sana: 20/03/2023</div>
                        <Link
                          href="/courses/content-creation"
                          className="text-primary text-xs font-medium hover:underline"
                        >
                          Davom ettirish
                        </Link>
                      </CardFooter>
                    </Card>

                    {/* Not Started Course */}
                    <Card className="overflow-hidden border-slate-200">
                      <div className="bg-slate-50 px-4 py-1 text-xs text-slate-700 font-medium">Boshlanmagan</div>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-slate-100 rounded h-16 w-16 shrink-0 flex items-center justify-center">
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
                              <circle cx="12" cy="12" r="10"></circle>
                              <path d="m8 12 3 3 5-5"></path>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-bold mb-1">Web-dizayn asoslari</h3>
                            <div className="text-xs text-slate-500 mb-2">O'rta • 8 soat</div>
                            <Badge
                              variant="outline"
                              className="bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200"
                            >
                              0% tugatilgan
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-4 py-3 bg-slate-50 flex justify-between">
                        <div className="text-xs text-slate-500">Ro'yxatga olingan sana: 05/04/2023</div>
                        <Link href="/courses/web-design" className="text-primary text-xs font-medium hover:underline">
                          Boshlash
                        </Link>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                {/* Certificates Tab */}
                <TabsContent value="certificates" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Mening sertifikatlarim</h2>
                    <Badge variant="outline">Jami: 1 ta sertifikat</Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="hover:shadow-md transition-all overflow-hidden">
                      <div className="p-4 bg-primary/5 flex items-center justify-center">
                        <div className="relative">
                          <GraduationCap className="h-24 w-24 text-primary/20" />
                          <Award className="h-10 w-10 text-primary absolute bottom-0 right-0" />
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-lg mb-1">CMS tizimlari asoslari</h3>
                        <p className="text-sm text-slate-500 mb-4">Sertifikat ID: CMSBAS123456</p>
                        <div className="text-xs text-slate-500">Berilgan sana: 20/03/2023</div>
                      </CardContent>
                      <CardFooter className="flex justify-between p-4 bg-slate-50 border-t">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" /> Yuklab olish
                        </Button>
                        <Button size="sm">
                          <Eye className="h-4 w-4 mr-2" /> Ko'rish
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                {/* Achievements Tab */}
                <TabsContent value="achievements" className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Mening yutuqlarim</h2>
                    <Badge variant="outline">Jami: 4 ta yutuq</Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card className="p-4 flex flex-col items-center text-center hover:shadow-md transition-all">
                      <div className="bg-primary/10 rounded-full p-4 mb-3">
                        <Award className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="font-bold mb-1">Boshlang'ich</h3>
                      <p className="text-sm text-slate-500 mb-2">Birinchi kursni tugatdingiz</p>
                      <Badge variant="outline">20/03/2023</Badge>
                    </Card>

                    <Card className="p-4 flex flex-col items-center text-center hover:shadow-md transition-all">
                      <div className="bg-primary/10 rounded-full p-4 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"></path>
                          <path d="M17.5 15V18"></path>
                          <path d="M16 16.5H19"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold mb-1">Ijodkor</h3>
                      <p className="text-sm text-slate-500 mb-2">5 ta vazifani bajardingiz</p>
                      <Badge variant="outline">25/03/2023</Badge>
                    </Card>

                    <Card className="p-4 flex flex-col items-center text-center hover:shadow-md transition-all">
                      <div className="bg-primary/10 rounded-full p-4 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M12 20.5c-6.627 0-12-5.373-12-12S5.373-3.5 12-3.5 24 1.873 24 8.5c0 .255-.01.51-.03.765-.633-.312-1.29-.465-2-.499-.155-5.185-4.384-9.346-9.607-9.296-5.016.048-9.287 4.364-9.312 9.38C3.018 14.129 7.404 19.5 13 19.5c.776 0 1.527-.093 2.25-.27.276.651.648 1.254 1.11 1.789-.79.151-1.606.23-2.434.23l.074-.749Z"></path>
                          <path d="M20 14v3m0 0v3m0-3h-3m3 0h3"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold mb-1">Faol o'quvchi</h3>
                      <p className="text-sm text-slate-500 mb-2">10 kun ketma-ket o'qidingiz</p>
                      <Badge variant="outline">30/03/2023</Badge>
                    </Card>

                    <Card className="p-4 flex flex-col items-center text-center hover:shadow-md transition-all">
                      <div className="bg-primary/10 rounded-full p-4 mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-primary"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                          <path d="M4 22h16"></path>
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                        </svg>
                      </div>
                      <h3 className="font-bold mb-1">Yutuq sohibi</h3>
                      <p className="text-sm text-slate-500 mb-2">Birinchi sertifikatni oldingiz</p>
                      <Badge variant="outline">15/04/2023</Badge>
                    </Card>
                  </div>
                </TabsContent>

                {/* About Tab */}
                <TabsContent value="about" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Men haqimda</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p>
                        Men Aziza Karimova, web-dizayner sifatida faoliyat yuritaman. Veb-dizayn sohasida 3 yillik
                        tajribaga egaman va CMS tizimlari, ayniqsa WordPress bilan ishlashni yaxshi ko'raman.
                      </p>
                      <p>
                        Hozirda CMS tizimlari orqali web-kurslar yaratishni o'rganmoqdaman, chunki bu menga mijozlarimga
                        yanada yaxshiroq xizmat ko'rsatish imkonini beradi. Kelajakda to'liq stack veb-ishlab chiquvchi
                        bo'lishni va o'z onlayn kurslarimni yaratishni maqsad qilganman.
                      </p>
                      <p>
                        Ishdan tashqari vaqtlarda kitob o'qish, rasmga olish va tabiatda sayr qilishni yaxshi ko'raman.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ta'lim</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border-l-2 border-primary pl-4 pb-6">
                        <h3 className="font-bold text-lg">Toshkent Axborot Texnologiyalari Universiteti</h3>
                        <p className="text-slate-500 mb-2">Kompyuter muhandisligi fakulteti</p>
                        <Badge variant="outline">2018-2022</Badge>
                      </div>
                      <div className="border-l-2 border-primary pl-4">
                        <h3 className="font-bold text-lg">Digital One Academy</h3>
                        <p className="text-slate-500 mb-2">Web-dizayn va UI/UX kursi</p>
                        <Badge variant="outline">2020</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// For demonstration only - placeholder for the icons used in the code
function Download({ className }: { className?: string }) {
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
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  )
}

function Eye({ className }: { className?: string }) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
}
