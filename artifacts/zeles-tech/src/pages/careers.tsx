import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, TrendingUp, Users, Award, HeartHandshake, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const openings = [
  {
    title: "Senior Cybersecurity Consultant",
    type: "Full-time",
    location: "Nagpur / Remote",
    experience: "5-8 years",
    desc: "Lead security assessments, architecture reviews, and client engagements. Deep expertise in SIEM, vulnerability management, and security consulting required.",
    tags: ["SIEM", "Security Assessment", "VAPT", "ISO 27001"],
  },
  {
    title: "Cloud Security Engineer",
    type: "Full-time",
    location: "Nagpur / Hybrid",
    experience: "3-5 years",
    desc: "Design and implement security controls across Azure and AWS environments. Experience with cloud security posture management and DevSecOps practices preferred.",
    tags: ["Azure", "AWS", "CSPM", "DevSecOps"],
  },
  {
    title: "Network Security Specialist",
    type: "Full-time",
    location: "Nagpur",
    experience: "4-6 years",
    desc: "Configure and manage next-generation firewalls, SD-WAN, and network security platforms for enterprise clients. Hands-on experience with Cisco, Fortinet, or Palo Alto required.",
    tags: ["Firewall", "SD-WAN", "Network Security", "Cisco"],
  },
  {
    title: "SOC Analyst (L2)",
    type: "Full-time",
    location: "Nagpur",
    experience: "2-4 years",
    desc: "Monitor, analyze, and respond to security events across managed client environments. Experience with SIEM platforms and incident response procedures required.",
    tags: ["SIEM", "Incident Response", "Threat Hunting", "SOC"],
  },
];

const internships = [
  {
    title: "Cybersecurity Intern",
    duration: "3-6 months",
    desc: "Hands-on exposure to security assessments, vulnerability scanning, and threat analysis under the guidance of senior consultants.",
  },
  {
    title: "Cloud & Infrastructure Intern",
    duration: "3-6 months",
    desc: "Assist with cloud security implementations, network monitoring, and infrastructure projects across client environments.",
  },
];

const benefits = [
  { icon: TrendingUp, title: "Continuous Learning", desc: "Sponsored certifications (CISSP, CEH, AWS Security, Azure Security), and access to industry conferences and training." },
  { icon: Award, title: "Performance Recognition", desc: "Competitive compensation with performance-based bonuses and clear growth tracks." },
  { icon: Users, title: "Expert Mentorship", desc: "Work directly with senior practitioners with 15+ years of industry experience on complex, real-world engagements." },
  { icon: HeartHandshake, title: "Collaborative Culture", desc: "A team that operates with trust, transparency, and genuine respect for individual contributions." },
];

export default function Careers() {
  const [openApplication, setOpenApplication] = useState<string | null>(null);

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              Join Our Team
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Future of Security</span> With Us
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              Join a team of security practitioners solving real problems for enterprises across India and beyond. Where expertise meets impact.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We're a small, experienced team that punches well above our weight. We hire for depth — people who care deeply about the craft of security, take ownership, and are energized by complex problems. There are no bureaucratic layers, no unnecessary meetings, and no ceiling on how much you can learn or contribute.
            </p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/40 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-3">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg">Current opportunities to join the Zeles Technologies team.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {openings.map((job, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-card rounded-2xl border border-border overflow-hidden">
                <div
                  className="p-6 md:p-8 cursor-pointer hover:bg-primary/5 transition-colors"
                  onClick={() => setOpenApplication(openApplication === job.title ? null : job.title)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-3">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" />{job.type}</span>
                        <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" />{job.location}</span>
                        <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{job.experience} exp.</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((t) => (
                          <span key={t} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                    <ChevronRight className={`w-6 h-6 text-muted-foreground shrink-0 transition-transform ${openApplication === job.title ? "rotate-90" : ""}`} />
                  </div>
                </div>
                {openApplication === job.title && (
                  <div className="px-6 md:px-8 pb-8 border-t border-border pt-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{job.desc}</p>
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Apply for This Role</Button>
                    </Link>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Internships */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Internship Opportunities</h2>
            <p className="text-muted-foreground">For students and recent graduates looking to launch a career in cybersecurity.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6">
            {internships.map((intern, i) => (
              <motion.div key={i} variants={fadeIn} className="p-8 rounded-2xl bg-background border border-border hover:border-primary/40 transition-colors">
                <h3 className="text-xl font-bold mb-2">{intern.title}</h3>
                <p className="text-sm text-primary font-medium mb-4">Duration: {intern.duration}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{intern.desc}</p>
                <Link href="/contact">
                  <Button variant="outline" size="sm" className="font-medium">Apply Now <ChevronRight className="w-4 h-4 ml-1" /></Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">Don't See the Right Role?</motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-10">We're always interested in exceptional security professionals. Send us your profile and we'll reach out when the right opportunity arises.</motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Send Your Profile</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
