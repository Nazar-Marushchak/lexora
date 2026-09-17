import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export type WordType = "word" | "phrase" | "idiom";

export interface FlashcardData {
	id: string;
	expression: string;
	translation: string;
	exampleSentence?: string;
	exampleTranslation?: string;
	type: WordType;
}

interface FlashcardProps {
	card: FlashcardData;
	isFlipped: boolean;
	onFlip: () => void;
}

export function Flashcard({ card, isFlipped, onFlip }: FlashcardProps) {
	const typeLabels: Record<WordType, string> = {
		word: "Word",
		phrase: "Phrase",
		idiom: "Idiom",
	};

	return (
		<div
			role="button"
			tabIndex={0}
			onClick={onFlip}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					onFlip();
				}
			}}
			className={cn(
				"relative w-full max-w-xl cursor-pointer select-none",
				"rounded-2xl border border-border bg-card shadow-xl",
				"transition-all duration-300 ease-out",
				"hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/5",
				"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
				"aspect-[4/3] sm:aspect-[3/2]",
			)}
		>
			<div className="flex h-full flex-col items-center justify-center p-6 sm:p-8">
				{!isFlipped ? (
					/* Front of Card */
					<div className="flex flex-col items-center gap-4 text-center">
						<Badge
							variant="outline"
							className="text-muted-foreground border-border"
						>
							{typeLabels[card.type]}
						</Badge>

						<h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl text-balance">
							{card.expression}
						</h2>

						<p className="mt-4 text-sm text-muted-foreground">
							Click card to flip or show translation
						</p>
					</div>
				) : (
					/* Back of Card */
					<div className="flex flex-col items-center gap-4 text-center">
						<Badge
							variant="outline"
							className="text-muted-foreground border-border"
						>
							{typeLabels[card.type]}
						</Badge>

						<p className="text-lg text-muted-foreground sm:text-xl">
							{card.expression}
						</p>

						<h2 className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl text-balance">
							{card.translation}
						</h2>

						{card.exampleSentence && (
							<div className="mt-4 space-y-1 rounded-lg bg-secondary/50 px-4 py-3">
								<p className="text-sm text-foreground italic">
									&ldquo;{card.exampleSentence}&rdquo;
								</p>
								{card.exampleTranslation && (
									<p className="text-xs text-muted-foreground">
										{card.exampleTranslation}
									</p>
								)}
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
