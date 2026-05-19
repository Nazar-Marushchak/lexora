import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { toast } from "sonner";

export function StartLearning() {
  const handleStartLearning = () => {
    toast.success("Session started!", {
      description: "Loading Unit 1: Travel flashcards...",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8">
      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold text-foreground">
          Ready to continue?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Pick up where you left off in Unit 1: Travel
        </p>
      </div>
      <Button
        size="lg"
        onClick={handleStartLearning}
        className="relative gap-2 bg-primary px-8 text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
      >
        <Play className="size-5" />
        Start Learning
      </Button>
    </div>
  );
}
