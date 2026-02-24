export function ExpectedOutcomes() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary text-lg font-bold shadow-sm">1</span>
              What parents can expect
            </h3>
            <ul className="space-y-8">
              <li className="flex flex-col">
                <span className="font-semibold text-xl mb-1">Clear plan and feedback</span>
                <span className="text-primary-foreground/80 leading-relaxed">We'll always know what we're working on and why.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-xl mb-1">Noticeable confidence growth</span>
                <span className="text-primary-foreground/80 leading-relaxed">Your child will try new things with less hesitation.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-xl mb-1">Better technical fundamentals</span>
                <span className="text-primary-foreground/80 leading-relaxed">Sharper first touch, dribbling, passing, and finishing.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-xl mb-1">Smarter decisions in games</span>
                <span className="text-primary-foreground/80 leading-relaxed">Improved scanning, composure, and speed of play.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-xl mb-1">Reliability</span>
                <span className="text-primary-foreground/80 leading-relaxed">A coach who communicates consistently and shows up.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground text-primary text-lg font-bold shadow-sm">2</span>
              What players feel
            </h3>
            <ul className="space-y-8 bg-primary-foreground/10 p-8 rounded-3xl border border-primary-foreground/20 backdrop-blur-sm">
              <li className="flex flex-col">
                <span className="font-semibold text-xl mb-1">More confident on the ball</span>
                <span className="text-primary-foreground/80 leading-relaxed">Comfortable under pressure and trusting their technique.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-xl mb-1">Clearer in games</span>
                <span className="text-primary-foreground/80 leading-relaxed">"I know what to do next." Less panic, more purpose.</span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-xl mb-1">Proud of measurable progress</span>
                <span className="text-primary-foreground/80 leading-relaxed">Seeing the direct results of their hard work.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
