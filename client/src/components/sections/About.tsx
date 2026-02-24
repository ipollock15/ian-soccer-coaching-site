import coachImg from "@/assets/images/coach.jpg";
import trainingImg from "@/assets/images/training.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20 border-y border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight text-foreground">
              A coach who builds confident players — <span className="text-primary">and keeps the joy in the game.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                My coaching philosophy is inquiry-based: I help players learn to make decisions, solve problems, and grow their confidence through clarity and repetition.
              </p>
              <p>
                I believe in balancing positive reinforcement with high standards and constructive feedback. I meet players where they are, then push them forward. It's not just about technical execution—it's about game understanding and translating training into real match performance.
              </p>
            </div>
            
            <div className="bg-background border rounded-2xl p-8 mt-8 shadow-sm">
              <h4 className="font-bold text-xl mb-6 text-foreground">What a typical session looks like:</h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary text-sm font-bold shrink-0 mt-0.5">1</span>
                  <span className="text-foreground/80"><strong>Warm-up + ball mastery:</strong> Getting hundreds of touches.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary text-sm font-bold shrink-0 mt-0.5">2</span>
                  <span className="text-foreground/80"><strong>Skill work with constraints:</strong> Targeted technique.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary text-sm font-bold shrink-0 mt-0.5">3</span>
                  <span className="text-foreground/80"><strong>Game-like scenarios:</strong> Putting skills into context.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-6 w-6 items-center justify-center rounded bg-primary/10 text-primary text-sm font-bold shrink-0 mt-0.5">4</span>
                  <span className="text-foreground/80"><strong>Quick recap + next steps:</strong> Ensuring understanding.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid gap-6 relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl ring-1 ring-border/50">
              <img src={coachImg} alt="Coach with player" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="aspect-[21/9] rounded-3xl overflow-hidden shadow-lg hidden md:block ring-1 ring-border/50 ml-12 -mt-16 relative z-10 bg-background">
              <img src={trainingImg} alt="Training cones" className="object-cover w-full h-full opacity-90" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
