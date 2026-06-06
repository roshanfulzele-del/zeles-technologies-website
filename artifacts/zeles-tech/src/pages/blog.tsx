import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const categories = ["All", "Cybersecurity", "Cloud Security", "Data Protection", "Compliance", "Infrastructure", "Industry Insights"];

const posts = [
  {
    title: "Zero Trust Architecture: Moving Beyond the Perimeter in 2024",
    category: "Cybersecurity",
    date: "May 28, 2024",
    readTime: "8 min read",
    excerpt: "Traditional perimeter-based security models are no longer sufficient in an era of remote work, cloud adoption, and sophisticated adversaries. Zero Trust Architecture fundamentally reimagines how organizations approach access control and security.",
    featured: true,
  },
  {
    title: "SASE: The Convergence of Networking and Security for Distributed Enterprises",
    category: "Cloud Security",
    date: "May 15, 2024",
    readTime: "6 min read",
    excerpt: "Secure Access Service Edge (SASE) combines SD-WAN with cloud-native security functions to deliver a unified, cloud-delivered service. Here's what enterprises need to know before making the shift.",
    featured: true,
  },
  {
    title: "India's Digital Personal Data Protection Act: What CISOs Must Do Now",
    category: "Compliance",
    date: "April 22, 2024",
    readTime: "10 min read",
    excerpt: "The Digital Personal Data Protection (DPDP) Act 2023 creates new obligations for organizations processing personal data of Indian citizens. We break down the key requirements and a practical compliance roadmap.",
    featured: true,
  },
  {
    title: "DLP Implementation Guide: Lessons from 50+ Enterprise Deployments",
    category: "Data Protection",
    date: "April 8, 2024",
    readTime: "12 min read",
    excerpt: "Data Loss Prevention deployments fail for a handful of predictable reasons. Drawing from extensive real-world experience, we share the critical success factors and common pitfalls.",
    featured: false,
  },
  {
    title: "Cooperative Banks and Cybersecurity: A Practical Guide to RBI Compliance",
    category: "Industry Insights",
    date: "March 25, 2024",
    readTime: "9 min read",
    excerpt: "Cooperative banks face the same threat landscape as commercial banks but with significantly fewer resources. Here's how to build a defensible security posture on a realistic budget while meeting RBI mandates.",
    featured: false,
  },
  {
    title: "Building a Security-First Cloud Migration Strategy on Azure",
    category: "Infrastructure",
    date: "March 12, 2024",
    readTime: "7 min read",
    excerpt: "Cloud migrations that treat security as an afterthought create technical debt that can take years to unwind. We outline the security architecture decisions that need to happen before the first workload moves.",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  "Cybersecurity": "text-blue-400 bg-blue-400/10",
  "Cloud Security": "text-sky-400 bg-sky-400/10",
  "Data Protection": "text-emerald-400 bg-emerald-400/10",
  "Compliance": "text-yellow-400 bg-yellow-400/10",
  "Infrastructure": "text-violet-400 bg-violet-400/10",
  "Industry Insights": "text-orange-400 bg-orange-400/10",
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              Insights & Research
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligence</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              Practical cybersecurity insights, threat intelligence, and thought leadership from our team of security practitioners.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-card border-b border-border sticky top-16 z-30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${activeCategory === cat ? "bg-primary text-primary-foreground" : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.article key={i} variants={fadeIn} className="group bg-card rounded-2xl border border-border hover:border-primary/40 transition-colors duration-300 overflow-hidden flex flex-col">
                <div className="bg-gradient-to-br from-primary/20 to-card h-32 flex items-end p-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || "text-primary bg-primary/10"}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold leading-snug mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">{post.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <Tag className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No articles in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-card border-t border-border">
        <div className="container px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="max-w-2xl mx-auto text-center">
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-4">Stay Ahead of the Threat Curve</motion.h2>
            <motion.p variants={fadeIn} className="text-muted-foreground mb-8">Monthly security intelligence briefings, regulatory updates, and expert perspectives — delivered to your inbox.</motion.p>
            <motion.form variants={fadeIn} onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your work email address" className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 whitespace-nowrap">Subscribe</Button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
