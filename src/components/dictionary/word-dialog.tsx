import { type FormEvent, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	parseWordForm,
	type WordFormErrors,
	type WordFormValues,
} from "./word-form";
import { PARTS_OF_SPEECH, type Word } from "./word-row";

const FIELD_CLASS =
	"border-border bg-card text-foreground placeholder:text-muted-foreground focus-visible:border-primary/50 focus-visible:ring-primary/20";

interface WordDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
	/**
	 * Return field errors to reject the submission and keep the dialog open;
	 * return nothing when the word was accepted.
	 */
	onSubmit: (values: WordFormValues) => WordFormErrors | undefined;
	/** Pass the word being edited; omit it for the "add" flow. */
	word?: Word;
}

export function WordDialog({
	open,
	onOpenChange,
	onSubmit,
	word,
}: WordDialogProps) {
	const isEditing = word !== undefined;

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>{isEditing ? "Edit Word" : "Add New Word"}</DialogTitle>
					<DialogDescription>
						{isEditing
							? "Update the word, its translation or its part of speech."
							: "Add a word to your dictionary. It starts as New and enters your review queue."}
					</DialogDescription>
				</DialogHeader>

				{/*
					The form is uncontrolled: Radix unmounts DialogContent when closed, so
					both the inputs and WordForm's error state reset on every reopen
					without us tracking them. The `key` covers the other case — swapping
					to a different word while the dialog stays open remounts the form, so
					the defaults are re-read and the previous word's errors are dropped.
				*/}
				<WordForm
					key={word?.id ?? "new"}
					word={word}
					isEditing={isEditing}
					onSubmit={onSubmit}
					onCancel={() => onOpenChange(false)}
				/>
			</DialogContent>
		</Dialog>
	);
}

interface WordFormProps {
	word?: Word;
	isEditing: boolean;
	onSubmit: (values: WordFormValues) => WordFormErrors | undefined;
	onCancel: () => void;
}

function WordForm({ word, isEditing, onSubmit, onCancel }: WordFormProps) {
	const fieldId = useId();
	const [errors, setErrors] = useState<WordFormErrors>({});

	const wordId = `${fieldId}-word`;
	const translationId = `${fieldId}-translation`;
	const partOfSpeechId = `${fieldId}-part-of-speech`;

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const result = parseWordForm(new FormData(event.currentTarget));

		if (!result.ok) {
			setErrors(result.errors);
			return;
		}

		// The parent owns the word list, so checks that need it — duplicates —
		// happen there and come back as the same kind of field errors.
		setErrors(onSubmit(result.values) ?? {});
	};

	return (
		// `noValidate` turns off the browser's own bubbles: `required` cannot
		// express "not just spaces", and mixing bubbles with the inline messages
		// below would give the same mistake two different looks.
		<form onSubmit={handleSubmit} noValidate className="grid gap-4">
			<div className="grid gap-2">
				<Label htmlFor={wordId}>Word</Label>
				<Input
					id={wordId}
					name="word"
					placeholder="e.g. Serendipity"
					defaultValue={word?.word}
					autoComplete="off"
					aria-invalid={errors.word !== undefined}
					aria-describedby={errors.word ? `${wordId}-error` : undefined}
					className={FIELD_CLASS}
				/>
				<FieldError id={`${wordId}-error`} message={errors.word} />
			</div>

			<div className="grid gap-2">
				<Label htmlFor={translationId}>Translation</Label>
				<Input
					id={translationId}
					name="translation"
					placeholder="e.g. A happy accident"
					defaultValue={word?.translation}
					autoComplete="off"
					aria-invalid={errors.translation !== undefined}
					aria-describedby={
						errors.translation ? `${translationId}-error` : undefined
					}
					className={FIELD_CLASS}
				/>
				<FieldError
					id={`${translationId}-error`}
					message={errors.translation}
				/>
			</div>

			<div className="grid gap-2">
				<Label htmlFor={partOfSpeechId}>Part of speech</Label>
				<Select name="partOfSpeech" defaultValue={word?.partOfSpeech ?? "Noun"}>
					<SelectTrigger
						id={partOfSpeechId}
						aria-invalid={errors.partOfSpeech !== undefined}
						aria-describedby={
							errors.partOfSpeech ? `${partOfSpeechId}-error` : undefined
						}
						className="w-full border-border bg-card text-foreground"
					>
						<SelectValue placeholder="Select a part of speech" />
					</SelectTrigger>
					<SelectContent>
						{PARTS_OF_SPEECH.map((partOfSpeech) => (
							<SelectItem key={partOfSpeech} value={partOfSpeech}>
								{partOfSpeech}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
				<FieldError
					id={`${partOfSpeechId}-error`}
					message={errors.partOfSpeech}
				/>
			</div>

			<DialogFooter>
				<Button type="button" variant="outline" onClick={onCancel}>
					Cancel
				</Button>
				<Button
					type="submit"
					className="bg-primary text-primary-foreground hover:bg-primary/90"
				>
					{isEditing ? "Save Changes" : "Add Word"}
				</Button>
			</DialogFooter>
		</form>
	);
}

function FieldError({ id, message }: { id: string; message?: string }) {
	if (message === undefined) {
		return null;
	}

	return (
		<p id={id} className="text-sm text-destructive">
			{message}
		</p>
	);
}
