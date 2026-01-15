import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-2.5 text-center border rounded-lg transition-all duration-300 select-none min-h-[70px] text-xs leading-relaxed';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'bg-[var(--color-bingo)]/30 border-[var(--color-bingo)] text-[var(--color-text)] shadow-[0_1px_8px_rgba(212,168,154,0.25)]'
      : 'bg-[var(--color-marked)] border-[var(--color-marked-border)] text-[var(--color-primary)]'
    : 'bg-[var(--color-surface)] text-[var(--color-text-light)] border-[var(--color-border)] hover:border-[var(--color-primary)]/40 hover:shadow-[0_1px_4px_rgba(90,111,91,0.1)] active:scale-[0.97]';

  const freeSpaceClasses = square.isFreeSpace ? 'font-medium text-sm' : '';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className='wrap-break-word hyphens-auto'>{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className='absolute top-1 right-1 text-[var(--color-primary)] text-sm'>✓</span>
      )}
    </button>
  );
}
