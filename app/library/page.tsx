import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Download, ExternalLink, Calendar, User, Filter, BookOpen, FileText, Gavel } from "lucide-react"
import Link from "next/link"
import { Watermark } from "@/components/watermark"

const resources = [
  {
    id: 1,
    title: "Corporate Governance Best Practices in Egypt",
    type: "Article",
    category: "Corporate Law",
    author: "Dr. May El Serafy",
    date: "2024-01-15",
    description:
      "Comprehensive guide to implementing effective corporate governance structures in Egyptian companies, covering board composition, audit committees, and regulatory compliance.",
    downloadUrl: "#",
    externalUrl: null,
    featured: true,
  },
  {
    id: 2,
    title: "New Real Estate Investment Law: Key Changes and Implications",
    type: "Legal Update",
    category: "Real Estate",
    author: "Dr. May El Serafy",
    date: "2024-01-10",
    description:
      "Analysis of the recent amendments to Egypt's real estate investment law and their impact on foreign investors and development projects.",
    downloadUrl: "#",
    externalUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "International Arbitration Trends in MENA Region",
    type: "Research Paper",
    category: "Arbitration",
    author: "Sarah Al-Rashid",
    date: "2023-12-20",
    description:
      "In-depth analysis of arbitration trends, case statistics, and emerging practices in the Middle East and North Africa region.",
    downloadUrl: "#",
    externalUrl: "https://example.com/arbitration-trends",
    featured: false,
  },
  {
    id: 4,
    title: "IP Protection Strategies for Tech Startups",
    type: "Guide",
    category: "Intellectual Property",
    author: "Dr. Fatima Hassan",
    date: "2023-12-15",
    description:
      "Practical guide for technology startups on protecting intellectual property, including patents, trademarks, and trade secrets.",
    downloadUrl: "#",
    externalUrl: null,
    featured: false,
  },
  {
    id: 5,
    title: "Banking Regulations Update: Central Bank Circular 2024",
    type: "Legal Alert",
    category: "Banking & Finance",
    author: "Khaled Nour",
    date: "2023-12-01",
    description:
      "Summary and analysis of the latest Central Bank of Egypt circular affecting banking operations and compliance requirements.",
    downloadUrl: "#",
    externalUrl: null,
    featured: false,
  },
  {
    id: 6,
    title: "Employment Law Changes: New Labor Code Provisions",
    type: "Article",
    category: "Employment Law",
    author: "Mona Abdel-Rahman",
    date: "2023-11-25",
    description: "Overview of recent changes to Egypt's labor code and their implications for employers and employees.",
    downloadUrl: "#",
    externalUrl: null,
    featured: false,
  },
  {
    id: 7,
    title: "Cross-Border M&A: Regulatory Framework in Egypt",
    type: "White Paper",
    category: "Corporate Law",
    author: "Dr. May El Serafy",
    date: "2023-11-15",
    description:
      "Comprehensive analysis of the regulatory framework governing cross-border mergers and acquisitions in Egypt.",
    downloadUrl: "#",
    externalUrl: null,
    featured: false,
  },
  {
    id: 8,
    title: "Construction Contracts: Risk Allocation Best Practices",
    type: "Guide",
    category: "Real Estate",
    author: "Omar Mansour",
    date: "2023-11-01",
    description:
      "Best practices for risk allocation in construction contracts, including force majeure, delay, and cost overrun provisions.",
    downloadUrl: "#",
    externalUrl: null,
    featured: false,
  },
]

const categories = [
  "All",
  "Corporate Law",
  "Real Estate",
  "Arbitration",
  "Intellectual Property",
  "Banking & Finance",
  "Employment Law",
]
const resourceTypes = ["All", "Article", "Legal Update", "Research Paper", "Guide", "Legal Alert", "White Paper"]

export default function LibraryPage() {
  return (
    <div className="flex flex-col bg-background relative">
      <Watermark position="top-right" opacity={0.02} size="large" />
      <Watermark position="bottom-left" opacity={0.03} size="medium" />

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
              <BookOpen className="h-5 w-5 text-accent" />
              <span className="text-accent font-medium">Knowledge Center</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-fade-in delay-200">
              Legal Library & Resources
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-400">
              Access our comprehensive collection of legal insights, publications, and industry updates
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 bg-gradient-to-br from-muted/30 to-background relative">
        <Watermark position="center" opacity={0.015} size="medium" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Search Bar */}
            <div className="relative max-w-3xl mx-auto animate-fade-in">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles, publications, and legal insights..."
                className="pl-12 pr-4 py-4 text-lg border-accent/20 focus:border-accent/40 hover:border-accent/30 transition-all duration-300 bg-background/80 backdrop-blur-sm"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-8 justify-center animate-fade-in delay-200">
              <div className="flex items-center space-x-3">
                <Filter className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">Category:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Badge
                      key={category}
                      variant="outline"
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground border-accent/30 transition-all duration-300 hover:scale-105"
                    >
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-medium text-foreground">Type:</span>
                <div className="flex flex-wrap gap-2">
                  {resourceTypes.map((type) => (
                    <Badge
                      key={type}
                      variant="outline"
                      className="cursor-pointer hover:bg-accent hover:text-accent-foreground border-accent/30 transition-all duration-300 hover:scale-105"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-background relative">
        <Watermark position="top-left" opacity={0.02} size="large" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent animate-fade-in">
              Featured Publications
            </h2>
            <p className="text-xl text-muted-foreground animate-fade-in delay-200">
              Our latest and most impactful legal insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
            {resources
              .filter((resource) => resource.featured)
              .map((resource, index) => (
                <Card
                  key={resource.id}
                  className="group premium-card border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-4">
                          <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/30">
                            {resource.category}
                          </Badge>
                          <Badge variant="outline" className="border-accent/30 text-accent">
                            {resource.type}
                          </Badge>
                        </div>
                        <CardTitle className="text-2xl group-hover:text-accent transition-colors duration-300">
                          {resource.title}
                        </CardTitle>
                      </div>
                      <div className="flex items-center space-x-2 text-accent group-hover:scale-110 transition-transform duration-300">
                        {resource.type === "Article" && <FileText className="h-6 w-6" />}
                        {resource.type === "Legal Update" && <Gavel className="h-6 w-6" />}
                        {resource.type === "Research Paper" && <BookOpen className="h-6 w-6" />}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{resource.description}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-accent" />
                          <span>{resource.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-accent" />
                          <span>{new Date(resource.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <Button
                        size="lg"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all duration-300"
                        asChild
                      >
                        <Link href={resource.downloadUrl}>
                          <Download className="h-4 w-4 mr-2" />
                          Download PDF
                        </Link>
                      </Button>
                      {resource.externalUrl && (
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground hover:scale-105 transition-all duration-300 bg-transparent"
                          asChild
                        >
                          <Link href={resource.externalUrl} target="_blank">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Online
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* All Resources */}
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-12 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              All Resources
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {resources
                .filter((resource) => !resource.featured)
                .map((resource, index) => (
                  <Card
                    key={resource.id}
                    className="group premium-card border-accent/20 hover:border-accent/40 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-3">
                            <Badge variant="secondary" className="text-xs bg-accent/10 text-accent border-accent/30">
                              {resource.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs border-accent/30 text-accent">
                              {resource.type}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                            {resource.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2">
                        {resource.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                          <span>{resource.author}</span>
                          <span>•</span>
                          <span>{new Date(resource.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
                            asChild
                          >
                            <Link href={resource.downloadUrl}>
                              <Download className="h-4 w-4" />
                            </Link>
                          </Button>
                          {resource.externalUrl && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="hover:bg-accent/10 hover:text-accent transition-all duration-300"
                              asChild
                            >
                              <Link href={resource.externalUrl} target="_blank">
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent/90 to-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-foreground/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-foreground/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">Stay Updated</h2>
          <p className="text-xl text-accent-foreground/90 mb-10 animate-fade-in delay-200">
            Subscribe to our newsletter to receive the latest legal insights and updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto animate-fade-in delay-400">
            <Input
              placeholder="Enter your email address"
              className="bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60 py-4 text-lg"
            />
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
