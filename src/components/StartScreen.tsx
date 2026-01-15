interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className='flex flex-col items-center justify-center min-h-full p-8 bg-[var(--color-bg)]'>
      <div className='text-center max-w-md w-full'>
        <h1 className='text-5xl font-light tracking-wide text-[var(--color-text)] mb-3 leading-tight'>
          Soc Ops
        </h1>
        <p className='text-xl font-light text-[var(--color-text-light)] mb-12 tracking-wide'>
          Social Bingo
        </p>

        <div className='bg-[var(--color-surface)] rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-[var(--color-border)] mb-12'>
          <h2 className='font-medium text-[var(--color-text)] mb-5 text-lg tracking-wide'>
            How to play
          </h2>
          <ul className='text-left text-[var(--color-text-light)] space-y-3.5 leading-relaxed'>
            <li className='flex items-start gap-3'>
              <span className='text-[var(--color-primary)] mt-0.5'>•</span>
              <span>Find people who match the questions</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[var(--color-primary)] mt-0.5'>•</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-[var(--color-primary)] mt-0.5'>•</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className='w-full bg-[var(--color-primary)] text-white font-medium py-5 px-8 rounded-xl text-lg tracking-wide hover:bg-[var(--color-primary-light)] active:scale-[0.98] transition-all duration-200 shadow-[0_2px_12px_rgba(90,111,91,0.2)]'
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
