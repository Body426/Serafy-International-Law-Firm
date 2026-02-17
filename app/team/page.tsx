import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Mail, Users, Award, BookOpen, Scale, Briefcase } from "lucide-react"
import Link from "next/link"
import { Watermark } from "@/components/watermark"

const teamMembers = [
  {
    id: 1,
    name: "Dr. May El Serafy",
    title: "Managing Partner – Head of Corporate and M&A Group",
    specializations: ["Corporate Law", "Mergers & Acquisitions"],
    bio: "Dr. May El Serafy founded Serafy & Partners Law Firm in 2004 with a vision to provide world-class legal services. With over 25 years of experience in corporate law, she has led numerous high-profile M&A transactions and advised multinational corporations on complex legal matters.",
    education: "LL.M. Harvard Law School, LL.B. Cairo University",
    experience: "25+ years",
    languages: ["Arabic", "English"],
    email: "elserafylawfirm@elserafylawfirm.com",
    linkedin: "https://www.linkedin.com/in/dr-may-el-serafy-5135791b7/",
    image: "/team/dr-may-photo.jpg",
  },
  {
    id: 2,
    name: "Dr. Waleed",
    title: "Partner - Head of Capital Market & Procedures Group",
    specializations: ["Capital Markets", "Corporate Procedures", "Securities Law"],
    bio: "Dr. Waleed is a distinguished partner with extensive experience in capital markets and corporate procedures. He has successfully advised major corporations on securities offerings and regulatory compliance, with a proven track record in complex capital market transactions.",
    education: "LL.M. Corporate Law, LL.B. Cairo University",
    experience: "20+ years",
    languages: ["Arabic", "English"],
    email: "elserafylawfirm@elserafylawfirm.com",
    linkedin: "#",
    image: "/team/dr-waleed.jpg",
  },
  {
    id: 3,
    name: "Dr. Emmie",
    title: "Partner - Head of International Law & Arbitration",
    specializations: ["International Law", "Arbitration", "Cross-Border Transactions"],
    bio: "Dr. Emmie is a distinguished partner specializing in international law and arbitration. With extensive experience in cross-border transactions and dispute resolution, she has successfully represented clients in complex international arbitration cases and advised on major international business transactions.",
    education: "LL.M. International Law, LL.B. Cairo University",
    experience: "18+ years",
    languages: ["Arabic", "English", "French"],
    email: "elserafylawfirm@elserafylawfirm.com",
    linkedin: "#",
    image: "/team/dr-emmie.jpg",
  },
  {
    id: 4,
    name: "Nour Elden Medhat",
    title: "Senior Associate",
    specializations: ["Corporate Law", "Contract Law"],
    bio: "Nour Elden Medhat is a dedicated senior associate specializing in corporate law and contract negotiations. With his strong analytical skills and attention to detail, he has successfully handled numerous complex corporate transactions and contract drafting for both local and international clients.",
    education: "LL.M. Corporate Law, LL.B. Cairo University",
    experience: "8+ years",
    languages: ["Arabic", "English"],
    email: "elserafylawfirm@elserafylawfirm.com",
    linkedin: "#",
    image: "/team/nour-elden-medhat.jpg",
  },
  {
    id: 5,
    name: "Mohamed Soliman",
    title: "Senior Paralegal",
    specializations: ["Legal Research", "Document Preparation", "Client Relations"],
    bio: "Mohamed is a dedicated senior paralegal specializing in legal research and client relations. His attention to detail and excellent communication skills make him an invaluable asset to our team, ensuring smooth operations and exceptional client service.",
    education: "Paralegal Certificate - Egyptian Legal Institute, B.A. Business Administration",
    experience: "4+ years",
    languages: ["Arabic", "English"],
    email: "elserafylawfirm@elserafylawfirm.com",
    linkedin: "#",
    image: "/team/mohamed-soliman.jpg",
  },
  {
    id: 6,
    name: "Nadia Rajab",
    title: "Senior Paralegal",
    specializations: ["Client Relations", "Legal Documentation", "Administrative Support"],
    bio: "Nadia is a dedicated paralegal specializing in client relations and legal documentation. Her attention to detail and excellent communication skills make her an invaluable asset to our team, ensuring smooth operations and exceptional client service.",
    education: "Paralegal Certificate - Egyptian Legal Institute, B.A. Business Administration",
    experience: "2+ years",
    languages: ["Arabic", "English"],
    email: "elserafylawfirm@elserafylawfirm.com",
    linkedin: "#",
    image: "/team/nadia-paralegal.jpg",
  },
  {
    id: 7,
    name: "Sara",
    title: "Senior Legal Consultant",
    specializations: ["Corporate Advisory", "Legal Strategy", "Business Development"],
    bio: "Saraa is a dedicated senior legal consultant specializing in corporate advisory and strategic legal guidance. With her comprehensive understanding of business dynamics and legal frameworks, she provides exceptional strategic counsel to corporate clients, ensuring optimal outcomes for their business goals.",
    education: "LL.M. Corporate Law, LL.B. Cairo University",
    experience: "12+ years",
    languages: ["Arabic", "English"],
    email: "elserafylawfirm@elserafylawfirm.com",
    linkedin: "#",
    image: "/team/saraa.jpg",
  },
  {
    id: 8,
    name: "Amira",
    title: "Legal Associate",
    specializations: ["Corporate Law", "Contract Law", "Legal Documentation"],
    bio: "Amira is a dedicated legal associate bringing fresh perspectives and strong analytical skills to complex legal matters. Her meticulous attention to detail and commitment to excellence make her an essential member of our team, ensuring comprehensive support across all practice areas.",
    education: "LL.B. Cairo University, Continuing Education in Corporate Law",
    experience: "3+ years",
    languages: ["Arabic", "English"],
    email: "elserafylawfirm@elserafylawfirm.com",
    linkedin: "#",
    image: "/team/amira.jpg",
  },
]

// Organize team by hierarchy level
const partnerMembers = teamMembers.filter(m => m.id <= 3)
const staffMembers = teamMembers.filter(m => m.id > 3)

const specializations = ["All", "Corporate Law", "Commercial Litigation", "Contract Law", "Legal Research"]

export default function TeamPage() {
  return (
    <div className="flex flex-col bg-background relative">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-background to-muted text-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-[#002060]/20 rounded-full border border-yellow-400/30">
              <Scale className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Legal Excellence & Expertise</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-balance bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent animate-fade-in">
              Meet Our Expert Team
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
              Experienced legal professionals dedicated to delivering exceptional results with integrity and excellence
            </p>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 bg-gradient-to-r from-accent/5 to-accent/10 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 golden-glow">
                <Users className="h-10 w-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground text-lg">Legal Professionals</div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 golden-glow">
                <Award className="h-10 w-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-muted-foreground text-lg">Years Combined Experience</div>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-all duration-300 golden-glow">
                <BookOpen className="h-10 w-10 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">5763+</div>
              <div className="text-muted-foreground text-lg">Successful Cases</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-muted/30 to-background relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5"></div>
        <Watermark position="center-left" opacity={0.04} size="large" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partners Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-accent/10 rounded-full border border-accent/30 animate-fade-in">
                <Award className="h-5 w-5 text-accent" />
                <span className="text-accent font-semibold">Leadership</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent animate-fade-in">
                Partners & Leadership
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Senior attorneys with extensive expertise guiding our firm's strategic direction and client representation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {partnerMembers.map((member, index) => (
                <Card
                  key={member.id}
                  className="premium-card group border-accent/20 hover:border-accent/40 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="relative inline-block mb-6">
                        <div className="w-48 h-48 rounded-full mx-auto border-4 border-accent/30 shadow-2xl group-hover:border-accent/50 transition-all duration-500 overflow-hidden bg-muted">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-accent font-semibold text-base mb-4 golden-glow">{member.title}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.specializations.map((spec, index) => (
                          <Badge
                            key={index}
                            className="bg-accent/10 text-accent border-accent/30 hover:bg-accent hover:text-accent-foreground px-3 py-1 text-xs font-medium"
                          >
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>

                      <div className="space-y-3 text-sm bg-muted/30 rounded-xl p-4 border border-accent/10">
                        <div>
                          <span className="font-semibold text-accent">Education: </span>
                          <span className="text-foreground">{member.education}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-accent">Experience: </span>
                          <span className="text-foreground">{member.experience}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-accent">Languages: </span>
                          <span className="text-foreground">{member.languages.join(", ")}</span>
                        </div>
                      </div>

                      <div className="flex justify-center space-x-4 pt-6 border-t border-accent/20">
                        <Button
                          size="sm"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground golden-glow"
                          asChild
                        >
                          <Link href={`mailto:${member.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                          asChild
                        >
                          <Link href={member.linkedin} target="_blank">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Staff Section */}
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-accent/10 rounded-full border border-accent/30 animate-fade-in">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-accent font-semibold">Professionals</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent animate-fade-in">
                Associates & Support Staff
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Dedicated legal professionals and support staff committed to delivering comprehensive solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {staffMembers.map((member, index) => (
                <Card
                  key={member.id}
                  className="premium-card group border-accent/20 hover:border-accent/40 animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="relative inline-block mb-6">
                        <div className="w-48 h-48 rounded-full mx-auto border-4 border-accent/30 shadow-2xl group-hover:border-accent/50 transition-all duration-500 overflow-hidden bg-muted">
                          <img
                            src={member.image || "/placeholder.svg"}
                            alt={member.name}
                            className="w-full h-full object-cover object-center"
                          />
                        </div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-accent font-semibold text-base mb-4 golden-glow">{member.title}</p>
                      <div className="flex flex-wrap gap-2 justify-center mb-6">
                        {member.specializations.map((spec, index) => (
                          <Badge
                            key={index}
                            className="bg-accent/10 text-accent border-accent/30 hover:bg-accent hover:text-accent-foreground px-3 py-1 text-xs font-medium"
                          >
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-muted-foreground leading-relaxed text-sm">{member.bio}</p>

                      <div className="space-y-3 text-sm bg-muted/30 rounded-xl p-4 border border-accent/10">
                        <div>
                          <span className="font-semibold text-accent">Education: </span>
                          <span className="text-foreground">{member.education}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-accent">Experience: </span>
                          <span className="text-foreground">{member.experience}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-accent">Languages: </span>
                          <span className="text-foreground">{member.languages.join(", ")}</span>
                        </div>
                      </div>

                      <div className="flex justify-center space-x-4 pt-6 border-t border-accent/20">
                        <Button
                          size="sm"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground golden-glow"
                          asChild
                        >
                          <Link href={`mailto:${member.email}`}>
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </Link>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                          asChild
                        >
                          <Link href={member.linkedin} target="_blank">
                            <Linkedin className="h-4 w-4 mr-2" />
                            LinkedIn
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-accent via-accent/90 to-accent text-accent-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-foreground/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-foreground/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Work with Our Expert Team</h2>
          <p className="text-xl text-accent-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with our experienced lawyers to discuss your legal needs and find the perfect solution for your case.
          </p>
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-lg font-semibold golden-glow"
            asChild
          >
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
