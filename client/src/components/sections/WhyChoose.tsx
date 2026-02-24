import { CheckCircle2, MessageCircle, Brain, Target } from "lucide-react";

export function WhyChoose() {
  const reasons = [
    { icon: CheckCircle2, title: "Calm, positive coaching", desc: "A supportive environment where mistakes are treated as learning opportunities." },
    { icon: MessageCircle, title: "Clear communication", desc: "Consistent feedback loop with parents on progress and focus areas." },
    { icon: Brain, title: "Confidence & decision-making", desc: "Inquiry-based coaching so players learn to think, not just follow instructions." },
    { icon: Target, title: "Game-realistic training", desc: "Drills that translate directly to match performance, not just cone work." }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why parents choose Ian</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 transition-transform duration-300">
              <r.icon className="w-10 h-10 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-semibold text-lg mb-3">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
