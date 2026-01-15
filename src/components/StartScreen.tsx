interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden">
      {/* Warm gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-warm-white to-beige-dark"></div>
      
      {/* Organic decorative shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-terracotta/10 rounded-full blur-3xl animate-[pulse_8s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-sage/10 rounded-full blur-3xl animate-[pulse_10s_ease-in-out_infinite]"></div>
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-terracotta-light/10 rounded-full blur-2xl animate-[pulse_12s_ease-in-out_infinite]"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-md">
        {/* Title with staggered animation */}
        <div className="mb-3 animate-[fadeInUp_0.7s_ease-out]">
          <h1 className="text-5xl font-bold text-sage-dark mb-2 tracking-tight">Soc Ops</h1>
          <p className="text-xl text-terracotta font-medium">Social Bingo</p>
        </div>
        
        {/* Warm subtitle */}
        <p className="text-sage-dark/80 text-lg mb-10 animate-[fadeInUp_0.7s_ease-out_0.1s] opacity-0 [animation-fill-mode:forwards]">
          Ready to break the ice? ✨
        </p>
        
        {/* Instruction cards with icons and hover effects */}
        <div className="space-y-3 mb-10">
          {/* Card 1 */}
          <div className="bg-warm-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-sm border border-sage/10 
                          hover:shadow-lg hover:scale-[1.02] hover:bg-warm-white/90 
                          transition-all duration-300 ease-out
                          animate-[fadeInUp_0.7s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex items-center gap-3">
              <div className="text-3xl">👋</div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-sage-dark text-base">Meet Amazing People</h3>
                <p className="text-sage-dark/70 text-sm">Find folks who match the prompts</p>
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-warm-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-sm border border-sage/10
                          hover:shadow-lg hover:scale-[1.02] hover:bg-warm-white/90
                          transition-all duration-300 ease-out
                          animate-[fadeInUp_0.7s_ease-out_0.35s] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex items-center gap-3">
              <div className="text-3xl">💬</div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-sage-dark text-base">Discover Shared Stories</h3>
                <p className="text-sage-dark/70 text-sm">Tap squares as you connect</p>
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-warm-white/80 backdrop-blur-sm rounded-3xl p-5 shadow-sm border border-sage/10
                          hover:shadow-lg hover:scale-[1.02] hover:bg-warm-white/90
                          transition-all duration-300 ease-out
                          animate-[fadeInUp_0.7s_ease-out_0.5s] opacity-0 [animation-fill-mode:forwards]">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🎉</div>
              <div className="text-left flex-1">
                <h3 className="font-semibold text-sage-dark text-base">Win While Connecting</h3>
                <p className="text-sage-dark/70 text-sm">Complete five in a row for bingo!</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social proof */}
        <p className="text-sage-dark/60 text-sm mb-6 animate-[fadeInUp_0.7s_ease-out_0.65s] opacity-0 [animation-fill-mode:forwards]">
          Perfect for events, meetups, and team building
        </p>
        
        {/* CTA Button with enhanced interactions */}
        <button
          onClick={onStart}
          className="group relative w-full bg-gradient-to-r from-terracotta to-terracotta-dark text-white 
                     font-semibold py-5 px-8 rounded-3xl text-lg shadow-lg
                     hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02]
                     active:translate-y-0 active:shadow-lg
                     transition-all duration-300 ease-out
                     animate-[fadeInUp_0.7s_ease-out_0.8s] opacity-0 [animation-fill-mode:forwards]
                     overflow-hidden"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Let's Break the Ice
            <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
          </span>
          {/* Shine effect on hover */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </button>
      </div>
    </div>
  );
}
