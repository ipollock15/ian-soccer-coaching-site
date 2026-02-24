export function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Quick Assessment",
      desc: "We establish goals and baseline technical ability during our first session."
    },
    {
      num: "2",
      title: "Training Plan",
      desc: "We focus on specific skills, weak foot development, and game habits."
    },
    {
      num: "3",
      title: "Progress Loop",
      desc: "Repeat, measure, and translate training directly into match performance."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-16 tracking-tight">How it Works</h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center relative">
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-full h-px bg-border/80" />
              )}
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-6 relative z-10 shadow-lg">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-[250px] mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
