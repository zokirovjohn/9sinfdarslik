import Link from "next/link"
import { ArrowLeft, BookMarked, Clock, Calendar, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

export default function WordPressInstallationTutorial() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center mb-4">
            <Link href="/tutorials">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> Barcha darsliklar
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-lg shadow-sm p-8">
                <div className="mb-6">
                  <Badge>WordPress</Badge>
                  <h1 className="text-3xl font-bold mt-2 mb-4">WordPress o'rnatish va dastlabki sozlash</h1>
                  <div className="flex flex-wrap items-center text-sm text-slate-500 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>10.05.2023</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>O'qish vaqti: 15 daqiqa</span>
                    </div>
                    <div className="flex items-center">
                      <BookMarked className="h-4 w-4 mr-1" />
                      <span>Boshlang'ich daraja</span>
                    </div>
                  </div>
                </div>

                <div className="prose prose-slate max-w-none">
                  <p className="lead">
                    WordPress - bu dunyodagi eng mashhur kontent boshqarish tizimi (CMS) bo'lib, internet saytlarning
                    30% dan ortig'i aynan WordPress yordamida yaratilgan. Bu qo'llanmada WordPress-ni o'rnatish va
                    dastlabki sozlash jarayonini qadamba-qadam ko'rib chiqamiz.
                  </p>

                  <h2>Kerakli narsalar</h2>
                  <p>WordPress o'rnatish uchun sizga quyidagilar kerak bo'ladi:</p>
                  <ul>
                    <li>Domen nomi (masalan, example.com)</li>
                    <li>Hosting xizmati (PHP va MySQL qo'llab-quvvatlaydigan)</li>
                    <li>FTP mijozi (ixtiyoriy)</li>
                  </ul>

                  <h2>1-qadam: Hosting va domen tanlash</h2>
                  <p>
                    WordPress o'rnatish uchun avvalo hosting xizmati va domen nomini tanlashingiz kerak. Buning uchun
                    quyidagi hosting provayderlaridan foydalanishingiz mumkin:
                  </p>
                  <ul>
                    <li>Bluehost (WordPress tomonidan tavsiya etilgan)</li>
                    <li>SiteGround</li>
                    <li>HostGator</li>
                    <li>DreamHost</li>
                  </ul>
                  <p>
                    Ko'pchilik hosting provayderlari domen nomini bepul taqdim etadi yoki alohida sotib olishingiz
                    mumkin.
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg my-6 border-l-4 border-blue-500">
                    <h3 className="text-blue-800 font-medium">Maslahat</h3>
                    <p className="text-blue-700 mb-0">
                      Hosting tanlashda PHP 7.4 yoki undan yuqori versiyasini va MySQL 5.6 yoki undan yuqori versiyasini
                      qo'llab-quvvatlaydigan xizmatni tanlang.
                    </p>
                  </div>

                  <h2>2-qadam: WordPress-ni yuklab olish</h2>
                  <p>
                    WordPress-ni rasmiy saytidan yuklab olishingiz mumkin:{" "}
                    <a href="https://wordpress.org/download/" target="_blank" rel="noopener noreferrer">
                      wordpress.org/download
                    </a>
                  </p>
                  <p>
                    Ko'pchilik hosting provayderlari "bir marta bosish bilan o'rnatish" xizmatini taklif qiladi, bu
                    WordPress-ni avtomatik ravishda o'rnatish imkonini beradi.
                  </p>

                  <h2>3-qadam: Ma'lumotlar bazasini yaratish</h2>
                  <p>WordPress o'rnatish uchun MySQL ma'lumotlar bazasi kerak bo'ladi. Uni yaratish uchun:</p>
                  <ol>
                    <li>Hosting boshqaruv paneliga kiring</li>
                    <li>MySQL ma'lumotlar bazasi bo'limini toping</li>
                    <li>Yangi ma'lumotlar bazasini yarating</li>
                    <li>Ma'lumotlar bazasi foydalanuvchisini yarating va unga to'liq huquqlarni bering</li>
                    <li>Ma'lumotlar bazasi nomi, foydalanuvchi nomi va parolni yozib oling</li>
                  </ol>

                  <h2>4-qadam: WordPress fayllarini yuklash</h2>
                  <p>
                    Agar hosting provayderingiz "bir marta bosish bilan o'rnatish" xizmatini taklif qilmasa, WordPress
                    fayllarini quyidagicha yuklashingiz kerak:
                  </p>
                  <ol>
                    <li>WordPress-ni yuklab oling va arxivdan chiqaring</li>
                    <li>FTP mijozi yordamida fayllarni serverga yuklang</li>
                    <li>Fayllarni asosiy katalogga yuklang (odatda "public_html" yoki "www")</li>
                  </ol>

                  <h2>5-qadam: O'rnatish jarayonini boshlash</h2>
                  <p>
                    WordPress fayllarini yuklagandan so'ng, brauzeringizda domen nomingizni oching. O'rnatish jarayoni
                    avtomatik ravishda boshlanadi.
                  </p>
                  <ol>
                    <li>Tilni tanlang (o'zbek tilini tanlash uchun "O'zbekcha" ni tanlang)</li>
                    <li>
                      Ma'lumotlar bazasi ma'lumotlarini kiriting (ma'lumotlar bazasi nomi, foydalanuvchi nomi, parol,
                      host)
                    </li>
                    <li>Sayt sarlavhasi va administrator ma'lumotlarini kiriting</li>
                    <li>O'rnatishni yakunlang</li>
                  </ol>

                  <div className="bg-yellow-50 p-4 rounded-lg my-6 border-l-4 border-yellow-500">
                    <h3 className="text-yellow-800 font-medium">Muhim eslatma</h3>
                    <p className="text-yellow-700 mb-0">
                      Administrator foydalanuvchi nomi va parolini yaxshilab saqlang. Ularni yo'qotib qo'ysangiz,
                      saytingizga kirishda muammolar yuzaga kelishi mumkin.
                    </p>
                  </div>

                  <h2>6-qadam: Dastlabki sozlashlar</h2>
                  <p>
                    WordPress o'rnatilgandan so'ng, quyidagi dastlabki sozlashlarni amalga oshirish tavsiya etiladi:
                  </p>
                  <ol>
                    <li>
                      <strong>Permalink strukturasini o'zgartirish:</strong> Sozlamalar &gt; Doimiy havolalar bo'limiga
                      o'ting va "Post nomi" variantini tanlang.
                    </li>
                    <li>
                      <strong>Mavzu tanlash:</strong> Ko'rinish &gt; Mavzular bo'limiga o'ting va o'zingizga yoqqan
                      mavzuni tanlang.
                    </li>
                    <li>
                      <strong>Asosiy plaginlarni o'rnatish:</strong>
                      <ul>
                        <li>Yoast SEO - SEO optimizatsiyasi uchun</li>
                        <li>Wordfence Security - xavfsizlik uchun</li>
                        <li>WP Super Cache - sayt tezligini oshirish uchun</li>
                        <li>Contact Form 7 - aloqa formalarini yaratish uchun</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Xavfsizlik sozlamalari:</strong> Kuchli parollardan foydalaning va ikki bosqichli
                      autentifikatsiyani yoqing.
                    </li>
                  </ol>

                  <h2>7-qadam: Kontent qo'shish</h2>
                  <p>
                    WordPress o'rnatilgandan va sozlangandan so'ng, saytingizga kontent qo'shishni boshlashingiz mumkin:
                  </p>
                  <ul>
                    <li>
                      <strong>Sahifalar yaratish:</strong> Asosiy sahifa, Biz haqimizda, Xizmatlar, Aloqa kabi
                      sahifalarni yarating.
                    </li>
                    <li>
                      <strong>Postlar yozish:</strong> Blog bo'limiga postlar qo'shing.
                    </li>
                    <li>
                      <strong>Menyu yaratish:</strong> Ko'rinish &gt; Menyular bo'limida sayt navigatsiyasini sozlang.
                    </li>
                  </ul>

                  <h2>Xulosa</h2>
                  <p>
                    WordPress o'rnatish va dastlabki sozlash jarayoni nisbatan oson. Ushbu qo'llanmaga amal qilsangiz,
                    tez orada o'z saytingizni ishga tushirishingiz mumkin. WordPress-ning keng imkoniyatlari va
                    moslashuvchanligi tufayli, siz har qanday turdagi saytni yaratishingiz mumkin - shaxsiy blog,
                    korporativ sayt, onlayn do'kon va boshqalar.
                  </p>
                  <p>
                    Agar WordPress o'rnatish jarayonida muammolarga duch kelsangiz, WordPress rasmiy forumiga murojaat
                    qilishingiz yoki bizning saytimizda savol qoldirishingiz mumkin.
                  </p>
                </div>

                {/* Share Buttons */}
                <div className="mt-8 pt-6 border-t">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-slate-500">Bu maqola foydali bo'ldimi?</div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <Share2 className="h-4 w-4" /> Ulashish
                      </Button>
                    </div>
                  </div>
                </div>
              </article>

              {/* Related Tutorials */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Aloqador darsliklar</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <BookMarked className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">WordPress mavzularini sozlash</h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          WordPress mavzularini tanlash va sozlash bo'yicha qo'llanma.
                        </p>
                        <Link href="/tutorials/wordpress-themes" className="text-primary text-sm hover:underline">
                          Batafsil o'qish
                        </Link>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-3">
                      <BookMarked className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">WordPress plaginlari</h3>
                        <p className="text-sm text-slate-600 line-clamp-2">
                          WordPress saytingiz uchun eng zarur plaginlar va ularni sozlash.
                        </p>
                        <Link href="/tutorials/wordpress-plugins" className="text-primary text-sm hover:underline">
                          Batafsil o'qish
                        </Link>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Table of Contents */}
                <Card className="p-4">
                  <h3 className="font-bold mb-3">Mundarija</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        Kerakli narsalar
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        1-qadam: Hosting va domen tanlash
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        2-qadam: WordPress-ni yuklab olish
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        3-qadam: Ma'lumotlar bazasini yaratish
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        4-qadam: WordPress fayllarini yuklash
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        5-qadam: O'rnatish jarayonini boshlash
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        6-qadam: Dastlabki sozlashlar
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        7-qadam: Kontent qo'shish
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-slate-600 hover:text-primary">
                        Xulosa
                      </a>
                    </li>
                  </ul>
                </Card>

                {/* Popular Tutorials */}
                <Card className="p-4">
                  <h3 className="font-bold mb-3">Mashhur darsliklar</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/tutorials/seo-basics" className="flex items-start gap-2">
                        <BookMarked className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span className="text-sm text-slate-600 hover:text-primary">SEO asoslari</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tutorials/elementor-guide" className="flex items-start gap-2">
                        <BookMarked className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span className="text-sm text-slate-600 hover:text-primary">Elementor bilan ishlash</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tutorials/woocommerce-basics" className="flex items-start gap-2">
                        <BookMarked className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span className="text-sm text-slate-600 hover:text-primary">WooCommerce asoslari</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tutorials/wordpress-security" className="flex items-start gap-2">
                        <BookMarked className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span className="text-sm text-slate-600 hover:text-primary">WordPress xavfsizligi</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/tutorials/wordpress-speed" className="flex items-start gap-2">
                        <BookMarked className="h-4 w-4 text-primary shrink-0 mt-1" />
                        <span className="text-sm text-slate-600 hover:text-primary">WordPress tezligini oshirish</span>
                      </Link>
                    </li>
                  </ul>
                </Card>

                {/* CTA */}
                <Card className="bg-primary text-white p-6">
                  <h3 className="font-bold text-lg mb-3">Kurslarimizga yoziling</h3>
                  <p className="text-primary-foreground/90 mb-4">
                    WordPress va boshqa CMS tizimlari bo'yicha to'liq kurslarimizga yoziling va professional darajaga
                    chiqing.
                  </p>
                  <Button variant="secondary" className="w-full">
                    Kurslarga yozilish
                  </Button>
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
