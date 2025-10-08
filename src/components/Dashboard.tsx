import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowUp, ArrowDown, Coffee, Home, ShoppingBag, Utensils, Target, Bell } from "lucide-react";
import { useState, useEffect } from "react";

const transactions = [
  { id: 1, name: "Morning Coffee", category: "Food & Drink", amount: -5.50, icon: Coffee, trend: "down" },
  { id: 2, name: "Rent Payment", category: "Housing", amount: -1200, icon: Home, trend: "down" },
  { id: 3, name: "Online Shopping", category: "Shopping", amount: -89.99, icon: ShoppingBag, trend: "down" },
  { id: 4, name: "Restaurant", category: "Food & Drink", amount: -45.20, icon: Utensils, trend: "down" },
];

const goals = [
  { name: "Emergency Fund", current: 3500, target: 5000, color: "bg-primary" },
  { name: "Vacation", current: 1200, target: 2000, color: "bg-secondary" },
];

const reminders = [
  { title: "Netflix Subscription", date: "Due in 3 days", amount: "$15.99" },
  { title: "Credit Card Payment", date: "Due in 5 days", amount: "$450.00" },
];

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 space-y-4">
            <Skeleton className="h-12 w-96 mx-auto" />
            <Skeleton className="h-6 w-[500px] mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-6 w-24" />
              </div>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex items-center justify-between p-3">
                    <div className="flex items-center gap-3">
                      <Skeleton className="h-10 w-10 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-3 w-24" />
                      </div>
                    </div>
                    <Skeleton className="h-4 w-16" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 mb-6">
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-8 w-40" />
              </div>
              <div className="space-y-6">
                {[1, 2].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                ))}
                <Skeleton className="h-20 w-full rounded-lg" />
              </div>
            </Card>

            <Card className="p-6 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <Skeleton className="h-6 w-6 rounded" />
                <Skeleton className="h-8 w-40" />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {[1, 2].map((i) => (
                  <Skeleton key={i} className="h-24 w-full rounded-lg" />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Your Financial Command Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get instant insights into your spending, savings, and upcoming bills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Spending Overview */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold">Spending Overview</h3>
              <Badge variant="outline" className="text-destructive border-destructive/50">
                -$1,340.69
              </Badge>
            </div>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <transaction.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{transaction.name}</p>
                      <p className="text-sm text-muted-foreground">{transaction.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">${Math.abs(transaction.amount).toFixed(2)}</span>
                    <ArrowDown className="w-4 h-4 text-destructive" />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Savings Goals */}
          <Card className="p-6 shadow-card">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-semibold">Savings Goals</h3>
            </div>
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{goal.name}</span>
                    <span className="text-sm text-muted-foreground">
                      ${goal.current} / ${goal.target}
                    </span>
                  </div>
                  <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                  <p className="text-sm text-muted-foreground">
                    {Math.round((goal.current / goal.target) * 100)}% complete
                  </p>
                </div>
              ))}
              <div className="mt-6 p-4 bg-accent rounded-lg">
                <p className="text-sm text-accent-foreground">
                  💡 <strong>AI Tip:</strong> You're spending 15% less on dining out this month! 
                  Consider putting that $67 toward your vacation fund.
                </p>
              </div>
            </div>
          </Card>

          {/* Smart Reminders */}
          <Card className="p-6 shadow-card lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Bell className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Smart Reminders</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {reminders.map((reminder, index) => (
                <div key={index} className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">{reminder.title}</p>
                    <Badge variant="secondary">{reminder.amount}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{reminder.date}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
