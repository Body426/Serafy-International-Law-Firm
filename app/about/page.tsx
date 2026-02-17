import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Watermark } from "@/components/watermark"

export default function AboutPage() {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <Watermark opacity={0.02} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('/serafy-logo-symbol.png')] bg-center bg-no-repeat bg-contain opacity-5"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent drop-shadow-2xl">
              About Serafy & Partners
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-300">
              Building trust through excellence, integrity, and unwavering commitment to our clients' success
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div
          className="absolute top-1/4 right-8 w-64 h-64 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url('/serafy-logo.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-in fade-in-0 slide-in-from-left-8 duration-1000">
              <div className="relative group">
                <img
                  src="/team/dr-may-photo.jpg"
                  alt="Dr. May El Serafy - Managing Partner"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transition-all duration-500 group-hover:scale-105 group-hover:shadow-accent/20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-accent/10 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
            </div>
            <div className="animate-in fade-in-0 slide-in-from-right-8 duration-1000 delay-300">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent mb-8 drop-shadow-lg">
                A Message from Our Founder
              </h2>
              <div className="space-y-6 text-white/90 leading-relaxed text-lg">
                <p className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-500">
                  Founded on the philosophy of Excellence, Shared Growth, and Collective Success, Serafy & Partners is a
                  forward-looking, full-service law firm serving 25+ sectors in Egypt and beyond—from corporate and
                  international investment to intellectual property and high-tech industries.
                </p>
                <p className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-700">
                  Through strategic partnerships with global law firms, including offices in China, and a bilingual team
                  with international expertise, we deliver innovative, efficient, and timely legal solutions.
                </p>
                <p className="animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-900">
                  Serafy stands as the trusted partner for corporations, investors, and high-net-worth individuals
                  navigating today's fast-changing world.
                </p>
                <p className="font-bold text-accent text-xl mt-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-1100">
                  - Dr. May El Serafy, Founding Partner – Head of Corporate and M&A Group
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent mb-6 drop-shadow-lg">
              Our Foundation
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Our Vision",
                content:
                  "To be the leading law firm in the region, recognized for our innovative legal solutions, ethical practices, and transformative impact on our clients' businesses and lives.",
                delay: "delay-300",
              },
              {
                icon: Target,
                title: "Our Mission",
                content:
                  "To provide exceptional legal counsel that empowers our clients to achieve their goals while upholding the highest standards of professional integrity and social responsibility.",
                delay: "delay-500",
              },
              {
                icon: Heart,
                title: "Our Values",
                content:
                  "• Integrity in every interaction\n• Excellence in legal expertise\n• Innovation in problem-solving\n• Commitment to client success",
                delay: "delay-700",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center bg-gradient-to-br from-gray-900 to-black border-accent/20 hover:border-accent/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 group animate-in fade-in-0 slide-in-from-bottom-8 duration-1000 ${item.delay}`}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <item.icon className="h-16 w-16 text-accent mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(199,162,70,0.6)] relative z-10" />
                  <h3 className="text-2xl font-bold text-white mb-6 relative z-10">{item.title}</h3>
                  <div className="text-white/80 leading-relaxed whitespace-pre-line relative z-10">{item.content}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Firm History */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Two decades of growth, innovation, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                year: "2004",
                title: "Foundation",
                description:
                  "El Serafy Law Firm established with a focus on corporate law and business advisory services.",
              },
              {
                year: "2010",
                title: "Expansion",
                description: "Extended services to include real estate law and international arbitration practices.",
              },
              {
                year: "2018",
                title: "Recognition",
                description: 'Awarded "Law Firm of the Year" for outstanding contributions to legal excellence.',
              },
              {
                year: "2024",
                title: "Innovation",
                description: "Leading digital transformation in legal services with cutting-edge technology solutions.",
              },
            ].map((milestone, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black via-accent/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 animate-pulse"></div>
        <div
          className="absolute bottom-8 left-8 w-48 h-48 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url('/serafy-logo.png')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-accent via-yellow-400 to-accent bg-clip-text text-transparent drop-shadow-lg animate-in fade-in-0 slide-in-from-top-4 duration-1000">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-white/90 mb-10 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000 delay-300">
            Experience the difference that dedicated legal expertise can make for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in-0 slide-in-from-bottom-6 duration-1000 delay-500">
            <Button
              size="lg"
              className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-accent/30"
              asChild
            >
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/40 text-white hover:bg-accent/10 bg-transparent hover:border-accent transition-all duration-300 hover:scale-105 px-8 py-4 rounded-xl"
              asChild
            >
              <Link href="/expertise">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
