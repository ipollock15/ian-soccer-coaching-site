import { CheckCircle2, MessageCircle, Brain, Target, Shield, TrendingUp } from "lucide-react";

const parentOutcomes = [
  { icon: MessageCircle, title: "Clear communication", desc: "Consistent feedback after every session — you'll always know what we're working on and why." },
  { icon: TrendingUp, title: "Noticeable confidence growth", desc: "Your child will try new things on the field with less hesitation over time." },
  { icon: Target, title: "Better fundamentals in games", desc: "Sharper first touch, dribbling, passing, and smarter decision-making under pressure." },
  { icon: Shield, title: "A coach who shows up", desc: "Reliable, punctual, and consistent — for both your player and you." },
];

const playerOutcomes = [
  { icon: Brain, title: "Confident on the ball", desc: "Comfortable under pressure and trusting their technique in real match situations." },
  { icon: CheckCircle2, title: "Clarity in games", desc: '"I know what to do next." Less panic, more purpose.' },
  { icon: Target, title: "Measurable progress", desc: "Players see and feel the direct results of their hard work each session." },
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What to expect</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">Real outcomes for players and parents — not just during training, but in games.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Parents column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-8">For Parents</h3>
            <div className="space-y-6">
              {parentOutcomes.map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-background p-6 rounded-2xl border border-border/50 shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
                  <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Players column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-primary mb-8">For Players</h3>
            <div className="space-y-6">
              {playerOutcomes.map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-background p-6 rounded-2xl border border-border/50 shadow-sm hover:-translate-y-0.5 transition-transform duration-200">
                  <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}