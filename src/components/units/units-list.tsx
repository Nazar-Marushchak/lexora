import { useState } from "react";
import { toast } from "sonner";
import { UnitsHeader } from "./units-header";
import { UnitCard } from "./unit-card";
import { mockUnits } from "@/lib/mock-data";

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
