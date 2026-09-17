import type { Unit } from "@/types/unit";

/**
 * Placeholder data. Delete this file once units come from the server —
 * every screen should read units from one place, not re-declare them.
 */
export const mockUnits: Unit[] = [
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
