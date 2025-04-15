import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
        <AccessibilityControls />

        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Ko'p so'raladigan savollar</h1>
            <p className="text-lg text-slate-600">
              CMS o'rganish platformasi haqida eng ko'p so'raladigan savollarga javoblar
            </p>
          </div>

          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm p-6">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium">
                Bu platforma kimlar uchun mo'ljallangan?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Bu platforma asosan past eshituvchi talabalar uchun mo'ljallangan, lekin barcha CMS tizimlarini
                o'rganishni xohlovchilar foydalanishlari mumkin. Platformada maxsus imkoniyatlar mavjud bo'lib, ular
                o'rganish jarayonini yanada qulay qiladi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium">Qanday CMS tizimlari o'rgatiladi?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Platformada asosan WordPress CMS tizimi o'rgatiladi, chunki u eng mashhur va ko'p qo'llaniladigan CMS
                hisoblanadi. Shuningdek, Joomla va Drupal kabi boshqa CMS tizimlari haqida ham ma'lumotlar beriladi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium">
                Kurslarni tugatgandan so'ng qanday ko'nikmalarni egallagan bo'laman?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Kurslarni tugatgandan so'ng siz quyidagi ko'nikmalarni egallaysiz:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>CMS tizimlarini o'rnatish va sozlash</li>
                  <li>Web-saytlar yaratish va ularni boshqarish</li>
                  <li>Kontent yaratish va uni boshqarish</li>
                  <li>SEO asoslarini tushunish</li>
                  <li>Web-saytlarni xavfsizligini ta'minlash</li>
                  <li>O'z web-kurs saytingizni yaratish</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium">Kurslar pullikmi yoki bepulmi?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Platformada ham bepul, ham pullik kurslar mavjud. Asosiy kurslar bepul bo'lib, qo'shimcha maxsus kurslar
                va materiallar pullik hisoblanadi. Talabalar uchun maxsus chegirmalar ham mavjud.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium">
                Kurslarni tugatgandan so'ng sertifikat beriladimi?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Ha, barcha kurslarni muvaffaqiyatli tugatgan o'quvchilarga elektron sertifikat beriladi. Bu sertifikat
                sizning bilim va ko'nikmalaringizni tasdiqlaydi va ish qidirish jarayonida foydali bo'lishi mumkin.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-lg font-medium">
                Platformada qanday maxsus imkoniyatlar mavjud?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Platformada quyidagi maxsus imkoniyatlar mavjud:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Barcha video darslarda subtitrlar</li>
                  <li>Matnni o'qib berish funksiyasi</li>
                  <li>Shrift o'lchamini o'zgartirish</li>
                  <li>Yuqori kontrast rejimi</li>
                  <li>Rang ko'rish rejimlarini o'zgartirish</li>
                  <li>Kursor o'lchamini o'zgartirish</li>
                  <li>Animatsiyalarni o'chirish</li>
                  <li>Disleksiya uchun maxsus shrift</li>
                  <li>Klaviatura navigatsiyasi</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger className="text-lg font-medium">
                Kurslarni o'rganish uchun qanday texnik talablar mavjud?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Kurslarni o'rganish uchun quyidagi texnik talablar mavjud:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Internet aloqasi</li>
                  <li>Kompyuter yoki planshet</li>
                  <li>Zamonaviy brauzer (Chrome, Firefox, Safari)</li>
                  <li>Minimal 4GB operativ xotira</li>
                </ul>
                Mobil qurilmalar orqali ham o'rganish mumkin, lekin amaliy mashqlarni bajarish uchun kompyuter tavsiya
                etiladi.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger className="text-lg font-medium">Qo'shimcha yordam olish mumkinmi?</AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Ha, platformada qo'shimcha yordam olish imkoniyatlari mavjud:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Onlayn chat orqali texnik yordam</li>
                  <li>Forum orqali boshqa o'quvchilar bilan muloqot</li>
                  <li>Har hafta o'tkaziladigan onlayn konsultatsiyalar</li>
                  <li>Email orqali savollar yuborish</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger className="text-lg font-medium">
                Kurslarni qancha vaqtda tugatish mumkin?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Kurslarni tugatish vaqti har bir o'quvchining o'rganish tezligiga bog'liq. O'rtacha hisobda, har bir
                kursni 2-4 hafta ichida tugatish mumkin. To'liq dasturni tugatish uchun esa 3-6 oy talab etiladi.
                Kurslar o'z sur'atingizda o'rganish imkoniyatini beradi, shuning uchun shoshilishingiz shart emas.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger className="text-lg font-medium">
                Platformaga qanday ro'yxatdan o'tish mumkin?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Platformaga ro'yxatdan o'tish uchun bosh sahifadagi "Ro'yxatdan o'tish" tugmasini bosing va kerakli
                ma'lumotlarni kiriting. Ro'yxatdan o'tish bepul va bir necha daqiqa vaqt oladi. Ro'yxatdan o'tgandan
                so'ng, barcha bepul kurslarga kirish imkoniyatiga ega bo'lasiz.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Boshqa savollaringiz bormi?</h2>
            <p className="mb-6">Bizga murojaat qiling va biz sizga yordam beramiz</p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Aloqa sahifasi
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
