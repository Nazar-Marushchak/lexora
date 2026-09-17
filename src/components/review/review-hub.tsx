import { CustomSessionBuilder } from "./custom-session-builder";
import { ReviewModes } from "./review-modes";

export function ReviewHub() {
	return (
		<div className="container mx-auto max-w-6xl p-6 lg:p-8">
			<header className="mb-8">
				<p className="mb-2 text-sm font-medium text-primary">Practice center</p>
				<h1 className="text-3xl font-bold tracking-tight text-foreground">
					Review Center
				</h1>
				<p className="mt-2 max-w-2xl text-muted-foreground">
					Boost your long-term memory by reviewing custom sets or tricky
					expressions.
				</p>
			</header>
			<div className="space-y-8">
				<ReviewModes />
				<CustomSessionBuilder />
			</div>
		</div>
	);
}
