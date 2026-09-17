import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { mockUnits } from "@/lib/mock-data";

export function UnitsGrid() {
	return (
		<Card className="border-border bg-card">
			<CardHeader>
				<CardTitle className="text-foreground">Your Units</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
					{mockUnits.map((unit) => (
						<div
							key={unit.id}
							className={`group cursor-pointer rounded-xl border border-border bg-secondary/50 p-4 transition-all hover:border-primary/50 hover:bg-secondary ${
								unit.status === "locked" ? "opacity-50" : ""
							}`}
						>
							<div className="mb-3 flex items-center justify-between">
								<span className="text-sm font-medium text-foreground">
									Unit {unit.id}: {unit.name}
								</span>
								<Badge
									variant={unit.status === "new" ? "default" : "secondary"}
									className={
										unit.status === "new"
											? "bg-primary text-primary-foreground"
											: unit.status === "locked"
												? "bg-muted text-muted-foreground"
												: "bg-primary/10 text-primary"
									}
								>
									{unit.status === "active"
										? `${unit.progress}%`
										: unit.status === "new"
											? "New"
											: unit.status === "completed"
												? "Completed"
												: "Locked"}
								</Badge>
							</div>
							<Progress
								value={unit.progress}
								className="h-1.5 bg-muted [&>[data-slot=progress-indicator]]:bg-primary"
							/>
							<p className="mt-2 text-xs text-muted-foreground">
								{unit.totalWords} words
							</p>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}
