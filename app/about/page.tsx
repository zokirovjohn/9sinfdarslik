"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"

export default function AboutPage() {
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
            <h1 className="text-3xl font-bold ml-4">Biz haqimizda</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold mb-4 text-primary">Bizning vazifamiz</h2>
                <p className="text-slate-700 mb-6">
                  CMS Learning Platform - bu CMS tizimlari bo'yicha ta'lim olishni istagan barcha insonlar uchun
                  yaratilgan platforma. Bizning maqsadimiz - CMS tizimlari bo'yicha sifatli va tushunarli ta'lim
                  materiallarini taqdim etish orqali foydalanuvchilarning bilim va ko'nikmalarini oshirishdir.
                </p>
                <p className="text-slate-700 mb-6">
                  Biz WordPress, Joomla, Drupal va boshqa CMS tizimlari bo'yicha kurslar, qo'llanmalar va resurslarni
                  taqdim etamiz. Bizning platformamiz orqali siz CMS tizimlarini o'rganish, sayt yaratish va uni
                  boshqarish bo'yicha bilimlarni olishingiz mumkin.
                </p>
                <h2 className="text-2xl font-bold mb-4 text-primary">Bizning qadriyatlarimiz</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
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
                            className="text-primary h-6 w-6"
                          >
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                            <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                          </svg>
                        </div>
                        <h3 className="font-bold text-lg">Sifatli ta'lim</h3>
                      </div>
                      <p className="text-slate-600 mt-2">
                        Biz har doim eng yuqori sifatli ta'lim materiallarini taqdim etishga intilamiz.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
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
                            className="text-primary h-6 w-6"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="12" x2="12" y1="8" y2="12"></line>
                          </svg>
                        </div>
                        <h3 className="font-bold text-lg">Ochiqlik va shaffoflik</h3>
                      </div>
                      <p className="text-slate-600 mt-2">
                        Biz ochiqlik va shaffoflik tamoyillariga amal qilamiz va har doim o'z o'quvchilarimiz bilan
                        ochiq muloqotga tayyormiz.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
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
                            className="text-primary h-6 w-6"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                          </svg>
                        </div>
                        <h3 className="font-bold text-lg">Hamkorlik va jamoaviy ish</h3>
                      </div>
                      <p className="text-slate-600 mt-2">
                        Biz hamkorlik va jamoaviy ishni qadrlaymiz va o'z o'quvchilarimizni bir-birlari bilan hamkorlik
                        qilishga undaymiz.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-2 hover:border-primary transition-all">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-full">
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
                            className="text-primary h-6 w-6"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" x2="8" y1="13" y2="13"></line>
                            <line x1="16" x2="8" y1="17" y2="17"></line>
                            <line x1="10" x2="8" y1="9" y2="9"></line>
                          </svg>
                        </div>
                        <h3 className="font-bold text-lg">Innovatsiyalar</h3>
                      </div>
                      <p className="text-slate-600 mt-2">
                        Biz doimo yangi g'oyalar va innovatsion yondashuvlarni qo'llab-quvvatlaymiz va o'z
                        platformamizni doimiy ravishda takomillashtirib boramiz.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link href="/courses">Kurslarni ko'rish</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Bog'lanish</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-bold mb-4 text-primary">Bizning jamoa</h2>
                  <p className="text-slate-700 mb-4">
                    Bizning jamoamiz CMS tizimlari bo'yicha tajribali mutaxassislardan iborat. Bizning har bir a'zoyimiz
                    o'z sohasida yetakchi hisoblanadi va sizga sifatli ta'lim berishga tayyor.
                  </p>
                  <Image
                    src="/team.jpg"
                    alt="Bizning jamoa"
                    width={500}
                    height={300}
                    className="rounded-md shadow-sm"
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs Section */}
          <Tabs defaultValue="mission" className="mb-12">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="mission">Maqsad va vazifalar</TabsTrigger>
              <TabsTrigger value="team">Bizning jamoa</TabsTrigger>
              <TabsTrigger value="history">Tarix</TabsTrigger>
              <TabsTrigger value="values">Qadriyatlar</TabsTrigger>
            </TabsList>

            <TabsContent value="mission" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
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
                          className="mr-2 h-5 w-5 text-primary"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Bizning maqsadimiz
                      </h3>
                      <p className="text-slate-600 mb-4">
                        Bizning asosiy maqsadimiz - CMS tizimlari bo'yicha sifatli va qulay ta'lim resurslarini yaratish
                        orqali, foydalanuvchilarning web-saytlarni yaratish va boshqarish ko'nikmalarini rivojlantirish.
                        Biz har bir o'quvchiga individual yondashuvni ta'minlash va ularning ehtiyojlariga mos keladigan
                        ta'lim materiallarini taqdim etishga intilamiz.
                      </p>
                      <p className="text-slate-600">
                        Shuningdek, biz CMS tizimlari bo'yicha bilimlarni keng tarqatish va ushbu sohada yangi
                        mutaxassislarni tayyorlashga hissa qo'shishni maqsad qilganmiz. Bizning platformamiz orqali har
                        bir kishi, tajribasi va bilim darajasidan qat'i nazar, CMS tizimlari bilan ishlashni o'rganishi
                        va o'z web-saytlarini yaratishi mumkin.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center">
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
                          className="mr-2 h-5 w-5 text-primary"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Bizning vazifalarimiz
                      </h3>
                      <ul className="space-y-3 text-slate-600">
                        <li className="flex items-start">
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
                            className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Sifatli va tushunarli ta'lim materiallarini yaratish</span>
                        </li>
                        <li className="flex items-start">
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
                            className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>Barcha foydalanuvchilar uchun qulay va ochiq muhit yaratish</span>
                        </li>
                        <li className="flex items-start">
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
                            className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>CMS tizimlari bo'yicha eng so'nggi yangiliklar va tendensiyalarni yoritish</span>
                        </li>
                        <li className="flex items-start">
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
                            className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>O'quvchilar uchun amaliy ko'nikmalarni rivojlantirish imkoniyatlarini yaratish</span>
                        </li>
                        <li className="flex items-start">
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
                            className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>CMS tizimlari bo'yicha professional jamoa yaratish</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
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
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    Bizning jamoa
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Team Member 1 */}
                    <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-square bg-slate-200 relative">
                        <img
                          src="/placeholder.svg?height=300&width=300"
                          alt="Jamoa a'zosi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg">Aziz Karimov</h4>
                        <p className="text-primary text-sm mb-2">Asoschisi va CEO</p>
                        <p className="text-slate-600 text-sm mb-3">
                          10+ yillik tajribaga ega web-dasturlash va CMS tizimlari bo'yicha ekspert.
                        </p>
                        <div className="flex space-x-2">
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect width="4" height="12" x="2" y="9"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-square bg-slate-200 relative">
                        <img
                          src="/placeholder.svg?height=300&width=300"
                          alt="Jamoa a'zosi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg">Malika Rahimova</h4>
                        <p className="text-primary text-sm mb-2">Ta'lim direktori</p>
                        <p className="text-slate-600 text-sm mb-3">
                          8+ yillik tajribaga ega ta'lim metodikasi va CMS tizimlari bo'yicha mutaxassis.
                        </p>
                        <div className="flex space-x-2">
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect width="4" height="12" x="2" y="9"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-square bg-slate-200 relative">
                        <img
                          src="/placeholder.svg?height=300&width=300"
                          alt="Jamoa a'zosi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg">Bobur Aliyev</h4>
                        <p className="text-primary text-sm mb-2">Bosh dasturchi</p>
                        <p className="text-slate-600 text-sm mb-3">
                          12+ yillik tajribaga ega web-dasturlash va CMS tizimlari bo'yicha ekspert.
                        </p>
                        <div className="flex space-x-2">
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect width="4" height="12" x="2" y="9"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="bg-slate-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-square bg-slate-200 relative">
                        <img
                          src="/placeholder.svg?height=300&width=300"
                          alt="Jamoa a'zosi"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg">Nilufar Qodirova</h4>
                        <p className="text-primary text-sm mb-2">Kontent menejeri</p>
                        <p className="text-slate-600 text-sm mb-3">
                          6+ yillik tajribaga ega kontent yaratish va CMS tizimlari bo'yicha mutaxassis.
                        </p>
                        <div className="flex space-x-2">
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                              <rect width="4" height="12" x="2" y="9"></rect>
                              <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                            </svg>
                          </a>
                          <a href="#" className="text-slate-400 hover:text-primary">
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
                            >
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="history" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
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
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <path d="M12 8v4l3 3"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </svg>
                    Bizning tarixmiz
                  </h3>

                  <div className="space-y-8">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center font-bold">
                          1
                        </div>
                        <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">2018 - Platformaning yaratilishi</h4>
                        <p className="text-slate-600 mt-2">
                          Bizning platformamiz 2018-yilda bir guruh web-dasturlash va CMS tizimlari bo'yicha
                          mutaxassislar tomonidan yaratilgan. Dastlab, biz faqat WordPress bo'yicha bir nechta kurslarni
                          taqdim etgan edik.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center font-bold">
                          2
                        </div>
                        <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">2019 - Kurslar kengaytirilishi</h4>
                        <p className="text-slate-600 mt-2">
                          2019-yilda biz Joomla va Drupal bo'yicha kurslarni qo'shdik va platformamizni yanada
                          kengaytirdik. Shu yili bizning o'quvchilarimiz soni 1000 dan oshdi.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center font-bold">
                          3
                        </div>
                        <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">2020 - Onlayn ta'lim</h4>
                        <p className="text-slate-600 mt-2">
                          2020-yilda global pandemiya sababli, biz to'liq onlayn ta'lim platformasiga o'tdik va yanada
                          ko'proq interaktiv kurslarni taqdim etdik. Bu yilda bizning o'quvchilarimiz soni 3000 dan
                          oshdi.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center font-bold">
                          4
                        </div>
                        <div className="h-full w-0.5 bg-primary/20 mt-2"></div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">2021 - Hamkorliklar</h4>
                        <p className="text-slate-600 mt-2">
                          2021-yilda biz bir nechta yirik IT kompaniyalar bilan hamkorlik o'rnatdik va yanada ko'proq
                          imkoniyatlarni taqdim etdik. Shu yili bizning platformamiz milliy ta'lim mukofotiga sazovor
                          bo'ldi.
                        </p>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="rounded-full bg-primary text-white w-10 h-10 flex items-center justify-center font-bold">
                          5
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">2022-2023 - Yangi bosqich</h4>
                        <p className="text-slate-600 mt-2">
                          2022-2023 yillarda biz platformamizni to'liq yangiladik va yanada ko'proq imkoniyatlarni
                          taqdim etdik. Hozirda bizning platformamizda 50 dan ortiq kurslar va 5000 dan ortiq
                          o'quvchilar mavjud.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="values" className="mt-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
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
                      className="mr-2 h-5 w-5 text-primary"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                      <path d="M5 3v4"></path>
                      <path d="M19 17v4"></path>
                      <path d="M3 5h4"></path>
                      <path d="M17 19h4"></path>
                    </svg>
                    Bizning qadriyatlarimiz
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
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
                          className="mr-2 h-5 w-5 text-primary"
                        >
                          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        Sifat
                      </h4>
                      <p className="text-slate-600">
                        Biz har doim eng yuqori sifatli ta'lim materiallarini taqdim etishga intilamiz. Bizning
                        kurslarimiz professional mutaxassislar tomonidan yaratilgan va doimiy ravishda yangilanib
                        turadi.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
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
                          className="mr-2 h-5 w-5 text-primary"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Ochiqlik
                      </h4>
                      <p className="text-slate-600">
                        Biz ochiqlik va shaffoflik tamoyillariga amal qilamiz. Bizning platformamizda har bir kishi o'z
                        fikrlarini erkin bildirishi va boshqalar bilan bilimlarini ulashishi mumkin.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
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
                          className="mr-2 h-5 w-5 text-primary"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        Hamkorlik
                      </h4>
                      <p className="text-slate-600">
                        Biz hamkorlik va jamoaviy ishni qadirlaymiz. Bizning platformamizda o'quvchilar bir-biri bilan
                        hamkorlik qilishlari va birgalikda o'rganishlari mumkin.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 flex items-center">
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
                          className="mr-2 h-5 w-5 text-primary"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                          <polyline points="14 2 14 8 20 8"></polyline>
                          <path d="M16 13H8"></path>
                          <path d="M16 17H8"></path>
                          <path d="M10 9H8"></path>
                        </svg>
                        Innovatsiya
                      </h4>
                      <p className="text-slate-600">
                        Biz doimo yangi g'oyalar va innovatsion yondashuvlarni qo'llab-quvvatlaymiz. Bizning
                        platformamiz eng so'nggi texnologiyalar va tendensiyalarni o'z ichiga oladi.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Contact Section */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6">Biz bilan bog'laning</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
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
                      className="h-5 w-5 text-primary mt-1 mr-3"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-slate-600">info@cmslearning.uz</p>
                    </div>
                  </div>
                  <div className="flex items-start">
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
                      className="h-5 w-5 text-primary mt-1 mr-3"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 1.94 1.94 0 0 1-2-2.17v-3a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2.71l-.51 2a2 2 0 0 0 2 2.34 2 2 0 0 1 2.09 1.45 2 2 0 0 0 1.68.59h3.5a2 2 0 0 1 2 2.71l-.5 2a2 2 0 0 0 2.23 2.34 2 2 0 0 1 1.45 2.08Z"></path>
                    </svg>
                    <div>
                      <h3 className="font-medium">Telefon</h3>
                      <p className="text-slate-600">+998 90 123 45 67</p>
                    </div>
                  </div>
                  <div className="flex items-start">
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
                      className="h-5 w-5 text-primary mt-1 mr-3"
                    >
                      <circle cx="12" cy="10" r="3"></circle>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                    <div>
                      <h3 className="font-medium">Manzil</h3>
                      <p className="text-slate-600">Toshkent shahri, Shayxontohur tumani, Navoiy ko'chasi, 30-uy</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-4">Ijtimoiy tarmoqlar</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-slate-100 hover:bg-primary hover:text-white transition-colors p-2 rounded-full"
                    >
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
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-slate-100 hover:bg-primary hover:text-white transition-colors p-2 rounded-full"
                    >
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
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-slate-100 hover:bg-primary hover:text-white transition-colors p-2 rounded-full"
                    >
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
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-slate-100 hover:bg-primary hover:text-white transition-colors p-2 rounded-full"
                    >
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
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-slate-100 hover:bg-primary hover:text-white transition-colors p-2 rounded-full"
                    >
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
                      >
                        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-slate-200 h-64 md:h-auto relative">
                <div className="absolute inset-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0451069517584!2d69.2392!3d41.3123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE4JzQ0LjMiTiA2OcKwMTQnMjEuMSJF!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bizning manzil"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
