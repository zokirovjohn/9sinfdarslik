import Link from "next/link"
import { ArrowLeft, Clock, MessageSquare, PenSquare, Search, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import AccessibilityControls from "@/components/accessibility-controls"

// Mock data for discussion topics
const topics = [
  {
    id: "wordpress-hosting",
    title: "WordPress uchun qanday hosting xizmatini tavsiya qilasiz?",
    content:
      "Men WordPress saytimni yangi hosting provayderiga ko'chirmoqchiman. Qaysi hosting xizmati WordPress uchun eng yaxshi ishlaydi? Narxi va tezligi muhim.",
    category: "WordPress",
    author: {
      name: "Aziza Karimova",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "2 soat oldin",
    replies: 8,
    views: 24,
    likes: 3,
    isAnswered: true,
    tags: ["WordPress", "Hosting", "Tezlik"],
  },
  {
    id: "cms-comparison",
    title: "WordPress va Joomla orasidagi asosiy farqlar nimada?",
    content:
      "CMS tizimini tanlashda qiynalayapman. WordPress va Joomla o'rtasidagi asosiy farqlarni tushuntirib bera olasizmi? Qaysi biri yangi boshlanuvchilar uchun qulay?",
    category: "CMS",
    author: {
      name: "Bobur Aliyev",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "5 soat oldin",
    replies: 12,
    views: 56,
    likes: 7,
    isAnswered: true,
    tags: ["WordPress", "Joomla", "CMS", "Taqqoslash"],
  },
  {
    id: "woocommerce-setup",
    title: "WooCommerce-da to'lov tizimlarini qanday sozlash kerak?",
    content:
      "WooCommerce yordamida onlayn do'kon yaratayapman va to'lov tizimlarini sozlashda muammoga duch keldim. Click va Payme integratsiyasi haqida maslahat bera olasizmi?",
    category: "E-tijorat",
    author: {
      name: "Gulnora Rahimova",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "1 kun oldin",
    replies: 4,
    views: 18,
    likes: 2,
    isAnswered: false,
    tags: ["WordPress", "WooCommerce", "To'lov", "E-tijorat"],
  },
  {
    id: "accessibility-questions",
    title: "Maxsus imkoniyatlarga ega foydalanuvchilar uchun WordPress saytini qanday optimallashtirishim mumkin?",
    content:
      "Men saytimni nogironligi bor foydalanuvchilar uchun qulay qilmoqchiman. WCAG standartlarini WordPress saytimga qanday tadbiq qilishim mumkin? Maxsus plaginlar yoki mavzular tavsiya qila olasizmi?",
    category: "Maxsus imkoniyatlar",
    author: {
      name: "Kamola Yusupova",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "2 kun oldin",
    replies: 6,
    views: 32,
    likes: 9,
    isAnswered: true,
    tags: ["WordPress", "Maxsus imkoniyatlar", "WCAG", "Pluginlar"],
  },
  {
    id: "wordpress-security",
    title: "WordPress saytimni xakerlardan qanday himoya qilishim mumkin?",
    content:
      "Yaqinda WordPress saytim xaker hujumiga uchradi. Saytimni himoya qilish uchun qanday qadamlar va xavfsizlik choralarini ko'rishim kerak? Tavsiya qilinadigan xavfsizlik plaginlari bormi?",
    category: "Xavfsizlik",
    author: {
      name: "Javohir Ismoilov",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "3 kun oldin",
    replies: 15,
    views: 74,
    likes: 12,
    isAnswered: true,
    tags: ["WordPress", "Xavfsizlik", "Himoya", "Pluginlar"],
  },
  {
    id: "cms-course-question",
    title: "WordPress bilan ishlash kursini tugatgandan so'ng, keyingi qadam nima bo'lishi kerak?",
    content:
      "WordPress bilan ishlash kursini tugatdim va endi o'zimni rivojlantirmoqchiman. Qanday yo'nalishda davom etishim kerak? SEO, WooCommerce, yoki custom tema ishlab chiqish bo'yicha maslahatlar bera olasizmi?",
    category: "Karyera",
    author: {
      name: "Nodir Kamolov",
      image: "/placeholder.svg?height=40&width=40",
    },
    date: "4 kun oldin",
    replies: 9,
    views: 45,
    likes: 6,
    isAnswered: false,
    tags: ["WordPress", "Karyera", "O'qish", "Rivojlanish"],
  },
]

// Mock data for popular tags
const popularTags = [
  { id: "wordpress", name: "WordPress", count: 118 },
  { id: "cms", name: "CMS", count: 86 },
  { id: "plugins", name: "Pluginlar", count: 74 },
  { id: "seo", name: "SEO", count: 65 },
  { id: "hosting", name: "Hosting", count: 52 },
  { id: "security", name: "Xavfsizlik", count: 48 },
  { id: "ecommerce", name: "E-tijorat", count: 43 },
  { id: "accessibility", name: "Maxsus imkoniyatlar", count: 37 },
  { id: "themes", name: "Mavzular", count: 35 },
  { id: "joomla", name: "Joomla", count: 27 },
]

// Mock data for categories
const categories = [
  { id: "all", name: "Barcha mavzular", count: topics.length },
  { id: "wordpress", name: "WordPress", count: 4 },
  { id: "cms", name: "CMS", count: 1 },
  { id: "ecommerce", name: "E-tijorat", count: 1 },
  { id: "accessibility", name: "Maxsus imkoniyatlar", count: 1 },
  { id: "security", name: "Xavfsizlik", count: 1 },
  { id: "career", name: "Karyera", count: 1 },
]

// Mock data for top contributors
const topContributors = [
  {
    name: "Dilshod Rahimov",
    image: "/placeholder.svg?height=40&width=40",
    role: "WordPress mutaxassisi",
    posts: 156,
    likes: 423,
  },
  {
    name: "Nodira Karimova",
    image: "/placeholder.svg?height=40&width=40",
    role: "UX/UI dizayner",
    posts: 89,
    likes: 317,
  },
  {
    name: "Jahongir Tursunov",
    image: "/placeholder.svg?height=40&width=40",
    role: "SEO mutaxassisi",
    posts: 124,
    likes: 286,
  },
]

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: "wordpress-masterclass",
    title: "WordPress amaliy master-klass",
    date: "20-aprel, 2023",
    time: "15:00 - 17:00",
    location: "Onlayn",
    attendees: 45,
  },
  {
    id: "cms-comparison-webinar",
    title: "CMS tizimlarini taqqoslash vebinari",
    date: "25-aprel, 2023",
    time: "14:00 - 15:30",
    location: "Onlayn",
    attendees: 32,
  },
]

export default function CommunityPage() {
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
            <h1 className="text-3xl font-bold ml-4">Jamiyat forumi</h1>
          </div>

          {/* Community Header */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold mb-2">CMS O'rganish jamoasiga xush kelibsiz!</h2>
                <p className="text-slate-600">
                  Bu yerda siz savollaringizni berishi, boshqalarga yordam berishi va CMS tizimlari bo'yicha tajribangizni ulashishingiz mumkin.
                </p>
              </div>
              <div className="flex gap-2">
                <Link href="/community/new">
                  <Button className="gap-1">
                    <PenSquare className="h-4 w-4" /> Yangi mavzu
                  </Button>
                </Link>
                <Link href="/community/rules">
                  <Button variant="outline">Forum qoidalari</Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                <Input placeholder="Mavzularni qidirish" className="pl-10" />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Kategoriya bo'yicha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Barcha kategoriyalar</SelectItem>
                  <SelectItem value="wordpress">WordPress</SelectItem>
                  <SelectItem value="cms">CMS</SelectItem>
                  <SelectItem value="ecommerce">E-tijorat</SelectItem>
                  <SelectItem value="accessibility">Maxsus imkoniyatlar</SelectItem>
                  <SelectItem value="security">Xavfsizlik</SelectItem>
                  <SelectItem value="career">Karyera</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Saralash" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="latest">Eng yangi</SelectItem>
                  <SelectItem value="popular">Eng mashhur</SelectItem>
                  <SelectItem value="most_replied">Eng ko'p javobli</SelectItem>
                  <SelectItem value="unanswered">Javobsiz</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="discussions">
                <TabsList className="mb-6">
                  <TabsTrigger value="discussions">Barcha mavzular</TabsTrigger>
                  <TabsTrigger value="popular">Mashhur</TabsTrigger>
                  <TabsTrigger value="unanswered">Javobsiz</TabsTrigger>
                  <TabsTrigger value="my_topics">Mening mavzularim</TabsTrigger>
                </TabsList>

                {/* All Discussions */}
                <TabsContent value="discussions" className="space-y-4">
                  {topics.map((topic) => (
                    <Card key={topic.id} className="overflow-hidden hover:shadow-md transition-all">
                      <CardContent className="p-0">
                        <div className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                            <div className="flex items-center gap-2">
                              <Badge>{topic.category}</Badge>
                              {topic.isAnswered && (
                                <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200">
                                  Javob berilgan
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                <span>{topic.date}</span>
                              </div>
                            </div>
                          </div>

                          <Link href={`/community/${topic.id}`}>
                            <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">{topic.title}</h3>
                          </Link>
                          <p className="text-slate-600 mb-4 line-clamp-2">{topic.content}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <AvatarImage src={topic.author.image || "/placeholder.svg"} alt={topic.author.name} />
                                <AvatarFallback>{topic.author.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <span className="text-sm text-slate-600">{topic.author.name}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <MessageSquare className="h-4 w-4" />
                                <span>{topic.replies}</span>
                              </div>
                              <div className="flex items-center gap-1">
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
                                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                                <span>{topic.views}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                <span>{topic.likes}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="px-6 py-3 bg-slate-50 border-t flex flex-wrap gap-2">
                          {topic.tags.map((tag) => (
                            <Link key={tag} href={`/community/tag/${tag.toLowerCase()}`}>
                              <Badge variant="outline" className="hover:bg-primary/5">
                                {tag}
                              </Badge>
                            </Link>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  {/* Pagination */}
                  <div className="flex justify-center mt-8">
                    <nav className="flex items-center gap-1">
                      <Button variant="outline" size="icon" disabled>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                \
