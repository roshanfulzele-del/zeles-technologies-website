import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Database, Lock, Network, Briefcase, Code, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    icon: ShieldCheck,
    slug: "cybersecurity",
    title: "Cybersecurity Services",
    desc: "Comprehensive security assessments, vulnerability management, architecture design, and strategic consulting to build resilient security postures.",
    subs: ["Security Assessments", "Vulnerability Management", "Security Architecture", "Security Consulting"],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Database,
    slug: "data-security",
    title: "Data Security",
    desc: "Protect your most critical asset — your data — with enterprise-grade DLP, classification, discovery, and encryption solutions.",
    subs: ["Data Loss Prevention", "Data Classification", "Data Discovery", "Encryption Solutions"],
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Cloud,
    slug: "cloud-security",
    title: "Cloud Security",
    desc: "Secure cloud adoption across AWS, Azure, and multi-cloud environments with risk assessments and continuous compliance monitoring.",
    subs: ["AWS Security", "Azure Security", "Multi-Cloud Security", "Cloud Risk Assessments"],
    color: "text-sky-400",
    bg: "bg-sky-400/10",
  },
  {
    icon: Network,
    slug: "network-infrastructure",
    title: "Network Infrastructure",
    desc: "Design and optimize enterprise networks — from SD-WAN to wireless infrastructure — for performance, resilience, and security.",
    subs: ["Enterprise Networking", "SD-WAN", "Wireless Networks", "Infrastructure Optimization"],
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: Lock,
    slug: "sase-zero-trust",
    title: "SASE & Zero Trust",
    desc: "Implement modern security perimeters with SASE frameworks and Zero Trust Architecture for distributed workforces and cloud environments.",
    subs: ["Secure Service Edge", "Zero Trust Architecture", "ZTNA", "Secure Access Solutions"],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Briefcase,
    slug: "managed-security",
    title: "Managed Security Services",
    desc: "24/7 threat monitoring, SOC operations, SIEM management, and incident response — your security operations team, on demand.",
    subs: ["SOC Services", "SIEM Monitoring", "Incident Response", "Threat Monitoring"],
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: Code,
    slug: "software-development",
    title: "Software Development",
    desc: "Purpose-built enterprise applications — web platforms, mobile apps, and custom software with security baked in from day one.",
    subs: ["Web Applications", "Mobile Applications", "Enterprise Solutions", "Custom Development"],
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              Our Services
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Security & Technology</span> Solutions
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              From strategy and architecture to implementation and managed operations — we cover every dimension of enterprise security and infrastructure.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/40 transition-colors duration-300">
                <div className={`w-14 h-14 rounded-xl ${s.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className={`w-7 h-7 ${s.color}`} />
                </div>
                <h2 className="text-2xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-8">
                  {s.subs.map((sub) => (
                    <li key={sub} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className={`w-4 h-4 ${s.color} shrink-0`} />
                      {sub}
                    </li>
                  ))}
                </ul>
                <Link href={`/services/${s.slug}`}>
                  <Button variant="outline" size="sm" className={`border-border hover:border-primary/50 font-medium`}>
                    Learn More <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">Not Sure Where to Start?</motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-10">Our experts will assess your current security posture and recommend the right path forward — no obligation, no jargon.</motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base">
                  Request a Free Consultation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
