interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className='fixed inset-0 bg-[var(--color-text)]/40 backdrop-blur-sm flex items-center justify-center p-6 z-50'>
      <div className='bg-[var(--color-surface)] rounded-2xl p-10 max-w-sm w-full text-center shadow-[0_8px_32px_rgba(0,0,0,0.12)] animate-[bounce_0.6s_ease-out]'>
        <div className='text-6xl mb-6 opacity-90'>🎉</div>
        <h2 className='text-4xl font-light text-[var(--color-secondary)] mb-3 tracking-wide'>
          BINGO!
        </h2>
        <p className='text-[var(--color-text-light)] mb-8 text-lg leading-relaxed'>
          You completed a line!
        </p>

        <button
          onClick={onDismiss}
          className='w-full bg-[var(--color-primary)] text-white font-medium py-4 px-6 rounded-xl tracking-wide hover:bg-[var(--color-primary-light)] active:scale-[0.98] transition-all duration-200 shadow-[0_2px_12px_rgba(90,111,91,0.2)]'
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
