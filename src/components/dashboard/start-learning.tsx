import { Button } from "@/components/ui/button";
import { Brain, Play } from "lucide-react";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";

export function StartLearning() {
	const handleStartLearning = () => {
		toast.success("Session started!", {
			description: "Loading Unit 1: Travel flashcards...",
		});
	};

	return (
		<div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-8">
			<div className="mb-4 text-center">
				<h2 className="text-xl font-semibold text-foreground">
					Ready to continue?
				</h2>
				<p className="mt-1 text-sm text-muted-foreground">
					Pick up where you left off in Unit 1: Travel
				</p>
			</div>
			<div className="flex flex-col items-center gap-3 sm:flex-row">
				<Button
					size="lg"
					onClick={handleStartLearning}
					className="relative gap-2 bg-primary px-8 text-primary-foreground shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]"
				>
					<Play className="size-5" />
					Start Learning
				</Button>
				<Button size="lg" variant="secondary" asChild>
					<Link to="/review" className="gap-2">
						<Brain className="size-5" />
						Review Center
					</Link>
				</Button>
			</div>
			<p className="mt-3 text-xs text-muted-foreground">
				24 words are due for review today
			</p>
		</div>
	);
}
