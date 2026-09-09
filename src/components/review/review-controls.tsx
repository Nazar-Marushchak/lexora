import { Button } from "@/components/ui/button";
import { RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";

interface ReviewControlsProps {
  isFlipped: boolean;
  onFlip: () => void;
  onKnow: () => void;
  onDontKnow: () => void;
}

export function ReviewControls({
  isFlipped,
  onFlip,
  onKnow,
  onDontKnow,
}: ReviewControlsProps) {
  if (!isFlipped) {
    return (
      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={onFlip}
          className="min-w-50 gap-2 text-base font-medium shadow-lg shadow-primary/20"
        >
          <RotateCcw className="size-4" />
          Show Translation
        </Button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        size="lg"
        variant="outline"
        onClick={onDontKnow}
        className="min-w-35 gap-2 border-destructive/30 text-destructive hover:bg-destructive/10 hover:text-destructive hover:border-destructive/50"
      >
        <ThumbsDown className="size-4" />
        Don&apos;t Know
      </Button>

      <Button
        size="lg"
        onClick={onKnow}
        className="min-w-35 gap-2 shadow-lg shadow-primary/20"
      >
        <ThumbsUp className="size-4" />
        Know
      </Button>
    </div>
  );
}
