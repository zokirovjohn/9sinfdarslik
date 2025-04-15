import Link from "next/link"
import { ArrowLeft, BookMarked, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

export default function TutorialsPage() {
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
            <h1 className="text-3xl font-bold ml-4">Matnli darsliklar</h1>
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input placeholder="Darsliklarni qidirish" className="pl-10" />
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

          {/* Featured Tutorials */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Mashhur darsliklar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:w-1/3 bg-slate-100 flex items-center justify-center p-6">
                  <BookMarked className="h-16 w-16 text-primary/40" />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">WordPress o'rnatish va sozlash</h3>
                    <Badge>Boshlang'ich</Badge>
                  </div>
                  <p className="text-slate-600 mb-4">
                    WordPress CMS tizimini o'rnatish va dastlabki sozlash bo'yicha qadamba-qadam ko'rsatmalar.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500">O'qish vaqti: 15 daqiqa</div>
                    <Link href="/tutorials/wordpress-installation">
                      <Button variant="outline" size="sm" className="gap-1">
                        O'qish <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>

              <Card className="flex flex-col md:flex-row overflow-hidden hover:shadow-md transition-shadow">
                <div className="md:w-1/3 bg-slate-100 flex items-center justify-center p-6">
                  <BookMarked className="h-16 w-16 text-primary/40" />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl">SEO asoslari</h3>
                    <Badge>O'rta</Badge>
                  </div>
                  <p className="text-slate-600 mb-4">
                    Qidiruv tizimlarida saytingizni yuqori o'rinlarga chiqarish uchun asosiy SEO texnikalari.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500">O'qish vaqti: 20 daqiqa</div>
                    <Link href="/tutorials/seo-basics">
                      <Button variant="outline" size="sm" className="gap-1">
                        O'qish <ArrowRight className="h-3 w-3" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* All Tutorials */}
          <h2 className="text-2xl font-bold mb-6">Barcha darsliklar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tutorial 1 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    WordPress o'rnatish
                  </CardTitle>
                  <Badge>Boshlang'ich</Badge>
                </div>
                <CardDescription>Hosting va domen tanlashdan WordPress o'rnatishgacha</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  WordPress CMS tizimini o'rnatish va dastlabki sozlash bo'yicha qadamba-qadam ko'rsatmalar.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 15 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 10.05.2023</div>
                <Link href="/tutorials/wordpress-installation" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 2 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    SEO asoslari
                  </CardTitle>
                  <Badge>O'rta</Badge>
                </div>
                <CardDescription>Qidiruv tizimlarida saytingizni yuqori o'rinlarga chiqarish</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  Qidiruv tizimlarida saytingizni yuqori o'rinlarga chiqarish uchun asosiy SEO texnikalari.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 20 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 15.06.2023</div>
                <Link href="/tutorials/seo-basics" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 3 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    Elementor bilan ishlash
                  </CardTitle>
                  <Badge>O'rta</Badge>
                </div>
                <CardDescription>WordPress uchun Elementor page builder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  WordPress uchun Elementor page builder yordamida chiroyli sahifalar yaratish.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 25 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 20.07.2023</div>
                <Link href="/tutorials/elementor-guide" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 4 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    WooCommerce asoslari
                  </CardTitle>
                  <Badge>Yuqori</Badge>
                </div>
                <CardDescription>WordPress yordamida onlayn do'kon yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  WordPress yordamida onlayn do'kon yaratish va WooCommerce plaginini sozlash.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 30 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 05.08.2023</div>
                <Link href="/tutorials/woocommerce-basics" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 5 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    WordPress xavfsizligi
                  </CardTitle>
                  <Badge>Yuqori</Badge>
                </div>
                <CardDescription>WordPress saytingizni xavfsizligini ta'minlash</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  WordPress saytingizni xakerlardan himoya qilish va xavfsizlik choralarini ko'rish.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 22 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 12.09.2023</div>
                <Link href="/tutorials/wordpress-security" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 6 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    WordPress tezligini oshirish
                  </CardTitle>
                  <Badge>O'rta</Badge>
                </div>
                <CardDescription>WordPress saytingizni tezligini oshirish usullari</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  WordPress saytingizni tezligini oshirish va foydalanuvchi tajribasini yaxshilash usullari.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 18 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 25.10.2023</div>
                <Link href="/tutorials/wordpress-speed" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 7 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    Joomla asoslari
                  </CardTitle>
                  <Badge>Boshlang'ich</Badge>
                </div>
                <CardDescription>Joomla CMS tizimini o'rnatish va sozlash</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  Joomla CMS tizimini o'rnatish, sozlash va undan foydalanish asoslarini o'rganish.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 20 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 08.11.2023</div>
                <Link href="/tutorials/joomla-basics" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 8 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    Drupal asoslari
                  </CardTitle>
                  <Badge>O'rta</Badge>
                </div>
                <CardDescription>Drupal CMS tizimini o'rnatish va sozlash</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  Drupal CMS tizimini o'rnatish, sozlash va undan foydalanish asoslarini o'rganish.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 24 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 15.12.2023</div>
                <Link href="/tutorials/drupal-basics" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 9 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <BookMarked className="h-4 w-4 text-primary" />
                    Kontent marketing asoslari
                  </CardTitle>
                  <Badge>Boshlang'ich</Badge>
                </div>
                <CardDescription>Saytingiz uchun sifatli kontent yaratish</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  Saytingiz uchun sifatli kontent yaratish va kontent marketing strategiyasini ishlab chiqish.
                </p>
                <div className="text-sm text-slate-500 mt-4">O'qish vaqti: 16 daqiqa</div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-slate-500">Yangilangan: 20.01.2024</div>
                <Link href="/tutorials/content-marketing" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
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
