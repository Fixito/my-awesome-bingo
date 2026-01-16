# 🎲 Soc Ops

### *Break the ice. Make connections. Get BINGO!*

**Soc Ops** is a fun, interactive **Social Bingo** game designed to energize in-person mixers, team events, and networking sessions. Transform awkward small talk into an engaging icebreaker challenge where participants race to find people who match unique prompts—and get 5 in a row to win!

---

## ✨ What Makes It Special?

🎯 **Purpose-Built for Socializing**  
Turn any gathering into an interactive game that encourages genuine conversations

🎨 **Beautifully Simple**  
Clean, modern UI built with React, TypeScript, and Tailwind CSS v4

📱 **Mobile-First Design**  
Optimized for phones so players can mingle freely without being tethered to a laptop

⚡ **Zero Setup for Players**  
Just share the link—no downloads, no sign-ups, no friction

🔧 **Easily Customizable**  
Swap out questions to match your event theme in minutes

---

## 🎮 How to Play

1. **Start the Game**: Each player opens the app on their phone
2. **Mingle & Match**: Walk around and find people who match the bingo prompts  
   *Example: "has lived in another country" or "plays an instrument"*
3. **Tap to Mark**: When you find a match, tap that square to mark it
4. **Get 5 in a Row**: First to complete a line (horizontal, vertical, or diagonal) wins!
5. **Celebrate**: The app announces your victory with a satisfying celebration 🎉

---

## 🚀 Quick Start

### For Event Organizers

**Deploy Your Own Game:**

```bash
# Clone and install
git clone https://github.com/YOUR-USERNAME/my-awesome-bingo.git
cd my-awesome-bingo
npm install

# Customize questions (optional)
# Edit src/data/questions.ts

# Run locally to test
npm run dev

# Deploy to GitHub Pages
git push origin main
```

The app automatically deploys to GitHub Pages on every push to `main`—just share the URL with your participants!

---

## 🎨 Customization Guide

Make it your own by editing the questions:

**File:** `src/data/questions.ts`

```typescript
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  "has a pet",
  "prefers tea over coffee",
  "plays an instrument",
  "speaks more than 2 languages",
  // Add your own creative prompts!
  "has climbed a mountain",
  "loves spicy food",
  "can juggle",
];
```

**Ideas for Custom Themes:**
- **Company Events**: "joined before 2020", "works remotely", "attended the hackathon"
- **Conferences**: "first-time attendee", "gave a talk", "traveled from another country"
- **Weddings**: "knew the couple in college", "gave a speech", "caught the bouquet"
- **Gaming Meetups**: "speedruns games", "owns a retro console", "plays competitively"

---

## 🛠️ Technical Details

### Built With
- ⚛️ **React 19** with TypeScript
- 🎨 **Tailwind CSS v4** for styling
- ⚡ **Vite** for blazing-fast builds
- ✅ **Vitest** for testing

### Prerequisites
- [Node.js 22](https://nodejs.org/) or higher

### Development Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Deployment

This project is configured to automatically deploy to **GitHub Pages** on every push to the `main` branch. Just enable GitHub Pages in your repository settings:

**Settings** → **Pages** → **Source** → Select "GitHub Actions"

---

## 🌟 Perfect For

- 🏢 Team building events and offsites
- 🎤 Conference networking sessions  
- 🎓 Orientation and onboarding programs
- 🎉 Parties and social gatherings
- 💼 Professional networking mixers
- 🎮 Gaming or hobby meetups

---

## 🤝 Contributing

Found a bug? Have an idea for a feature? Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**—feel free to use it for your events!

---

## 💡 Inspiration

This project was created as part of the [VS Code Agent Lab](https://github.com/microsoft/vscode-agent-lab-soc-ops)—a hands-on workshop exploring AI-assisted development with GitHub Copilot.

**Want to learn more?** Check out the [Lab Guide](.lab/GUIDE.md) for a deep dive into building with AI agents.

---

<div align="center">

**Made with ❤️ for bringing people together**

*Now go forth and make some connections!* 🎲✨

</div>
