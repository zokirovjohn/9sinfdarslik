import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Facebook,
  Linkedin,
  MessageSquare,
  Share2,
  ThumbsDown,
  ThumbsUp,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

// This is a mock function to simulate getting post data
function getPostData(slug: string) {
  // Mock blog post data
  const posts = {
    "accessible-websites": {
      title: "Barcha uchun qulay saytlar yaratish: web-dasturlashda maxsus imkoniyatlar",
      content: `
        <p class="lead">
          Zamonaviy web-saytlar barcha foydalanuvchilar, jumladan, maxsus imkoniyatlarga ega bo'lgan insonlar uchun ham qulay bo'lishi kerak. Bu nafaqat ijtimoiy mas'uliyat, balki ko'p mamlakatlarda qonuniy talab hamdir.
        </p>

        <h2>Nima uchun maxsus imkoniyatlar muhim?</h2>
        <p>
          Jahon sog'liqni saqlash tashkilotining ma'lumotlariga ko'ra, dunyoda taxminan bir milliard kishi turli xil nogironlikka ega. Bu insonlarning ko'pchiligi internet va web-saytlardan foydalanishda qiyinchiliklarga duch keladi.
        </p>
        <p>
          Maxsus imkoniyatlarga ega web-saytlar yaratish orqali biz:
        </p>
        <ul>
          <li>Barcha foydalanuvchilar uchun teng imkoniyatlar yaratamiz</li>
          <li>Keng auditoriyaga yetib boramiz</li>
          <li>Qonuniy talablarga mos kelamiz</li>
          <li>Umumiy foydalanuvchi tajribasini yaxshilaymiz</li>
        </ul>

        <h2>WCAG standarti nima?</h2>
        <p>
          Web Content Accessibility Guidelines (WCAG) - bu World Wide Web Consortium (W3C) tomonidan ishlab chiqilgan standartlar to'plami bo'lib, web-saytlarni maxsus imkoniyatlarga ega foydalanuvchilar uchun qulay qilish yo'llarini belgilaydi.
        </p>
        <p>
          WCAG standartlari quyidagi to'rtta asosiy prinsipga asoslangan:
        </p>
        <ol>
          <li><strong>Qabul qilinuvchan (Perceivable)</strong> - Ma'lumot va interfeys komponentlari foydalanuvchilarga qabul qilinadigan tarzda taqdim etilishi kerak</li>
          <li><strong>Boshqariladigan (Operable)</strong> - Interfeys komponentlari va navigatsiya boshqariladigan bo'lishi kerak</li>
          <li><strong>Tushunarli (Understandable)</strong> - Ma'lumot va interfeys ishlashi tushunarli bo'lishi kerak</li>
          <li><strong>Mustahkam (Robust)</strong> - Kontent yordamchi texnologiyalar tomonidan ishonchli talqin qilinadigan darajada mustahkam bo'lishi kerak</li>
        </ol>

        <h2>Web-saytlarni maxsus imkoniyatlar bilan ta'minlash usullari</h2>
        <h3>1. Semantik HTML dan foydalanish</h3>
        <p>
          Semantik HTML - bu veb-sahifaning strukturasi va mazmunini aniq belgilaydigan HTML elementlaridan foydalanishdir. Bu skrin riderlar va boshqa yordamchi texnologiyalarga sahifani to'g'ri talqin qilishga yordam beradi.
        </p>
        <p>
          Masalan, <code>&lt;div&gt;</code> o'rniga <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;footer&gt;</code> kabi teglardan foydalanish.
        </p>

        <h3>2. Rasmlar uchun alt atributlaridan foydalanish</h3>
        <p>
          Har bir rasm uchun alt atributidan foydalanish kerak. Bu ayniqsa skrin riderlardan foydalanuvchilar uchun muhimdir:
        </p>
        <pre><code>&lt;img src="logo.png" alt="Kompaniya logotipi" /&gt;</code></pre>
        <p>
          Agar rasm faqat dekorativ bo'lsa, bo'sh alt atributi qo'yish mumkin:
        </p>
        <pre><code>&lt;img src="decoration.png" alt="" /&gt;</code></pre>

        <h3>3. Klaviatura navigatsiyasini ta'minlash</h3>
        <p>
          Ko'p foydalanuvchilar sichqonchadan foydalana olmaydilar, shuning uchun saytingiz to'liq klaviatura orqali boshqarilishi kerak:
        </p>
        <ul>
          <li>Barcha interaktiv elementlar (havolalar, tugmalar, formalar) klaviatura orqali boshqariladigan bo'lishi kerak</li>
          <li>Fokus ko'rsatkichi aniq ko'rinishi kerak</li>
          <li>Mantiqiy tab tartibi bo'lishi kerak</li>
        </ul>

        <h3>4. Rang kontrastini ta'minlash</h3>
        <p>
          Matn va fon o'rtasidagi kontrast kamida 4.5:1 bo'lishi kerak (katta matn uchun 3:1). Bu rang ko'rish qobiliyati cheklangan foydalanuvchilar uchun juda muhimdir.
        </p>
        <p>
          Kontrastni tekshirish uchun WebAIM Contrast Checker kabi onlayn vositalardan foydalanish mumkin.
        </p>

        <h3>5. Aniq sarlavhalar strukturasidan foydalanish</h3>
        <p>
          Sarlavhalar (<code>&lt;h1&gt;</code> dan <code>&lt;h6&gt;</code> gacha) ierarxik tartibda bo'lishi kerak. Har bir sahifada bitta <code>&lt;h1&gt;</code> bo'lishi va sarlavhalar ketma-ket bo'lishi kerak:
        </p>
        <pre><code>&lt;h1&gt;Asosiy sarlavha&lt;/h1&gt;
&lt;h2&gt;Ikkinchi darajali sarlavha&lt;/h2&gt;
&lt;h3&gt;Uchinchi darajali sarlavha&lt;/h3&gt;</code></pre>

        <h3>6. Formalarni to'g'ri belgilash</h3>
        <p>
          Formalar barcha foydalanuvchilar uchun to'ldirilishi oson bo'lishi kerak:
        </p>
        <ul>
          <li>Har bir forma elementi uchun <code>&lt;label&gt;</code> dan foydalanish</li>
          <li>Xatoliklarni aniq ko'rsatish va tushuntirish</li>
          <li>Forma elementlarini mantiqiy tartibda joylashtirish</li>
        </ul>

        <h3>7. Video va audio kontentni qo'llab-quvvatlash</h3>
        <p>
          Video va audio kontentlar quyidagilar bilan ta'minlanishi kerak:
        </p>
        <ul>
          <li>Subtitrlar (karlar uchun)</li>
          <li>Audio tavsif (ko'zi ojizlar uchun)</li>
          <li>Transkriptlar (har ikkalasi uchun)</li>
        </ul>

        <h2>Amaliy misollar</h2>
        <h3>Yomon amaliyot:</h3>
        <pre><code>&lt;div class="nav"&gt;
&lt;div class="nav-item"&gt;&lt;a href="#"&gt;Asosiy&lt;/a&gt;&lt;/div&gt;
&lt;div class="nav-item"&gt;&lt;a href="#"&gt;Xizmatlar&lt;/a&gt;&lt;/div&gt;
&lt;div class="nav-item"&gt;&lt;a href="#"&gt;Biz haqimizda&lt;/a&gt;&lt;/div&gt;
&lt;/div&gt;</code></pre>

        <h3>Yaxshi amaliyot:</h3>
        <pre><code>&lt;nav aria-label="Asosiy navigatsiya"&gt;
&lt;ul&gt;
  &lt;li&gt;&lt;a href="/"&gt;Asosiy&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="/services"&gt;Xizmatlar&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="/about"&gt;Biz haqimizda&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;</code></pre>

        <h2>Xulosa</h2>
        <p>
          Web-saytlarni maxsus imkoniyatlar bilan ta'minlash barcha foydalanuvchilar uchun yaxshi tajriba yaratish uchun muhimdir. Bu qiyin emas, lekin doimiy e'tibor talab qiladi.
        </p>
        <p>
          Esda tutingki, maxsus imkoniyatlar faqat imkoniyatlari cheklangan insonlar uchun emas - ular barcha foydalanuvchilar uchun saytdan foydalanishni yaxshilaydi.
        </p>
      `,
      category: "Maxsus imkoniyatlar",
      author: {
        name: "Malika Azizova",
        role: "Kontent menejeri",
        image: "/placeholder.svg?height=100&width=100",
      },
      date: "01.04.2023",
      readingTime: "15 daqiqa",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["Maxsus imkoniyatlar", "WCAG", "Dizayn", "HTML", "Veb-sayt"],
    },
    "wordpress-seo-tips": {
      title: "WordPress saytingizni SEO uchun optimallashtirishning 10 ta usuli",
      content: `
        <p class="lead">
          WordPress dunyodagi eng mashhur kontent boshqarish tizimi (CMS) hisoblanadi va internet saytlarining 40% dan ortig'i aynan WordPress yordamida yaratilgan. Saytingizni qidiruv tizimlari uchun optimizatsiya qilish (SEO) muhim, chunki bu orqali ko'proq trafik va mijozlarni jalb qilishingiz mumkin.
        </p>

        <h2>1. SEO-do'stona URL strukturasini tanlang</h2>
        <p>
          WordPress o'rnatilgandan so'ng, birinchi qadam - bu doimiy havolalarni (permalink) o'zgartirish. Buning uchun WordPress boshqaruv panelidagi "Sozlamalar" &gt; "Doimiy havolalar" bo'limiga o'ting va "Post nomi" variantini tanlang.
        </p>
        <p>
          Bu quyidagi URL strukturasini yaratadi:
        </p>
        <pre><code>example.com/post-title/</code></pre>
        <p>
          Bu struktura qidiruv tizimlari va foydalanuvchilar uchun juda tushunarli va o'qilishi oson.
        </p>

        <h2>2. Yoast SEO plaginini o'rnating</h2>
        <p>
          Yoast SEO - bu WordPress uchun eng mashhur va keng qo'llaniladigan SEO plagini. Bu plagin saytingizni SEO jihatidan optimallashtirishda yordam beradi va quyidagi imkoniyatlarni taqdim etadi:
        </p>
        <ul>
          <li>Kalit so'zlar va meta ma'lumotlarni boshqarish</li>
          <li>Kontent tahlili</li>
          <li>XML sitemap yaratish</li>
          <li>Readability (o'qilishi) tahlili</li>
          <li>Ijtimoiy tarmoqlar uchun tayyor meta teglar</li>
        </ul>

        <h2>3. Sayt tezligini optimallashting</h2>
        <p>
          Sayt tezligi nafaqat foydalanuvchi tajribasiga, balki SEO ko'rsatkichlariga ham ta'sir qiladi. Sayt tezligini oshirish uchun quyidagilarni qilishingiz mumkin:
        </p>
        <ul>
          <li><strong>Kesh plaginidan foydalanish:</strong> WP Super Cache yoki W3 Total Cache kabi plaginlardan foydalaning</li>
          <li><strong>Rasmlarni optimallshtiring:</strong> Rasmlarni yuklashdan oldin siqib, to'g'ri o'lchamlarda saqlang</li>
          <li><strong>Ortiqcha plaginlarni o'chirib tashlang:</strong> Faqat kerakli plaginlardan foydalaning</li>
          <li><strong>Yaxshi hostingdan foydalaning:</strong> Sifatli va ishonchli hosting provayderni tanlang</li>
        </ul>

        <h2>4. Responsive dizayndan foydalaning</h2>
        <p>
          Mobile-first indeksatsiya tufayli, saytingiz turli qurilmalarda (kompyuter, planshet, telefon) yaxshi ko'rinishi juda muhim. WordPress'ning zamonaviy mavzulari responsive dizayn bilan keladi, lekin buni tekshirishni unutmang.
        </p>

        <h2>5. Sarlavhalar (H1, H2, H3...) strukturasini to'g'ri ishlating</h2>
        <p>
          Sarlavhalar ierarxiyasidan to'g'ri foydalanish ham SEO uchun, ham foydalanuvchilar uchun muhim:
        </p>
        <ul>
          <li>Har bir sahifada faqat bitta H1 tegi bo'lishi kerak (odatda asosiy sarlavha)</li>
          <li>H2 va H3 teglarini kontent bo'limlarini ajratish uchun ishlating</li>
          <li>Sarlavhalarda kalit so'zlardan foydalaning, lekin ortiqcha to'ldirilmagan bo'lishi kerak</li>
        </ul>

        <h2>6. Ichki havolalardan foydalaning</h2>
        <p>
          Saytingizdagi sahifalar va postlar o'rtasida ichki havolalar yaratish qidiruv tizimlariga saytingiz strukturasini tushunishga yordam beradi va saytda navigatsiyani yaxshilaydi.
        </p>
        <p>
          Eski kontentni yangi maqolalaringizga va aksincha bog'lashni unutmang.
        </p>

        <h2>7. Meta tavsiflarni optimallashtirishni unutmang</h2>
        <p>
          Meta tavsif (meta description) - bu qidiruv natijalarida sarlavha ostida ko'rinadigan qisqa tavsif. Yoast SEO plagini yordamida har bir sahifa va post uchun o'ziga xos meta tavsif yozishingiz mumkin.
        </p>
        <p>
          Meta tavsif quyidagilarga ega bo'lishi kerak:
        </p>
        <ul>
          <li>150-160 belgidan oshmasligi kerak</li>
          <li>Kalit so'zlarni o'z ichiga olishi kerak</li>
          <li>Qiziqarli va jozibali bo'lishi kerak</li>
        </ul>

        <h2>8. Rasmlarni optimallashtirishni unutmang</h2>
        <p>
          Rasmlar SEO uchun ham muhim. Ular quyidagicha optimallashtirilishi kerak:
        </p>
        <ul>
          <li>Har bir rasm uchun alt tegidan foydalaning</li>
          <li>Fayl nomlarida kalit so'zlardan foydalaning (masalan, "rasm1.jpg" emas, "wordpress-seo-tips.jpg")</li>
          <li>Rasmlarni saqlashdan oldin siqing</li>
        </ul>

        <h2>9. XML Sitemap yarating va Google Search Console'ga taqdim eting</h2>
        <p>
          XML Sitemap saytingizdagi barcha sahifalar va postlarning ro'yxatini o'z ichiga oladi va qidiruv tizimlariga saytingizni indekslashda yordam beradi. Yoast SEO plagini avtomatik ravishda XML Sitemap yaratadi.
        </p>
        <p>
          Sitemapni Google Search Console'ga taqdim etish uchun:
        </p>
        <ol>
          <li>Google Search Console'ga kiring</li>
          <li>Saytingizni qo'shing (agar qo'shilmagan bo'lsa)</li>
          <li>Chap paneldagi "Sitemaps" bo'limiga o'ting</li>
          <li>Sitemap URL manzilini kiriting (odatda example.com/sitemap_index.xml)</li>
          <li>"Taqdim etish" tugmasini bosing</li>
        </ol>

        <h2>10. Saytingiz xavfsizligini ta'minlang</h2>
        <p>
          Sayt xavfsizligi ham SEO ko'rsatkichlariga ta'sir qiladi. WordPress saytingizni xavfsiz saqlash uchun:
        </p>
        <ul>
          <li>WordPress, mavzular va plaginlarni doimiy yangilab turing</li>
          <li>Kuchli parollardan foydalaning</li>
          <li>SSL sertifikatini o'rnating (https)</li>
          <li>Xavfsizlik plaginlaridan foydalaning (masalan, Wordfence Security)</li>
          <li>Doimiy zaxira nusxalarini yarating</li>
        </ul>

        <h2>Xulosa</h2>
        <p>
          WordPress saytingizni SEO uchun optimizatsiya qilish uzoq vaqt talab qiladigan jarayon, lekin bu saytingizning qidiruv tizimlarida yuqori o'rinlarga chiqishi va ko'proq trafik olishi uchun juda muhim. Bu yuqoridagi 10 ta usulni qo'llash orqali, siz saytingizning SEO ko'rsatkichlarini sezilarli darajada yaxshilashingiz mumkin.
        </p>
        <p>
          Esda tutingki, SEO natijalarini ko'rish uchun vaqt kerak. Odatda, SEO strategiyangiz natijalarini ko'rish uchun 3-6 oy kutishingiz kerak bo'ladi.
        </p>
      `,
      category: "SEO",
      author: {
        name: "Jahongir Tursunov",
        role: "SEO mutaxassisi",
        image: "/placeholder.svg?height=100&width=100",
      },
      date: "05.04.2023",
      readingTime: "12 daqiqa",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["WordPress", "SEO", "Qidiruv tizimi", "Marketing", "Veb-sayt"],
    },
  }

  return posts[slug] || posts["accessible-websites"]
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug)

  // Mock related posts based on tags
  const relatedPosts = [
    {
      id: post.slug === "accessible-websites" ? "wordpress-seo-tips" : "accessible-websites",
      title:
        post.slug === "accessible-websites"
          ? "WordPress saytingizni SEO uchun optimallashtirishning 10 ta usuli"
          : "Barcha uchun qulay saytlar yaratish: web-dasturlashda maxsus imkoniyatlar",
      category: post.slug === "accessible-websites" ? "SEO" : "Maxsus imkoniyatlar",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "cms-security",
      title: "CMS saytingizni xakerlardan himoya qilish: xavfsizlik asoslari",
      category: "Xavfsizlik",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-gradient-to-b from-slate-50 to-slate-100">
        <AccessibilityControls />

        <div className="container mx-auto py-8 px-4">
          <div className="flex items-center mb-8">
            <Link href="/blog">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" /> Blog
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="bg-white rounded-lg shadow-sm overflow-hidden">
                {/* Featured Image */}
                <div className="relative h-64 sm:h-80 md:h-96 bg-slate-200">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                </div>

                {/* Post Content */}
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge>{post.category}</Badge>
                      {post.tags.map((tag) => (
                        <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                          <Badge variant="outline" className="hover:bg-primary/5">
                            {tag}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                    <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

                    <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{post.author.name}</p>
                          <p className="text-sm text-slate-500">{post.author.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                    </div>

                    <div className="prose prose-slate max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                  </div>

                  {/* Share and Like Buttons */}
                  <div className="border-t border-b py-4 my-8 flex flex-wrap justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ThumbsUp className="h-4 w-4" /> Foydali (32)
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <ThumbsDown className="h-4 w-4" /> Foydali emas (3)
                      </Button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-500">Ulashish:</span>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Facebook className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Author Box */}
                  <div className="bg-slate-50 p-6 rounded-lg my-8">
                    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                        <AvatarFallback className="text-xl">{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{post.author.name}</h3>
                        <p className="text-slate-500 mb-3">{post.author.role}</p>
                        <p className="text-sm">
                          Dilshod CMS tizimlari bo'yicha 10 yillik tajribaga ega mutaxassis. U WordPress va boshqa CMS
                          tizimlari bo'yicha o'nlab maqolalar va qo'llanmalar muallifi. Platformamizda u WordPress,
                          Joomla va boshqa CMS tizimlari bo'yicha kurslar taqdim etadi.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="mt-12">
                    <h3 className="text-xl font-bold mb-6">Izohlar (3)</h3>

                    <div className="space-y-6">
                      {/* Comment 1 */}
                      <div className="border-b pb-6">
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Aziza Karimova" />
                            <AvatarFallback>AK</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-bold">Aziza Karimova</h4>
                              <span className="text-sm text-slate-500">2 kun oldin</span>
                            </div>
                            <p className="text-slate-600 mb-3">
                              Juda foydali maqola, rahmat! Men web-saytimni maxsus imkoniyatlar bilan jihozlashni
                              boshladim va bu maqoladagi maslahatlar juda qo'l keldi.
                            </p>
                            <div className="flex items-center gap-4">
                              <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                <ThumbsUp className="h-4 w-4" /> 5
                              </Button>
                              <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                <MessageSquare className="h-4 w-4" /> Javob berish
                              </Button>
                            </div>

                            {/* Reply to Comment 1 */}
                            <div className="mt-4 ml-6 pl-4 border-l">
                              <div className="flex gap-4">
                                <Avatar>
                                  <AvatarImage src={post.author.image || "/placeholder.svg"} alt={post.author.name} />
                                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-bold">
                                      {post.author.name}{" "}
                                      <span className="text-primary text-sm font-normal ml-1">Muallif</span>
                                    </h4>
                                    <span className="text-sm text-slate-500">1 kun oldin</span>
                                  </div>
                                  <p className="text-slate-600 mb-3">
                                    Rahmat, Aziza! Saytingizni maxsus imkoniyatlar bilan jihozlash haqida qo'shimcha
                                    savollaringiz bo'lsa, bemalol so'rang.
                                  </p>
                                  <div className="flex items-center gap-4">
                                    <Button variant="ghost" size="sm" className="gap-1 text-slate-500">
                                      <ThumbsUp className="h-4 w-4" /> 3
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
                        <div className="flex gap-4">
                          <Avatar>
                            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Bobur Aliyev" />
                            <AvatarFallback>BA</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-bold">Bobur Aliyev</h4>
                              <span className="text-sm text-slate-500">5 kun oldin</span>
                            </div>
                            <p className="text-slate-600 mb-3">
                              WCAG standartlari haqida ko'proq ma'lumot olish uchun qanday manbalarni tavsiya qilasiz?
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

                    {/* Comment Form */}
                    <div className="mt-8 pt-6 border-t">
                      <h3 className="text-xl font-bold mb-4">Izoh qoldirish</h3>
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarFallback>ME</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-4">
                          <Textarea placeholder="Izohingizni yozing..." className="w-full h-24" />
                          <div className="flex justify-end">
                            <Button>Yuborish</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Related Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>Aloqador maqolalar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex items-start gap-3">
                      <div className="bg-slate-100 rounded h-20 w-20 shrink-0 overflow-hidden">
                        <img
                          src={relatedPost.image || "/placeholder.svg"}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Badge className="mb-1">{relatedPost.category}</Badge>
                        <h4 className="font-medium line-clamp-2">
                          <Link href={`/blog/${relatedPost.id}`} className="hover:text-primary transition-colors">
                            {relatedPost.title}
                          </Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Teglar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                        <Badge variant="outline" className="hover:bg-primary/5">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-white">Yangiliklar uchun obuna bo'ling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-primary-foreground/90">
                    Eng so'nggi yangiliklar va maqolalardan xabardor bo'ling
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Email manzilingiz"
                      className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60"
                    />
                    <Button variant="secondary" className="w-full">
                      Obuna bo'lish
                    </Button>
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
