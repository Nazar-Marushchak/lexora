"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lock, Play, RotateCcw } from "lucide-react";

export interface Unit {
  id: number;
  name: string;
  description: string;
  progress: number;
  totalWords: number;
  masteredWords: number;
  status: "active" | "new" | "completed" | "locked";
  lastPracticed?: string;
}

interface UnitCardProps {
  unit: Unit;
  onStart?: (unitId: number) => void;
  onReview?: (unitId: number) => void;
}

export function UnitCard({ unit, onStart, onReview }: UnitCardProps) {
  const isLocked = unit.status === "locked";
  const isCompleted = unit.status === "completed";

  return (
    <Card
      className={cn(
        "group border-border bg-card transition-all hover:border-primary/40 hover:bg-primary/5",
        isLocked && "opacity-50 hover:border-border hover:bg-card",
      )}
    >
      <CardContent className="p-5">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-foreground">
              Unit {unit.id}: {unit.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {unit.description}
            </p>
          </div>
          <Badge
            variant="secondary"
            className={cn(
              unit.status === "new" && "bg-primary text-primary-foreground",
              unit.status === "active" && "bg-primary/20 text-primary",
              unit.status === "completed" &&
                "bg-emerald-500/20 text-emerald-400",
              unit.status === "locked" && "bg-zinc-800 text-zinc-500",
            )}
          >
            {unit.status === "completed"
              ? "Completed"
              : unit.status === "new"
                ? "New"
                : unit.status === "locked"
                  ? "Locked"
                  : `${unit.progress}%`}
          </Badge>
        </div>

        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              {unit.masteredWords} / {unit.totalWords} words mastered
            </span>
            {unit.lastPracticed && <span>Last: {unit.lastPracticed}</span>}
          </div>
          <Progress
            value={unit.progress}
            className="h-2 bg-muted [&>[data-slot=progress-indicator]]:bg-primary"
          />
        </div>

        <div className="flex gap-2">
          {isLocked ? (
            <Button
              variant="secondary"
              className="flex-1 bg-zinc-800 text-zinc-500"
              disabled
            >
              <Lock className="mr-2 size-4" />
              Locked
            </Button>
          ) : isCompleted ? (
            <Button
              variant="secondary"
              className="flex-1 bg-primary/20 text-primary hover:bg-primary/30"
              onClick={() => onReview?.(unit.id)}
            >
              <RotateCcw className="mr-2 size-4" />
              Review
            </Button>
          ) : (
            <>
              <Button
                className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => onStart?.(unit.id)}
              >
                <Play className="mr-2 size-4" />
                {unit.status === "new" ? "Start" : "Continue"}
              </Button>
              {unit.progress > 0 && (
                <Button
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-emerald-300"
                  onClick={() => onReview?.(unit.id)}
                >
                  <RotateCcw className="size-4" />
                </Button>
              )}
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
