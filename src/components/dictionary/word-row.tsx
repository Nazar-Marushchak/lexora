import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Volume2, Star, MoreHorizontal, Pencil, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Word {
	id: string;
	word: string;
	translation: string;
	partOfSpeech:
		| "Noun"
		| "Verb"
		| "Adjective"
		| "Adverb"
		| "Phrase"
		| "Idiom"
		| "Pronoun"
		| "Preposition"
		| "Other";
	status: "New" | "Learning" | "Review" | "Hard" | "Mature";
	isFavorite: boolean;
}

interface WordRowProps {
	word: Word;
	onPlayAudio?: (word: Word) => void;
	onToggleFavorite?: (word: Word) => void;
	onEdit?: (word: Word) => void;
	onDelete?: (word: Word) => void;
}

const partOfSpeechColors: Record<string, string> = {
	noun: "bg-blue-500/15 text-blue-400 border-blue-500/30",
	verb: "bg-amber-500/15 text-amber-400 border-amber-500/30",
	adjective: "bg-purple-500/15 text-purple-400 border-purple-500/30",
	adverb: "bg-pink-500/15 text-pink-400 border-pink-500/30",
	phrase: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
	idiom: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
	pronoun: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
	preposition: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
	other: "bg-muted text-muted-foreground border-border",
};

export function WordRow({
	word,
	onPlayAudio,
	onToggleFavorite,
	onEdit,
	onDelete,
}: WordRowProps) {
	return (
		<div className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-accent/10">
			{/* Word & Translation */}
			<div className="flex min-w-0 flex-1 flex-col gap-1">
				<div className="flex items-center gap-3">
					<span className="truncate text-base font-medium text-foreground">
						{word.word}
					</span>
					<Badge
						variant="outline"
						className={cn(
							"shrink-0 text-xs capitalize",
							partOfSpeechColors[word.partOfSpeech.toLowerCase()],
						)}
					>
						{word.partOfSpeech}
					</Badge>
				</div>
				<span className="truncate text-sm text-muted-foreground">
					{word.translation}
				</span>
			</div>

			{/* Memory Strength Indicator */}
			{/* <div className="hidden w-24 flex-col gap-1 sm:flex">
        <Progress value={word.memoryStrength} className="h-1.5 bg-muted" />
        <span className="text-xs text-muted-foreground">
          {word.memoryStrength}% mastered
        </span>
      </div> */}

			{/* Action Buttons */}
			<div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
				<Button
					variant="ghost"
					size="icon"
					className="size-8 text-muted-foreground hover:bg-primary/10 hover:text-primary"
					onClick={() => onPlayAudio?.(word)}
				>
					<Volume2 className="size-4" />
					<span className="sr-only">Play pronunciation</span>
				</Button>
				<Button
					variant="ghost"
					size="icon"
					className={cn(
						"size-8 transition-colors hover:bg-primary/10",
						word.isFavorite
							? "text-amber-400 hover:text-amber-300"
							: "text-muted-foreground hover:text-primary",
					)}
					onClick={() => onToggleFavorite?.(word)}
				>
					<Star className={cn("size-4", word.isFavorite && "fill-current")} />
					<span className="sr-only">
						{word.isFavorite ? "Remove from favorites" : "Add to favorites"}
					</span>
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="ghost"
							size="icon"
							className="size-8 text-muted-foreground hover:bg-primary/10 hover:text-primary"
						>
							<MoreHorizontal className="size-4" />
							<span className="sr-only">More options</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end" className="w-40">
						<DropdownMenuItem onClick={() => onEdit?.(word)}>
							<Pencil className="mr-2 size-4" />
							Edit
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => onDelete?.(word)}
							className="text-destructive focus:text-destructive"
						>
							<Trash2 className="mr-2 size-4" />
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
}
