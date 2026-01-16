# Design Spec: Card Deck Shuffle Mode

## Overview

New game mode where players tap to draw random question cards one at a time, instead of the full 5×5 bingo grid.

## Design Decisions

### Mode Architecture

- Add `'shuffle'` to `GameState` type alongside `'start'`, `'playing'`, `'bingo'`
- Separate component: `CardDeck.tsx` for shuffle mode UI
- Reuse existing question pool from `questions.ts`

### User Flow

1. Start Screen → Player selects "Card Deck Shuffle" mode
2. Card Deck Screen → Shows single card with question
3. Tap anywhere → Draw next random card
4. Questions shuffle without repeats until all shown

### Visual Design (Scandinavian Calm)

- **Card**: Large centered card with rounded-2xl, generous padding (p-12)
- **Typography**: Light font-weight (300), tracking-wide for questions, text-2xl size
- **Interaction**: Soft scale animation on tap (scale-95), smooth card transitions (300ms)
- **Colors**: Sage green primary, warm surface backgrounds
- **Progress**: Subtle indicator showing cards remaining with animated progress bar

### Implementation Notes

- Track drawn cards to prevent duplicates using Fisher-Yates shuffle
- Smooth fade/slide transitions between cards (opacity + scale)
- Reset button to start over with new shuffle
- Back to Menu button to return to start screen
- Initial shuffle happens on component mount using useState initializer

## Completed Features ✓

- ✅ GameState type updated to include 'shuffle'
- ✅ CardDeck component created with Scandinavian Calm aesthetics
- ✅ Tap interaction working with smooth animations
- ✅ Progress tracking (card X of Y, remaining count, progress bar)
- ✅ StartScreen updated with two mode options
- ✅ App.tsx wired to route to CardDeck component
- ✅ useBingoGame hook extended with startShuffle action
- ✅ Shuffle Again button reshuffles the deck
- ✅ Back to Menu returns to start screen
