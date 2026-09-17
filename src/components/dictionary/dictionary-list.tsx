import { useState } from "react";
import { toast } from "sonner";
import { DictionaryHeader } from "./dictionary-header";
import { DictionaryFilters } from "./dictionary-filters";
import { WordRow, type Word } from "./word-row";
import { BookOpen } from "lucide-react";

// Mock data - replace with TanStack Query
const mockWords: Word[] = [
	{
		id: "1",
		word: "Serendipity",
		translation: "The occurrence of events by chance in a happy way",
		partOfSpeech: "Noun",
		isFavorite: true,
		status: "New",
	},
	{
		id: "2",
		word: "Ephemeral",
		translation: "Lasting for a very short time",
		partOfSpeech: "Adjective",
		isFavorite: false,
		status: "New",
	},
	{
		id: "3",
		word: "Ubiquitous",
		translation: "Present, appearing, or found everywhere",
		partOfSpeech: "Adjective",
		isFavorite: true,
		status: "New",
	},
	{
		id: "4",
		word: "Eloquent",
		translation: "Fluent or persuasive in speaking or writing",
		partOfSpeech: "Adjective",
		isFavorite: false,
		status: "Hard",
	},
	{
		id: "5",
		word: "Resilient",
		translation: "Able to recover quickly from difficulties",
		partOfSpeech: "Adjective",
		isFavorite: true,
		status: "Hard",
	},
	{
		id: "6",
		word: "Meticulous",
		translation: "Showing great attention to detail",
		partOfSpeech: "Adjective",
		isFavorite: false,
		status: "Review",
	},
	{
		id: "7",
		word: "Procrastinate",
		translation: "To delay or postpone action",
		partOfSpeech: "Verb",
		isFavorite: false,
		status: "Mature",
	},
	{
		id: "8",
		word: "Mellifluous",
		translation: "Sweet or musical; pleasant to hear",
		partOfSpeech: "Adjective",
		isFavorite: false,
		status: "Review",
	},
	{
		id: "9",
		word: "Quintessential",
		translation: "Representing the most perfect example",
		partOfSpeech: "Adjective",
		isFavorite: true,
		status: "Learning",
	},
	{
		id: "10",
		word: "Nevertheless",
		translation: "In spite of that; notwithstanding",
		partOfSpeech: "Adverb",
		isFavorite: false,
		status: "Learning",
	},
];

export function DictionaryList() {
	const [searchQuery, setSearchQuery] = useState("");
	const [masteryFilter, setMasteryFilter] = useState("all");
	const [sortBy, setSortBy] = useState("a-z");
	const [words, setWords] = useState<Word[]>(mockWords);

	// Mock handlers - replace with your logic
	const handleAddWord = () => {
		toast("Add word dialog", {
			description: "Implement your modal here",
		});
	};

	const handlePlayAudio = (word: Word) => {
		toast("Playing audio", { description: `Pronunciation of "${word.word}"` });
	};

	const handleToggleFavorite = (word: Word) => {
		setWords((prev) =>
			prev.map((w) =>
				w.id === word.id ? { ...w, isFavorite: !w.isFavorite } : w,
			),
		);
		toast.success(
			word.isFavorite ? "Removed from favorites" : "Added to favorites",
		);
	};

	const handleEdit = (word: Word) => {
		toast("Edit word", { description: `Editing "${word.word}"` });
	};

	const handleDelete = (word: Word) => {
		setWords((prev) => prev.filter((w) => w.id !== word.id));
		toast.success("Word deleted", {
			description: `"${word.word}" removed from dictionary`,
		});
	};

	// Simple client-side filtering for demo
	const filteredWords = words.filter((word) => {
		const matchesSearch =
			word.word.toLowerCase().includes(searchQuery.toLowerCase()) ||
			word.translation.toLowerCase().includes(searchQuery.toLowerCase());

		const matchesMastery =
			masteryFilter === "all" ||
			(masteryFilter === word.status.toLocaleLowerCase() && word.status);

		return matchesSearch && matchesMastery;
	});

	return (
		<div className="flex h-full flex-col gap-6 overflow-hidden p-6">
			<DictionaryHeader totalWords={words.length} onAddWord={handleAddWord} />
			<DictionaryFilters
				searchQuery={searchQuery}
				onSearchChange={setSearchQuery}
				masteryFilter={masteryFilter}
				onMasteryFilterChange={setMasteryFilter}
				sortBy={sortBy}
				onSortChange={setSortBy}
			/>

			{/* Word List */}
			<div className="flex flex-1 flex-col gap-2 overflow-y-auto">
				{filteredWords.length > 0 ? (
					filteredWords.map((word) => (
						<WordRow
							key={word.id}
							word={word}
							onPlayAudio={handlePlayAudio}
							onToggleFavorite={handleToggleFavorite}
							onEdit={handleEdit}
							onDelete={handleDelete}
						/>
					))
				) : (
					<div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
						<div className="flex size-16 items-center justify-center rounded-full bg-muted">
							<BookOpen className="size-8 text-muted-foreground" />
						</div>
						<div>
							<p className="font-medium text-foreground">No words found</p>
							<p className="text-sm text-muted-foreground">
								{searchQuery
									? "Try a different search term"
									: "Add your first word to get started"}
							</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
