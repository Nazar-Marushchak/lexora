import { AlertTriangle, Brain, Flame, History } from "lucide-react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ReviewModeCard } from "./review-mode-card";

export function ReviewModes() {
	return (
		<section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<ReviewModeCard
				title="Spaced Repetition"
				subtitle="Daily Review"
				icon={Brain}
				count="24 words due today"
				action="Start Daily Review"
			/>

			<ReviewModeCard
				title="Hard Words"
				subtitle="Tricky Items"
				icon={Flame}
				count="12 items"
				action="Review Hard Words"
				tone="danger"
				actionIcon={<AlertTriangle className="mr-2 size-4" />}
			>
				<Select defaultValue="all">
					<SelectTrigger className="h-9 bg-background">
						<SelectValue placeholder="Expression type" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="all">All Types</SelectItem>
						<SelectItem value="idioms">Idioms Only</SelectItem>
						<SelectItem value="phrases">Phrases Only</SelectItem>
						<SelectItem value="verbs">Verbs Only</SelectItem>
					</SelectContent>
				</Select>
			</ReviewModeCard>

			<ReviewModeCard
				title="Last Active Unit"
				subtitle="Keep going"
				icon={History}
				count="Unit 5: Finance · 18 words"
				action="Review Last Unit"
				tone="secondary"
			/>
		</section>
	);
}
