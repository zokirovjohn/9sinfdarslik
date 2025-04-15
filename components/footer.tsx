import Link from "next/link"
import { BookOpen, Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">CMS O'rganish</span>
            </Link>
            <p className="text-slate-300 mb-4">
              Past eshituvchi talabalar uchun maxsus imkoniyatlar bilan jihozlangan interaktiv ta'lim platformasi
            </p>
            <div className="flex gap-4">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Facebook className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full">
                  <Youtube className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Asosiy sahifa
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-300 hover:text-white transition-colors">
                  Kurslar
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-slate-300">Toshkent shahri, Universitet ko'chasi, 4-uy</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+998712345678" className="text-slate-300 hover:text-white transition-colors">
                  +998 71 234 56 78
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@cms-learning.uz" className="text-slate-300 hover:text-white transition-colors">
                  info@cms-learning.uz
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4">Yangiliklar</h3>
            <p className="text-slate-300 mb-4">Yangiliklar va foydali ma'lumotlarni olish uchun ro'yxatdan o'ting</p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Email manzilingiz"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                required
              />
              <Button type="submit" className="w-full">
                Obuna bo'lish
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} CMS O'rganish. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  )
}
