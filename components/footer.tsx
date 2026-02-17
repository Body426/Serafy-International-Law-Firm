"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t, isRTL } = useLanguage()

  return (
    <footer className={`bg-gradient-to-br from-[#002060] to-[#001040] text-primary-foreground border-t border-primary/20 ${isRTL ? "rtl" : "ltr"} relative overflow-hidden`}>
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className={`flex items-center mb-6 ${isRTL ? "space-x-reverse space-x-3" : "space-x-3"}`}>
              <img src="/serafy-logo.png" alt="Serafy & Partners" className="h-14 w-auto hover:scale-105 transition-transform duration-300" />
              <div>
                <span className="text-2xl font-bold block">{t("nav.firmName")}</span>
                <span className="text-sm text-primary-foreground/70 font-medium">Legal Excellence Since 2004</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed text-sm max-w-md">
              {t("footer.description")}
            </p>
            <div className={`flex ${isRTL ? "space-x-reverse space-x-5" : "space-x-5"}`}>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-primary-foreground/70 hover:text-accent transition-colors duration-300 hover:scale-110 transform">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-primary-foreground/70 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-accent/50">→</span>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-primary-foreground/70 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-accent/50">→</span>
                  {t("nav.expertise")}
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-primary-foreground/70 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-accent/50">→</span>
                  {t("nav.team")}
                </Link>
              </li>
              <li>
                <Link href="/newsroom" className="text-primary-foreground/70 hover:text-accent hover:translate-x-1 transition-all duration-300 inline-flex items-center gap-2">
                  <span className="text-accent/50">→</span>
                  {t("nav.newsroom")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-accent">Contact</h3>
            <ul className="space-y-5">
              <li className={`flex items-start ${isRTL ? "space-x-reverse space-x-3" : "space-x-3"}`}>
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase text-primary-foreground/50 font-semibold mb-1">Email</p>
                  <span className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">elserafylawfirm@elserafylawfirm.com</span>
                </div>
              </li>
              <li className={`flex items-start ${isRTL ? "space-x-reverse space-x-3" : "space-x-3"}`}>
                <span className="text-accent font-bold text-lg">📍</span>
                <div>
                  <p className="text-xs uppercase text-primary-foreground/50 font-semibold mb-1">Location</p>
                  <span className="text-primary-foreground/80">Cairo, Egypt</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">{t("footer.copyright")} © 2004-{new Date().getFullYear()} Serafy & Partners Law Firm</p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
