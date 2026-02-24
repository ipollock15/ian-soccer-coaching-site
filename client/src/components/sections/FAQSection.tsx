import { faqs } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">Everything you need to know to get started.</p>
        </div>

        <div className="bg-background border border-border/50 rounded-2xl shadow-sm p-4 sm:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b-border/40 last:border-0 px-2">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary transition-colors py-6 data-[state=open]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
