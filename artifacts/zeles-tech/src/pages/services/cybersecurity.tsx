import { motion } from "framer-motion";
import { ShieldCheck, Search, Bug, Layers, Lightbulb, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const subServices = [
  {
    icon: Search,
    title: "Security Assessments",
    desc: "Comprehensive evaluation of your organization's security posture — identifying gaps, prioritizing risks, and providing actionable remediation roadmaps.",
    items: ["Penetration Testing (VAPT)", "Security Posture Assessment", "Third-Party Risk Assessment", "Red Team Exercises"],
  },
  {
    icon: Bug,
    title: "Vulnerability Management",
    desc: "Continuous identification, prioritization, and remediation of vulnerabilities across your infrastructure, applications, and endpoints.",
    items: ["Automated Vulnerability Scanning", "Risk-Based Prioritization", "Remediation Tracking", "Continuous Monitoring"],
  },
  {
    icon: Layers,
    title: "Security Architecture",
    desc: "Design and documentation of enterprise security architectures aligned with industry frameworks (NIST, ISO 27001, CIS Controls).",
    items: ["Enterprise Security Design", "Reference Architecture", "Security Domain Planning", "Controls Mapping"],
  },
  {
    icon: Lightbulb,
    title: "Security Consulting",
    desc: "Strategic advisory services helping organizations build, mature, and optimize their security programs and governance frameworks.",
    items: ["CISO Advisory", "Security Program Development", "Board-Level Reporting", "Vendor Selection"],
  },
];

export default function Cybersecurity() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-400/10 text-blue-400 border border-blue-400/20 mb-6 text-sm font-medium">
              <ShieldCheck className="w-4 h-4" /> Cybersecurity Services
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Cybersecurity</span> Services
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed mb-8">
              From vulnerability discovery to enterprise security architecture — we help organizations build resilient defenses against modern threats.
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4 flex-wrap">
              <Link href="/contact"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8">Request Assessment</Button></Link>
              <Link href="/case-studies"><Button variant="outline" className="h-12 px-8 font-semibold">View Case Studies <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {subServices.map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-background border border-border hover:border-blue-400/40 transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h2 className="text-xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-border">
        <div className="container px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">Ready to Assess Your Security Posture?</motion.h2>
            <motion.div variants={fadeIn}><Link href="/contact"><Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Start a Conversation</Button></Link></motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
