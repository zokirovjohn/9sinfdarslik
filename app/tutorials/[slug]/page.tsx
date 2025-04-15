import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, MessageSquare, User, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

// Mock function to get tutorial data
function getTutorialData(slug: string) {
  // Default tutorial data
  const defaultTutorial = {
    id: slug,
    title: "WordPress o'rnatish",
    description: "WordPress CMS tizimini o'rnatish va dastlabki sozlash bo'yicha qadamba-qadam ko'rsatmalar.",
    category: "WordPress",
    level: "Boshlang'ich",
    readTime: 15, // minutes
    lastUpdated: "2023-05-10",
    author: "Dilshod Rahimov",
    authorImage: "/placeholder.svg?height=100&width=100",
    authorBio:
      "WordPress bo'yicha 5+ yillik tajribaga ega mutaxassis. 100+ dan ortiq loyihalarni WordPress yordamida yaratgan.",
    likes: 124,
    comments: 18,
    tags: ["wordpress", "installation", "setup"],
    relatedTutorials: [
      {
        id: "wordpress-security",
        title: "WordPress xavfsizligi",
        description: "WordPress saytingizni xakerlardan himoya qilish va xavfsizlik choralarini ko'rish.",
        readTime: 22,
      },
      {
        id: "wordpress-speed",
        title: "WordPress tezligini oshirish",
        description: "WordPress saytingizni tezligini oshirish va foydalanuvchi tajribasini yaxshilash usullari.",
        readTime: 18,
      },
      {
        id: "elementor-guide",
        title: "Elementor bilan ishlash",
        description: "WordPress uchun Elementor page builder yordamida chiroyli sahifalar yaratish.",
        readTime: 25,
      },
    ],
    content: `
      <h2>WordPress nima?</h2>
      <p>WordPress - bu dunyodagi eng mashhur va keng tarqalgan kontent boshqarish tizimi (CMS) hisoblanadi. U bepul va ochiq kodli dastur bo'lib, sayt yaratish va uni boshqarish uchun juda qulay vositadir. WordPress yordamida siz bloglar, korporativ saytlar, internet do'konlar, portfoliolar va boshqa turdagi veb-saytlarni yaratishingiz mumkin.</p>
      
      <h2>WordPress o'rnatish uchun nima kerak?</h2>
      <p>WordPress o'rnatish uchun sizga quyidagilar kerak bo'ladi:</p>
      <ul>
        <li>Domen nomi (masalan, example.com)</li>
        <li>Hosting xizmati (WordPress o'rnatish imkoniyati bilan)</li>
        <li>FTP mijozi (ixtiyoriy)</li>
        <li>Brauzer</li>
      </ul>
      
      <h2>1-qadam: Hosting va domen tanlash</h2>
      <p>WordPress o'rnatish uchun avvalo sizga hosting xizmati va domen nomi kerak bo'ladi. Buning uchun quyidagi mashhur hosting provayderlaridan birini tanlashingiz mumkin:</p>
      <ul>
        <li>Bluehost</li>
        <li>SiteGround</li>
        <li>HostGator</li>
        <li>DreamHost</li>
      </ul>
      
      <p>Ko'pgina hosting provayderlari WordPress-ni bir marta bosish bilan o'rnatish imkoniyatini taqdim etadi, bu jarayonni ancha osonlashtiradi.</p>
      
      <h2>2-qadam: WordPress-ni yuklab olish</h2>
      <p>Agar sizning hosting provayderingiz WordPress-ni avtomatik o'rnatish imkoniyatini taqdim etmasa, siz uni <a href="https://wordpress.org/download/" target="_blank" rel="noopener noreferrer">WordPress.org</a> saytidan yuklab olishingiz mumkin.</p>
      
      <h2>3-qadam: Ma'lumotlar bazasini yaratish</h2>
      <p>WordPress o'rnatish uchun MySQL ma'lumotlar bazasi kerak bo'ladi. Ko'pgina hosting provayderlarida buni boshqaruv paneli orqali yaratish mumkin:</p>
      <ol>
        <li>Hosting boshqaruv paneliga kiring</li>
        <li>MySQL ma'lumotlar bazasi bo'limini toping</li>
        <li>Yangi ma'lumotlar bazasini yarating</li>
        <li>Ma'lumotlar bazasi nomi, foydalanuvchi nomi va parolini eslab qoling</li>
      </ol>
      
      <h2>4-qadam: WordPress fayllarini yuklash</h2>
      <p>Agar siz WordPress-ni qo'lda o'rnatmoqchi bo'lsangiz:</p>
      <ol>
        <li>WordPress-ni yuklab oling va arxivdan chiqaring</li>
        <li>FTP mijozi yordamida fayllarni serverga yuklang</li>
        <li>Fayllarni asosiy katalogga (odatda public_html yoki www) yuklang</li>
      </ol>
      
      <h2>5-qadam: WordPress o'rnatish jarayonini boshlash</h2>
      <p>Fayllarni yuklash tugagandan so'ng, brauzerda o'z domen nomingizni tering. WordPress o'rnatish sahifasi ochilishi kerak. Agar ochilmasa, <code>http://yourdomain.com/wp-admin/install.php</code> manzilini tering.</p>
      
      <h2>6-qadam: O'rnatish jarayonini yakunlash</h2>
      <p>O'rnatish sahifasida quyidagi ma'lumotlarni kiritishingiz kerak bo'ladi:</p>
      <ul>
        <li>Ma'lumotlar bazasi nomi</li>
        <li>Ma'lumotlar bazasi foydalanuvchi nomi</li>
        <li>Ma'lumotlar bazasi paroli</li>
        <li>Ma'lumotlar bazasi serveri (odatda localhost)</li>
        <li>Jadval prefiksi (odatda wp_)</li>
      </ul>
      
      <p>Keyin "O'rnatishni boshlash" tugmasini bosing va quyidagi ma'lumotlarni kiriting:</p>
      <ul>
        <li>Sayt nomi</li>
        <li>Administrator foydalanuvchi nomi</li>
        <li>Parol</li>
        <li>Email manzil</li>
      </ul>
      
      <p>"WordPress o'rnatish" tugmasini bosing va tabriklaymiz! Siz WordPress-ni muvaffaqiyatli o'rnatdingiz.</p>
      
      <h2>7-qadam: WordPress-ga kirish</h2>
      <p>WordPress-ga kirish uchun <code>http://yourdomain.com/wp-login.php</code> manzilini tering va o'rnatish jarayonida yaratgan foydalanuvchi nomi va parolni kiriting.</p>
      
      <h2>8-qadam: WordPress-ni sozlash</h2>
      <p>WordPress-ni o'rnatgandan so'ng, quyidagi asosiy sozlamalarni bajarishingiz kerak:</p>
      <ul>
        <li>Mavzu tanlash va o'rnatish</li>
        <li>Zarur plaginlarni o'rnatish</li>
        <li>Doimiy havolalar strukturasini sozlash</li>
        <li>Xavfsizlik sozlamalarini tekshirish</li>
        <li>Sahifalar va postlar yaratishni boshlash</li>
      </ul>
      
      <h2>Xulosa</h2>
      <p>WordPress o'rnatish jarayoni nisbatan oson va tez. Ushbu qo'llanmaga amal qilgan holda, siz bir necha daqiqada WordPress-ni o'rnatishingiz va o'z saytingizni yaratishni boshlashingiz mumkin. Agar sizda savollar yoki muammolar bo'lsa, WordPress hamjamiyati va ko'plab onlayn resurslar yordam berish uchun mavjud.</p>
    `,
  }

  // Return the default tutorial data
  return defaultTutorial
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const tutorial = getTutorialData(params.slug)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center mb-8">
            <Link href="/tutorials">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> Barcha darsliklar
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>{tutorial.category}</Badge>
                  <Badge variant="outline">{tutorial.level}</Badge>
                </div>

                <h1 className="text-3xl font-bold mb-4">{tutorial.title}</h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Yangilangan: {new Date(tutorial.lastUpdated).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>O'qish vaqti: {tutorial.readTime} daqiqa</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{tutorial.likes} like</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>{tutorial.comments} izoh</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-8 pb-8 border-b">
                  <div className="flex items-center gap-3">
                    <img
                      src={tutorial.authorImage || "/placeholder.svg"}
                      alt={tutorial.author}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{tutorial.author}</p>
                      <p className="text-sm text-slate-500">Muallif</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Share2 className="h-4 w-4" /> Ulashish
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Bookmark className="h-4 w-4" /> Saqlash
                    </Button>
                  </div>
                </div>

                {/* Tutorial Content */}
                <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: tutorial.content }} />

                {/* Tags */}
                <div className="mt-8 pt-8 border-t">
                  <div className="flex flex-wrap gap-2">
                    {tutorial.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-8 border-t flex flex-wrap justify-between items-center gap-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <ThumbsUp className="h-4 w-4" /> Foydali ({tutorial.likes})
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" /> Izoh qoldirish ({tutorial.comments})
                    </Button>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Share2 className="h-4 w-4" /> Ulashish
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Bookmark className="h-4 w-4" /> Saqlash
                    </Button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h2 className="text-xl font-bold mb-6">Izohlar ({tutorial.comments})</h2>

                {/* Comment Form */}
                <div className="mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center">
                      <User className="h-6 w-6 text-slate-500" />
                    </div>
                    <div className="flex-1">
                      <textarea
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        rows={3}
                        placeholder="Izoh qoldiring..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button>Yuborish</Button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="space-y-6">
                  {/* Comment 1 */}
                  <div className="border-b pb-6">
                    <div className="flex items-start gap-4">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Aziza Karimova"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium">Aziza Karimova</h3>
                          <span className="text-sm text-slate-500">2 kun oldin</span>
                        </div>
                        <p className="text-slate-700 mb-2">
                          Juda foydali ma'lumot! Men WordPress-ni o'rnatishda qiynalayotgan edim, lekin bu qo'llanma
                          juda tushunarli va batafsil ekan. Rahmat!
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <button className="text-slate-500 hover:text-primary flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" /> 5
                          </button>
                          <button className="text-slate-500 hover:text-primary">Javob berish</button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div>
                    <div className="flex items-start gap-4">
                      <img
                        src="/placeholder.svg?height=40&width=40"
                        alt="Bobur Aliyev"
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-medium">Bobur Aliyev</h3>
                          <span className="text-sm text-slate-500">1 hafta oldin</span>
                        </div>
                        <p className="text-slate-700 mb-2">
                          Menga 8-qadam juda foydali bo'ldi. WordPress-ni o'rnatgandan keyin nima qilishni bilmasdim,
                          lekin endi aniq tushundim. Rahmat!
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <button className="text-slate-500 hover:text-primary flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" /> 3
                          </button>
                          <button className="text-slate-500 hover:text-primary">Javob berish</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Author Card */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <img
                        src={tutorial.authorImage || "/placeholder.svg"}
                        alt={tutorial.author}
                        className="h-24 w-24 rounded-full object-cover mb-4"
                      />
                      <h3 className="font-bold text-lg mb-1">{tutorial.author}</h3>
                      <p className="text-sm text-slate-500 mb-4">Muallif</p>
                      <p className="text-sm text-slate-700 mb-4">{tutorial.authorBio}</p>
                      <Button variant="outline" className="w-full">
                        Barcha maqolalarni ko'rish
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Table of Contents */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Mundarija</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-primary hover:underline">
                          WordPress nima?
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          WordPress o'rnatish uchun nima kerak?
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          1-qadam: Hosting va domen tanlash
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          2-qadam: WordPress-ni yuklab olish
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          3-qadam: Ma'lumotlar bazasini yaratish
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          4-qadam: WordPress fayllarini yuklash
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          5-qadam: WordPress o'rnatish jarayonini boshlash
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          6-qadam: O'rnatish jarayonini yakunlash
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          7-qadam: WordPress-ga kirish
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          8-qadam: WordPress-ni sozlash
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-slate-700 hover:text-primary">
                          Xulosa
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Related Tutorials */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">O'xshash darsliklar</h3>
                    <div className="space-y-4">
                      {tutorial.relatedTutorials.map((related) => (
                        <div key={related.id} className="border-b pb-4 last:border-0 last:pb-0">
                          <Link href={`/tutorials/${related.id}`} className="hover:text-primary">
                            <h4 className="font-medium mb-1">{related.title}</h4>
                          </Link>
                          <p className="text-sm text-slate-500 mb-2">{related.description.substring(0, 80)}...</p>
                          <div className="flex items-center text-xs text-slate-500">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>O'qish vaqti: {related.readTime} daqiqa</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Related Courses */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Tavsiya etiladigan kurslar</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                          <BookOpen className="h-6 w-6 text-primary/40" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">WordPress bilan ishlash</h4>
                          <p className="text-sm text-slate-500 mb-1">O'rta</p>
                          <Link href="/courses/wordpress-basics" className="text-primary text-sm hover:underline">
                            Batafsil
                          </Link>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="h-12 w-12 bg-slate-100 rounded-md flex items-center justify-center shrink-0">
                          <BookOpen className="h-6 w-6 text-primary/40" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">WordPress xavfsizligi</h4>
                          <p className="text-sm text-slate-500 mb-1">Yuqori</p>
                          <Link href="/courses/wordpress-security" className="text-primary text-sm hover:underline">
                            Batafsil
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
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
