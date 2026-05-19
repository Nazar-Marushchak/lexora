import { useState } from "react";
import { toast } from "sonner";
import { UnitsHeader } from "./units-header";
import { UnitCard, type Unit } from "./unit-card";

// Placeholder data - replace with your own data fetching
const mockUnits: Unit[] = [
  {
    id: 1,
    name: "Travel",
    description: "Essential vocabulary for traveling and navigation",
    progress: 85,
    totalWords: 42,
    masteredWords: 36,
    status: "active",
    lastPracticed: "2 hours ago",
  },
  {
    id: 2,
    name: "Food & Dining",
    description: "Restaurant, cooking, and food-related terms",
    progress: 60,
    totalWords: 38,
    masteredWords: 23,
    status: "active",
    lastPracticed: "Yesterday",
  },
  {
    id: 3,
    name: "Business",
    description: "Professional and workplace vocabulary",
    progress: 45,
    totalWords: 56,
    masteredWords: 25,
    status: "active",
    lastPracticed: "3 days ago",
  },
  {
    id: 4,
    name: "Health",
    description: "Medical terms and health-related vocabulary",
    progress: 100,
    totalWords: 32,
    masteredWords: 32,
    status: "completed",
    lastPracticed: "1 week ago",
  },
  {
    id: 5,
    name: "Technology",
    description: "Modern tech and digital world vocabulary",
    progress: 0,
    totalWords: 48,
    masteredWords: 0,
    status: "new",
  },
  {
    id: 6,
    name: "Culture",
    description: "Arts, traditions, and cultural expressions",
    progress: 0,
    totalWords: 35,
    masteredWords: 0,
    status: "locked",
  },
  {
    id: 7,
    name: "Nature",
    description: "Environment, animals, and natural world",
    progress: 0,
    totalWords: 40,
    masteredWords: 0,
    status: "locked",
  },
  {
    id: 8,
    name: "Sports",
    description: "Athletics, games, and fitness vocabulary",
    progress: 0,
    totalWords: 44,
    masteredWords: 0,
    status: "locked",
  },
];

export function UnitsList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Mock handlers - replace with your own logic
  const handleStartUnit = (unitId: number) => {
    toast.success("Starting unit", {
      description: `Unit ${unitId} is loading...`,
    });
  };

  const handleReviewUnit = (unitId: number) => {
    toast("Review mode", {
      description: `Starting review for Unit ${unitId}`,
    });
  };

  // Filter units based on search and filter
  const filteredUnits = mockUnits.filter((unit) => {
    const matchesSearch =
      unit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      unit.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilter =
      activeFilter === "all" ||
      unit.status === activeFilter ||
      (activeFilter === "active" && unit.status === "active");

    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <UnitsHeader
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {filteredUnits.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-16">
          <p className="text-muted-foreground">No units found</p>
          <p className="text-sm text-muted-foreground/70">
            Try adjusting your search or filters
          </p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {filteredUnits.map((unit) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              onStart={handleStartUnit}
              onReview={handleReviewUnit}
            />
          ))}
        </div>
      )}
    </div>
  );
}
