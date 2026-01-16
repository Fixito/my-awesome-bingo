interface StartScreenProps {
  onStart: () => void;
  onStartShuffle: () => void;
}

export function StartScreen({ onStart, onStartShuffle }: StartScreenProps) {
  return (
    <div className='flex flex-col items-center justify-center min-h-full p-8 bg-bg'>
      <div className='text-center max-w-md w-full'>
        <h1 className='text-5xl font-light tracking-wide text-text mb-3 leading-tight'>Soc Ops</h1>
        <p className='text-xl font-light text-text-light mb-12 tracking-wide'>Social Bingo</p>

        <div className='bg-surface rounded-2xl p-8 shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-border mb-12'>
          <h2 className='font-medium text-text mb-5 text-lg tracking-wide'>How to play</h2>
          <ul className='text-left text-text-light space-y-3.5 leading-relaxed'>
            <li className='flex items-start gap-3'>
              <span className='text-primary mt-0.5'>•</span>
              <span>Find people who match the questions</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-primary mt-0.5'>•</span>
              <span>Tap a square when you find a match</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='text-primary mt-0.5'>•</span>
              <span>Get 5 in a row to win!</span>
            </li>
          </ul>
        </div>

        <div className='space-y-4'>
          <button
            onClick={onStart}
            className='w-full bg-primary text-white font-medium py-5 px-8 rounded-xl text-lg tracking-wide hover:bg-primary-light active:scale-[0.98] transition-all duration-200 shadow-[0_2px_12px_rgba(90,111,91,0.2)]'
          >
            Classic Bingo
          </button>
          <button
            onClick={onStartShuffle}
            className='w-full bg-surface text-text font-medium py-5 px-8 rounded-xl text-lg tracking-wide border border-border hover:border-primary hover:text-primary active:scale-[0.98] transition-all duration-200'
          >
            Card Deck Shuffle
          </button>
        </div>
      </div>
    </div>
  );
}
