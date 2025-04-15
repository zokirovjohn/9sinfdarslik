"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { ArrowLeft, Search, Filter, BookOpen, BookMarked } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import AccessibilityControls from "@/components/accessibility-controls"
import CourseCard from "@/components/course-card"
import TutorialCard from "@/components/tutorial-card"
import FeaturedTutorialCard from "@/components/featured-tutorial-card"
import CatalogFilters from "@/components/catalog-filters"
import { allCourses, allTutorials, categories } from "@/data/catalog-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CatalogPage() {
  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedDuration, setSelectedDuration] = useState([0, 15]) // [min, max] hours
  const [selectedRating, setSelectedRating] = useState(0) // Minimum rating
  const [selectedSort, setSelectedSort] = useState("newest")
  const [showFreeOnly, setShowFreeOnly] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [activeTab, setActiveTab] = useState("courses")

  // Calculate category counts
  const categoryData = useMemo(() => {
    return categories.map((category) => {
      if (category.id === "all") {
        return { ...category, count: allCourses.length + allTutorials.length }
      }

      const courseCount = allCourses.filter((c) => c.category.toLowerCase() === category.id.toLowerCase()).length

      const tutorialCount = allTutorials.filter((t) => t.category.toLowerCase() === category.id.toLowerCase()).length

      return { ...category, count: courseCount + tutorialCount }
    })
  }, [allCourses, allTutorials])

  // Filtered courses based on search and filters
  const [filteredCourses, setFilteredCourses] = useState(allCourses)
  const [filteredTutorials, setFilteredTutorials] = useState(allTutorials)

  const itemsPerPage = 9

  // Apply filters
  useEffect(() => {
    // Filter courses
    let filtered = allCourses

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((course) => course.category.toLowerCase() === selectedCategory.toLowerCase())
    }

    // Level filter
    if (selectedLevel !== "all") {
      filtered = filtered.filter((course) => course.level.toLowerCase() === selectedLevel.toLowerCase())
    }

    // Duration filter
    filtered = filtered.filter(
      (course) => course.duration >= selectedDuration[0] && course.duration <= selectedDuration[1],
    )

    // Rating filter
    if (selectedRating > 0) {
      filtered = filtered.filter((course) => course.rating >= selectedRating)
    }

    // Free only filter
    if (showFreeOnly) {
      filtered = filtered.filter((course) => course.price === 0)
    }

    // Sort
    switch (selectedSort) {
      case "newest":
        filtered = [...filtered].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
        break
      case "popular":
        filtered = [...filtered].sort((a, b) => b.students - a.students)
        break
      case "rating":
        filtered = [...filtered].sort((a, b) => b.rating - a.rating)
        break
      case "price-low":
        filtered = [...filtered].sort((a, b) => a.price - b.price)
        break
      case "price-high":
        filtered = [...filtered].sort((a, b) => b.price - a.price)
        break
      default:
        break
    }

    setFilteredCourses(filtered)

    // Filter tutorials with similar logic
    let filteredTuts = allTutorials

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filteredTuts = filteredTuts.filter(
        (tutorial) =>
          tutorial.title.toLowerCase().includes(query) ||
          tutorial.description.toLowerCase().includes(query) ||
          tutorial.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    if (selectedCategory !== "all") {
      filteredTuts = filteredTuts.filter(
        (tutorial) => tutorial.category.toLowerCase() === selectedCategory.toLowerCase(),
      )
    }

    if (selectedLevel !== "all") {
      filteredTuts = filteredTuts.filter((tutorial) => tutorial.level.toLowerCase() === selectedLevel.toLowerCase())
    }

    // Sort tutorials
    switch (selectedSort) {
      case "newest":
        filteredTuts = [...filteredTuts].sort(
          (a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime(),
        )
        break
      case "readtime-low":
        filteredTuts = [...filteredTuts].sort((a, b) => a.readTime - b.readTime)
        break
      case "readtime-high":
        filteredTuts = [...filteredTuts].sort((a, b) => b.readTime - a.readTime)
        break
      default:
        break
    }

    setFilteredTutorials(filteredTuts)

    // Reset to first page when filters change
    setCurrentPage(1)
  }, [
    searchQuery,
    selectedCategory,
    selectedLevel,
    selectedDuration,
    selectedRating,
    selectedSort,
    showFreeOnly,
    allCourses,
    allTutorials,
  ])

  // Calculate pagination
  const totalPages = Math.ceil(
    (activeTab === "courses" ? filteredCourses.length : filteredTutorials.length) / itemsPerPage,
  )

  const currentItems =
    activeTab === "courses"
      ? filteredCourses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
      : filteredTutorials.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedLevel("all")
    setSelectedDuration([0, 15])
    setSelectedRating(0)
    setShowFreeOnly(false)
    setSelectedSort("newest")
  }

  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  }

  // Handle pagination
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
      // Scroll to top of results
      window.scrollTo({
        top: document.getElementById("results-top").offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

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
            <h1 className="text-3xl font-bold ml-4">Ta'lim katalogi</h1>
          </div>

          {/* Hero Banner */}
          <div className="relative rounded-xl overflow-hidden mb-8 bg-gradient-to-r from-primary to-primary/70">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 p-8 md:p-12 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">CMS tizimlari bo'yicha to'liq ta'lim platformasi</h2>
              <p className="text-lg md:text-xl mb-6 max-w-2xl">
                WordPress, Joomla, Drupal va boshqa CMS tizimlari bo'yicha kurslar va darsliklar. Barcha materiallar
                past eshituvchi talabalar uchun maxsus imkoniyatlar bilan jihozlangan.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary">
                  Bepul kurslarni ko'rish
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                  Qanday boshlash haqida
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs for Courses and Tutorials */}
          <Tabs defaultValue="courses" className="mb-8" onValueChange={setActiveTab}>
            <TabsList className="grid w-full md:w-[400px] grid-cols-2">
              <TabsTrigger value="courses" className="text-base">
                Kurslar
              </TabsTrigger>
              <TabsTrigger value="tutorials" className="text-base">
                Matnli darsliklar
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Search and Filter */}
          <CatalogFilters
            activeTab={activeTab}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
            onResetFilters={resetFilters}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 space-y-6 sticky top-24">
                <div>
                  <h2 className="text-lg font-bold mb-4">Kategoriyalar</h2>
                  <ul className="space-y-2">
                    {categoryData.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center justify-between w-full py-2 px-3 rounded-md hover:bg-slate-100 transition-colors ${
                            selectedCategory === category.id ? "bg-primary/10 text-primary font-medium" : ""
                          }`}
                        >
                          <span>{category.name}</span>
                          <Badge variant={selectedCategory === category.id ? "default" : "secondary"}>
                            {category.count}
                          </Badge>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h2 className="text-lg font-bold mb-4">Daraja</h2>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Checkbox
                        id="level-beginner"
                        checked={selectedLevel === "boshlang'ich"}
                        onCheckedChange={() =>
                          setSelectedLevel(selectedLevel === "boshlang'ich" ? "all" : "boshlang'ich")
                        }
                      />
                      <Label htmlFor="level-beginner" className="ml-2 text-sm text-gray-700">
                        Boshlang'ich
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="level-intermediate"
                        checked={selectedLevel === "o'rta"}
                        onCheckedChange={() => setSelectedLevel(selectedLevel === "o'rta" ? "all" : "o'rta")}
                      />
                      <Label htmlFor="level-intermediate" className="ml-2 text-sm text-gray-700">
                        O'rta
                      </Label>
                    </div>
                    <div className="flex items-center">
                      <Checkbox
                        id="level-advanced"
                        checked={selectedLevel === "yuqori"}
                        onCheckedChange={() => setSelectedLevel(selectedLevel === "yuqori" ? "all" : "yuqori")}
                      />
                      <Label htmlFor="level-advanced" className="ml-2 text-sm text-gray-700">
                        Yuqori
                      </Label>
                    </div>
                  </div>
                </div>

                {activeTab === "courses" && (
                  <>
                    <div className="border-t pt-6">
                      <h2 className="text-lg font-bold mb-4">Davomiyligi</h2>
                      <div className="px-2">
                        <div className="flex justify-between mb-2 text-sm">
                          <span>{selectedDuration[0]} soat</span>
                          <span>{selectedDuration[1]} soat</span>
                        </div>
                        <Slider
                          defaultValue={selectedDuration}
                          min={0}
                          max={15}
                          step={1}
                          value={selectedDuration}
                          onValueChange={setSelectedDuration}
                          className="mb-4"
                        />
                        <div className="grid grid-cols-3 gap-2 text-sm">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedDuration([0, 5])}
                            className={
                              selectedDuration[0] === 0 && selectedDuration[1] === 5 ? "bg-primary/10 text-primary" : ""
                            }
                          >
                            0-5 soat
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedDuration([6, 10])}
                            className={
                              selectedDuration[0] === 6 && selectedDuration[1] === 10
                                ? "bg-primary/10 text-primary"
                                : ""
                            }
                          >
                            6-10 soat
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setSelectedDuration([11, 15])}
                            className={
                              selectedDuration[0] === 11 && selectedDuration[1] === 15
                                ? "bg-primary/10 text-primary"
                                : ""
                            }
                          >
                            10+ soat
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <h2 className="text-lg font-bold mb-4">Reyting</h2>
                      <div className="space-y-2">
                        {[4.5, 4.0, 3.5].map((rating) => (
                          <div className="flex items-center" key={rating}>
                            <Checkbox
                              id={`rating-${rating}`}
                              checked={selectedRating === rating}
                              onCheckedChange={() => setSelectedRating(selectedRating === rating ? 0 : rating)}
                            />
                            <Label
                              htmlFor={`rating-${rating}`}
                              className="ml-2 text-sm text-gray-700 flex items-center"
                            >
                              {rating} va undan yuqori
                              <div className="flex ml-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <svg
                                    key={star}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    fill={star <= Math.floor(rating) ? "currentColor" : "none"}
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-yellow-500"
                                  >
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                  </svg>
                                ))}
                              </div>
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t pt-6">
                      <div className="flex items-center">
                        <Checkbox id="free-only" checked={showFreeOnly} onCheckedChange={setShowFreeOnly} />
                        <Label htmlFor="free-only" className="ml-2 text-sm text-gray-700">
                          Faqat bepul kurslar
                        </Label>
                      </div>
                    </div>
                  </>
                )}

                <div className="border-t pt-6 flex flex-col gap-2">
                  <Button className="w-full gap-2" onClick={() => resetFilters()}>
                    <Filter className="h-4 w-4" /> Filtrlashni tozalash
                  </Button>
                </div>
              </div>
            </div>

            {/* Course/Tutorial List */}
            <div className="lg:col-span-3">
              <div id="results-top" className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">
                  {activeTab === "courses"
                    ? `Kurslar (${filteredCourses.length})`
                    : `Matnli darsliklar (${filteredTutorials.length})`}
                </h2>
                <Select value={selectedSort} onValueChange={setSelectedSort}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Saralash" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Eng yangi</SelectItem>
                    <SelectItem value="popular">Eng mashhur</SelectItem>
                    <SelectItem value="rating">Reyting bo'yicha</SelectItem>
                    {activeTab === "courses" ? (
                      <>
                        <SelectItem value="price-low">Narx: pastdan yuqoriga</SelectItem>
                        <SelectItem value="price-high">Narx: yuqoridan pastga</SelectItem>
                      </>
                    ) : (
                      <>
                        <SelectItem value="readtime-low">O'qish vaqti: qisqadan uzunroqqa</SelectItem>
                        <SelectItem value="readtime-high">O'qish vaqti: uzunroqdan qisqaga</SelectItem>
                      </>
                    )}
                  </SelectContent>
                </Select>
              </div>

              {/* No results message */}
              {currentItems.length === 0 && (
                <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                  <div className="flex justify-center mb-4">
                    <Search className="h-12 w-12 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Natijalar topilmadi</h3>
                  <p className="text-slate-600 mb-4">
                    Afsuski, sizning so'rovingiz bo'yicha hech qanday natija topilmadi. Iltimos, boshqa kalit so'zlarni
                    sinab ko'ring yoki filtrlarni o'zgartiring.
                  </p>
                  <Button onClick={resetFilters}>Filtrlashni tozalash</Button>
                </div>
              )}

              {/* Courses Tab Content */}
              {activeTab === "courses" && currentItems.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentItems.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              )}

              {/* Tutorials Tab Content */}
              {activeTab === "tutorials" && currentItems.length > 0 && (
                <div className="space-y-6">
                  {/* Featured Tutorials */}
                  {currentPage === 1 && filteredTutorials.some((t) => t.featured) && (
                    <div className="mb-8">
                      <h3 className="text-lg font-bold mb-4">Mashhur darsliklar</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {filteredTutorials
                          .filter((t) => t.featured)
                          .slice(0, 2)
                          .map((tutorial) => (
                            <FeaturedTutorialCard key={tutorial.id} tutorial={tutorial} />
                          ))}
                      </div>
                    </div>
                  )}

                  {/* All Tutorials */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((tutorial) => (
                      <TutorialCard key={tutorial.id} tutorial={tutorial} />
                    ))}
                  </div>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => goToPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
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

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        variant="outline"
                        size="sm"
                        className={currentPage === page ? "bg-primary text-white hover:bg-primary/90" : ""}
                        onClick={() => goToPage(page)}
                      >
                        {page}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => goToPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
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
              )}
            </div>
          </div>

          {/* Related Content Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Siz uchun tavsiya qilamiz</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Yangi boshlanuvchilar uchun</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/courses/cms-basics" className="flex items-center gap-2 text-primary hover:underline">
                        <BookOpen className="h-4 w-4" />
                        <span>CMS tizimlari asoslari</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/tutorials/wordpress-installation"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookMarked className="h-4 w-4" />
                        <span>WordPress o'rnatish</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/courses/joomla-basics"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>Joomla asoslari</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/courses?level=boshlang'ich">Barcha boshlang'ich kurslar</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Eng mashhur kurslar</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href="/courses/wordpress-basics"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>WordPress bilan ishlash</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses/web-design" className="flex items-center gap-2 text-primary hover:underline">
                        <BookOpen className="h-4 w-4" />
                        <span>Web-dizayn asoslari</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/courses/seo-basics" className="flex items-center gap-2 text-primary hover:underline">
                        <BookOpen className="h-4 w-4" />
                        <span>SEO asoslari</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/courses?sort=popular">Barcha mashhur kurslar</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Bepul ta'lim</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/courses/cms-basics" className="flex items-center gap-2 text-primary hover:underline">
                        <BookOpen className="h-4 w-4" />
                        <span>CMS tizimlari asoslari</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/courses/wordpress-basics"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>WordPress bilan ishlash</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/courses/accessibility"
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <BookOpen className="h-4 w-4" />
                        <span>Web saytlar uchun maxsus imkoniyatlar</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/courses?free=true">Barcha bepul kurslar</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-16 bg-primary text-white p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Hoziroq o'rganishni boshlang</h2>
                <p className="text-primary-foreground/90">
                  CMS tizimlari orqali web-kurslar yaratishni o'rganib, o'z karyerangizni yangi bosqichga olib chiqing
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/register">Ro'yxatdan o'tish</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10"
                  asChild
                >
                  <Link href="/courses?free=true">Bepul kurslarni ko'rish</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
