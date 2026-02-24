import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  parentName: z.string().min(2, "Parent name is required"),
  childAge: z.string().min(1, "Child age is required"),
  currentTeam: z.string().optional(),
  goals: z.string({
    required_error: "Please select a goal",
  }),
  availability: z.string().min(2, "Please let us know your availability"),
  location: z.string({
    required_error: "Please select a location preference",
  }),
  email: z.string().email("Please enter a valid email"),
});

export function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      childAge: "",
      currentTeam: "",
      availability: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you shortly to set up our consultation.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">Ready to Start?</h2>
          <p className="text-xl text-muted-foreground">Fill out the form below or schedule a call directly to discuss your player's goals.</p>
        </div>

        <div className="bg-card border border-border/50 shadow-xl rounded-3xl p-8 md:p-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="parentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Parent Name</FormLabel>
                      <FormControl>
                        <Input className="h-12 text-base rounded-xl" placeholder="Jane Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Email Address</FormLabel>
                      <FormControl>
                        <Input className="h-12 text-base rounded-xl" type="email" placeholder="jane@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="childAge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Child's Age</FormLabel>
                      <FormControl>
                        <Input className="h-12 text-base rounded-xl" placeholder="e.g. 12" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="currentTeam"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Current Team/Level (Optional)</FormLabel>
                      <FormControl>
                        <Input className="h-12 text-base rounded-xl" placeholder="e.g. Brooklyn City FC U13" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base font-semibold">Primary Goals</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="h-12 text-base rounded-xl">
                          <SelectValue placeholder="What are you looking to improve?" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="confidence">Building Confidence & Focus</SelectItem>
                        <SelectItem value="technical">Technical Fundamentals (Dribbling/Passing)</SelectItem>
                        <SelectItem value="game-iq">Game IQ & Decision Making</SelectItem>
                        <SelectItem value="tryout">Tryout Preparation</SelectItem>
                        <SelectItem value="other">Other / Combination</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="availability"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Preferred Availability</FormLabel>
                      <FormControl>
                        <Input className="h-12 text-base rounded-xl" placeholder="e.g. Weekday evenings, Weekends" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-semibold">Preferred Area</FormLabel>
                      <FormControl>
                        <Input className="h-12 text-base rounded-xl" placeholder="e.g. Prospect Park, McCarren" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row gap-4 justify-end">
                <button type="submit" className="inline-flex h-14 items-center justify-center rounded-xl bg-primary px-10 text-lg font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 w-full sm:w-auto">
                  Send Message
                </button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
