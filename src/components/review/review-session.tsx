import { useState } from "react";
import { toast } from "sonner";
import { ReviewHeader, type SessionType } from "./review-header";
import { Flashcard, type FlashcardData } from "./flashcard";
import { ReviewControls } from "./review-controls";
import { ReviewComplete } from "./review-complete";

// Mock data - replace with TanStack Query
const mockCards: FlashcardData[] = [
  {
    id: "1",
    expression: "Bonjour",
    translation: "Hello / Good day",
    exampleSentence: "Bonjour, comment allez-vous?",
    exampleTranslation: "Hello, how are you?",
    type: "word",
  },
  {
    id: "2",
    expression: "S'il vous plaît",
    translation: "Please",
    exampleSentence: "Un café, s'il vous plaît.",
    exampleTranslation: "A coffee, please.",
    type: "phrase",
  },
  {
    id: "3",
    expression: "Coûter les yeux de la tête",
    translation: "To cost an arm and a leg",
    exampleSentence: "Cette voiture coûte les yeux de la tête!",
    exampleTranslation: "This car costs an arm and a leg!",
    type: "idiom",
  },
  {
    id: "4",
    expression: "Merci beaucoup",
    translation: "Thank you very much",
    exampleSentence: "Merci beaucoup pour votre aide.",
    exampleTranslation: "Thank you very much for your help.",
    type: "phrase",
  },
  {
    id: "5",
    expression: "Au revoir",
    translation: "Goodbye",
    exampleSentence: "Au revoir et bonne journée!",
    exampleTranslation: "Goodbye and have a nice day!",
    type: "word",
  },
];

interface ReviewSessionProps {
  cards?: FlashcardData[];
  session?: SessionType;
  onComplete?: (results: { known: string[]; unknown: string[] }) => void;
}

export function ReviewSession({
  cards = mockCards,
  session = { type: "unit", unitId: "1", unitName: "Unit 1: Travel" },
  onComplete,
}: ReviewSessionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState<{
    known: string[];
    unknown: string[];
  }>({
    known: [],
    unknown: [],
  });

  const currentCard = cards[currentIndex];
  const totalCards = cards.length;

  const handleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  const handleNext = (known: boolean) => {
    // Track result
    const cardId = currentCard.id;
    setResults((prev) => ({
      known: known ? [...prev.known, cardId] : prev.known,
      unknown: !known ? [...prev.unknown, cardId] : prev.unknown,
    }));

    // Move to next card or complete
    if (currentIndex + 1 >= totalCards) {
      setIsComplete(true);
      const finalResults = {
        known: known ? [...results.known, cardId] : results.known,
        unknown: !known ? [...results.unknown, cardId] : results.unknown,
      };
      toast.success("Session complete!", {
        description: `You reviewed ${totalCards} cards.`,
      });
      onComplete?.(finalResults);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setIsFlipped(false);
    }
  };

  const handleKnow = () => handleNext(true);
  const handleDontKnow = () => handleNext(false);

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setIsComplete(false);
    setResults({ known: [], unknown: [] });
  };

  if (isComplete) {
    return (
      <ReviewComplete
        totalCards={totalCards}
        knownCount={results.known.length}
        unknownCount={results.unknown.length}
        onRestart={handleRestart}
        onExit={() => {}}
      />
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ReviewHeader
        currentCard={currentIndex + 1}
        totalCards={totalCards}
        session={session}
      />

      <main className="flex flex-1 flex-col items-center justify-center gap-8 px-4 pb-8">
        <Flashcard
          card={currentCard}
          isFlipped={isFlipped}
          onFlip={handleFlip}
        />

        <ReviewControls
          isFlipped={isFlipped}
          onFlip={handleFlip}
          onKnow={handleKnow}
          onDontKnow={handleDontKnow}
        />
      </main>
    </div>
  );
}
