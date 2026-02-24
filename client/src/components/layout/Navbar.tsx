import { Link } from "wouter";
import { siteConfig } from "@/data/config";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight text-primary">
          {siteConfig.coachName}
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
        </nav>
        <div className="hidden md:flex gap-3">
          <a href={siteConfig.callUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Schedule a Call
          </a>
          <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Book a Session
          </a>
        </div>
      </div>
    </header>
  );
}
