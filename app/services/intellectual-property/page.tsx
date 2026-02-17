"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Shield } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function IntellectualPropertyPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className={`flex flex-col ${isRTL ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Shield className="h-12 w-12 text-accent mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Intellectual Property</h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Comprehensive IP protection services to safeguard your innovations, brands, and creative works.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">IP Protection Services</h2>
              <div className="space-y-4">
                {[
                  "Trademark Registration & Protection",
                  "Patent Application & Prosecution",
                  "Copyright Registration & Enforcement",
                  "Trade Secret Protection",
                  "IP Licensing & Technology Transfer",
                  "Brand Protection & Anti-Counterfeiting",
                  "IP Due Diligence & Valuation",
                  "IP Litigation & Enforcement",
                ].map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Protect Your Innovations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    In today's competitive market, protecting your intellectual property is crucial for business
                    success. Our IP experts provide comprehensive protection strategies.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Regional and international IP registration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Strategic IP portfolio management</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Enforcement and anti-piracy measures</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Secure Your Intellectual Assets</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let your valuable innovations go unprotected. Contact our IP specialists for comprehensive
              protection strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start IP Protection
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/library">IP Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
