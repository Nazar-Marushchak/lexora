import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Flame, Trophy } from "lucide-react";

const stats = [
  {
    icon: BookOpen,
    label: "Total Words",
    value: "1,247",
    change: "+23 this week",
  },
  {
    icon: Flame,
    label: "Active Streak",
    value: "14",
    suffix: "days",
    change: "Keep it up!",
  },
  {
    icon: Trophy,
    label: "Mastered Words",
    value: "892",
    change: "72% of total",
  },
];

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="border-border bg-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
                <stat.icon className="size-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  {stat.suffix && (
                    <span className="text-sm text-muted-foreground">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                <p className="text-xs text-primary">{stat.change}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
