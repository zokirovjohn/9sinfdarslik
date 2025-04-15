import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

// Mock data for blog posts
const blogPosts = [
  {
    id: "cms-for-beginners",
    title: "CMS tizimlari yangi boshlanuvchilar uchun: nimadan boshlash kerak?",
    excerpt:
      "Agar siz CMS tizimlari bilan endi tanishayotgan bo'lsangiz, bu maqola aynan siz uchun. Biz CMS tizimlarining asosiy tushunchalari va ulardan foydalanishni boshlash uchun kerakli ma'lumotlarni taqdim etamiz.",
    category: "Asosiy",
    author: "Dilshod Rahimov",
    date: "15.04.2023",
    readingTime: "8 daqiqa",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["CMS", "Yangi boshlanuvchilar", "Web-sayt"],
  },
  {
    id: "wordpress-vs-joomla",
    title: "WordPress va Joomla: qaysi birini tanlash kerak?",
    excerpt:
      "WordPress va Joomla - ikki eng mashhur CMS tizimlari. Bu maqolada ularning afzalliklari va kamchiliklarini taqqoslaymiz va qaysi biri siz uchun mos kelishini aniqlashga yordam beramiz.",
    category: "Taqqoslash",
    author: "Nodira Karimova",
    date: "10.04.2023",
    readingTime: "10 daqiqa",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["WordPress", "Joomla", "CMS", "Taqqoslash"],
  },
  {
    id: "wordpress-seo-tips",
    title: "WordPress saytingizni SEO uchun optimallashtirishning 10 ta usuli",
    excerpt:
      "WordPress saytingizni qidiruv tizimlarida yuqori o'rinlarga chiqarish uchun 10 ta samarali usul. Bu maqolada biz SEO asoslari va WordPress-da qo'llash mumkin bo'lgan amaliy maslahatlarni ko'rib chiqamiz.",
    category: "SEO",
    author: "Jahongir Tursunov",
    date: "05.04.2023",
    readingTime: "12 daqiqa",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["WordPress", "SEO", "Qidiruv tizimi"],
  },
  {
    id: "accessible-websites",
    title: "Barcha uchun qulay saytlar yaratish: web-dasturlashda maxsus imkoniyatlar",
    excerpt:
      "Bu maqolada biz maxsus imkoniyatlarga ega foydalanuvchilar uchun veb-saytlarni qanday qilib qulay qilish haqida gaplashamiz. WCAG standartlari, skrin riderlar va maxsus dizayn usullari haqida ma'lumot beramiz.",
    category: "Maxsus imkoniyatlar",
    author: "Malika Azizova",
    date: "01.04.2023",
    readingTime: "15 daqiqa",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Maxsus imkoniyatlar", "WCAG", "Dizayn"],
  },
  {
    id: "cms-security",
    title: "CMS saytingizni xakerlardan himoya qilish: xavfsizlik asoslari",
    excerpt:
      "Bu maqolada biz CMS tizimlarining xavfsizligini ta'minlash uchun eng yaxshi amaliyotlarni ko'rib chiqamiz. Parollar, yangilanishlar, plaginarni tekshirish va boshqa muhim masalalar haqida gaplashamiz.",
    category: "Xavfsizlik",
    author: "Dilshod Rahimov",
    date: "25.03.2023",
    readingTime: "10 daqiqa",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Xavfsizlik", "CMS", "Himoya"],
  },
  {
    id: "cms-hosting",
    title: "CMS saytlar uchun eng yaxshi hosting xizmatlari: 2023 yil tahlili",
    excerpt:
      "Ushbu maqolada biz CMS tizimlari, ayniqsa WordPress uchun eng yaxshi hosting xizmatlarini taqqoslaymiz. Narxlar, ishlash tezligi, xavfsizlik va mijozlarga xizmat ko'rsatish sifati haqida ma'lumot beramiz.",
    category: "Hosting",
    author: "Jahongir Tursunov",
    date: "20.03.2023",
    readingTime: "12 daqiqa",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Hosting", "WordPress", "CMS"],
  },
]

// Mock data for categories
const categories = [
  { id: "all", name: "Barcha maqolalar", count: blogPosts.length },
  { id: "basics", name: "Asosiy", count: 1 },
  { id: "comparison", name: "Taqqoslash", count: 1 },
  { id: "seo", name: "SEO", count: 1 },
  { id: "accessibility", name: "Maxsus imkoniyatlar", count: 1 },
  { id: "security", name: "Xavfsizlik", count: 1 },
  { id: "hosting", name: "Hosting", count: 1 },
]

// Mock data for featured posts
const featuredPosts = [
  {
    id: "accessible-websites",
    title: "Barcha uchun qulay saytlar yaratish: web-dasturlashda maxsus imkoniyatlar",
    image: "/placeholder.svg?height=400&width=800",
    category: "Maxsus imkoniyatlar",
    date: "01.04.2023",
  },
  {
    id: "wordpress-seo-tips",
    title: "WordPress saytingizni SEO uchun optimallashtirishning 10 ta usuli",
    image: "/placeholder.svg?height=400&width=800",
    category: "SEO",
    date: "05.04.2023",
  },
]

// Mock data for popular tags
const popularTags = [
  { id: "wordpress", name: "WordPress", count: 3 },
  { id: "cms", name: "CMS", count: 3 },
  { id: "seo", name: "SEO", count: 2 },
  { id: "accessibility", name: "Maxsus imkoniyatlar", count: 1 },
  { id: "security", name: "Xavfsizlik", count: 1 },
  { id: "hosting", name: "Hosting", count: 1 },
  { id: "joomla", name: "Joomla", count: 1 },
]

export default function BlogPage() {
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
            <h1 className="text-3xl font-bold ml-4">Blog</h1>
          </div>

          {/* Featured Posts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Tanlangan maqolalar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`}>
                  <div className="group relative rounded-lg overflow-hidden aspect-[16/9] hover:shadow-lg transition-shadow">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                      <Badge className="mb-2 self-start">{post.category}</Badge>
                      <h3 className="text-white text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-white/80 text-sm">{post.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input placeholder="Maqolalarni qidirish" className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Kategoriya bo'yicha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha kategoriyalar</SelectItem>
                  <SelectItem value="basics">Asosiy</SelectItem>
                  <SelectItem value="comparison">Taqqoslash</SelectItem>
                  <SelectItem value="seo">SEO</SelectItem>
                  <SelectItem value="accessibility">Maxsus imkoniyatlar</SelectItem>
                  <SelectItem value="security">Xavfsizlik</SelectItem>
                  <SelectItem value="hosting">Hosting</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Saralash" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Eng yangi</SelectItem>
                  <SelectItem value="oldest">Eng eski</SelectItem>
                  <SelectItem value="popular">Eng mashhur</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-md transition-all">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-slate-100 h-48 md:h-auto">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 pb-3">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>{post.category}</Badge>
                          <span className="text-xs text-slate-500">{post.date}</span>
                        </div>
                        <CardTitle className="mb-2">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 pt-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-slate-400" />
                            <span className="text-sm text-slate-600">{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-slate-400" />
                            <span className="text-sm text-slate-600">{post.readingTime}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="p-0 pt-4">
                        <div className="flex gap-2 flex-wrap">
                          {post.tags.map((tag) => (
                            <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                              <Badge variant="outline" className="hover:bg-primary/5 cursor-pointer">
                                {tag}
                              </Badge>
                            </Link>
                          ))}
                        </div>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}

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

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Categories */}
              <Card>
                <CardHeader>
                  <CardTitle>Kategoriyalar</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {categories.map((category) => (
                      <li key={category.id}>
                        <Link
                          href={`/blog/category/${category.id}`}
                          className="flex items-center justify-between py-3 px-6 hover:bg-slate-50 transition-colors"
                        >
                          <span>{category.name}</span>
                          <Badge variant="outline">{category.count}</Badge>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Mashhur teglar</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Link key={tag.id} href={`/blog/tag/${tag.id}`}>
                        <Badge variant="outline" className="hover:bg-primary/5">
                          {tag.name} ({tag.count})
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Posts */}
              <Card>
                <CardHeader>
                  <CardTitle>So'nggi maqolalar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="flex items-start gap-3">
                      <div className="bg-slate-100 rounded h-16 w-16 shrink-0 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1 line-clamp-2">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Calendar className="h-3 w-3" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
                <CardFooter>
                  <Link href="/blog" className="w-full">
                    <Button variant="outline" className="w-full">
                      Barcha maqolalar
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              {/* Newsletter Signup */}
              <Card className="bg-primary text-white">
                <CardHeader>
                  <CardTitle className="text-white">Yangiliklar uchun obuna bo'ling</CardTitle>
                  <CardDescription className="text-primary-foreground/90">
                    Eng so'nggi yangiliklar va maqolalardan xabardor bo'ling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input
                      type="email"
                      placeholder="Email manzilingiz"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
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
