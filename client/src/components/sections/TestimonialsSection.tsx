import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  const featured = testimonials[0];
  const grid = testimonials.slice(1);

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Parents notice the difference</h2>
          <p className="text-xl text-muted-foreground">Real feedback from players and parents.</p>
        </div>

        {/* Featured */}
        <div className="max-w-4xl mx-auto bg-primary text-primary-foreground rounded-[2.5rem] p-8 md:p-14 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
          <Quote className="absolute top-8 left-8 w-24 h-24 text-primary-foreground/10 rotate-180" strokeWidth={1} />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-4xl font-medium italic mb-10 leading-relaxed text-white">
              "{featured.quote}"
            </h3>
            <div className="inline-flex items-center gap-4">
              <div className="h-px w-12 bg-primary-foreground/30"></div>
              <div>
                <div className="font-bold text-lg text-white">{featured.name}</div>
                <div className="text-primary-foreground/80 text-sm">{featured.relationship}</div>
              </div>
              <div className="h-px w-12 bg-primary-foreground/30"></div>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {grid.map((t, i) => (
            <div key={i} className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="mb-5 inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full w-fit">
                {t.highlightTag}
              </div>
              <p className="text-foreground/90 italic mb-8 flex-1 text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto pt-5 border-t border-border/40 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold font-heading">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{t.name}</div>
                  <div className="text-muted-foreground text-xs font-medium">{t.relationship}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
