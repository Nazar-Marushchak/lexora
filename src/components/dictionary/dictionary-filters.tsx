import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface DictionaryFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  // masteryFilter: string;
  onMasteryFilterChange: (value: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}

export function DictionaryFilters({
  searchQuery,
  onSearchChange,
  onMasteryFilterChange,
  sortBy,
  onSortChange,
}: DictionaryFiltersProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search words..."
          // value={searchQuery}
          // onChange={(e) => onSearchChange(e.target.value)}
          className="border-border bg-card pl-10 text-foreground placeholder:text-muted-foreground focus-visible:border-primary/50 focus-visible:ring-primary/20"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        <Select onValueChange={onMasteryFilterChange}>
          <SelectTrigger className="w-32 border-border bg-card text-foreground">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="learning">Learning</SelectItem>
            <SelectItem value="mastered">Mastered</SelectItem>
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger className="w-28 border-border bg-card text-foreground">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="a-z">A-Z</SelectItem>
            <SelectItem value="z-a">Z-A</SelectItem>
            <SelectItem value="recent">Recent</SelectItem>
            <SelectItem value="strength">Strength</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
