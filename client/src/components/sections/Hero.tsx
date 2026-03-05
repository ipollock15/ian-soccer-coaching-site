import { siteConfig } from "@/data/config";
import heroImg from "@/assets/images/hero.jpg";

export function Hero() {
  return (
    <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold border-transparent bg-primary/10 text-primary mb-6">
            Brooklyn, NY • Ages 5–18 • 1:1 & Small Groups
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            Your child will love soccer more.{" "}
            <span className="text-primary">And play it better.</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
            Private soccer training in Brooklyn that builds real confidence, sharper fundamentals, and smarter decision-making — so players show up differently on game day.
          </p>
          <p className="text-base text-muted-foreground/80 italic mb-8 border-l-2 border-primary/40 pl-4">
            "Hire him immediately and don't turn back. He is the type of coach and man that you build clubs with." — Blaine & Kristen Herman
          </p>
          <div className="flex flex-col sm:flex-row gap-4">

              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] w-full sm:w-auto"
            >
              Book a Free Intro Call
            </a>

              href={siteConfig.callUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground w-full sm:w-auto"
            >
              Learn More
            </a>
          </div>
          {/* Trust bar */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">⚽ 6+ Years Coaching</span>
            <span className="flex items-center gap-2">✅ USSF Licensed</span>
            <span className="flex items-center gap-2">🛡️ Background Checked</span>
            <span className="flex items-center gap-2">⭐ 5-Star Rated</span>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
          <img src={heroImg} alt="Coach Ian training a youth soccer player" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}