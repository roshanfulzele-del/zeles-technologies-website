import { motion } from "framer-motion";
import { Cloud, Shield, Globe, Lock, Eye, Server, Network, Monitor, Link as LinkIcon } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const technologies = [
  {
    name: "Microsoft Azure",
    category: "Cloud Platform",
    icon: Cloud,
    color: "text-sky-400",
    bg: "bg-sky-400/10",
    desc: "Deep expertise in Azure Security Center, Defender for Cloud, Sentinel SIEM, and secure cloud architecture across Azure's full service catalog.",
    capabilities: ["Azure Security Center", "Microsoft Sentinel", "Azure Active Directory", "Defender for Cloud"],
  },
  {
    name: "Amazon Web Services",
    category: "Cloud Platform",
    icon: Server,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    desc: "AWS security architecture, GuardDuty threat detection, Security Hub, IAM governance, and multi-account security governance frameworks.",
    capabilities: ["AWS Security Hub", "GuardDuty", "IAM Governance", "CloudTrail & Config"],
  },
  {
    name: "Cloudflare",
    category: "Network Security",
    icon: Globe,
    color: "text-orange-300",
    bg: "bg-orange-300/10",
    desc: "Cloudflare SASE, Zero Trust Network Access, DDoS protection, Web Application Firewall, and DNS security for enterprise environments.",
    capabilities: ["Cloudflare SASE", "Zero Trust Access", "DDoS Protection", "WAF & CDN Security"],
  },
  {
    name: "Zscaler",
    category: "SASE & Zero Trust",
    icon: Lock,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    desc: "Zscaler Internet Access (ZIA), Zscaler Private Access (ZPA), and cloud-delivered security for distributed workforces and branch offices.",
    capabilities: ["Zscaler Internet Access", "Zscaler Private Access", "Cloud Firewall", "CASB"],
  },
  {
    name: "Forcepoint",
    category: "Data Security",
    icon: Shield,
    color: "text-red-400",
    bg: "bg-red-400/10",
    desc: "Forcepoint Data Loss Prevention, insider threat protection, cloud security, and web filtering for enterprise data protection programs.",
    capabilities: ["Forcepoint DLP", "Insider Threat Detection", "Cloud Security Gateway", "Web Security"],
  },
  {
    name: "SIEM Technologies",
    category: "Threat Detection",
    icon: Eye,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    desc: "Multi-platform SIEM expertise across Splunk, IBM QRadar, Microsoft Sentinel, and open-source SIEM for comprehensive threat detection and response.",
    capabilities: ["Splunk Enterprise Security", "IBM QRadar", "Microsoft Sentinel", "SIEM Integration"],
  },
  {
    name: "Network Security Platforms",
    category: "Network Defense",
    icon: Network,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    desc: "Enterprise firewall management, IDS/IPS, SD-WAN security, and next-generation network security platform implementation and optimization.",
    capabilities: ["Next-Gen Firewalls", "IDS/IPS Systems", "SD-WAN Security", "Network Segmentation"],
  },
  {
    name: "Endpoint Security",
    category: "Endpoint Protection",
    icon: Monitor,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    desc: "Endpoint Detection & Response (EDR), Extended Detection & Response (XDR), antivirus management, and device compliance enforcement.",
    capabilities: ["EDR/XDR Solutions", "Endpoint Compliance", "Mobile Device Management", "Patch Management"],
  },
];

export default function Technology() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              Technology Expertise
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Best-in-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Technology Partners</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              We are platform-agnostic by principle and vendor-expert by practice — selecting the right technology for each organization's specific environment, risk profile, and budget.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/40 transition-colors duration-300">
                <div className="flex items-start gap-5 mb-5">
                  <div className={`w-14 h-14 rounded-xl ${tech.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <tech.icon className={`w-7 h-7 ${tech.color}`} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">{tech.name}</h2>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${tech.bg} ${tech.color}`}>{tech.category}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{tech.desc}</p>
                <div className="grid grid-cols-2 gap-2">
                  {tech.capabilities.map((cap) => (
                    <div key={cap} className={`flex items-center gap-2 px-3 py-2 rounded-lg ${tech.bg} text-xs font-medium ${tech.color}`}>
                      <LinkIcon className="w-3 h-3 shrink-0" />
                      {cap}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">Platform-Agnostic, Outcome-Driven</motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg leading-relaxed mb-8">
              We don't push specific vendors — we assess your environment, threat model, and budget, then recommend the technology stack that delivers the best security outcomes. Our deep expertise across multiple platforms means our advice is always in your best interest.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Discuss Your Technology Stack</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
