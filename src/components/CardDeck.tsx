import { useCallback, useState } from 'react';
import { questions } from '../data/questions';

interface CardDeckProps {
  onReset: () => void;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function CardDeck({ onReset }: CardDeckProps) {
  const [shuffledQuestions, setShuffledQuestions] = useState<string[]>(() =>
    shuffleArray(questions),
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const drawNextCard = useCallback(() => {
    if (isAnimating || currentIndex >= shuffledQuestions.length - 1) {
      return;
    }

    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
      setIsAnimating(false);
    }, 300);
  }, [currentIndex, shuffledQuestions.length, isAnimating]);

  const handleReset = useCallback(() => {
    setShuffledQuestions(shuffleArray(questions));
    setCurrentIndex(0);
    setIsAnimating(false);
  }, []);

  if (shuffledQuestions.length === 0) {
    return null;
  }

  const currentQuestion = shuffledQuestions[currentIndex];
  const cardsRemaining = shuffledQuestions.length - currentIndex - 1;
  const progress = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  return (
    <div className='min-h-screen bg-bg flex flex-col items-center justify-center p-8'>
      {/* Header with progress */}
      <div className='w-full max-w-md mb-8'>
        <div className='flex justify-between items-center mb-3'>
          <span className='text-text-light text-sm font-light tracking-wide'>
            Card {currentIndex + 1} of {shuffledQuestions.length}
          </span>
          <span className='text-text-light text-sm font-light tracking-wide'>
            {cardsRemaining} remaining
          </span>
        </div>
        <div className='h-1 bg-border rounded-full overflow-hidden'>
          <div
            className='h-full bg-primary transition-all duration-500 ease-out'
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div
        onClick={drawNextCard}
        className={`
          w-full max-w-md bg-surface rounded-2xl p-12
          shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-border
          cursor-pointer transition-all duration-300
          ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}
          ${
            currentIndex < shuffledQuestions.length - 1
              ? 'hover:shadow-[0_4px_24px_rgba(90,111,91,0.15)] active:scale-[0.97]'
              : ''
          }
        `}
      >
        <p className='text-text text-2xl font-light leading-relaxed text-center tracking-wide'>
          {currentQuestion}
        </p>
      </div>

      {/* Tap hint or completion message */}
      <div className='mt-8 text-center'>
        {currentIndex < shuffledQuestions.length - 1 ? (
          <p className='text-text-light text-sm font-light tracking-wide'>
            Tap card for next question
          </p>
        ) : (
          <p className='text-primary text-lg font-medium tracking-wide mb-6'>All cards drawn!</p>
        )}
      </div>

      {/* Action buttons */}
      <div className='mt-12 flex gap-4'>
        <button
          onClick={handleReset}
          className='bg-primary text-white font-medium py-4 px-8
            rounded-xl tracking-wide hover:bg-primary-light
            active:scale-[0.98] transition-all duration-200
            shadow-[0_2px_12px_rgba(90,111,91,0.2)]'
        >
          Shuffle Again
        </button>
        <button
          onClick={onReset}
          className='bg-surface text-text
            font-medium py-4 px-8 rounded-xl tracking-wide
            border border-border
            hover:border-primary hover:text-primary
            active:scale-[0.98] transition-all duration-200'
        >
          Back to Menu
        </button>
      </div>
    </div>
  );
}
