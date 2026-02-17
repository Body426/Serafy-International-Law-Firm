"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Gavel } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function ArbitrationPage() {
  const { t, isRTL } = useLanguage()

  return (
    <div className={`flex flex-col ${isRTL ? "rtl" : "ltr"}`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Gavel className="h-12 w-12 text-accent mr-4" />
            <h1 className="text-4xl lg:text-5xl font-bold">Arbitration & Mediation</h1>
          </div>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Efficient alternative dispute resolution services to resolve conflicts outside traditional court
            proceedings.
          </p>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Arbitration Services</h2>
              <div className="space-y-4">
                {[
                  "Commercial Arbitration Proceedings",
                  "International Arbitration Cases",
                  "Construction Dispute Resolution",
                  "Investment Treaty Arbitration",
                  "Mediation & Conciliation Services",
                  "Arbitration Clause Drafting",
                  "Expert Witness Services",
                  "Enforcement of Arbitral Awards",
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
                  <CardTitle>Why Choose Arbitration?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Arbitration offers a faster, more cost-effective alternative to traditional litigation, with
                    specialized expertise and confidential proceedings.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Faster resolution than court proceedings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Confidential and private proceedings</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-accent mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm">Expert arbitrators in specialized fields</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Resolve Your Dispute Efficiently</h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experienced arbitration team can help you navigate complex disputes with expertise and discretion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Discuss Your Case
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/team">Meet Our Arbitrators</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
