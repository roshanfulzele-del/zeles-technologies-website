import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Cloud, Network, Database, Lock, Briefcase, ChevronRight,
  CheckCircle2, Building2, Heart, GraduationCap, Landmark, Factory, Code,
  Globe, MessageSquare, Lightbulb, Settings, BarChart3,
  Wifi, Eye, AlertTriangle, Activity, Shield, Server, Zap, Users,
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CyberNetworkAnimation } from "@/components/CyberNetworkAnimation";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const stagger = staggerContainer;

const services = [
  { icon: ShieldCheck, title: "Cybersecurity", slug: "cybersecurity", desc: "Security assessments, vulnerability management, and architecture consulting." },
  { icon: Cloud, title: "Cloud Security", slug: "cloud-security", desc: "AWS & Azure security, multi-cloud protection, and risk assessments." },
  { icon: Database, title: "Data Security", slug: "data-security", desc: "DLP, data classification, discovery, and enterprise encryption." },
  { icon: Lock, title: "SASE & Zero Trust", slug: "sase-zero-trust", desc: "Zero Trust Architecture, ZTNA, and secure access solutions." },
  { icon: Network, title: "Network Infrastructure", slug: "network-infrastructure", desc: "Enterprise networking, SD-WAN, wireless, and optimization." },
  { icon: Briefcase, title: "Managed Security", slug: "managed-security", desc: "SOC, SIEM monitoring, incident response, and threat hunting." },
  { icon: Code, title: "Software Development", slug: "software-development", desc: "Secure enterprise applications, web platforms, and mobile apps." },
];

const stats = [
  { number: "2", label: "Decades of Experience" },
  { number: "100+", label: "Projects Delivered" },
  { number: "3", label: "Regions Served" },
  { number: "24/7", label: "Threat Monitoring" },
];

const whyUs = [
  { title: "Deep Domain Expertise", desc: "2 decades hands-on experience in SIEM, DLP, SASE, and cloud security — not generalists, specialist practitioners." },
  { title: "End-to-End Coverage", desc: "Strategy, architecture, implementation, and managed operations. One partner for the entire security lifecycle." },
  { title: "India & APAC Knowledge", desc: "Deep understanding of local regulatory landscape — RBI, DPDP Act, SEBI — and regional threat intelligence." },
  { title: "Platform Agnostic", desc: "We recommend what's right for your environment, not what we're incentivized to sell. Your outcomes over vendor relationships." },
  { title: "Responsive & Accountable", desc: "Direct access to senior practitioners. No hand-offs, no junior account managers — your team is your delivery team." },
  { title: "Proven Track Record", desc: "Successful implementations across banking, healthcare, government, and manufacturing with measurable security improvements." },
];

const industries = [
  { icon: Building2, name: "Banking & Finance" },
  { icon: Heart, name: "Healthcare" },
  { icon: GraduationCap, name: "Education" },
  { icon: Landmark, name: "Government" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Globe, name: "SMEs & Startups" },
];

const engagementSteps = [
  { icon: MessageSquare, step: "01", title: "Discovery Call", desc: "We start with a 30-minute conversation to understand your current security posture, key challenges, and business objectives." },
  { icon: Lightbulb, step: "02", title: "Assessment & Proposal", desc: "Our team conducts a preliminary assessment and delivers a tailored proposal with scope, timeline, and investment." },
  { icon: Settings, step: "03", title: "Implementation", desc: "We execute with precision — from architecture design to technology deployment — keeping you informed at every milestone." },
  { icon: BarChart3, step: "04", title: "Ongoing Operations", desc: "Post-implementation, we offer managed security services, periodic reviews, and continuous improvement to stay ahead of threats." },
];

const partners = ["Microsoft Azure", "Amazon Web Services", "Cloudflare", "Zscaler", "Forcepoint", "Splunk", "IBM QRadar", "Palo Alto Networks"];

const heroCapabilities = [
  { icon: Shield, label: "Zero Trust Architecture", color: "text-blue-400" },
  { icon: Eye, label: "24/7 SOC Monitoring", color: "text-sky-400" },
  { icon: Cloud, label: "Multi-Cloud Security", color: "text-indigo-400" },
  { icon: Lock, label: "Data Loss Prevention", color: "text-violet-400" },
  { icon: Server, label: "Network Infrastructure", color: "text-blue-300" },
  { icon: Code, label: "Secure Dev Solutions", color: "text-cyan-400" },
];

const trustStats = [
  { icon: Users, value: "50+", label: "Enterprise Clients" },
  { icon: ShieldCheck, value: "100+", label: "Projects Secured" },
  { icon: Zap, value: "<5 min", label: "Avg. Response Time" },
  { icon: Globe, value: "3 Regions", label: "India · ME · APAC" },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* ═══ 1. HERO ═══════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030d1a]">

        {/* Background layers */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,80,140,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(30,80,140,0.08)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d2545]/80 via-[#030d1a] to-[#030d1a]" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="container px-4 md:px-6 relative z-10 py-28">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

            {/* LEFT: Copy */}
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-start">

              {/* Badge */}
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/25 mb-8 text-sm font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Enterprise Cybersecurity & IT Solutions
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeIn} className="text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] text-white mb-6">
                Protect.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                  Transform.
                </span><br />
                Outperform.
              </motion.h1>

              {/* Subheading */}
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 mb-6 max-w-xl leading-relaxed">
                Enterprise-grade cybersecurity, cloud security, and IT infrastructure solutions — delivered by specialists with 2 decades of real-world experience across India, Middle East, and APAC.
              </motion.p>

              {/* Trust line */}
              <motion.div variants={fadeIn} className="flex items-center gap-2 text-sm text-slate-500 mb-10">
                <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0" />
                Trusted by banks, hospitals, government bodies, and manufacturers
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto h-13 px-8 text-base bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-[0_0_32px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_0_48px_rgba(37,99,235,0.5)]">
                    Request Free Consultation
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto h-13 px-8 text-base font-semibold border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-600">
                    View Services <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>

              {/* Mini trust stats */}
              <motion.div variants={staggerContainer} className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                {trustStats.map(({ icon: Icon, value, label }, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex flex-col items-center p-4 rounded-xl bg-white/4 border border-white/8 text-center backdrop-blur-sm">
                    <Icon className="w-4 h-4 text-blue-400 mb-2" />
                    <div className="text-lg font-extrabold text-white leading-none mb-1">{value}</div>
                    <div className="text-xs text-slate-500 leading-tight">{label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Capability visual panel */}
            <motion.div initial="hidden" animate="visible" variants={fadeInRight} className="relative hidden lg:flex items-center justify-center">

              {/* Outer ring */}
              <div className="relative w-[480px] xl:w-[540px] h-[480px] xl:h-[540px]">

                {/* Central shield */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.04, 1], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_80px_rgba(37,99,235,0.25)]"
                  >
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-600/50 to-blue-800/50 flex items-center justify-center border border-blue-400/30">
                      <Shield className="w-14 h-14 text-blue-300" strokeWidth={1.5} />
                    </div>
                  </motion.div>
                </div>

                {/* Orbiting capability cards */}
                {heroCapabilities.map((cap, i) => {
                  const angle = (i / heroCapabilities.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = 200;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const Icon = cap.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md shadow-lg w-[110px] text-center hover:border-blue-500/40 transition-colors duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-500/15 flex items-center justify-center">
                        <Icon className={`w-5 h-5 ${cap.color}`} strokeWidth={1.5} />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-300 leading-tight">{cap.label}</span>
                    </motion.div>
                  );
                })}

                {/* Connecting dashed ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 540 540">
                  <circle
                    cx="270" cy="270" r="200"
                    stroke="rgba(59,130,246,0.15)"
                    strokeWidth="1"
                    strokeDasharray="4 8"
                    fill="none"
                  />
                  <circle
                    cx="270" cy="270" r="100"
                    stroke="rgba(59,130,246,0.08)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>

                {/* Live indicator */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/25 text-green-400 text-xs font-semibold whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  SOC Active — Monitoring 24 / 7
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </section>

      {/* ═══ 2. STATS BAR ═══════════════════════════════════════════════════════ */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeIn}>
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 3. SERVICES SNAPSHOT ═══════════════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5 text-sm font-medium">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Security & Technology</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">End-to-end services designed to protect your digital assets and enable business growth.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(47,123,191,0.1)]">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.desc}</p>
                <Link href={`/services/${service.slug}`} className="inline-flex items-center text-primary text-sm font-medium hover:text-accent transition-colors">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" size="lg" className="font-semibold h-12 px-8">View All Services <ArrowRight className="ml-2 w-5 h-5" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ 4. COMPANY OVERVIEW ════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-card to-card"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">About Zeles Technologies</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">2 Decades of Security Excellence, Now in Your Corner</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Zeles Technologies was built to bring enterprise-grade security consulting to organizations that need it most — delivered by practitioners with deep hands-on expertise, not generalists with slide decks.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Deep specialist expertise in SIEM, DLP, SASE, and Zero Trust",
                  "End-to-end delivery: strategy → architecture → implementation → managed services",
                  "Local regulatory knowledge across Indian and APAC compliance frameworks",
                  "Headquartered in Nagpur, serving India, Middle East, and APAC",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="outline" className="font-semibold">Discover Our Story <ArrowRight className="ml-2 w-4 h-4" /></Button>
              </Link>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div key={i} variants={fadeIn} className="p-8 rounded-2xl bg-background border border-border text-center hover:border-primary/30 transition-colors">
                  <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">{stat.number}</div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 5. CYBER THREAT VISUALIZATION ═════════════════════════════════════ */}
      <section className="py-0 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent"></div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-stretch min-h-[560px]">
            <div className="py-20 flex flex-col justify-center pr-0 lg:pr-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
                <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-6 text-sm font-medium">
                  <Activity className="w-4 h-4" />
                  Real-Time Security Intelligence
                </motion.div>
                <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
                  Continuous Threat Monitoring Across Your Entire Network
                </motion.h2>
                <motion.p variants={fadeIn} className="text-slate-400 text-lg leading-relaxed mb-8">
                  Our Security Operations Center (SOC) watches every node, packet, and anomaly — 24/7. Zero Trust policies enforce least-privilege access while SIEM correlation detects and neutralizes threats before they escalate.
                </motion.p>
                <motion.div variants={stagger} className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Eye, stat: "24/7", label: "SOC Monitoring" },
                    { icon: AlertTriangle, stat: "<5 min", label: "Threat Response" },
                    { icon: ShieldCheck, stat: "Zero Trust", label: "Access Control" },
                    { icon: Wifi, stat: "SIEM + AI", label: "Threat Detection" },
                  ].map(({ icon: Icon, stat, label }, i) => (
                    <motion.div key={i} variants={fadeIn} className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <Icon className="w-5 h-5 text-sky-400 mb-2" />
                      <div className="text-lg font-bold text-white">{stat}</div>
                      <div className="text-xs text-slate-400 font-medium">{label}</div>
                    </motion.div>
                  ))}
                </motion.div>
                <motion.div variants={fadeIn}>
                  <Link href="/services/managed-security">
                    <Button className="bg-sky-500 hover:bg-sky-400 text-white font-semibold h-11 px-6 shadow-[0_0_24px_rgba(14,165,233,0.35)]">
                      Explore Managed Security <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>

            <div className="relative flex items-center justify-center py-8 lg:py-0 lg:border-l border-white/10">
              <div className="w-full h-[420px] lg:h-full lg:absolute lg:inset-0">
                <CyberNetworkAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. WHY CHOOSE ZELES ════════════════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5 text-sm font-medium">Why Zeles</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Zeles Difference</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">What sets us apart from generalist IT consultants and large system integrators.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 7. INDUSTRIES ══════════════════════════════════════════════════════ */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5 text-sm font-medium">Industries Served</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sector Expertise Across Every Industry</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">We understand the unique threat landscapes, compliance requirements, and operational realities of each sector we serve.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {industries.map((ind, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/40 transition-colors duration-300 text-center cursor-default">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <ind.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold leading-tight">{ind.name}</p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center">
            <Link href="/industries">
              <Button variant="outline" className="font-semibold">All Industries <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══ 8. ENGAGEMENT PROCESS ══════════════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-5 text-sm font-medium">How We Work</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Engagement</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From first conversation to ongoing protection — a clear process with no surprises.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {engagementSteps.map((step, i) => (
              <motion.div key={i} variants={fadeIn} className="relative">
                <div className="p-8 rounded-2xl bg-card border border-border h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-3xl font-extrabold text-primary/20">{step.step}</span>
                  </div>
                  <h3 className="text-base font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < engagementSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 text-primary/30 z-10">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 9. TECHNOLOGY PARTNERS ═════════════════════════════════════════════ */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-12">
            <h2 className="text-xl font-semibold text-muted-foreground mb-2">Technology Expertise Across Leading Platforms</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="flex flex-wrap justify-center gap-3">
            {partners.map((p, i) => (
              <motion.div key={i} variants={fadeIn} className="px-5 py-3 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors cursor-default">
                {p}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ 10. CTA ════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="bg-gradient-to-br from-primary/15 via-card to-card border border-primary/20 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 rounded-3xl"></div>
            <div className="absolute top-0 left-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Secure Your Enterprise?</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Partner with us to build a resilient, scalable, and secure digital foundation. Start with a no-obligation consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-14 px-10 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_24px_rgba(47,123,191,0.35)]">
                    Schedule an Assessment
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button size="lg" variant="outline" className="h-14 px-10 text-base font-semibold border-border hover:bg-muted">
                    View Case Studies <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
