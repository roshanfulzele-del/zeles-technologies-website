import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Terms() {
  const lastUpdated = "June 2025";
  return (
    <div className="flex flex-col w-full">
      <section className="py-24 bg-background border-b border-border">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">Legal</div>
            <h1 className="text-4xl font-extrabold mb-3">Terms of Service</h1>
            <p className="text-muted-foreground text-sm mb-12">Last updated: {lastUpdated}</p>

            <div className="prose prose-slate max-w-none space-y-8 text-foreground">

              <section>
                <h2 className="text-xl font-bold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">By accessing or using the website at <strong>zelestech.com</strong>, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use this website.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed">Zeles Technologies Pvt. Ltd. provides cybersecurity consulting, cloud security, network infrastructure, and software development services to enterprise clients. This website serves as an informational and lead-generation portal. Actual service delivery is governed by separate engagement agreements and statements of work.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">3. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">All content on this website — including text, graphics, logos, icons, and software — is the property of Zeles Technologies Pvt. Ltd. and protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written consent.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">4. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">To the fullest extent permitted by law, Zeles Technologies Pvt. Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this website or reliance on any information presented herein. The website is provided on an "as is" and "as available" basis without any warranties, express or implied.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">5. Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">This website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">6. Confidentiality of Inquiries</h2>
                <p className="text-muted-foreground leading-relaxed">Information submitted through our contact form will be treated with strict confidentiality and used solely to respond to your inquiry. We do not share your business information with third parties without your consent.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">7. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">These Terms are governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra, India.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">8. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated revision date. Continued use of the website after any changes constitutes your acceptance of the new Terms.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">9. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">For questions about these Terms, please contact:</p>
                <div className="mt-3 p-4 rounded-xl bg-card border border-border">
                  <p className="font-semibold">Zeles Technologies Pvt. Ltd.</p>
                  <p className="text-muted-foreground text-sm">504 Dahilia Shiv, Elite Phase 3, KH No 67/2, Khapri, Nagpur, Maharashtra 441108</p>
                  <p className="text-muted-foreground text-sm">Email: <a href="mailto:admin@zelestech.com" className="text-primary hover:underline">admin@zelestech.com</a></p>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
