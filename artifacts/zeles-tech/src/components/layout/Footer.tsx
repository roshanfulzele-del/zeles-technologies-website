import { Link } from "wouter";
import { Mail, MapPin, Phone, Linkedin, Twitter } from "lucide-react";
import logoUrl from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div>
            <Link href="/" className="flex items-center mb-6">
              <img src={logoUrl} alt="Zeles Technologies" className="h-14 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Empowering modern enterprises with cutting-edge cybersecurity, cloud solutions, and zero-trust architectures.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-border flex items-center justify-center text-foreground/60 hover:bg-primary hover:text-white hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/services/cybersecurity" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cybersecurity</Link></li>
              <li><Link href="/services/cloud-security" className="text-muted-foreground hover:text-primary text-sm transition-colors">Cloud Security</Link></li>
              <li><Link href="/services/data-security" className="text-muted-foreground hover:text-primary text-sm transition-colors">Data Protection</Link></li>
              <li><Link href="/services/sase-zero-trust" className="text-muted-foreground hover:text-primary text-sm transition-colors">SASE & Zero Trust</Link></li>
              <li><Link href="/services/managed-security" className="text-muted-foreground hover:text-primary text-sm transition-colors">Managed Security</Link></li>
              <li><Link href="/services/software-development" className="text-muted-foreground hover:text-primary text-sm transition-colors">Software Development</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary text-sm transition-colors">About Us</Link></li>
              <li><Link href="/industries" className="text-muted-foreground hover:text-primary text-sm transition-colors">Industries Served</Link></li>
              <li><Link href="/technology" className="text-muted-foreground hover:text-primary text-sm transition-colors">Technology Partners</Link></li>
              <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary text-sm transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary text-sm transition-colors">Blog & Insights</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary text-sm transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>504 Dahilia Shiv, Elite Phase 3<br />KH No 67/2, Khapri, Nagpur<br />Maharashtra, India – 441108</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:admin@zelestech.com" className="hover:text-primary transition-colors">admin@zelestech.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+917124063788" className="hover:text-primary transition-colors">+91 71240 63788</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zeles Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
