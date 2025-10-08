import { Card } from "@/components/ui/card";
import { Brain, Bell, TrendingUp, Target, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Categorization",
    description: "Automatically label expenses into smart categories with machine learning",
    color: "text-primary"
  },
  {
    icon: TrendingUp,
    title: "Personalized Tips",
    description: "Get tailored saving advice based on your unique spending patterns",
    color: "text-secondary"
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Never miss a bill with intelligent alerts for upcoming payments",
    color: "text-primary"
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set and monitor savings goals with beautiful visual progress",
    color: "text-secondary"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays yours with optional local-only storage mode",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Effortless Entry",
    description: "Manual entry feels like magic with smart suggestions and quick actions",
    color: "text-secondary"
  }
];

export const Features = () => {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Master Your Money
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to make financial management simple and insightful
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 border-border/50 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 bg-gradient-to-b from-card to-background"
            >
              <feature.icon className={`w-12 h-12 mb-4 ${feature.color}`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
