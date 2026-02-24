import { siteConfig } from "@/data/config";

export function Footer() {
  return (
    <>
      <footer className="border-t border-border/40 py-12 md:py-16 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <h3 className="font-heading font-semibold text-lg text-foreground mb-4">{siteConfig.coachName} - Private Soccer Training</h3>
          <p className="mb-8">{siteConfig.location}</p>
          <p className="text-sm">© {new Date().getFullYear()} {siteConfig.coachName}. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Mobile Persistent Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 backdrop-blur border-t z-50 flex gap-3 pb-safe shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)]">
        <a href={siteConfig.callUrl} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
          Call
        </a>
        <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="flex-[2] inline-flex h-12 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
          Book Session
        </a>
      </div>
    </>
  );
}
