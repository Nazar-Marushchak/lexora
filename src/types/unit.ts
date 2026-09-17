export type UnitStatus = "new" | "active" | "completed" | "locked";

export interface Unit {
	id: number;
	name: string;
	description: string;
	/** 0-100, derived from masteredWords / totalWords once real data exists. */
	progress: number;
	totalWords: number;
	masteredWords: number;
	status: UnitStatus;
	/** Human-readable for now; becomes a Date when this comes from the server. */
	lastPracticed?: string;
}
