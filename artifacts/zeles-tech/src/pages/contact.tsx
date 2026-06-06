import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Linkedin, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service area"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-32 bg-background overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl mx-auto">
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">
              Get In Touch
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              Let's Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Enterprise Together</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-muted-foreground leading-relaxed">
              Reach out for a no-obligation consultation. Our team responds within one business day.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeIn} className="text-2xl font-bold mb-8">Contact Information</motion.h2>
              <motion.div variants={stagger} className="space-y-6 mb-12">
                {[
                  { icon: MapPin, label: "Headquarters", value: "Nagpur, Maharashtra, India\nServing India, Middle East & APAC" },
                  { icon: Mail, label: "Email", value: "contact@zelestech.com" },
                  { icon: Phone, label: "Phone", value: "+91 000 000 0000" },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeIn} className="flex items-start gap-5 p-6 rounded-xl bg-background border border-border">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">{item.label}</p>
                      <p className="text-foreground font-medium whitespace-pre-line">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div variants={fadeIn}>
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
              <motion.div variants={fadeIn} className="mt-10 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-primary mb-2">Business Hours</h3>
                <p className="text-sm text-muted-foreground">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
                <p className="text-sm text-muted-foreground">Emergency support available 24/7 for managed security clients.</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-background rounded-2xl border border-border">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
                  <p className="text-muted-foreground leading-relaxed">Thank you for reaching out. Our team will review your inquiry and respond within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="bg-background rounded-2xl border border-border p-8 space-y-6">
                  <h2 className="text-xl font-bold mb-2">Send Us a Message</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <input {...register("name")} placeholder="John Smith" className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm" />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <input {...register("email")} type="email" placeholder="john@company.com" className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm" />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company *</label>
                      <input {...register("company")} placeholder="Your Organization" className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm" />
                      {errors.company && <p className="text-destructive text-xs mt-1">{errors.company.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input {...register("phone")} type="tel" placeholder="+91 000 000 0000" className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Area *</label>
                    <select {...register("service")} className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm">
                      <option value="">Select a service area...</option>
                      <option value="cybersecurity">Cybersecurity Services</option>
                      <option value="data-security">Data Security</option>
                      <option value="cloud-security">Cloud Security</option>
                      <option value="network">Network Infrastructure</option>
                      <option value="sase">SASE & Zero Trust</option>
                      <option value="managed">Managed Security Services</option>
                      <option value="software">Software Development</option>
                      <option value="other">General Inquiry</option>
                    </select>
                    {errors.service && <p className="text-destructive text-xs mt-1">{errors.service.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message *</label>
                    <textarea {...register("message")} rows={5} placeholder="Describe your security challenges or requirements..." className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-colors text-sm resize-none" />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message.message}</p>}
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base">
                    {isSubmitting ? "Sending..." : (<><Send className="w-4 h-4 mr-2" /> Send Message</>)}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">Your information is kept strictly confidential and never shared with third parties.</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
