"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function CorporateLawPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className={`flex flex-col ${isRTL ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Scale className="h-12 w-12 text-accent mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Corporate Law</h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Comprehensive corporate legal services to help your business navigate complex regulations and achieve
            sustainable growth.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Corporate Law Services</h2>
              <div className="space-y-4">
                {[
                  "Company Formation & Registration",
                  "Corporate Governance & Compliance",
                  "Mergers & Acquisitions",
                  "Contract Drafting & Review",
                  "Employment Law & HR Compliance",
                  "Intellectual Property Protection",
                  "Tax Planning & Optimization",
                  "Dispute Resolution & Litigation",
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
                  <CardTitle>Why Choose Our Corporate Law Team?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    With over 15 years of experience in Egyptian corporate law, our team provides strategic legal
                    counsel that aligns with your business objectives.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Expert knowledge of Egyptian Commercial Law</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Bilingual legal documentation (Arabic & English)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">24/7 legal consultation availability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our corporate law experts today for a consultation tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                asChild
              >
                <Link href="/team">Meet Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
