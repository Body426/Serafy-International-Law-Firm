"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, Users, BookOpen, Award, ArrowRight, Phone, Lock } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Watermark } from "@/components/watermark"

export default function HomePage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className={`flex flex-col ${isRTL ? "rtl" : "ltr"} relative`}>
      <Watermark opacity={0.02} />

      {/* Hero Section */}
      <section className="hero-section relative min-h-screen overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: "url('/luxor-temple-sunset.jpg')",
            animation: "subtle-zoom 20s ease-in-out infinite alternate",
          }}
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/70 to-amber-900/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

        {/* Golden Accent Overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: "radial-gradient(ellipse at center, rgba(199, 162, 70, 0.3) 0%, transparent 70%)",
          }}
        />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full animate-ping"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-amber-300/40 rounded-full animate-ping"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          />
          <div
            className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-yellow-500/25 rounded-full animate-ping"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance text-white drop-shadow-2xl animate-fade-in">
              {t("home.heroTitle")}
            </h1>
            <p className="text-xl mb-8 text-white leading-relaxed drop-shadow-lg animate-fade-in-delay">
              {t("home.heroSubtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Button
                asChild
                size="lg"
                className="bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/consultation">
                  {t("nav.bookConsultation")}
                  <ArrowRight className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Phone className={`h-5 w-5 ${isRTL ? "ml-2" : "mr-2"}`} />
                {t("nav.callNow")}
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/employees">
                  <Lock className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                  Employees
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background relative">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url('/serafy-logo-symbol.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("home.expertiseTitle")}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("home.expertiseSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Scale,
                title: t("home.corporateLaw"),
                description: t("home.corporateDesc"),
                href: "/services/corporate-law",
              },
              {
                icon: Users,
                title: t("home.realEstate"),
                description: t("home.realEstateDesc"),
                href: "/services/real-estate",
              },
              {
                icon: BookOpen,
                title: t("home.arbitration"),
                description: t("home.arbitrationDesc"),
                href: "/services/arbitration",
              },
              {
                icon: Award,
                title: t("home.intellectualProperty"),
                description: t("home.ipDesc"),
                href: "/services/intellectual-property",
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <service.icon className="h-12 w-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">{service.description}</p>
                    <div className="mt-4 text-slate-700 hover:text-slate-900 font-medium transition-colors">
                      {t("home.learnMore")} →
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted relative">
        <div
          className="absolute bottom-4 right-4 w-32 h-32 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url('/serafy-logo-symbol.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{t("home.ctaTitle")}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t("home.ctaSubtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                {t("home.scheduleConsultation")}
                <ArrowRight className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">{t("home.learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.1); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
