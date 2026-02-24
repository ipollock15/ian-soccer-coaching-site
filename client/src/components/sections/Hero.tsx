import { siteConfig } from "@/data/config";
import heroImg from "@/assets/images/hero.jpg";

export function Hero() {
  return (
    <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-6">
            Brooklyn, NY • Youth-focused • 1:1 & Small Groups
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-foreground leading-[1.1]">
            Private Soccer Training in Brooklyn — <span className="text-primary">Confidence, Technique, Game IQ</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Helping youth players develop the technical foundation, in-game decision making, and confidence to translate training into game performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:scale-[1.02] w-full sm:w-auto">
              Book a Session
            </a>
            <a href={siteConfig.callUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground w-full sm:w-auto">
              Schedule a Call
            </a>
          </div>
        </div>
        <div className="relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50">
          <img src={heroImg} alt="Youth soccer player training" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
