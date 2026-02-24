import { credentials } from "@/data/credentials";
import { siteConfig } from "@/data/config";
import { ShieldCheck } from "lucide-react";

export function CredentialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Credentials & Safety</h2>
          <p className="text-muted-foreground">Your child's safety, development, and well-being are my highest priorities.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {credentials.filter(c => c.enabled).map((cred, i) => (
            <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-secondary/50 border border-secondary transition-colors hover:border-primary/20">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="font-medium text-foreground">{cred.label}</h4>
                <p className="text-sm font-semibold text-primary mt-1">{cred.status}</p>
                {cred.details && <p className="text-xs text-muted-foreground mt-1.5">{cred.details}</p>}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">If you have questions about credentials or fit, let's chat.</p>
          <a href={siteConfig.callUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Schedule a Quick Call
          </a>
        </div>
      </div>
    </section>
  );
}
