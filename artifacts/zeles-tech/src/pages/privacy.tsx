import { motion } from "framer-motion";

const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

export default function Privacy() {
  const lastUpdated = "June 2025";
  return (
    <div className="flex flex-col w-full">
      <section className="py-24 bg-background border-b border-border">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 text-sm font-medium">Legal</div>
            <h1 className="text-4xl font-extrabold mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm mb-12">Last updated: {lastUpdated}</p>

            <div className="prose prose-slate max-w-none space-y-8 text-foreground">

              <section>
                <h2 className="text-xl font-bold mb-3">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">Zeles Technologies Pvt. Ltd. ("Zeles Technologies", "we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website <strong>zelestech.com</strong> or engage with our services.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following categories of information:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Contact information</strong> — name, email address, phone number, company name, when you submit our contact form or request a consultation.</li>
                  <li><strong>Usage data</strong> — pages visited, time spent on pages, browser type, IP address, and referral source, collected via analytics tools.</li>
                  <li><strong>Communications</strong> — records of correspondence when you contact us by email or phone.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">3. How We Use Your Information</h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Respond to your inquiries and provide requested services.</li>
                  <li>Send you relevant information about our cybersecurity and technology solutions.</li>
                  <li>Improve our website and service offerings.</li>
                  <li>Comply with legal obligations under applicable Indian law including the Digital Personal Data Protection Act, 2023 (DPDP Act).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">4. Data Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers who assist in operating our website and delivering services, subject to confidentiality agreements. We may disclose information when required by law or to protect our legal rights.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">5. Data Retention</h2>
                <p className="text-muted-foreground leading-relaxed">We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact form submissions are retained for up to 24 months.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">Under the DPDP Act 2023 and applicable law, you have the right to:</p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access the personal data we hold about you.</li>
                  <li>Request correction of inaccurate data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Withdraw consent at any time.</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mt-3">To exercise these rights, contact us at <a href="mailto:admin@zelestech.com" className="text-primary hover:underline">admin@zelestech.com</a>.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">7. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">Our website may use cookies and similar technologies to enhance user experience and gather analytics. You may disable cookies through your browser settings; however, some features may not function correctly.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">8. Security</h2>
                <p className="text-muted-foreground leading-relaxed">We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction — consistent with our position as a cybersecurity company.</p>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-3">9. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">For privacy-related inquiries, please contact our Data Protection Officer:</p>
                <div className="mt-3 p-4 rounded-xl bg-card border border-border">
                  <p className="font-semibold">Zeles Technologies Pvt. Ltd.</p>
                  <p className="text-muted-foreground text-sm">504 Dahilia Shiv, Elite Phase 3, KH No 67/2, Khapri, Nagpur, Maharashtra 441108</p>
                  <p className="text-muted-foreground text-sm">Email: <a href="mailto:admin@zelestech.com" className="text-primary hover:underline">admin@zelestech.com</a></p>
                  <p className="text-muted-foreground text-sm">Phone: <a href="tel:+917124063788" className="text-primary hover:underline">+91 71240 63788</a></p>
                </div>
              </section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
