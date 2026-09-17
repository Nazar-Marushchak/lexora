import { useState } from "react";
import { ListChecks, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { mockUnits } from "@/lib/mock-data";

const units = mockUnits;

export function CustomSessionBuilder() {
	const [selected, setSelected] = useState<number[]>(() =>
		units.slice(0, 3).map((unit) => unit.id),
	);
	const toggleUnit = (unitId: number) =>
		setSelected((current) =>
			current.includes(unitId)
				? current.filter((id) => id !== unitId)
				: [...current, unitId],
		);

	return (
		<Card className="border-border bg-card">
			<CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
				<div>
					<CardTitle className="text-lg">Custom Mix Session</CardTitle>
					<p className="mt-1 text-sm text-muted-foreground">
						Choose the units and session length that fit your study plan.
					</p>
				</div>
				<Badge
					variant="outline"
					className="w-fit border-primary/30 text-primary"
				>
					<ListChecks className="mr-1.5 size-3.5" />
					{selected.length} selected
				</Badge>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="flex items-center justify-between">
					<p className="text-sm font-medium text-foreground">Available units</p>
					<Button
						variant="ghost"
						size="sm"
						className="text-primary hover:bg-primary/10"
						onClick={() =>
							setSelected((current) =>
								current.length === units.length
									? []
									: units.map((unit) => unit.id),
							)
						}
					>
						{selected.length === units.length
							? "Clear Selection"
							: "Select All Units"}
					</Button>
				</div>
				<div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
					{units.map((unit) => {
						const checkboxId = `unit-${unit.id}`;
						return (
							<Label
								key={unit.id}
								htmlFor={checkboxId}
								className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background/50 p-3 font-normal transition-colors hover:border-primary/40 hover:bg-primary/10"
							>
								<Checkbox
									id={checkboxId}
									checked={selected.includes(unit.id)}
									onCheckedChange={() => toggleUnit(unit.id)}
								/>
								<span className="text-sm text-foreground">
									Unit {unit.id}: {unit.name}
								</span>
							</Label>
						);
					})}
				</div>
				<Separator />
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="space-y-2">
						<Label
							htmlFor="session-limit"
							className="text-sm font-medium text-foreground"
						>
							Limit session to
						</Label>
						<Select defaultValue="20">
							<SelectTrigger
								id="session-limit"
								className="w-full bg-background sm:w-48"
							>
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="10">10 words</SelectItem>
								<SelectItem value="20">20 words</SelectItem>
								<SelectItem value="50">50 words</SelectItem>
								<SelectItem value="all">All words</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Button size="lg" className="sm:min-w-56">
						<Play className="mr-2 size-4 fill-current" />
						Launch Custom Session
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
