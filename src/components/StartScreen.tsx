interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6 bg-gray-50 bg-gradient-radial from-white/40 to-transparent">
      <div className="text-center max-w-sm animate-[fadeIn_0.8s_ease-out]">
        <h1 className="text-6xl font-light text-gray-900 mb-2 tracking-wide [animation-delay:0s]">Soc Ops</h1>
        <p className="text-lg text-gray-600 mb-2 animate-[fadeIn_0.8s_ease-out] [animation-delay:0.15s]">Social Bingo</p>
        <p className="text-sm text-gray-500 mb-8 animate-[fadeIn_0.8s_ease-out] [animation-delay:0.15s]">Break the ice, make connections</p>
        
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] animate-[fadeIn_0.8s_ease-out] [animation-delay:0.3s]">
          <h2 className="font-medium text-gray-800 mb-3">How to play</h2>
          <ul className="text-left text-gray-600 text-sm space-y-2">
            <li>• Find someone who matches each prompt</li>
            <li>• Tap a square when you discover a match</li>
            <li>• Complete 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-accent text-white font-medium py-4 px-8 rounded-lg text-lg active:bg-accent-light transition-colors animate-[fadeIn_0.8s_ease-out] [animation-delay:0.45s]"
        >
          Let's Play
        </button>
      </div>
    </div>
  );
}
