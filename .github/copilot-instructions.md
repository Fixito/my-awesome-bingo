# Copilot Instructions for Soc Ops

## Development Checklist

- [ ] Run linting: `npm run lint`
- [ ] Run build: `npm run build`
- [ ] Run tests: `npm test`

## Project Overview

**Soc Ops** is a mobile-first social bingo game built for icebreaker events. Players find people matching questions on a 5×5 grid and mark squares to win by completing rows, columns, or diagonals.

**Tech Stack:**

- React 19.2 with TypeScript 5.9
- Tailwind CSS v4 (CSS-first with `@theme`)
- Vite 7 build system
- Vitest for testing
- localStorage for game persistence

## Architecture

```
src/
├── components/          # React UI components
│   ├── StartScreen      # Welcome & instructions
│   ├── GameScreen       # Main game wrapper
│   ├── BingoBoard       # 5×5 grid container
│   ├── BingoSquare      # Individual square
│   └── BingoModal       # Win celebration
├── hooks/
│   └── useBingoGame     # Game state & logic
├── data/
│   └── questions        # Question bank
├── utils/
│   └── bingoLogic       # Win detection algorithms
└── types/               # TypeScript definitions
```

## Design Guide: Scandinavian Calm

### Philosophy

The Scandinavian Calm aesthetic embodies Nordic design principles: **natural, minimal, serene, and refined**. Prioritize warmth, generous whitespace, soft natural tones, and understated elegance.

### Color Palette

**Core Colors** (defined in `src/index.css`):

```css
--color-primary: #5a6f5b          /* Sage green - primary actions */
--color-primary-light: #6d8470    /* Lighter sage - hover states */
--color-secondary: #b48b7d        /* Muted terracotta - warm accent */
--color-marked: #e8ede8           /* Soft sage tint - marked squares */
--color-marked-border: #8a9b8c    /* Medium sage - borders */
--color-bingo: #d4a89a            /* Warm terracotta - celebration */
--color-bg: #f5f3f0               /* Warm beige - backgrounds */
--color-surface: #fefdfb          /* Off-white - cards/surfaces */
--color-text: #3c3c3c             /* Charcoal - primary text */
--color-text-light: #6b6b6b       /* Medium gray - secondary text */
--color-border: #e0dcd7           /* Warm gray - borders */
```

**Usage Guidelines:**

- Backgrounds: Always use `--color-bg` for main pages, `--color-surface` for cards
- Accents: Sage green (`--color-primary`) for primary actions
- Celebration: Muted terracotta (`--color-bingo`, `--color-secondary`) for winning states
- Never use: Bright blues, saturated greens, amber, purple gradients

### Typography

**Font Family:**

```css
font-family: 'Inter', -apple-system, sans-serif;
```

**Guidelines:**

- Use **light** (300) or **regular** (400) weights for body text
- Use **medium** (500) for headings and buttons
- Avoid **bold** (600+) except for rare emphasis
- Generous letter-spacing: `tracking-wide` (0.025em) for headings
- Relaxed line-heights: `leading-relaxed` (1.625) for body text
- Sizes: Focus on scale (text-lg, text-xl, text-4xl) over custom values

### Spacing & Layout

**Principles:**

- Generous padding: Prefer `p-8`, `p-10` over `p-4`, `p-6`
- Breathing room: Use `mb-12`, `mb-8` for section spacing
- Grid gaps: `gap-2` for bingo board (generous but not excessive)
- Component padding: `p-2.5` minimum for interactive elements
- Constrained widths: `max-w-md`, `max-w-sm` for centered content

### Shadows & Depth

**Natural Soft Shadows:**

```css
/* Cards */
shadow-[0_2px_16px_rgba(0,0,0,0.06)]

/* Buttons */
shadow-[0_2px_12px_rgba(90,111,91,0.2)]

/* Modal */
shadow-[0_8px_32px_rgba(0,0,0,0.12)]
```

**Avoid:** Hard box-shadows, `shadow-xl`, black shadows without transparency

### Border Radius

- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-xl` (12px)
- Squares: `rounded-lg` (8px)
- Avoid sharp corners (`rounded` alone)

### Interactions & Animations

**Hover States:**

- Buttons: `hover:bg-[var(--color-primary-light)]`
- Squares: `hover:border-[var(--color-primary)]/40`
- Subtle shadow elevation

**Active States:**

- Scale down gently: `active:scale-[0.98]` or `active:scale-[0.97]`
- Avoid instant color flips

**Transitions:**

- Default: `transition-all duration-200` for buttons
- Squares: `transition-all duration-300` for state changes
- Smooth, never instant

**Animations:**

- Modal: Soft bounce `animate-[bounce_0.6s_ease-out]`
- Backdrop blur: `backdrop-blur-sm` for overlays
- Keep animations subtle and elegant

### Component Patterns

**Buttons:**

```tsx
className="bg-[var(--color-primary)] text-white font-medium py-5 px-8
  rounded-xl tracking-wide hover:bg-[var(--color-primary-light)]
  active:scale-[0.98] transition-all duration-200
  shadow-[0_2px_12px_rgba(90,111,91,0.2)]"
```

**Cards:**

```tsx
className="bg-[var(--color-surface)] rounded-2xl p-8
  shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-[var(--color-border)]"
```

**Text:**

```tsx
// Heading
className = 'text-4xl font-light tracking-wide text-[var(--color-text)]';

// Body
className = 'text-[var(--color-text-light)] leading-relaxed';
```

### State Visualization

**Marked Squares:**

- Background: `bg-[var(--color-marked)]`
- Border: `border-[var(--color-marked-border)]`
- Text: `text-[var(--color-primary)]`
- Checkmark: Sage green `✓`

**Winning Squares:**

- Background: `bg-[var(--color-bingo)]/30`
- Border: `border-[var(--color-bingo)]`
- Soft glow shadow: `shadow-[0_1px_8px_rgba(212,168,154,0.25)]`

### Dos & Don'ts

**✅ Do:**

- Use warm, natural color tones
- Emphasize whitespace and breathing room
- Keep animations subtle and refined
- Use light/medium font weights
- Apply soft natural shadows
- Maintain generous padding

**❌ Don't:**

- Use bright, saturated colors (blues, greens, yellows)
- Create cramped layouts with minimal spacing
- Use bold typography everywhere
- Apply hard shadows or high contrast
- Use sharp corners or harsh transitions
- Mix in colors outside the defined palette

## State Management

Game state is managed by `useBingoGame` hook:

- **localStorage** persistence with schema versioning
- **Three states:** `'start'`, `'playing'`, `'bingo'`
- **Win detection:** Checks rows, columns, diagonals
- **Auto-marking:** Center square is free space

## Testing

- Unit tests: `src/utils/bingoLogic.test.ts`
- Run with: `npm test`
- Focus on win detection and game logic

## Common Tasks

**Add new questions:**
Edit `src/data/questions.ts`

**Modify color palette:**
Update CSS variables in `src/index.css` under `@theme`

**Add new component:**
Create in `src/components/` and import into relevant parent

**Change grid size:**
Modify `BingoBoard.tsx` (currently hardcoded 5×5)
