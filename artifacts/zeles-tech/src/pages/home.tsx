import { motion } from "framer-motion";
import {
  ArrowRight, ShieldCheck, Cloud, Network, Database, Lock, Briefcase, ChevronRight,
  CheckCircle2, Building2, Heart, GraduationCap, Landmark, Factory, Code,
  Globe, MessageSquare, Lightbulb, Settings, BarChart3
} from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
  { title: "Deep Domain Expertise", desc: "18+ years hands-on experience in SIEM, DLP, SASE, and cloud security — not generalists, specialist practitioners." },
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

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">

      {/* 1. Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[128px] mix-blend-screen pointer-events-none"></div>

        <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-8">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise-Grade Security & Technology</span>
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-foreground">
              Secure.<br className="sm:hidden" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Transform.</span> Innovate.
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Cybersecurity, Cloud, Infrastructure and Software Solutions for Modern Enterprises across India, Middle East, and APAC.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-[0_0_24px_rgba(47,123,191,0.35)]">
                  Request Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-border hover:bg-muted">
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Bar */}
      <section className="py-12 bg-card border-y border-border">
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

      {/* 3. Services Snapshot */}
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

      {/* 4. Company Overview */}
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

      {/* 5. Why Choose Zeles */}
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

      {/* 6. Industries */}
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

      {/* 7. Engagement Process */}
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

      {/* 8. Technology Partners */}
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

      {/* 9. CTA */}
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
                    View Case Studies
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
