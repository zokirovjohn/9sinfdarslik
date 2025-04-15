import Link from "next/link"
import {
  ArrowLeft,
  Eye,
  MousePointer,
  Headphones,
  FileText,
  Sparkles,
  Hand,
  Volume2,
  Type,
  Sun,
  Palette,
  Keyboard,
  ZoomIn,
  AlignLeft,
  Braces,
  Underline,
  Scan,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

export default function AccessibilityPage() {
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
            <h1 className="text-3xl font-bold ml-4">Maxsus imkoniyatlar</h1>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg text-slate-600 mb-6">
              Bizning platformamiz barcha foydalanuvchilar uchun qulay va foydalanishga oson bo'lishi uchun ko'plab
              maxsus imkoniyatlar bilan jihozlangan. Quyida platformamizning asosiy maxsus imkoniyatlari haqida ma'lumot
              berilgan.
            </p>
            <p className="text-lg text-slate-600">
              Maxsus imkoniyatlar panelini ochish uchun ekranning o'ng pastki burchagidagi{" "}
              <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded">
                <Sparkles className="h-4 w-4 mr-1" /> Maxsus imkoniyatlar
              </span>{" "}
              tugmasini bosing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Display Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-primary" />
                  Ko'rinish sozlamalari
                </CardTitle>
                <CardDescription>Ko'rish bilan bog'liq maxsus imkoniyatlar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Type className="h-4 w-4 text-primary" /> Shrift o'lchami
                  </h3>
                  <p className="text-sm text-slate-600">
                    Saytdagi barcha matnlarning o'lchamini o'zgartirish imkoniyati. 80% dan 200% gacha o'zgartirish
                    mumkin.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Sun className="h-4 w-4 text-primary" /> Yuqori kontrast
                  </h3>
                  <p className="text-sm text-slate-600">
                    Matn va fon o'rtasidagi kontrastni oshirish, bu ko'rish qobiliyati cheklangan foydalanuvchilar uchun
                    foydali.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Type className="h-4 w-4 text-primary" /> Disleksiya uchun shrift
                  </h3>
                  <p className="text-sm text-slate-600">
                    Disleksiyasi bor foydalanuvchilar uchun maxsus shrift, harflarni osonroq farqlash imkonini beradi.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Palette className="h-4 w-4 text-primary" /> Rang ko'rish rejimi
                  </h3>
                  <p className="text-sm text-slate-600">
                    Rang ko'rish qobiliyati cheklangan foydalanuvchilar uchun maxsus rejimlar (protanopiya,
                    deuteranopiya, tritanopiya).
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Layers className="h-4 w-4 text-primary" /> Soddalashtirilgan interfeys
                  </h3>
                  <p className="text-sm text-slate-600">
                    Sayt interfeysini soddalashtirish, ortiqcha elementlarni yashirish va foydalanishni osonlashtirish.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Motion Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MousePointer className="h-5 w-5 text-primary" />
                  Harakat sozlamalari
                </CardTitle>
                <CardDescription>Harakat va navigatsiya bilan bog'liq maxsus imkoniyatlar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <MousePointer className="h-4 w-4 text-primary" /> Kursor o'lchami
                  </h3>
                  <p className="text-sm text-slate-600">
                    Kursor o'lchamini kattalashtirish, bu kursori ko'rish qiyin bo'lgan foydalanuvchilar uchun foydali.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>{" "}
                    Animatsiyalar
                  </h3>
                  <p className="text-sm text-slate-600">
                    Saytdagi barcha animatsiyalarni o'chirish, bu vestibular buzilishlari bor foydalanuvchilar uchun
                    foydali.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Keyboard className="h-4 w-4 text-primary" /> Klaviatura navigatsiyasi
                  </h3>
                  <p className="text-sm text-slate-600">
                    Klaviatura orqali saytda navigatsiya qilish imkoniyatini yaxshilash, fokusni ko'rsatish.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <ZoomIn className="h-4 w-4 text-primary" /> Fokus ajratish
                  </h3>
                  <p className="text-sm text-slate-600">
                    Sichqoncha kursori tegib o'tgan elementlarni ajratib ko'rsatish, navigatsiyani osonlashtirish.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Scan className="h-4 w-4 text-primary" /> O'qish yo'riqnomasi
                  </h3>
                  <p className="text-sm text-slate-600">
                    Kursor harakati bilan birga harakatlanadigan o'qish yo'riqnomasi, o'qishni osonlashtiradi.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Text Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Matn sozlamalari
                </CardTitle>
                <CardDescription>Matn bilan bog'liq maxsus imkoniyatlar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <AlignLeft className="h-4 w-4 text-primary" /> Qator balandligi
                  </h3>
                  <p className="text-sm text-slate-600">
                    Matn qatorlari orasidagi masofani o'zgartirish, bu o'qishni osonlashtiradi.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Braces className="h-4 w-4 text-primary" /> Harf oralig'i
                  </h3>
                  <p className="text-sm text-slate-600">
                    Harflar orasidagi masofani o'zgartirish, bu disleksiyasi bor foydalanuvchilar uchun foydali.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Underline className="h-4 w-4 text-primary" /> So'z oralig'i
                  </h3>
                  <p className="text-sm text-slate-600">
                    So'zlar orasidagi masofani o'zgartirish, bu o'qishni osonlashtiradi.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <AlignLeft className="h-4 w-4 text-primary" /> Matn tekislash
                  </h3>
                  <p className="text-sm text-slate-600">
                    Matnni chap, o'ng, markaz yoki to'liq tekislash, o'qish qulayligini oshirish.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Audio Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="h-5 w-5 text-primary" />
                  Audio sozlamalari
                </CardTitle>
                <CardDescription>Audio va til bilan bog'liq maxsus imkoniyatlar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Volume2 className="h-4 w-4 text-primary" /> Matnni o'qib berish
                  </h3>
                  <p className="text-sm text-slate-600">
                    Saytdagi matnlarni ovozli o'qib berish, ko'rish qobiliyati cheklangan foydalanuvchilar uchun. Matnni
                    o'qitish uchun ustiga bosing.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Hand className="h-4 w-4 text-primary" /> Imo-ishora tili
                  </h3>
                  <p className="text-sm text-slate-600">
                    Video darslarda imo-ishora tili tarjimonini ko'rsatish, eshitish qobiliyati cheklangan
                    foydalanuvchilar uchun.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="m5 8 6 6"></path>
                      <path d="m4 14 6-6 2-3"></path>
                      <path d="M2 5h12"></path>
                      <path d="M7 2h1"></path>
                      <path d="m22 22-5-10-5 10"></path>
                      <path d="M14 18h6"></path>
                    </svg>{" "}
                    Til tanlash
                  </h3>
                  <p className="text-sm text-slate-600">
                    Sayt tilini o'zgartirish, o'zbek, rus va ingliz tillari mavjud.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Video Features */}
            <Card>
              <CardHeader>
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
                    <path d="m22 8-6 4 6 4V8Z"></path>
                    <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
                  </svg>
                  Video darslar maxsus imkoniyatlari
                </CardTitle>
                <CardDescription>Video darslar bilan bog'liq maxsus imkoniyatlar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>{" "}
                    Subtitrlar
                  </h3>
                  <p className="text-sm text-slate-600">
                    Barcha video darslarda subtitrlar mavjud, ularni yoqish va o'chirish mumkin.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m8 12 3 3 5-5"></path>
                    </svg>{" "}
                    Tezlikni o'zgartirish
                  </h3>
                  <p className="text-sm text-slate-600">
                    Video darslar tezligini o'zgartirish, 0.5x dan 2x gacha o'zgartirish mumkin.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <Hand className="h-4 w-4 text-primary" /> Imo-ishora tili
                  </h3>
                  <p className="text-sm text-slate-600">
                    Video darslarda imo-ishora tili tarjimonini ko'rsatish, eshitish qobiliyati cheklangan
                    foydalanuvchilar uchun.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                      <path d="M3 9h18"></path>
                      <path d="M3 15h18"></path>
                      <path d="M9 3v18"></path>
                      <path d="M15 3v18"></path>
                    </svg>{" "}
                    Transkriptlar
                  </h3>
                  <p className="text-sm text-slate-600">
                    Video darslarning to'liq matnli transkriptlari mavjud, ularni yuklab olish mumkin.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Features */}
            <Card>
              <CardHeader>
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
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                  Interaktiv imkoniyatlar
                </CardTitle>
                <CardDescription>Interaktiv o'rganish bilan bog'liq maxsus imkoniyatlar</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>{" "}
                    Jarayon kuzatish
                  </h3>
                  <p className="text-sm text-slate-600">
                    Kurslarni o'rganish jarayonini kuzatish, qaysi darslarni tugatganingizni ko'rish.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                      <path d="M12 8v4l3 3"></path>
                    </svg>{" "}
                    Eslatmalar
                  </h3>
                  <p className="text-sm text-slate-600">
                    Kurslarni o'rganish jarayonida eslatmalar olish, o'rganish jadvalini sozlash.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"></path>
                      <path d="M12 12H3"></path>
                      <path d="M16 6v4"></path>
                      <path d="M8 6v4"></path>
                      <path d="M17 21l-2-2 2-2"></path>
                      <path d="M21 17l-2 2 2 2"></path>
                    </svg>{" "}
                    Interaktiv mashqlar
                  </h3>
                  <p className="text-sm text-slate-600">
                    Har bir darsdan so'ng interaktiv mashqlar, bilimlarni mustahkamlash uchun.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="font-medium flex items-center gap-2">
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
                      className="text-primary"
                    >
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      <path d="M14 8.5a2.5 2.5 0 0 0-5 0c0 2.5 2.5 1.5 2.5 4"></path>
                      <path d="M12 16v.01"></path>
                    </svg>{" "}
                    Yordam va qo'llab-quvvatlash
                  </h3>
                  <p className="text-sm text-slate-600">
                    O'rganish jarayonida yordam olish, savollar berish va javoblar olish imkoniyati.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How to Use */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Maxsus imkoniyatlardan foydalanish</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">1. Maxsus imkoniyatlar panelini ochish</h3>
                <p className="text-slate-600">
                  Ekranning o'ng pastki burchagidagi{" "}
                  <span className="inline-flex items-center px-2 py-1 bg-primary/10 text-primary rounded">
                    <Sparkles className="h-4 w-4 mr-1" /> Maxsus imkoniyatlar
                  </span>{" "}
                  tugmasini bosing.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium">2. Kerakli sozlamalarni tanlang</h3>
                <p className="text-slate-600">
                  Maxsus imkoniyatlar panelida o'zingizga kerakli sozlamalarni tanlang. Sozlamalar to'rt kategoriyaga
                  bo'lingan: Ko'rinish, Harakat, Matn va Audio.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium">3. Sozlamalarni saqlash</h3>
                <p className="text-slate-600">
                  Tanlangan sozlamalar avtomatik ravishda saqlanadi va keyingi tashrif buyurganingizda ham ishlaydi.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium">4. Matnni o'qitish</h3>
                <p className="text-slate-600">
                  Matnni o'qib berish funksiyasini yoqib, istalgan matn ustiga bosing va u ovozli o'qib beriladi.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium">5. Video darslardan foydalanish</h3>
                <p className="text-slate-600">
                  Video darslarda subtitrlarni yoqish, tezlikni o'zgartirish va imo-ishora tili tarjimonini ko'rsatish
                  imkoniyatlari mavjud.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold mb-6">Ko'p so'raladigan savollar</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Maxsus imkoniyatlar barcha brauzerlar uchun ishlaydi?</h3>
                <p className="text-slate-600">
                  Ha, maxsus imkoniyatlar zamonaviy brauzerlarning barchasida ishlaydi (Chrome, Firefox, Safari, Edge).
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium">Maxsus imkoniyatlarni o'chirib qo'yish mumkinmi?</h3>
                <p className="text-slate-600">
                  Ha, istalgan vaqtda maxsus imkoniyatlar panelini ochib, kerakli sozlamalarni o'chirib qo'yishingiz
                  mumkin.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium">Maxsus imkoniyatlar mobil qurilmalarda ishlaydi?</h3>
                <p className="text-slate-600">
                  Ha, barcha maxsus imkoniyatlar mobil qurilmalarda ham ishlaydi, faqat ba'zi funksiyalar qurilma
                  imkoniyatlariga bog'liq bo'lishi mumkin.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-medium">Maxsus imkoniyatlar haqida qo'shimcha yordam olish mumkinmi?</h3>
                <p className="text-slate-600">
                  Ha, maxsus imkoniyatlar haqida qo'shimcha yordam olish uchun bizning yordam markazimizga murojaat
                  qilishingiz yoki aloqa sahifasi orqali bizga xabar yuborishingiz mumkin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
