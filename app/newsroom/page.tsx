'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Calendar, User, Share2, ExternalLink, Filter, Newspaper, Megaphone, CalendarDays, X } from "lucide-react"
import Link from "next/link"
import { Watermark } from "@/components/watermark"

const newsItems = [
  {
    id: 8,
    title: "International Partnership with China Commercial Law Firm",
    category: "Press Release",
    date: "2026-01-18",
    author: "Communications Team",
    excerpt:
      "Serafy & Partners proudly announces its strategic partnership with China Commercial Law Firm, strengthening our capabilities in international commercial law and cross-border transactions.",
    content:
      "A landmark collaboration that expands our global reach and expertise in handling complex international legal matters, particularly in China-Egypt business relations.",
    image: "/newsroom/international-partnership.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 9,
    title: "Board Meeting: Discussing Strategic Initiatives for 2026",
    category: "Event",
    date: "2026-01-17",
    author: "Executive Team",
    excerpt:
      "Our leadership team convened to outline strategic priorities for 2026, including expansion plans, new practice areas, and enhanced client service offerings.",
    content:
      "The board reviewed market opportunities, client feedback, and organizational goals to shape our direction for the coming year.",
    image: "/newsroom/conference-room-meeting.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 10,
    title: "Executive Roundtable: Corporate Governance Best Practices",
    category: "Event",
    date: "2026-01-16",
    author: "Dr. May El Serafy",
    excerpt:
      "Hosted an exclusive roundtable discussion with leading corporate executives on corporate governance, compliance, and risk management strategies.",
    content:
      "Industry leaders shared insights on navigating complex regulatory environments and implementing effective governance frameworks.",
    image: "/newsroom/boardroom-discussion.jpg",
    featured: true,
    readTime: "4 min read",
  },
  {
    id: 11,
    title: "Professional Development Conference: Legal Excellence 2026",
    category: "Event",
    date: "2026-01-15",
    author: "HR Department",
    excerpt:
      "Our team participated in the annual Legal Excellence Conference, featuring presentations on emerging legal trends, technology in law, and professional development.",
    content:
      "Our attorneys gained valuable insights into artificial intelligence applications in legal practice and new regulatory frameworks.",
    image: "/newsroom/elegant-meeting.jpg",
    featured: true,
    readTime: "4 min read",
  },
  {
    id: 12,
    title: "Client Meeting: Partnership Signing with International Firm",
    category: "Press Release",
    date: "2026-01-14",
    author: "Business Development",
    excerpt:
      "Successfully concluded partnership discussions with a major international corporation, signing comprehensive service agreements for ongoing legal representation.",
    content:
      "This partnership demonstrates our commitment to providing world-class legal services and expanding our client base across multiple sectors.",
    image: "/newsroom/partnership-signing.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 16,
    title: "Team Dinner Celebration: Building Stronger Professional Relationships",
    category: "Event",
    date: "2026-01-20",
    author: "Human Resources",
    excerpt:
      "Our team gathered for an elegant dinner event to celebrate achievements and strengthen bonds among colleagues. A memorable evening of fine dining and professional camaraderie.",
    content:
      "The team dinner brought together our talented professionals in a relaxed setting, fostering deeper connections and team unity. The event highlighted the collaborative spirit that drives our success in delivering exceptional legal services.",
    image: "/newsroom/team-dinner-event.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 17,
    title: "Strategic Business Presentation: Energy and Infrastructure Sector Analysis",
    category: "Press Release",
    date: "2026-01-19",
    author: "Dr. May El Serafy",
    excerpt:
      "Dr. May El Serafy delivered an insightful presentation on emerging opportunities in the energy and infrastructure sectors, showcasing our firm's expertise in complex commercial matters.",
    content:
      "The presentation covered strategic case studies in the energy and infrastructure industries, demonstrating our comprehensive approach to cross-border transactions and sector-specific legal solutions.",
    image: "/newsroom/business-presentation.jpg",
    featured: true,
    readTime: "4 min read",
  },
  {
    id: 18,
    title: "International Office Gathering: Celebrating Global Expansion",
    category: "Event",
    date: "2026-01-18",
    author: "International Affairs",
    excerpt:
      "Our international team members assembled at our prestigious office location to discuss global expansion initiatives and strengthen our international legal practice.",
    content:
      "This gathering brought together professionals from multiple jurisdictions to collaborate on international cases and coordinate our growing global presence in commercial law.",
    image: "/newsroom/office-team-gathering.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 19,
    title: "Diplomatic Meeting: Dr. May El Serafy Meets International Legal Partners",
    category: "Press Release",
    date: "2026-01-17",
    author: "Strategic Partnerships",
    excerpt:
      "Dr. May El Serafy participated in a high-level diplomatic meeting with international legal colleagues and government officials to discuss bilateral cooperation and legal collaboration opportunities.",
    content:
      "The meeting focused on strengthening international legal networks and exploring opportunities for cross-border partnership in complex commercial and corporate matters.",
    image: "/newsroom/diplomatic-handshake.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 13,
    title: "Law Firm Networking Event: Building Stronger Professional Relationships",
    category: "Event",
    date: "2026-01-13",
    author: "Communications",
    excerpt:
      "Participated in a prestigious networking event with other leading law firms and legal professionals to discuss collaboration opportunities and industry trends.",
    content:
      "Strengthened our professional network and identified potential collaborations for complex cross-border matters.",
    image: "/newsroom/conference-two-women.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 14,
    title: "Diplomatic Meeting: International Legal Cooperation and Partnerships",
    category: "Press Release",
    date: "2026-01-18",
    author: "International Affairs Team",
    excerpt:
      "Serafy & Partners strengthens international legal cooperation through diplomatic meetings with leading legal professionals from the Middle East and Europe.",
    content:
      "Our firm continues to expand its global network, forging strategic partnerships with renowned international legal experts and diplomatic officials.",
    image: "/newsroom/diplomatic-meeting.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 15,
    title: "Swiss Arbitration Conference: Advancing International Dispute Resolution",
    category: "Event",
    date: "2026-01-17",
    author: "Arbitration Department",
    excerpt:
      "Our arbitration team participated in the prestigious Swiss Arbitration Conference, discussing innovative approaches to international dispute resolution and cross-border litigation.",
    content:
      "The conference featured expert presentations on the latest developments in arbitration law and best practices for resolving complex international disputes efficiently.",
    image: "/newsroom/arbitration-conference.jpg",
    featured: true,
    readTime: "3 min read",
  },
  {
    id: 7,
    title: "Important Notice: Diploma Exam Registration Requirements 2025/2026",
    category: "Legal Update",
    date: "2024-12-13",
    author: "Legal Affairs Team",
    excerpt:
      "Please submit all required documentation to the student affairs office to begin the diploma exam registration process for the current academic year. Final deadline: December 21, 2025.",
    content:
      "Dear Parents and Guardians, please ensure the following documents are submitted to the school's student affairs office to initiate the diploma exam registration process for the 2025/2026 academic year: Payment receipts for all tuition fees for the current and previous years if applicable, recent birth certificate issued in December 2025 (original + 3 copies), 10 recent passport-sized photos (4x6) with white background in school uniform with printed name, student ID card copies (both sides on one page), and parent ID card copies (both sides on one page). Please submit these documents by December 21, 2025 to facilitate the registration process.",
    image: "/newsroom/school-registration-2025.jpg",
    featured: true,
    readTime: "4 min read",
  },
]

const categories = ["All", "Press Release", "Legal Update", "Event"]

export default function NewsroomPage() {
  const [selectedArticle, setSelectedArticle] = useState<typeof newsItems[0] | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredNews = newsItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory
    return matchesSearch && matchesCategory && item.featured
  })

  return (
    <div className="flex flex-col relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 lg:py-24 relative overflow-hidden">
        <Watermark position="top-right" opacity={0.06} size="large" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Newsroom</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest legal developments, firm news, and industry insights
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-muted relative">
        <Watermark position="center-left" opacity={0.02} size="medium" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search news, updates, and announcements..." 
                className="pl-10 pr-4 py-3 text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center justify-center space-x-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Category:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-background relative">
        <Watermark position="bottom-right" opacity={0.04} size="large" />
        <Watermark position="center-left" opacity={0.02} size="small" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Featured News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.length > 0 ? (
              filteredNews.map((item, index) => (
                <Card 
                  key={item.id} 
                  className="group hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col cursor-pointer transform hover:scale-105 hover:-translate-y-2 animate-fade-in" 
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedArticle(item)}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700 ease-out cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedArticle(item)
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-4 w-full">
                        <p className="text-white text-sm font-semibold">Click to view details →</p>
                      </div>
                    </div>
                  </div>
                    <CardHeader className="flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30 group-hover:bg-accent group-hover:text-white transition-all duration-300">{item.category}</Badge>
                          {item.category === "Press Release" && <Megaphone className="h-4 w-4 text-accent" />}
                          {item.category === "Legal Update" && <Newspaper className="h-4 w-4 text-accent" />}
                          {item.category === "Event" && <CalendarDays className="h-4 w-4 text-accent" />}
                        </div>
                        <span className="text-xs text-muted-foreground">{item.readTime}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors duration-300 line-clamp-3">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground mb-6 leading-relaxed text-sm line-clamp-3">{item.excerpt}</p>
                      <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{item.author}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between gap-2">
                        <Button 
                          className="flex-1 bg-accent hover:bg-accent/90 transform group-hover:scale-110 transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedArticle(item)
                          }}
                        >
                          View Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="px-2 transform group-hover:scale-110 transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation()
                            window.open(`/newsroom/${item.id}`, '_blank')
                          }}
                        >
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in overflow-y-auto"
          onClick={() => setSelectedArticle(null)}
        >
          <Card 
            className="max-w-4xl w-full max-h-[90vh] overflow-y-auto border-accent/30 shadow-2xl bg-background"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
                onClick={() => setSelectedArticle(null)}
              >
                <X className="h-5 w-5" />
              </Button>
              
              {/* Featured Image */}
              <div className="w-full h-64 md:h-96 overflow-hidden relative">
                <img
                  src={selectedArticle.image || "/placeholder.svg"}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className="bg-accent/20 text-accent border-accent/30">
                      {selectedArticle.category}
                    </Badge>
                    {selectedArticle.category === "Press Release" && <Megaphone className="h-4 w-4 text-accent" />}
                    {selectedArticle.category === "Legal Update" && <Newspaper className="h-4 w-4 text-accent" />}
                    {selectedArticle.category === "Event" && <CalendarDays className="h-4 w-4 text-accent" />}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedArticle.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(selectedArticle.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <CardContent className="p-6 md:p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6 font-medium">
                    {selectedArticle.excerpt}
                  </p>

                  <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-accent">
                    <p className="text-base leading-relaxed text-foreground">
                      {selectedArticle.content}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-muted p-6 rounded-lg mt-8">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        Share This Article
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Help us spread the word about our latest updates
                      </p>
                    </div>
                    <div className="flex gap-3">
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2"
                        onClick={() => window.open(`/newsroom/${selectedArticle.id}`, '_blank')}
                      >
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                      <Button 
                        className="bg-accent hover:bg-accent/90"
                        onClick={() => {
                          window.location.href = `/newsroom/${selectedArticle.id}`
                        }}
                      >
                        Read Full Article
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
        <Watermark position="center" opacity={0.05} size="medium" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Subscribe to our newsletter to receive the latest news and legal updates directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email address"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button className="bg-accent hover:bg-accent/90">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}
