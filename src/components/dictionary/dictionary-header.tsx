import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface DictionaryHeaderProps {
  totalWords: number;
  onAddWord?: () => void;
}

export function DictionaryHeader({
  totalWords,
  onAddWord,
}: DictionaryHeaderProps) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-baseline gap-3">
        <h1 className="text-2xl font-bold text-foreground">My Dictionary</h1>
        <span className="text-sm text-muted-foreground">
          {totalWords.toLocaleString()} words
        </span>
      </div>
      <Button
        onClick={onAddWord}
        className="w-fit bg-primary text-primary-foreground hover:bg-primary/90"
      >
        <Plus className="mr-2 size-4" />
        Add New Word
      </Button>
    </div>
  );
}
