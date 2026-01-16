import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className='flex flex-col min-h-full bg-[var(--color-bg)]'>
      {/* Header */}
      <header className='flex items-center justify-between p-4 bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-[0_1px_8px_rgba(0,0,0,0.04)]'>
        <button
          onClick={onReset}
          className='text-[var(--color-text-light)] text-sm px-4 py-2 rounded-lg hover:bg-[var(--color-bg)] active:scale-95 transition-all duration-200 font-light'
        >
          ← Back
        </button>
        <h1 className='font-medium text-[var(--color-text)] tracking-wide'>Soc Ops</h1>
        <div className='w-20'></div>
      </header>

      {/* Instructions */}
      <p className='text-center text-[var(--color-text-light)] py-4 px-6 leading-relaxed'>
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className='bg-[var(--color-primary)]/10 border-t border-b border-[var(--color-primary)]/20 text-[var(--color-primary)] text-center py-3 font-medium tracking-wide'>
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className='flex-1 flex items-center justify-center p-5'>
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
