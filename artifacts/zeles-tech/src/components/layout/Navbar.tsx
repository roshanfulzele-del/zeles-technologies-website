import { Link, useLocation } from "wouter";
import { Menu, X, Shield, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const serviceLinks = [
  { href: "/services/cybersecurity", label: "Cybersecurity" },
  { href: "/services/data-security", label: "Data Security" },
  { href: "/services/cloud-security", label: "Cloud Security" },
  { href: "/services/network-infrastructure", label: "Network Infrastructure" },
  { href: "/services/sase-zero-trust", label: "SASE & Zero Trust" },
  { href: "/services/managed-security", label: "Managed Security" },
  { href: "/services/software-development", label: "Software Development" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/industries", label: "Industries" },
  { href: "/technology", label: "Technology" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border py-2"
          : "bg-transparent border-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative flex items-center justify-center w-8 h-8 rounded bg-primary overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-primary opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <Shield className="w-5 h-5 text-white relative z-10" />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              ZELES<span className="text-primary">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            <Link href="/" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/" ? "text-primary" : "text-foreground/80")}>Home</Link>
            <Link href="/about" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/about" ? "text-primary" : "text-foreground/80")}>About</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link href="/services" className={cn("flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary py-2", location.startsWith("/services") ? "text-primary" : "text-foreground/80")}>
                Services <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-56 p-2 bg-card border border-border rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {serviceLinks.map((sl) => (
                  <Link key={sl.href} href={sl.href} className="block px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-primary rounded-lg transition-colors">
                    {sl.label}
                  </Link>
                ))}
                <div className="border-t border-border mt-2 pt-2">
                  <Link href="/services" className="block px-3 py-2 text-sm text-primary font-medium hover:bg-muted rounded-lg transition-colors">
                    All Services &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/industries" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/industries" ? "text-primary" : "text-foreground/80")}>Industries</Link>
            <Link href="/technology" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/technology" ? "text-primary" : "text-foreground/80")}>Technology</Link>
            <Link href="/case-studies" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/case-studies" ? "text-primary" : "text-foreground/80")}>Case Studies</Link>
            <Link href="/blog" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/blog" ? "text-primary" : "text-foreground/80")}>Blog</Link>
            <Link href="/careers" className={cn("text-sm font-medium transition-colors hover:text-primary", location === "/careers" ? "text-primary" : "text-foreground/80")}>Careers</Link>
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-background/98 backdrop-blur-md border-b border-border shadow-xl max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            {navLinks.map((nl) => (
              <Link key={nl.href} href={nl.href} className={cn("text-sm font-medium p-3 rounded-lg hover:bg-muted transition-colors", location === nl.href ? "text-primary bg-muted" : "text-foreground/80")}>
                {nl.label}
              </Link>
            ))}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between text-sm font-medium p-3 rounded-lg hover:bg-muted text-foreground/80 transition-colors"
            >
              Services <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="ml-4 border-l border-border pl-4 space-y-1">
                {serviceLinks.map((sl) => (
                  <Link key={sl.href} href={sl.href} className="block text-sm p-2 rounded-lg text-foreground/70 hover:text-primary hover:bg-muted transition-colors">
                    {sl.label}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/contact" className="mt-2">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">Contact Us</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
