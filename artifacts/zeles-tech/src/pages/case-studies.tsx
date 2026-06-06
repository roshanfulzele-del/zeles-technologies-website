import { motion } from "framer-motion";
import { Building2, Cloud, Database, Network, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

const caseStudies = [
  {
    icon: Building2,
    title: "Banking Security Transformation",
    client: "Regional Cooperative Bank",
    industry: "Banking & Financial Services",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    challenge: "A regional cooperative bank with 50+ branches was operating on legacy security infrastructure with minimal visibility into threats. Multiple RBI audit findings had gone unaddressed, and the bank lacked a coherent security architecture.",
    solution: "Zeles Technologies conducted a comprehensive security assessment, designed a multi-layered security architecture, implemented a SIEM solution for centralized threat monitoring, and established a managed SOC for 24/7 oversight.",
    outcomes: [
      "Achieved full RBI compliance within 6 months",
      "Reduced mean time to detect threats by 78%",
      "Implemented SIEM with 180-day log retention",
      "Zero security incidents reported post-implementation",
    ],
    duration: "8 months",
    technologies: ["Splunk SIEM", "Next-Gen Firewall", "DLP Solution", "PAM"],
  },
  {
    icon: Cloud,
    title: "Cloud Migration Security",
    client: "Manufacturing Enterprise",
    industry: "Manufacturing",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    challenge: "A mid-sized manufacturing company was migrating its ERP and business applications to Azure. The migration lacked a security framework, creating significant data exposure and compliance risks during and post-migration.",
    solution: "Designed a cloud security architecture for Azure, implemented Cloud Security Posture Management (CSPM), configured Azure Security Center and Defender for Cloud, and established identity governance through Azure AD Conditional Access.",
    outcomes: [
      "Secure migration of 200+ workloads to Azure",
      "Achieved ISO 27001 compliance for cloud environment",
      "100% reduction in misconfigured cloud resources",
      "Real-time cloud threat detection deployed",
    ],
    duration: "6 months",
    technologies: ["Microsoft Azure", "Defender for Cloud", "Azure Sentinel", "Azure AD"],
  },
  {
    icon: Database,
    title: "Data Protection Implementation",
    client: "Healthcare Organization",
    industry: "Healthcare",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    challenge: "A large healthcare provider handling sensitive patient records lacked a comprehensive data protection strategy. Patient data was scattered across unclassified systems, with no visibility into data flows or access controls.",
    solution: "Deployed Forcepoint DLP across endpoints, network, and cloud channels. Implemented data discovery and classification for 10TB+ of patient data, established access control policies, and trained staff on data handling procedures.",
    outcomes: [
      "Classified and protected 10TB+ of patient data",
      "Zero data exfiltration incidents since deployment",
      "Reduced policy violations by 94% within 90 days",
      "Achieved DPDP Act readiness",
    ],
    duration: "5 months",
    technologies: ["Forcepoint DLP", "Data Classification", "CASB", "IAM"],
  },
  {
    icon: Network,
    title: "Network Modernization",
    client: "State Government Agency",
    industry: "Government",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    challenge: "A state government agency operating across 30+ locations had an aging, flat network with no segmentation, poor visibility, and increasing vulnerability to lateral movement attacks. Network performance was also significantly impacted.",
    solution: "Redesigned the network architecture with micro-segmentation, deployed SD-WAN for WAN optimization, implemented next-generation firewalls at all major locations, and established a network operations center for continuous monitoring.",
    outcomes: [
      "Network segmentation across 30+ sites achieved",
      "40% improvement in WAN performance",
      "Eliminated legacy vulnerabilities affecting 2,000+ devices",
      "Established 24/7 network operations monitoring",
    ],
    duration: "10 months",
    technologies: ["SD-WAN", "Next-Gen Firewall", "Network Segmentation", "NOC"],
  },
];

export default function CaseStudies() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              Case Studies
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Proven Results, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Real Outcomes</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              A selection of engagements where Zeles Technologies delivered measurable security improvements for enterprise and public sector clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6 space-y-12">
          {caseStudies.map((cs, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeIn} className="bg-background rounded-2xl border border-border overflow-hidden">
              <div className="grid lg:grid-cols-3">
                <div className={`p-8 lg:p-10 ${cs.bg} lg:border-r lg:border-border/50 flex flex-col justify-between`}>
                  <div>
                    <div className={`w-14 h-14 rounded-xl bg-background/20 flex items-center justify-center mb-6`}>
                      <cs.icon className={`w-7 h-7 ${cs.color}`} />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{cs.title}</h2>
                    <p className={`text-sm font-medium ${cs.color} mb-4`}>{cs.industry}</p>
                    <p className="text-sm text-muted-foreground">Client: <span className="text-foreground font-medium">{cs.client}</span></p>
                    <p className="text-sm text-muted-foreground mt-1">Duration: <span className="text-foreground font-medium">{cs.duration}</span></p>
                  </div>
                  <div className="mt-8">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {cs.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-background/30 text-foreground text-xs font-medium border border-border/50">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-10 lg:col-span-2 grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">Challenge</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{cs.challenge}</p>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">Solution</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">Key Outcomes</h3>
                    <ul className="space-y-4">
                      {cs.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-3 text-sm">
                          <CheckCircle2 className={`w-5 h-5 ${cs.color} shrink-0 mt-0.5`} />
                          <span className="text-foreground">{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">Ready to Write Your Success Story?</motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-10">Every engagement starts with understanding your specific challenges. Let's talk.</motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold">Start a Conversation</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-10 font-semibold">Explore Services <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
