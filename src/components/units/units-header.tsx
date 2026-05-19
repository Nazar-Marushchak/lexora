import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

interface UnitsHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: "all", label: "All Units" },
  { id: "active", label: "In Progress" },
  { id: "new", label: "New" },
  { id: "completed", label: "Completed" },
];

export function UnitsHeader({
  searchQuery,
  onSearchChange,
  activeFilter,
  onFilterChange,
}: UnitsHeaderProps) {
  return (
    <div className="mb-6 space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Units</h1>
          <p className="text-muted-foreground">
            Browse and manage your learning units
          </p>
        </div>
        <Button
          variant="secondary"
          className="w-fit bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-emerald-300"
        >
          <SlidersHorizontal className="mr-2 size-4" />
          Manage Units
        </Button>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search units..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="border-border bg-secondary/50 pl-10 text-foreground placeholder:text-muted-foreground focus-visible:border-primary/50 focus-visible:ring-primary/20"
          />
        </div>
        <div className="flex gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant="ghost"
              size="sm"
              onClick={() => onFilterChange(filter.id)}
              className={
                activeFilter === filter.id
                  ? "bg-primary/20 text-primary hover:bg-primary/25 hover:text-primary"
                  : "text-zinc-400 hover:bg-primary/10 hover:text-emerald-300"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
