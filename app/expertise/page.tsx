import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Home, Scale, Lightbulb, CheckCircle, ArrowRight, Users, FileText, Gavel, Briefcase } from "lucide-react"
import Link from "next/link"
import { Watermark } from "@/components/watermark"

const practiceAreas = [
  {
    icon: Building2,
    title: "Corporate Establishment & Structuring",
    description: "Comprehensive corporate legal services from formation to complex transactions",
    services: [
      "Incorporation & Restructuring",
      "Capital Changes & Governance",
      "Day-to-day Corporate Legal Support",
      "Business Formation & Structuring",
      "Mergers & Acquisitions",
      "Corporate Compliance",
    ],
    cases: [
      "Successfully structured $50M merger for regional manufacturing company",
      "Advised multinational corporation on Egyptian market entry strategy",
      "Negotiated complex joint venture agreement in telecommunications sector",
    ],
  },
  {
    icon: Home,
    title: "Infrastructure & Real Estate Law",
    description: "Full-service real estate and infrastructure legal support for all project types",
    services: [
      "Project Development & Planning",
      "Land Acquisition & Sales",
      "Construction Contracts & Management",
      "Project Finance Structuring",
      "Property Leasing & Tenancy",
      "Infrastructure Dispute Resolution",
    ],
    cases: [
      "Facilitated $100M commercial real estate development project",
      "Resolved complex property dispute involving multiple stakeholders",
      "Structured innovative financing for luxury residential development",
    ],
  },
  {
    icon: Scale,
    title: "Arbitration & Alternative Dispute Resolution",
    description: "Expert representation in domestic and international arbitration proceedings",
    services: [
      "Domestic & International Arbitration",
      "Mediation & Settlement Negotiations",
      "Cross-Border Litigation",
      "Investment Arbitration",
      "Enforcement of Foreign Awards",
      "Alternative Dispute Resolution",
    ],
    cases: [
      "Won $25M international arbitration case under ICC rules",
      "Successfully mediated complex construction dispute saving 18 months",
      "Enforced foreign arbitral award worth $15M in Egyptian courts",
    ],
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property & Technology Law",
    description: "Protecting intellectual assets and navigating complex technology legal landscapes",
    services: [
      "Patent Applications & Prosecution",
      "Trademark Registration & Protection",
      "Copyright & Trade Secrets Protection",
      "IP Licensing & Technology Transfer",
      "IP Litigation & Enforcement",
      "Technology & AI Compliance",
    ],
    cases: [
      "Secured patent portfolio worth $10M for tech startup",
      "Successfully defended trademark infringement case for major brand",
      "Negotiated licensing agreement generating $5M annual revenue",
    ],
  },
  {
    icon: Building2,
    title: "Banking, Finance & Capital Markets",
    description: "Comprehensive financial and banking legal expertise for complex transactions",
    services: [
      "Banking Compliance & Regulations",
      "Project Finance Structuring",
      "Structured Finance Solutions",
      "Syndicated Loans & Financing",
      "Capital Markets & IPOs",
      "Asset Securitization & REITs",
    ],
    cases: [
      "Structured $75M project finance deal for energy sector",
      "Assisted with IPO documentation for listed company",
      "Negotiated syndicated loan facility worth $150M",
    ],
  },
  {
    icon: Briefcase,
    title: "Employment & Labor Law",
    description: "Complete employment and labor law services for organizations and individuals",
    services: [
      "Employment Contracts & HR Policies",
      "Investigations & Compliance",
      "Restructuring & Redundancy",
      "Labor Dispute Resolution",
      "Employee Benefits & Equity Plans",
      "Workplace Policy Development",
    ],
    cases: [
      "Successfully managed major workforce restructuring for multinational",
      "Resolved complex employment dispute with favorable settlement",
      "Designed comprehensive equity incentive plan for growing tech firm",
    ],
  },
  {
    icon: Scale,
    title: "Civil & Commercial Litigation",
    description: "Strategic representation in civil, commercial and complex dispute matters",
    services: [
      "Commercial Dispute Representation",
      "Contract & Shareholder Disputes",
      "Civil Litigation Strategy",
      "Bankruptcy & Insolvency Proceedings",
      "Financial Crimes Defense",
      "Complex Multi-party Litigation",
    ],
    cases: [
      "Won complex shareholder dispute valued at $30M",
      "Successfully defended client in commercial contract litigation",
      "Resolved intricate multi-party commercial dispute",
    ],
  },
  {
    icon: Home,
    title: "Regulatory, Administrative & Government Affairs",
    description: "Expert guidance on regulatory compliance and government interactions",
    services: [
      "Administrative Litigation & Appeals",
      "Licensing & Permits",
      "Government Advisory & Relations",
      "Regulatory Compliance Programs",
      "Legislative Drafting & Policy",
      "Customs & Import-Export Law",
    ],
    cases: [
      "Successfully navigated complex regulatory approval process",
      "Obtained critical government licensing for major investment",
      "Resolved customs and import-export compliance matter",
    ],
  },
]

export default function ExpertisePage() {
  return (
    <div className="flex flex-col bg-background relative">
      <Watermark position="top-left" opacity={0.02} size="large" />
      <Watermark position="bottom-right" opacity={0.03} size="medium" />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-black/95 to-accent/20 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/10"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-accent/10 rounded-full border border-accent/20 animate-fade-in">
              <Scale className="h-5 w-5 text-accent" />
              <span className="text-accent font-medium">Legal Excellence</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-fade-in delay-200">
              Our Areas of Expertise
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-400">
              Comprehensive legal solutions backed by decades of experience and proven results
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="py-20 bg-background relative">
        <Watermark position="center" opacity={0.015} size="large" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {practiceAreas.map((area, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start animate-fade-in ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} group`}>
                  <div className="flex items-center space-x-4 mb-8 group-hover:scale-105 transition-all duration-500">
                    <div className="p-4 bg-accent/10 rounded-full border border-accent/20 group-hover:bg-accent/20 transition-all duration-300">
                      <area.icon className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-foreground bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                      {area.title}
                    </h2>
                  </div>
                  <p className="text-xl text-muted-foreground mb-10 leading-relaxed">{area.description}</p>

                  {/* Services */}
                  <div className="mb-10">
                    <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center">
                      <FileText className="h-6 w-6 mr-3 text-accent" />
                      Our Services
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {area.services.map((service, serviceIndex) => (
                        <div
                          key={serviceIndex}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/5 transition-all duration-300 group/service"
                        >
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 group-hover/service:scale-110 transition-transform duration-300" />
                          <span className="text-muted-foreground group-hover/service:text-foreground transition-colors duration-300">
                            {service}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
                    asChild
                  >
                    <Link href="/contact">
                      Discuss Your Case
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>

                {/* Representative Cases */}
                <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} group`}>
                  <Card className="h-full premium-card border-accent/20 hover:border-accent/40 group-hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20">
                    <CardHeader>
                      <CardTitle className="flex items-center text-foreground text-2xl">
                        <Gavel className="h-6 w-6 mr-3 text-accent group-hover:rotate-12 transition-transform duration-300" />
                        Representative Cases
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {area.cases.map((case_, caseIndex) => (
                          <div
                            key={caseIndex}
                            className="border-l-4 border-accent pl-6 py-3 hover:border-l-8 hover:pl-4 transition-all duration-300 hover:bg-accent/5 rounded-r-lg"
                          >
                            <p className="text-muted-foreground leading-relaxed text-lg">{case_}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative">
        <Watermark position="bottom-left" opacity={0.025} size="medium" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-accent/10 rounded-full border border-accent/20 animate-fade-in">
              <Users className="h-5 w-5 text-accent" />
              <span className="text-accent font-medium">Excellence</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent animate-fade-in delay-200">
              Why Choose Serafy & Partners?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in delay-400">
              Our commitment to excellence sets us apart in the legal industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Highly qualified lawyers with specialized expertise in each practice area",
              },
              {
                icon: Scale,
                title: "Proven Results",
                description: "Track record of successful outcomes in complex legal matters",
              },
              {
                icon: CheckCircle,
                title: "Client-Focused",
                description: "Personalized attention and tailored solutions for every client",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Cutting-edge legal strategies and modern technology solutions",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center group premium-card border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-all duration-300">
                    <feature.icon className="h-12 w-12 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent/90 to-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-foreground/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-foreground/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in text-white">Need Legal Assistance?</h2>
          <p className="text-xl text-white/90 mb-10 animate-fade-in delay-200">
            Our experienced team is ready to help you navigate your legal challenges with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-400">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 hover:shadow-xl"
              asChild
            >
              <Link href="/contact">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 bg-transparent px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/team">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
