import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "@tanstack/react-router";

export type SessionType =
  | { type: "unit"; unitId: string; unitName: string }
  | { type: "mixed"; unitCount: number }
  | { type: "all"; wordCount: number }
  | { type: "hard" };

interface ReviewHeaderProps {
  currentCard: number;
  totalCards: number;
  session: SessionType;
  onExit?: () => void;
}

export function ReviewHeader({
  currentCard,
  totalCards,
  session,
  onExit,
}: ReviewHeaderProps) {
  const progressValue = (currentCard / totalCards) * 100;

  const getSessionBadge = () => {
    switch (session.type) {
      case "unit":
        return (
          <Badge
            variant="secondary"
            className="bg-primary/15 text-primary border-primary/30"
          >
            {session.unitName}
          </Badge>
        );
      case "mixed":
        return (
          <Badge
            variant="secondary"
            className="bg-primary/15 text-primary border-primary/30"
          >
            Mixed Session ({session.unitCount} Units)
          </Badge>
        );
      case "all":
        return (
          <Badge
            variant="secondary"
            className="bg-primary/15 text-primary border-primary/30"
          >
            All Units ({session.wordCount} words)
          </Badge>
        );
      case "hard":
        return <Badge variant="destructive">Hard Items</Badge>;
    }
  };

  return (
    <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
      {/* Exit Button */}
      <Button
        variant="ghost"
        size="icon"
        asChild
        className="shrink-0 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
      >
        <Link to="/units" onClick={onExit}>
          <X className="size-5" />
          <span className="sr-only">Exit review</span>
        </Link>
      </Button>

      {/* Progress Section */}
      <div className="flex flex-1 flex-col items-center gap-1.5 max-w-md">
        <Progress value={progressValue} className="h-2 w-full" />
        <span className="text-xs text-muted-foreground">
          Card {currentCard} of {totalCards}
        </span>
      </div>

      {/* Session Badge */}
      <div className="shrink-0">{getSessionBadge()}</div>
    </header>
  );
}
