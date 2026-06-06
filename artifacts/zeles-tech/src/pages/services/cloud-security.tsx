import { motion } from "framer-motion";
import { Cloud, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const subServices = [
  { title: "AWS Security", desc: "Secure AWS environments with GuardDuty, Security Hub, IAM governance, and cloud-native security controls.", items: ["AWS Security Hub", "GuardDuty Threat Detection", "IAM Governance", "S3 & Data Security"] },
  { title: "Azure Security", desc: "Microsoft Defender for Cloud, Azure Sentinel SIEM, and secure landing zone architecture for Azure environments.", items: ["Defender for Cloud", "Azure Sentinel", "Conditional Access", "Azure AD Security"] },
  { title: "Multi-Cloud Security", desc: "Unified security posture management and governance across hybrid and multi-cloud environments.", items: ["CSPM Implementation", "Cross-Cloud Visibility", "Policy Governance", "Multi-Cloud IAM"] },
  { title: "Cloud Risk Assessments", desc: "Comprehensive assessments of cloud security posture, misconfigurations, and compliance gaps.", items: ["Misconfiguration Detection", "Compliance Mapping", "Risk Prioritization", "Remediation Roadmap"] },
];

export default function CloudSecurity() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-400/10 text-sky-400 border border-sky-400/20 mb-6 text-sm font-medium">
              <Cloud className="w-4 h-4" /> Cloud Security
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Secure Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">Adoption & Operations</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed mb-8">
              Cloud security architecture, posture management, and continuous compliance for AWS, Azure, and multi-cloud environments.
            </motion.p>
            <motion.div variants={fadeIn} className="flex gap-4 flex-wrap">
              <Link href="/contact"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 px-8">Get Cloud Assessment</Button></Link>
              <Link href="/services"><Button variant="outline" className="h-12 px-8 font-semibold">All Services <ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {subServices.map((s, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-background border border-border hover:border-sky-400/40 transition-colors">
                <div className="w-14 h-14 rounded-xl bg-sky-400/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-7 h-7 text-sky-400" />
                </div>
                <h2 className="text-xl font-bold mb-4">{s.title}</h2>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">{s.items.map((item) => (<li key={item} className="flex items-center gap-3 text-sm"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" /><span className="text-muted-foreground">{item}</span></li>))}</ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
