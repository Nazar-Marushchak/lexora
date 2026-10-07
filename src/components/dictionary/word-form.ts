import { PARTS_OF_SPEECH, type PartOfSpeech } from "./word-row";

export interface WordFormValues {
	word: string;
	translation: string;
	partOfSpeech: PartOfSpeech;
}

/** One message per field. An empty object means "no problems". */
export type WordFormErrors = Partial<Record<keyof WordFormValues, string>>;

export type WordFormResult =
	| { ok: true; values: WordFormValues }
	| { ok: false; errors: WordFormErrors };

const MAX_WORD_LENGTH = 60;
const MAX_TRANSLATION_LENGTH = 200;

function isPartOfSpeech(value: unknown): value is PartOfSpeech {
	return (
		typeof value === "string" &&
		(PARTS_OF_SPEECH as readonly string[]).includes(value)
	);
}

/**
 * `FormData.get()` returns `string | File | null`. A missing field, an empty
 * input and a whitespace-only input all collapse to `""` here, so the emptiness
 * check in `parseWordForm` is the single place that decides "is this filled in".
 */
function readTrimmed(formData: FormData, name: string) {
	const value = formData.get(name);
	return typeof value === "string" ? value.trim() : "";
}

/**
 * Turns raw form input into trusted values, or into per-field error messages.
 *
 * Pure and UI-free on purpose: when the dictionary gets a backend, the server
 * has to re-run these exact rules (a browser can never be trusted), and this
 * function can move to `src/lib` and be called from both sides unchanged.
 */
export function parseWordForm(formData: FormData): WordFormResult {
	const word = readTrimmed(formData, "word");
	const translation = readTrimmed(formData, "translation");
	const partOfSpeech = formData.get("partOfSpeech");

	const errors: WordFormErrors = {};

	if (word.length === 0) {
		errors.word = "Enter a word.";
	} else if (word.length > MAX_WORD_LENGTH) {
		errors.word = `Keep the word under ${MAX_WORD_LENGTH} characters.`;
	}

	if (translation.length === 0) {
		errors.translation = "Enter a translation.";
	} else if (translation.length > MAX_TRANSLATION_LENGTH) {
		errors.translation = `Keep the translation under ${MAX_TRANSLATION_LENGTH} characters.`;
	}

	// Returning early here is what lets TypeScript narrow `partOfSpeech` to
	// `PartOfSpeech` below. Errors found above are still reported alongside it.
	if (!isPartOfSpeech(partOfSpeech)) {
		errors.partOfSpeech = "Select a part of speech.";
		return { ok: false, errors };
	}

	if (Object.keys(errors).length > 0) {
		return { ok: false, errors };
	}

	return { ok: true, values: { word, translation, partOfSpeech } };
}
