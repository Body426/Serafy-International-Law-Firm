"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Home } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function RealEstatePage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className={`flex flex-col ${isRTL ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Home className="h-12 w-12 text-accent mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Real Estate Law</h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Expert legal guidance for all your real estate transactions, from residential purchases to commercial
            developments.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Real Estate Legal Services</h2>
              <div className="space-y-4">
                {[
                  "Property Purchase & Sale Agreements",
                  "Title Search & Due Diligence",
                  "Lease Agreement Drafting",
                  "Property Development Permits",
                  "Zoning & Land Use Compliance",
                  "Real Estate Investment Structuring",
                  "Property Dispute Resolution",
                  "Mortgage & Financing Documentation",
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
                  <CardTitle>Real Estate Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Our real estate practice covers all aspects of property law in Egypt, ensuring smooth transactions
                    and protecting your investments.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Comprehensive property due diligence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Government liaison and permit assistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Multi-language documentation support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need Real Estate Legal Assistance?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether buying, selling, or developing property, our experienced team is here to guide you through every
              step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Legal Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/expertise">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
