import { ArrowLeft, BookOpen, Code, Layout, Video, CheckCircle, Search } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

export default function CoursesPage() {
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

          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
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

          {/* Course Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Kurs kategoriyalari</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Link href="/courses?category=wordpress">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">WordPress</h3>
                  <p className="text-sm text-slate-500">12 kurs</p>
                </div>
              </Link>
              <Link href="/courses?category=joomla">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Layout className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Joomla</h3>
                  <p className="text-sm text-slate-500">5 kurs</p>
                </div>
              </Link>
              <Link href="/courses?category=drupal">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-medium">Drupal</h3>
                  <p className="text-sm text-slate-500">3 kurs</p>
                </div>
              </Link>
              <Link href="/courses?category=seo">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
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
                      className="text-primary"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.3-4.3"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium">SEO</h3>
                  <p className="text-sm text-slate-500">4 kurs</p>
                </div>
              </Link>
              <Link href="/courses?category=design">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
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
                  </div>
                  <h3 className="font-medium">Web-dizayn</h3>
                  <p className="text-sm text-slate-500">6 kurs</p>
                </div>
              </Link>
              <Link href="/courses?category=ecommerce">
                <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
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
                      className="text-primary"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                      <path d="M3 6h18"></path>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </div>
                  <h3 className="font-medium">E-tijorat</h3>
                  <p className="text-sm text-slate-500">4 kurs</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Module 1 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-primary" />
                    CMS tizimlari asoslari
                  </CardTitle>
                  <Badge>Boshlang'ich</Badge>
                </div>
                <CardDescription>CMS nima va undan qanday foydalanish mumkin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>CMS tizimlarining asosiy tushunchalari va ularning afzalliklari haqida o'rganasiz.</p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>5 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>2 ta amaliy mashq</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>

            {/* Module 2 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    <Layout className="h-5 w-5 text-primary" />
                    WordPress bilan ishlash
                  </CardTitle>
                  <Badge>O'rta</Badge>
                </div>
                <CardDescription>WordPress CMS tizimini o'rnatish va sozlash</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>WordPress o'rnatish, mavzularni sozlash va asosiy funksiyalarni o'rganasiz.</p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>8 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>4 ta amaliy mashq</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>

            {/* Module 3 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Kontent yaratish
                  </CardTitle>
                  <Badge>O'rta</Badge>
                </div>
                <CardDescription>Sayt uchun kontent yaratish va boshqarish</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>Sayt uchun kontent yaratish, SEO asoslari va kontent boshqarish usullarini o'rganasiz.</p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>6 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>3 ta amaliy mashq</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>

            {/* Module 4 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
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
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M15 3h6v6"></path>
                      <path d="M10 14 21 3"></path>
                    </svg>
                    Saytni sozlash va boshqarish
                  </CardTitle>
                  <Badge>Yuqori</Badge>
                </div>
                <CardDescription>Saytni sozlash, xavfsizlik va zaxira nusxalarini yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>Saytni sozlash, xavfsizlik va zaxira nusxalarini yaratish usullarini o'rganasiz.</p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>7 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>5 ta amaliy mashq</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>

            {/* Module 5 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
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
                      <path d="M2 20h.01"></path>
                      <path d="M7 20v-4"></path>
                      <path d="M12 20v-8"></path>
                      <path d="M17 20V8"></path>
                      <path d="M22 4v16"></path>
                    </svg>
                    Amaliy loyiha
                  </CardTitle>
                  <Badge variant="destructive">Murakkab</Badge>
                </div>
                <CardDescription>O'z web-kurs saytingizni yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>O'zingizning web-kurs saytingizni yaratish va uni boshqarishni o'rganasiz.</p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>10 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>1 ta loyiha</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>

            {/* Module 6 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
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
                  </CardTitle>
                  <Badge>O'rta</Badge>
                </div>
                <CardDescription>Web-dizayn asoslari va WordPress uchun dizayn</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>Web-dizayn asoslari va WordPress uchun dizayn yaratish usullarini o'rganasiz.</p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>8 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>6 ta amaliy mashq</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>

            {/* Module 7 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
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
                    WooCommerce bilan ishlash
                  </CardTitle>
                  <Badge>Yuqori</Badge>
                </div>
                <CardDescription>WordPress yordamida onlayn do'kon yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>
                    WooCommerce plaginini o'rnatish va sozlash, mahsulotlarni qo'shish va to'lov tizimlarini sozlash.
                  </p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>9 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>4 ta amaliy mashq</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>

            {/* Module 8 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                    Joomla asoslari
                  </CardTitle>
                  <Badge>Boshlang'ich</Badge>
                </div>
                <CardDescription>Joomla CMS tizimini o'rnatish va sozlash</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>Joomla CMS tizimini o'rnatish, sozlash va undan foydalanish asoslarini o'rganasiz.</p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>7 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>3 ta amaliy mashq</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>

            {/* Module 9 */}
            <Card className="border-2 hover:border-primary hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="flex items-center gap-2">
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
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                      <path d="M8.5 8.5v.01"></path>
                      <path d="M16 15.5v.01"></path>
                      <path d="M12 12v.01"></path>
                      <path d="M11 17v.01"></path>
                      <path d="M7 14v.01"></path>
                    </svg>
                    Drupal asoslari
                  </CardTitle>
                  <Badge>O'rta</Badge>
                </div>
                <CardDescription>Drupal CMS tizimini o'rnatish va sozlash</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Video className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-sm">
                    Subtitrlar mavjud
                  </div>
                </div>
                <div className="space-y-4">
                  <p>Drupal CMS tizimini o'rnatish, sozlash va undan foydalanish asoslarini o'rganasiz.</p>

                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Kurs jarayoni</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Video className="h-4 w-4 text-slate-400" />
                      <span>8 ta video dars</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4 text-slate-400" />
                      <span>4 ta amaliy mashq</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Kursni boshlash</Button>
              </CardFooter>
            </Card>
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
      </main>
      <Footer />
    </div>
  )
}
