interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden bg-[--color-beige]">
      {/* Atmospheric Background with Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large decorative circle - top right */}
        <div 
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-[0.15]"
          style={{
            background: 'radial-gradient(circle, var(--color-sage) 0%, transparent 70%)'
          }}
        />
        
        {/* Large decorative circle - bottom left */}
        <div 
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.12]"
          style={{
            background: 'radial-gradient(circle, var(--color-terracotta) 0%, transparent 70%)'
          }}
        />
        
        {/* Soft rectangles for geometric interest */}
        <div 
          className="absolute top-1/4 right-1/4 w-64 h-64 rotate-12 opacity-[0.08] rounded-3xl"
          style={{ backgroundColor: 'var(--color-sage-light)' }}
        />
        
        <div 
          className="absolute bottom-1/3 left-1/4 w-48 h-48 -rotate-12 opacity-[0.08] rounded-3xl"
          style={{ backgroundColor: 'var(--color-terracotta-light)' }}
        />
      </div>

      {/* Content */}
      <div className="relative text-center max-w-4xl z-10">
        {/* Hero Title with Gentle Fade In Animation */}
        <h1 
          className="text-7xl md:text-8xl font-light tracking-wider mb-6 animate-[fade-in_1s_ease-out]"
          style={{ color: 'var(--color-text)' }}
        >
          Soc Ops
        </h1>
        
        {/* Subtitle with Fade In */}
        <p 
          className="text-2xl mb-8 animate-[fade-in_0.8s_ease-out_0.3s_both]"
          style={{ color: 'var(--color-text-light)' }}
        >
          Social Bingo
        </p>
        
        {/* Mission Statement / Tagline */}
        <p 
          className="text-lg md:text-xl mb-16 max-w-2xl mx-auto leading-relaxed animate-[fade-in_0.8s_ease-out_0.5s_both]"
          style={{ color: 'var(--color-text-light)' }}
        >
          Break the ice, spark conversations, and make meaningful connections at your next mixer.
          Find people who match the prompts and complete your bingo!
        </p>

        {/* Enhanced Instructions Card */}
        <div 
          className="backdrop-blur-sm rounded-2xl p-8 mb-20 border shadow-xl hover:shadow-2xl hover:-translate-y-1 motion-reduce:hover:translate-y-0 transition-all duration-300 animate-[fade-in_0.8s_ease-out_0.7s_both]"
          style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderColor: 'var(--color-sage-light)'
          }}
        >
          <h2 
            className="font-semibold text-xl mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            How to play
          </h2>
          
          {/* Two-column layout on larger screens */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start space-x-3">
              <span className="text-3xl" role="img" aria-label="Target">🎯</span>
              <div>
                <p className="font-medium" style={{ color: 'var(--color-text)' }}>Find Your Matches</p>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  Mingle and find people who match the questions on your board
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <span className="text-3xl" role="img" aria-label="Sparkles">✨</span>
              <div>
                <p className="font-medium" style={{ color: 'var(--color-text)' }}>Mark Your Squares</p>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  Tap a square when you find someone who matches the prompt
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 md:col-span-2 justify-center">
              <span className="text-3xl" role="img" aria-label="Trophy">🏆</span>
              <div>
                <p className="font-medium" style={{ color: 'var(--color-text)' }}>Win with Five in a Row</p>
                <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
                  Complete a horizontal, vertical, or diagonal line to win!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <button
          onClick={onStart}
          className="relative py-6 px-12 rounded-2xl text-xl font-semibold text-white shadow-2xl hover:scale-105 active:scale-95 motion-reduce:hover:scale-100 motion-reduce:active:scale-100 transition-all duration-300 motion-reduce:animate-none animate-[fade-in_1s_ease-out_0.9s_both]"
          style={{
            background: `linear-gradient(135deg, var(--color-terracotta) 0%, var(--color-terracotta-dark) 100%)`,
            boxShadow: '0 10px 40px rgba(199, 123, 94, 0.3)'
          }}
        >
          <span className="relative z-10">Start Game</span>
          {/* Subtle glow effect */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)'
            }}
          />
        </button>
      </div>
    </div>
  );
}
