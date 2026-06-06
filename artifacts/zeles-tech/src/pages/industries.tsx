import { motion } from "framer-motion";
import { Building2, Heart, GraduationCap, Landmark, Factory, ShoppingBag, Briefcase, CreditCard, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const industries = [
  {
    icon: Building2,
    title: "Banking & Financial Services",
    desc: "Protecting critical financial infrastructure with regulatory-compliant security frameworks. We serve commercial banks, NBFCs, and financial institutions navigating RBI guidelines and data privacy mandates.",
    challenges: ["PCI-DSS compliance", "Fraud detection", "Core banking security", "Third-party risk management"],
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: CreditCard,
    title: "Cooperative Banks",
    desc: "Specialized security solutions for cooperative banking institutions — balancing regulatory compliance, member data protection, and operational continuity with limited IT resources.",
    challenges: ["Core system protection", "Member data security", "Regulatory compliance", "Digital banking security"],
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Heart,
    title: "Healthcare",
    desc: "Safeguarding patient data, clinical systems, and connected medical devices against an increasing volume of targeted cyberattacks on healthcare organizations.",
    challenges: ["Patient data protection", "EMR/EHR security", "Connected device security", "HIPAA-equivalent compliance"],
    color: "text-red-400",
    bg: "bg-red-400/10",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Building secure digital learning environments for universities, schools, and ed-tech organizations — protecting student records, intellectual property, and research data.",
    challenges: ["Student data privacy", "Research IP protection", "Remote learning security", "Identity management"],
    color: "text-yellow-400",
    bg: "bg-yellow-400/10",
  },
  {
    icon: Landmark,
    title: "Government",
    desc: "Helping government agencies and public sector organizations meet stringent security requirements, protect citizen data, and ensure continuity of critical public services.",
    challenges: ["Citizen data security", "Critical infrastructure protection", "Regulatory compliance", "Insider threat management"],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Securing operational technology (OT) environments, industrial control systems, and supply chain ecosystems as manufacturing undergoes digital transformation.",
    challenges: ["OT/ICS security", "Supply chain risk", "IP protection", "Industry 4.0 security"],
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Protecting customer payment data, e-commerce platforms, and loyalty programs while enabling secure omnichannel retail experiences across physical and digital touchpoints.",
    challenges: ["Payment security", "E-commerce protection", "Customer data privacy", "POS system security"],
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Briefcase,
    title: "SMEs",
    desc: "Enterprise-grade security scaled and priced for small and medium enterprises — because adversaries don't discriminate by company size.",
    challenges: ["Cost-effective security", "Cloud security", "Compliance basics", "Employee security training"],
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
];

export default function Industries() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              Industries We Serve
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Sector-Specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Security Expertise</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              Every industry faces unique threats, compliance requirements, and operational constraints. We bring deep sector knowledge to every engagement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-8">
            {industries.map((ind, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/40 transition-colors duration-300">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`w-14 h-14 rounded-xl ${ind.bg} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <ind.icon className={`w-7 h-7 ${ind.color}`} />
                  </div>
                  <h2 className="text-xl font-bold pt-3">{ind.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{ind.desc}</p>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Key Challenges We Address</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {ind.challenges.map((c) => (
                      <li key={c} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ChevronRight className={`w-3 h-3 ${ind.color} shrink-0`} />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto">
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">Your Industry, Your Threats, Our Expertise</motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground text-lg mb-10">Let's discuss the specific security and compliance challenges your organization faces.</motion.p>
            <motion.div variants={fadeIn}>
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base">Schedule a Consultation</Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
