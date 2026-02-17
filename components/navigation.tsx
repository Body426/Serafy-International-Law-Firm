"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const navigationItems = [
  { name: "nav.home", href: "/" },
  { name: "nav.about", href: "/about" },
  { name: "nav.expertise", href: "/expertise" },
  { name: "nav.team", href: "/team" },
  { name: "nav.newsroom", href: "/newsroom" },
  { name: "nav.contact", href: "/contact" },
]

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ar", name: "العربية", flag: "🇪🇬" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t, isRTL } = useLanguage()

  const currentLanguage = languages.find((lang) => lang.code === language)

  return (
    <nav
      className={`bg-[#002060]/95 backdrop-blur-md border-transparent sticky top-0 z-50 transition-all duration-500 shadow-2xl ${isRTL ? "rtl" : "ltr"} relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-[#002060] via-[#002060]/90 to-transparent opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link href="/" className={`flex items-center group`}>
              <div className="relative flex-shrink-0">
                <img
                  src="/serafy-logo.png"
                  alt="Serafy & Partners Logo"
                  className="h-20 w-auto transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(199,162,70,0.6)]"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              </div>
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className={`flex items-center ${isRTL ? "space-x-reverse space-x-1" : "space-x-1"}`}>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-accent px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/20 relative group"
                >
                  <span className="relative z-10">{t(item.name)}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          <div className={`hidden lg:flex items-center ${isRTL ? "space-x-reverse space-x-4" : "space-x-4"}`}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={`flex items-center ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"} text-white/90 hover:text-accent hover:bg-accent/10 transition-all duration-300 border border-accent/20 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20`}
                >
                  <Globe className="h-4 w-4" />
                  <span>
                    {currentLanguage?.flag} {currentLanguage?.name}
                  </span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#002060]/95 border-accent/20 backdrop-blur-md">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className="text-white/90 hover:text-accent hover:bg-accent/10 cursor-pointer transition-all duration-300"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              asChild
              className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30 border border-accent/20"
            >
              <Link href="/consultation">{t("nav.bookConsultation")}</Link>
            </Button>
          </div>

          <div className={`lg:hidden flex items-center ${isRTL ? "space-x-reverse space-x-2" : "space-x-2"}`}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white/90 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <Globe className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#002060]/95 border-accent/20 backdrop-blur-md">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code as any)}
                    className="text-white/90 hover:text-accent hover:bg-accent/10 cursor-pointer"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/90 hover:text-accent hover:bg-accent/10 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden animate-in slide-in-from-top-2 duration-300">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#002060]/90 backdrop-blur-xl rounded-xl mt-2 border border-accent/20 shadow-2xl shadow-accent/10">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-accent block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-accent/10"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.name)}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black font-semibold transition-all duration-300"
                >
                  <Link href="/consultation">{t("nav.bookConsultation")}</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
