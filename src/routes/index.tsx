import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const [flipped, setFlipped] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const words = [
    { en: "abandon", ua: "покидати" },
    { en: "achieve", ua: "досягати" },
    { en: "avoid", ua: "уникати" },
  ];

  const currentWord = words[currentWordIndex];
  const wordlength = words.length;

  const nextWord = () => {
    setCurrentWordIndex((prev) => (prev === wordlength - 1 ? 0 : prev + 1));

    setFlipped(false);
  };

  const randomMode = () => {
    const randomIndex = Math.floor(Math.random() * wordlength);

    setCurrentWordIndex(randomIndex);
    setFlipped(false);
  };

  return (
    <div className="min-h-screen bg-[#0f1115] text-white flex items-center justify-center">
      <div className="w-full max-w-xl px-4">
        {/* Card */}
        <div className="cursor-pointer rounded-2xl bg-[#1a1d24] p-10 text-center shadow-[0_10px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.01]">
          <p className="text-sm text-gray-400 mb-4">
            {flipped ? "Ukrainian" : "English"}
          </p>

          <h1 className="text-4xl font-semibold tracking-wide">
            {flipped ? currentWord.ua : currentWord.en}
          </h1>
        </div>

        <p>
          {currentWordIndex + 1} / {wordlength}
        </p>
        {/* Buttons */}
        <div className="mt-8 mb-2 flex items-center justify-between gap-3">
          <button
            disabled={currentWordIndex === 0}
            onClick={() => setCurrentWordIndex((prev) => prev - 1)}
            className="flex-1 py-3 rounded-xl border border-gray-600 text-gray-300 hover:bg-[#1f232b] transition"
          >
            previous
          </button>

          <button
            onClick={() => setFlipped(!flipped)}
            className="flex-1 py-3 rounded-xl bg-[#1f232b] text-gray-200 hover:bg-[#2a2f3a] transition"
          >
            Flip
          </button>

          <button
            disabled={wordlength - 1 === currentWordIndex}
            onClick={nextWord}
            className="flex-1 py-3 rounded-xl bg-green-700 hover:bg-green-600 text-white transition shadow-md shadow-green-900/40"
          >
            Know
          </button>
        </div>

        <button
          onClick={randomMode}
          className="px-6 flex-1 py-3 rounded-xl bg-green-700 hover:bg-green-600 text-white transition shadow-md shadow-green-900/40"
        >
          Random word
        </button>
      </div>
    </div>
  );
}
