import { motion } from "framer-motion";
import { Code, Monitor, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const subServices = [
  { title: "Web Applications", desc: "Secure, scalable web applications built with modern frameworks — from customer portals to complex enterprise platforms.", items: ["React / Next.js", "API Development", "Secure SDLC", "Performance Optimization"] },
  { title: "Mobile Applications", desc: "Native and cross-platform mobile applications for iOS and Android with security best practices embedded throughout development.", items: ["iOS & Android Apps", "React Native / Flutter", "Mobile Security", "App Store Deployment"] },
  { title: "Enterprise Solutions", desc: "Complex enterprise software including workflow automation, ERP integrations, and internal business applications.", items: ["ERP Integrations", "Workflow Automation", "Business Intelligence", "Legacy Modernization"] },
  { title: "Custom Development", desc: "Purpose-built software solutions for unique business requirements — designed, developed, and delivered with full lifecycle support.", items: ["Requirements Analysis", "Architecture Design", "Agile Delivery", "Ongoing Support"] },
];

export default function SoftwareDevelopment() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-pink-500/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-400/10 text-pink-400 border border-pink-400/20 mb-6 text-sm font-medium">
              <Code className="w-4 h-4" /> Software Development
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Secure Software, <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">Built to Last</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed mb-8">
              Enterprise-grade web applications, mobile apps, and custom software solutions — with security integrated into every phase of development.
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4 flex-wrap">
              <Link href="/contact"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8">Discuss Your Project</Button></Link>
              <Link href="/services"><Button variant="outline" className="h-12 px-8 font-semibold">All Services <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {subServices.map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-background border border-border hover:border-pink-400/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-pink-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Monitor className="w-7 h-7 text-pink-400" />
                </div>
                <h2 className="text-xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">{s.items.map((item) => (<li key={item} className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" /><span className="text-muted-foreground">{item}</span></li>))}</ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
