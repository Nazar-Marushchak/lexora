import { useState } from "react";
import type { Word } from "./word-row";

/**
 * Owns the add/edit dialog state for the dictionary.
 *
 * The two pieces of state below have an invariant — `editingId` is only
 * meaningful while the dialog is open, and "add" mode requires it to be unset.
 * Nothing outside this hook can break that, because the setters are not
 * returned: the only ways in are `openAdd` and `openEdit`.
 */
export function useWordDialog(words: Word[]) {
	const [isOpen, setIsOpen] = useState(false);
	const [editingId, setEditingId] = useState<string>();

	// Derived, not stored. Holding the id instead of a copy of the row means the
	// dialog always reads current data, and a word that disappears while being
	// edited resolves to `undefined` rather than a stale snapshot.
	// Not gated on `isOpen`: the dialog still renders while animating out, and
	// blanking this would make it flip to "add" mode mid-fade.
	const editingWord = words.find((word) => word.id === editingId);

	const openAdd = () => {
		setEditingId(undefined);
		setIsOpen(true);
	};

	const openEdit = (word: Word) => {
		setEditingId(word.id);
		setIsOpen(true);
	};

	// `editingId` is deliberately left alone on close. Radix keeps DialogContent
	// mounted while it animates out, so clearing it here would flip the title and
	// blank the inputs mid-fade. `openAdd` resets it on the way back in instead.
	const close = () => setIsOpen(false);

	// Radix calls this with `false` on Escape / overlay click. It can only close:
	// opening still has to go through openAdd/openEdit so a mode is always chosen.
	const onOpenChange = (open: boolean) => {
		if (!open) close();
	};

	return { isOpen, editingWord, openAdd, openEdit, close, onOpenChange };
}
