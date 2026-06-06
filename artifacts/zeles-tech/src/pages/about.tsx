import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart, Award, TrendingUp, Users, Globe } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const values = [
  { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards in every engagement, delivering outcomes that exceed expectations." },
  { icon: Heart, title: "Integrity", desc: "Transparent, honest, and accountable in every client relationship — no shortcuts, no compromises." },
  { icon: Users, title: "Collaboration", desc: "We work as an extension of your team, aligning security with your business goals and culture." },
  { icon: TrendingUp, title: "Innovation", desc: "Continuously evolving with the threat landscape, bringing cutting-edge frameworks and emerging technology to every project." },
];

const timeline = [
  { year: "2006", title: "Foundation of Expertise", desc: "Our founder begins a 2-decade journey in IT Infrastructure, Network Security, and Enterprise Architecture across leading organizations." },
  { year: "2015", title: "Cybersecurity Specialization", desc: "Deep specialization in Data Loss Prevention (DLP), SIEM technologies, and Cloud Security emerges as digital transformation accelerates." },
  { year: "2019", title: "Zero Trust & SASE Leadership", desc: "Early adoption and consulting in Zero Trust Architecture and SASE frameworks positions the practice ahead of the market curve." },
  { year: "2022", title: "Zeles Technologies Founded", desc: "Zeles Technologies Pvt. Ltd. is established in Nagpur, Maharashtra — channeling decades of expertise into a focused, enterprise-grade consulting firm." },
  { year: "2024", title: "Regional Expansion", desc: "Expanding service delivery across India, Middle East, and APAC regions, serving enterprises, cooperative banks, healthcare, and government sectors." },
];

export default function About() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              About Zeles Technologies
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              2 Decades of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Security Expertise</span><br/>in Your Corner
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              Zeles Technologies is a technology consulting firm built on decades of hands-on experience in cybersecurity, cloud infrastructure, and enterprise IT — headquartered in Nagpur, India, serving organizations across India, Middle East, and APAC.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="p-10 rounded-2xl bg-background border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full"></div>
              <Eye className="w-10 h-10 text-primary mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the most trusted cybersecurity and technology partner for enterprises in emerging markets — delivering world-class security outcomes through deep expertise, local understanding, and global best practices.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="p-10 rounded-2xl bg-background border border-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-bl-full"></div>
              <Target className="w-10 h-10 text-accent mb-6" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower organizations to operate securely and confidently in a complex digital world — through end-to-end cybersecurity strategy, robust cloud infrastructure, and proactive managed security services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide every engagement, every recommendation, and every relationship.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={i} variants={fadeIn} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Deep expertise driving every strategic decision.</p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-xl mx-auto">
            <motion.div variants={fadeIn} className="p-10 rounded-2xl bg-background border border-border text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 text-3xl font-extrabold text-white">
                Z
              </div>
              <h3 className="text-2xl font-bold mb-2">Founder & Managing Director</h3>
              <p className="text-primary font-medium mb-6">Zeles Technologies Pvt. Ltd.</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                2 decades of experience across IT Infrastructure, Network Security, Cloud Architecture, Data Loss Prevention, SIEM, SASE, Zero Trust Architecture, and Managed Security Services. Has led enterprise security transformations for organizations across banking, healthcare, education, and government sectors.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {["Cybersecurity", "SASE", "Zero Trust", "DLP", "SIEM", "Cloud Security", "Network Architecture"].map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">{skill}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-24 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Two decades of learning, specializing, and building — culminating in a firm built to serve enterprises at the highest level.</p>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2"></div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div key={i} variants={fadeIn} className={`flex gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-16 md:pl-0`}>
                    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
                      <span className="text-primary font-bold text-sm mb-2 block">{item.year}</span>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1/2 mt-6"></div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Clients Trust Us */}
      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Clients Trust Zeles</h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "2 decades of hands-on security and infrastructure expertise",
              "End-to-end coverage — from strategy to implementation to managed services",
              "Deep knowledge of Indian regulatory and compliance landscape",
              "Partnerships with leading global security and cloud vendors",
              "Sector-specific experience in banking, healthcare, government, and education",
              "Agile, responsive team that operates as a true extension of your team",
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="flex items-start gap-4 p-6 rounded-xl bg-background border border-border">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Regions */}
      <section className="py-20 bg-background border-t border-border">
        <div className="container px-4 md:px-6 text-center">
          <Globe className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-3">Headquartered in Nagpur, Serving the World</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Our primary delivery hub is Nagpur, Maharashtra, India — with active client engagements across India, the Middle East, and the broader APAC region.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {["India", "Middle East", "APAC"].map((r) => (
              <span key={r} className="px-6 py-3 rounded-full bg-card border border-border font-semibold text-sm">{r}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
