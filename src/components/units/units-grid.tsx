import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const units = [
  { id: 1, name: "Travel", progress: 85, words: 42, status: "active" },
  { id: 2, name: "Food & Dining", progress: 60, words: 38, status: "active" },
  { id: 3, name: "Business", progress: 45, words: 56, status: "active" },
  { id: 4, name: "Health", progress: 20, words: 32, status: "new" },
  { id: 5, name: "Technology", progress: 0, words: 48, status: "locked" },
  { id: 6, name: "Culture", progress: 0, words: 35, status: "locked" },
];

export function UnitsGrid() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle className="text-foreground">Your Units</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((unit) => (
            <div
              key={unit.id}
              className={`group cursor-pointer rounded-xl border border-border bg-secondary/50 p-4 transition-all hover:border-primary/50 hover:bg-secondary ${
                unit.status === "locked" ? "opacity-50" : ""
              }`}
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  Unit {unit.id}: {unit.name}
                </span>
                <Badge
                  variant={unit.status === "new" ? "default" : "secondary"}
                  className={
                    unit.status === "new"
                      ? "bg-primary text-primary-foreground"
                      : unit.status === "locked"
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary/10 text-primary"
                  }
                >
                  {unit.status === "active"
                    ? `${unit.progress}%`
                    : unit.status === "new"
                      ? "New"
                      : "Locked"}
                </Badge>
              </div>
              <Progress
                value={unit.progress}
                className="h-1.5 bg-muted [&>[data-slot=progress-indicator]]:bg-primary"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                {unit.words} words
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
