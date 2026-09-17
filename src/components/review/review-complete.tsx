import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, RotateCcw, Home, TrendingUp } from "lucide-react";

interface ReviewCompleteProps {
	totalCards: number;
	knownCount: number;
	unknownCount: number;
	onRestart: () => void;
	onExit: () => void;
}

export function ReviewComplete({
	totalCards,
	knownCount,
	unknownCount,
	onRestart,
}: ReviewCompleteProps) {
	const accuracy = Math.round((knownCount / totalCards) * 100);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
			<Card className="w-full max-w-md border-border bg-card shadow-2xl">
				<CardContent className="flex flex-col items-center gap-6 p-8 text-center">
					{/* Success Icon */}
					<div className="flex size-20 items-center justify-center rounded-full bg-primary/15">
						<CheckCircle2 className="size-10 text-primary" />
					</div>

					{/* Title */}
					<div className="space-y-2">
						<h2 className="text-2xl font-bold text-foreground">
							Session Complete!
						</h2>
						<p className="text-muted-foreground">
							Great work on your review session
						</p>
					</div>

					{/* Stats */}
					<div className="grid w-full grid-cols-3 gap-4">
						<div className="rounded-lg bg-secondary/50 p-3">
							<p className="text-2xl font-bold text-foreground">{totalCards}</p>
							<p className="text-xs text-muted-foreground">Total Cards</p>
						</div>
						<div className="rounded-lg bg-primary/10 p-3">
							<p className="text-2xl font-bold text-primary">{knownCount}</p>
							<p className="text-xs text-muted-foreground">Known</p>
						</div>
						<div className="rounded-lg bg-destructive/10 p-3">
							<p className="text-2xl font-bold text-destructive">
								{unknownCount}
							</p>
							<p className="text-xs text-muted-foreground">To Review</p>
						</div>
					</div>

					{/* Accuracy */}
					<div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
						<TrendingUp className="size-4 text-primary" />
						<span className="text-sm font-medium text-foreground">
							{accuracy}% accuracy
						</span>
					</div>

					{/* Actions */}
					<div className="flex w-full flex-col gap-3 pt-2">
						<Button
							size="lg"
							onClick={onRestart}
							className="w-full gap-2 shadow-lg shadow-primary/20"
						>
							<RotateCcw className="size-4" />
							Review Again
						</Button>
						<Button
							variant="outline"
							size="lg"
							asChild
							className="w-full gap-2"
						>
							<Link to="/">
								<Home className="size-4" />
								Back to Dashboard
							</Link>
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
