import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import logoUrl from "@/assets/logo.png";

const serviceLinks = [
  { href: "/services/cybersecurity", label: "Cybersecurity" },
  { href: "/services/data-security", label: "Data Security" },
  { href: "/services/cloud-security", label: "Cloud Security" },
  { href: "/services/network-infrastructure", label: "Network Infrastructure" },
  { href: "/services/sase-zero-trust", label: "SASE & Zero Trust" },
  { href: "/services/managed-security", label: "Managed Security" },
  { href: "/services/software-development", label: "Software Development" },
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

  const linkClass = (path: string) =>
    cn(
      "text-sm font-medium transition-colors hover:text-primary",
      location === path || (path !== "/" && location.startsWith(path))
        ? "text-primary"
        : "text-foreground/70"
    );

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-border shadow-sm py-2"
          : "bg-white border-border py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src={logoUrl} alt="Zeles Technologies" className="h-16 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="text-base font-extrabold tracking-tight" style={{ color: "#1F6EAF" }}>
                Zeles Technologies
              </span>
              <span className="text-xs font-semibold tracking-wide" style={{ color: "#E8670A" }}>
                Private Limited
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="/about" className={linkClass("/about")}>About</Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link href="/services" className={cn(linkClass("/services"), "flex items-center gap-1 py-2")}>
                Services <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute top-full left-0 mt-1 w-56 p-2 bg-white border border-border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                {serviceLinks.map((sl) => (
                  <Link key={sl.href} href={sl.href} className="block px-3 py-2 text-sm text-foreground/70 hover:bg-muted hover:text-primary rounded-lg transition-colors">
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

            <Link href="/industries" className={linkClass("/industries")}>Industries</Link>
            <Link href="/technology" className={linkClass("/technology")}>Technology</Link>
            <Link href="/case-studies" className={linkClass("/case-studies")}>Case Studies</Link>
            <Link href="/blog" className={linkClass("/blog")}>Blog</Link>
            <Link href="/careers" className={linkClass("/careers")}>Careers</Link>
            <Link href="/contact">
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5 shadow-sm">
                Contact Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
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
        <div className="xl:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-xl max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col p-4 gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/industries", label: "Industries" },
              { href: "/technology", label: "Technology" },
              { href: "/case-studies", label: "Case Studies" },
              { href: "/blog", label: "Blog" },
              { href: "/careers", label: "Careers" },
            ].map((nl) => (
              <Link key={nl.href} href={nl.href} className={cn("text-sm font-medium p-3 rounded-lg hover:bg-muted transition-colors", location === nl.href ? "text-primary bg-muted" : "text-foreground/70")}>
                {nl.label}
              </Link>
            ))}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between text-sm font-medium p-3 rounded-lg hover:bg-muted text-foreground/70 transition-colors"
            >
              Services <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            {servicesOpen && (
              <div className="ml-4 border-l border-border pl-4 space-y-1">
                {serviceLinks.map((sl) => (
                  <Link key={sl.href} href={sl.href} className="block text-sm p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-muted transition-colors">
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
