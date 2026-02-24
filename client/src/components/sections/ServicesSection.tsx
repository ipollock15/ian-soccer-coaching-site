import { services } from "@/data/services";
import { siteConfig } from "@/data/config";

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Training Options</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the format that best fits your player's goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => (
            <div key={service.id} className="border border-border/60 bg-card rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col hover:shadow-md transition-shadow">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-foreground">{service.title}</h3>
                {service.subtitle && <p className="text-primary font-medium mt-2 text-lg">{service.subtitle}</p>}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                {service.description}
              </p>
              
              <div className="mb-10 flex-1 bg-secondary/50 rounded-2xl p-6">
                <h4 className="font-semibold mb-2">Best for:</h4>
                <p className="text-sm text-foreground/80 mb-6">{service.bestFor}</p>
                
                <h4 className="font-semibold mb-3">Focus Areas:</h4>
                <ul className="space-y-3">
                  {service.focusAreas.map((area, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto pt-6 border-t border-border/40">
                <a href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full h-14 items-center justify-center rounded-xl bg-primary px-8 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                  Book a Session
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-muted/40 rounded-3xl p-10 max-w-3xl mx-auto border border-border/50">
          <h4 className="text-2xl font-semibold mb-3">Not sure what's best?</h4>
          <p className="text-muted-foreground mb-8 text-lg">Pricing varies by format and location — let's find the right fit for your player.</p>
          <a href={siteConfig.callUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center justify-center rounded-lg border border-input bg-background px-8 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
