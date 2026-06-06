import { motion } from "framer-motion";
import { Lock, Shield, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const subServices = [
  { title: "Secure Service Edge (SSE)", desc: "Cloud-delivered security services converging CASB, SWG, and ZTNA to protect distributed users and cloud applications.", items: ["Cloud Access Security Broker", "Secure Web Gateway", "Inline CASB", "Cloud Firewall"] },
  { title: "Zero Trust Architecture", desc: "Design and implement Zero Trust frameworks that enforce least-privilege access across users, devices, applications, and data.", items: ["Zero Trust Design", "Identity-Centric Security", "Microsegmentation", "Continuous Verification"] },
  { title: "ZTNA (Zero Trust Network Access)", desc: "Replace VPNs with granular, application-level access controls that verify every user and device before granting access.", items: ["ZTNA Deployment", "VPN Replacement", "Application Segmentation", "Device Trust"] },
  { title: "Secure Access Solutions", desc: "Comprehensive secure remote access solutions for workforce, third-party, and OT/ICS environments.", items: ["Remote Access Security", "Third-Party Access", "Privileged Access Mgmt", "Access Policy Design"] },
];

export default function SaseZeroTrust() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 mb-6 text-sm font-medium">
              <Lock className="w-4 h-4" /> SASE & Zero Trust
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Modern Security for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Distributed Enterprises</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed mb-8">
              SASE frameworks and Zero Trust Architecture for organizations where users, data, and applications exist everywhere except within a traditional perimeter.
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4 flex-wrap">
              <Link href="/contact"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8">Design Your Zero Trust</Button></Link>
              <Link href="/services"><Button variant="outline" className="h-12 px-8 font-semibold">All Services <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {subServices.map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-background border border-border hover:border-emerald-400/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-emerald-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 text-emerald-400" />
                </div>
                <h2 className="text-xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">{s.items.map((item) => (<li key={item} className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /><span className="text-muted-foreground">{item}</span></li>))}</ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
