import Link from "next/link"
import { ArrowRight, BookOpen, Code, Layout, Video, BookMarked } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import AccessibilityControls from "@/components/accessibility-controls"
import HeroSection from "@/components/hero-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TestimonialSection from "@/components/testimonial-section"
import StatisticsSection from "@/components/statistics-section"
import InstructorsSection from "@/components/instructors-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <HeroSection />

        {/* Featured Courses Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Mashhur kurslar</h2>
              <p className="text-slate-600 max-w-2xl">
                CMS tizimlari bo'yicha eng ko'p o'qiladigan va yuqori baholangan kurslarimiz
              </p>
            </div>
            <Link href="/catalog" className="mt-4 md:mt-0">
              <Button variant="outline" className="gap-2">
                Barcha kurslar <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Course 1 */}
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
                <p>CMS tizimlarining asosiy tushunchalari va ularning afzalliklari haqida o'rganasiz.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/courses/cms-basics">
                    Kursni boshlash <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Course 2 */}
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
                <p>WordPress o'rnatish, mavzularni sozlash va asosiy funksiyalarni o'rganasiz.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/courses/wordpress-basics">
                    Kursni boshlash <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Course 3 */}
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
                <p>Sayt uchun kontent yaratish, SEO asoslari va kontent boshqarish usullarini o'rganasiz.</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" asChild>
                  <Link href="/courses/content-creation">
                    Kursni boshlash <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Statistics Section */}
        <StatisticsSection />

        {/* Text Tutorials Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Matnli darsliklar</h2>
              <p className="text-slate-600 max-w-2xl">
                Video darslardan tashqari, batafsil matnli darsliklarimiz ham mavjud
              </p>
            </div>
            <Link href="/tutorials" className="mt-4 md:mt-0">
              <Button variant="outline" className="gap-2">
                Barcha darsliklar <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tutorial 1 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookMarked className="h-4 w-4 text-primary" />
                  WordPress o'rnatish
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  WordPress CMS tizimini o'rnatish va dastlabki sozlash bo'yicha qadamba-qadam ko'rsatmalar.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/tutorials/wordpress-installation" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 2 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookMarked className="h-4 w-4 text-primary" />
                  SEO asoslari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  Qidiruv tizimlarida saytingizni yuqori o'rinlarga chiqarish uchun asosiy SEO texnikalari.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/tutorials/seo-basics" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 3 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookMarked className="h-4 w-4 text-primary" />
                  Elementor bilan ishlash
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  WordPress uchun Elementor page builder yordamida chiroyli sahifalar yaratish.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/tutorials/elementor-guide" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>

            {/* Tutorial 4 */}
            <Card className="hover:shadow-md transition-all">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookMarked className="h-4 w-4 text-primary" />
                  WooCommerce asoslari
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 line-clamp-3">
                  WordPress yordamida onlayn do'kon yaratish va WooCommerce plaginini sozlash.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/tutorials/woocommerce-basics" className="text-primary text-sm hover:underline">
                  Batafsil o'qish
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Instructors Section */}
        <InstructorsSection />

        {/* Accessibility Features Section */}
        <section className="bg-primary/5 py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Maxsus imkoniyatlar</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    <path d="M12 8a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2Z"></path>
                    <path d="M18.4 12a6.4 6.4 0 0 0-12.8 0"></path>
                    <path d="M21.5 12a9.5 9.5 0 0 0-19 0"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Subtitrlar</h3>
                <p className="text-gray-600">
                  Barcha video darslarda subtitrlar mavjud bo'lib, matnni o'qish imkoniyatini beradi.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Vizual ko'rsatmalar</h3>
                <p className="text-gray-600">
                  Animatsiyali ko'rsatmalar va vizual qo'llanmalar orqali o'rganish jarayoni osonlashtirilgan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
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
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interaktiv amaliyot</h3>
                <p className="text-gray-600">
                  Har bir darsdan so'ng interaktiv mashqlar va amaliy topshiriqlar orqali bilimlarni mustahkamlash.
                </p>
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/accessibility">
                <Button variant="outline" className="gap-2">
                  Barcha maxsus imkoniyatlar <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <TestimonialSection />

        {/* FAQ Preview Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ko'p so'raladigan savollar</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Platformamiz haqida eng ko'p so'raladigan savollarga javoblar
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 space-y-6">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Bu platforma kimlar uchun mo'ljallangan?</h3>
              <p className="text-slate-600">
                Bu platforma asosan past eshituvchi talabalar uchun mo'ljallangan, lekin barcha CMS tizimlarini
                o'rganishni xohlovchilar foydalanishlari mumkin.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Qanday CMS tizimlari o'rgatiladi?</h3>
              <p className="text-slate-600">
                Platformada asosan WordPress CMS tizimi o'rgatiladi, chunki u eng mashhur va ko'p qo'llaniladigan CMS
                hisoblanadi.
              </p>
            </div>

            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Kurslar pullikmi yoki bepulmi?</h3>
              <p className="text-slate-600">
                Platformada ham bepul, ham pullik kurslar mavjud. Asosiy kurslar bepul bo'lib, qo'shimcha maxsus kurslar
                va materiallar pullik hisoblanadi.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link href="/faq">
                <Button variant="outline" className="gap-2">
                  Barcha savollar <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Hoziroq o'rganishni boshlang</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              CMS tizimlari orqali web-kurslar yaratishni o'rganib, o'z karyerangizni yangi bosqichga olib chiqing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/catalog">Ro'yxatdan o'tish</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white border-white hover:bg-white/10"
                asChild
              >
                <Link href="/catalog">Bepul kurslarni ko'rish</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
