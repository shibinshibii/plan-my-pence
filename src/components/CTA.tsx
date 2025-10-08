import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-primary opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Take Control of
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Your Financial Future?
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Join thousands of users who've already discovered the easiest way to manage money.
            No credit card required. Start for free today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg gap-2 shadow-xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="pt-8 grid grid-cols-3 gap-8 max-w-xl mx-auto">
            <div>
              <p className="text-3xl font-bold text-primary">10k+</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">$2M+</p>
              <p className="text-sm text-muted-foreground">Saved Together</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4.9★</p>
              <p className="text-sm text-muted-foreground">User Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
