'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ArrowLeft,
  Calendar,
  User,
  Share2,
  Newspaper,
  Megaphone,
  CalendarDays,
} from 'lucide-react'
import Link from 'next/link'
import { Watermark } from '@/components/watermark'
import React from 'react'

const newsItems = [
  {
    id: 8,
    title: 'International Partnership with China Commercial Law Firm',
    category: 'Press Release',
    date: '2026-01-18',
    author: 'Communications Team',
    excerpt:
      'Serafy & Partners proudly announces its strategic partnership with China Commercial Law Firm, strengthening our capabilities in international commercial law and cross-border transactions.',
    content:
      'A landmark collaboration that expands our global reach and expertise in handling complex international legal matters, particularly in China-Egypt business relations. This partnership opens new opportunities for our clients seeking to engage in international transactions and dispute resolution in Asian markets.',
    image: '/newsroom/international-partnership.jpg',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 9,
    title: 'Board Meeting: Discussing Strategic Initiatives for 2026',
    category: 'Event',
    date: '2026-01-17',
    author: 'Executive Team',
    excerpt:
      'Our leadership team convened to outline strategic priorities for 2026, including expansion plans, new practice areas, and enhanced client service offerings.',
    content:
      'The board reviewed market opportunities, client feedback, and organizational goals to shape our direction for the coming year. Key decisions include expanding our Banking and Finance practice, enhancing technology capabilities, and opening new offices in strategic regional markets.',
    image: '/newsroom/conference-room-meeting.jpg',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 10,
    title: 'Executive Roundtable: Corporate Governance Best Practices',
    category: 'Event',
    date: '2026-01-16',
    author: 'Dr. May El Serafy',
    excerpt:
      'Hosted an exclusive roundtable discussion with leading corporate executives on corporate governance, compliance, and risk management strategies.',
    content:
      'Industry leaders shared insights on navigating complex regulatory environments and implementing effective governance frameworks. The discussion covered emerging compliance challenges, ESG considerations, and modern approaches to board management in the post-pandemic business landscape.',
    image: '/newsroom/boardroom-discussion.jpg',
    featured: true,
    readTime: '4 min read',
  },
  {
    id: 11,
    title: 'Professional Development Conference: Legal Excellence 2026',
    category: 'Event',
    date: '2026-01-15',
    author: 'HR Department',
    excerpt:
      'Our team participated in the annual Legal Excellence Conference, featuring presentations on emerging legal trends, technology in law, and professional development.',
    content:
      'Our attorneys gained valuable insights into artificial intelligence applications in legal practice and new regulatory frameworks. The conference featured world-renowned speakers discussing blockchain in law, artificial intelligence in contract analysis, and the future of legal service delivery.',
    image: '/newsroom/elegant-meeting.jpg',
    featured: true,
    readTime: '4 min read',
  },
  {
    id: 12,
    title: 'Client Meeting: Partnership Signing with International Firm',
    category: 'Press Release',
    date: '2026-01-14',
    author: 'Business Development',
    excerpt:
      'Successfully concluded partnership discussions with a major international corporation, signing comprehensive service agreements for ongoing legal representation.',
    content:
      'This partnership demonstrates our commitment to providing world-class legal services and expanding our client base across multiple sectors. The agreement includes comprehensive coverage of corporate advisory, litigation support, and regulatory compliance across multiple jurisdictions.',
    image: '/newsroom/partnership-signing.jpg',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 13,
    title: 'Law Firm Networking Event: Building Stronger Professional Relationships',
    category: 'Event',
    date: '2026-01-13',
    author: 'Communications',
    excerpt:
      'Participated in a prestigious networking event with other leading law firms and legal professionals to discuss collaboration opportunities and industry trends.',
    content:
      'Strengthened our professional network and identified potential collaborations for complex cross-border matters. The event brought together over 200 legal professionals from Africa, the Middle East, and Europe for meaningful discussions on international law and business trends.',
    image: '/newsroom/conference-two-women.jpg',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 14,
    title: 'Diplomatic Meeting: International Legal Cooperation and Partnerships',
    category: 'Press Release',
    date: '2026-01-18',
    author: 'International Affairs Team',
    excerpt:
      'Serafy & Partners strengthens international legal cooperation through diplomatic meetings with leading legal professionals from the Middle East and Europe.',
    content:
      'Our firm continues to expand its global network, forging strategic partnerships with renowned international legal experts and diplomatic officials. These meetings focused on advancing legal cooperation in areas including international commerce, dispute resolution, and cross-border regulatory compliance.',
    image: '/newsroom/diplomatic-meeting.jpg',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 15,
    title: 'Swiss Arbitration Conference: Advancing International Dispute Resolution',
    category: 'Event',
    date: '2026-01-17',
    author: 'Arbitration Department',
    excerpt:
      'Our arbitration team participated in the prestigious Swiss Arbitration Conference, discussing innovative approaches to international dispute resolution and cross-border litigation.',
    content:
      'The conference featured expert presentations on the latest developments in arbitration law and best practices for resolving complex international disputes efficiently. Key topics included AI in arbitration, sustainability considerations in international disputes, and emerging enforcement challenges.',
    image: '/newsroom/arbitration-conference.jpg',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 7,
    title: 'Important Notice: Diploma Exam Registration Requirements 2025/2026',
    category: 'Legal Update',
    date: '2024-12-13',
    author: 'Legal Affairs Team',
    excerpt:
      'Please submit all required documentation to the student affairs office to begin the diploma exam registration process for the current academic year. Final deadline: December 21, 2025.',
    content:
      'Dear Parents and Guardians, please ensure the following documents are submitted to the school student affairs office to initiate the diploma exam registration process for the 2025/2026 academic year: Payment receipts for all tuition fees for the current and previous years if applicable, recent birth certificate issued in December 2025 (original + 3 copies), 10 recent passport-sized photos (4x6) with white background in school uniform with printed name, student ID card copies (both sides on one page), and parent ID card copies (both sides on one page). Please submit these documents by December 21, 2025 to facilitate the registration process. Late submissions may incur additional fees or affect examination eligibility.',
    image: '/newsroom/school-registration-2025.jpg',
    featured: true,
    readTime: '4 min read',
  },
  {
    id: 16,
    title: 'Team Dinner Celebration: Building Stronger Professional Relationships',
    category: 'Event',
    date: '2026-01-20',
    author: 'Human Resources',
    excerpt:
      'Our team gathered for an elegant dinner event to celebrate achievements and strengthen bonds among colleagues. A memorable evening of fine dining and professional camaraderie.',
    content:
      'The team dinner brought together our talented professionals in a relaxed setting, fostering deeper connections and team unity. The event highlighted the collaborative spirit that drives our success in delivering exceptional legal services.',
    image: '/newsroom/team-dinner-event.jpg',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 17,
    title: 'Strategic Business Presentation: Energy and Infrastructure Sector Analysis',
    category: 'Press Release',
    date: '2026-01-19',
    author: 'Dr. May El Serafy',
    excerpt:
      'Dr. May El Serafy delivered an insightful presentation on emerging opportunities in the energy and infrastructure sectors, showcasing our firm\'s expertise in complex commercial matters.',
    content:
      'The presentation covered strategic case studies in the energy and infrastructure industries, demonstrating our comprehensive approach to cross-border transactions and sector-specific legal solutions.',
    image: '/newsroom/business-presentation.jpg',
    featured: true,
    readTime: '4 min read',
  },
  {
    id: 18,
    title: 'International Office Gathering: Celebrating Global Expansion',
    category: 'Event',
    date: '2026-01-18',
    author: 'International Affairs',
    excerpt:
      'Our international team members assembled at our prestigious office location to discuss global expansion initiatives and strengthen our international legal practice.',
    content:
      'This gathering brought together professionals from multiple jurisdictions to collaborate on international cases and coordinate our growing global presence in commercial law.',
    image: '/newsroom/office-team-gathering.jpg',
    featured: true,
    readTime: '3 min read',
  },
  {
    id: 19,
    title: 'Diplomatic Meeting: Dr. May El Serafy Meets International Legal Partners',
    category: 'Press Release',
    date: '2026-01-17',
    author: 'Strategic Partnerships',
    excerpt:
      'Dr. May El Serafy participated in a high-level diplomatic meeting with international legal colleagues and government officials to discuss bilateral cooperation and legal collaboration opportunities.',
    content:
      'The meeting focused on strengthening international legal networks and exploring opportunities for cross-border partnership in complex commercial and corporate matters.',
    image: '/newsroom/diplomatic-handshake.jpg',
    featured: true,
    readTime: '3 min read',
  },
]

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const article = newsItems.find((item) => item.id.toString() === params.id)

  if (!article) {
    return (
      <div className="flex flex-col relative min-h-screen">
        <section className="flex-1 py-16 bg-background relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We could not find the article you are looking for.
            </p>
            <Button asChild>
              <Link href="/newsroom">Back to Newsroom</Link>
            </Button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="flex flex-col relative">
      <Watermark opacity={0.02} />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-12 lg:py-16 relative overflow-hidden">
        <Watermark position="top-right" opacity={0.06} size="large" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Button variant="ghost" asChild className="mb-6 text-primary-foreground hover:bg-primary-foreground/10">
            <Link href="/newsroom" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Newsroom
            </Link>
          </Button>

          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Badge className="bg-accent/20 text-accent border-accent/30">
                {article.category}
              </Badge>
              {article.category === 'Press Release' && (
                <Megaphone className="h-4 w-4 text-accent" />
              )}
              {article.category === 'Legal Update' && (
                <Newspaper className="h-4 w-4 text-accent" />
              )}
              {article.category === 'Event' && (
                <CalendarDays className="h-4 w-4 text-accent" />
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(article.date).toLocaleDateString()}</span>
              </div>
              <div className="hidden sm:block">•</div>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Section */}
      <section className="py-12 lg:py-16 bg-background relative">
        <Watermark position="bottom-right" opacity={0.04} size="large" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden shadow-lg">
            <img
              src={article.image || '/placeholder.svg'}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Article Content */}
          <Card className="p-8 lg:p-12 mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                {article.excerpt}
              </p>

              <div className="bg-muted p-6 rounded-lg my-8 border-l-4 border-accent">
                <p className="text-base leading-relaxed text-foreground">
                  {article.content}
                </p>
              </div>

              <p className="text-lg leading-relaxed text-muted-foreground">
                For more information, please contact our office or visit our services
                page to learn how we can assist you.
              </p>
            </div>
          </Card>

          {/* Sharing and CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-muted p-6 rounded-lg mb-12">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Share This Article
              </h3>
              <p className="text-sm text-muted-foreground">
                Help us spread the word about our latest updates and insights
              </p>
            </div>
            <Button variant="outline" className="flex items-center gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Related Articles */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {newsItems
                .filter(
                  (item) =>
                    item.id !== article.id &&
                    item.category === article.category
                )
                .slice(0, 3)
                .map((relatedArticle) => (
                  <Card
                    key={relatedArticle.id}
                    className="overflow-hidden group hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedArticle.image || '/placeholder.svg'}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <Badge className="mb-2 bg-accent/20 text-accent border-accent/30">
                        {relatedArticle.category}
                      </Badge>
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                        {relatedArticle.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full bg-transparent"
                      >
                        <Link href={`/newsroom/${relatedArticle.id}`}>
                          Read More
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
            </div>
          </div>

          {/* Back to Newsroom CTA */}
          <div className="text-center py-8">
            <Button asChild size="lg">
              <Link href="/newsroom">Back to Newsroom</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
