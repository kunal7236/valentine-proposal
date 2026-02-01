# 💝 Valentine Proposal

A cute and interactive Valentine's Day proposal web app with animations and confetti effects. Ask your special someone to be your Valentine in style!

**🌐 Live Demo:** [valentines-proposal-chi.vercel.app](https://valentines-proposal-chi.vercel.app)

## ✨ Features

- 🎨 Beautiful gradient UI with Valentine's theme
- 🎯 Interactive "No" button that moves away when clicked/hovered
- 🎉 Confetti animation on "Yes" click
- 📱 Fully responsive design (mobile & desktop)
- ⚡ Built with React + TypeScript + Vite for fast performance
- 🎭 Smooth animations and transitions
- 💪 Lightweight and optimized bundle size

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd valentine-proposal

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
# Build the project
pnpm run build

# Preview the production build
pnpm run preview
```

## 🛠️ Tech Stack

- **React** 18.3 - UI library
- **TypeScript** - Type safety
- **Vite** 6.2 - Build tool & dev server
- **Tailwind CSS** 3.4 - Styling
- **Canvas Confetti** 1.9 - Confetti animations
- **ESLint** - Code quality

## 📦 Project Structure

```
valentine-proposal/
├── src/
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   ├── index.css         # Global styles
│   ├── App.css           # App styles
│   ├── components/
│   │   └── ErrorBoundary.tsx
│   ├── hooks/
│   │   └── use-mobile.tsx
│   └── lib/
│       └── utils.ts
├── public/
│   └── images/           # Bear and celebration images
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

## 🎮 Usage

1. Open the app
2. Click the **"Yes 💖"** button to accept and see confetti celebration
3. Try clicking the **"No 💔"** button - it runs away!
4. On mobile, the "No" button also responds to touch

## 📸 Features Breakdown

### No Button Movement
- **Desktop**: Moves on hover or click
- **Mobile**: Moves on touch/tap
- Smooth animations with random positioning

### Celebration Screen
- Displays celebration GIF (with fallback image)
- Confetti animation from both sides
- Heartfelt congratulation message

## 🚢 Deployment

The app is deployed on **Vercel** and auto-deploys on every push to the main branch.

### Deploy Your Own

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects the build settings
5. Click "Deploy"

## 📝 Scripts

```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run preview  # Preview production build
pnpm run lint     # Run ESLint
```

## 💡 Tips

- Customize the images in `public/images/`
- Modify the pink colors in `src/App.tsx` and `tailwind.config.js`
- Change the text and emojis to personalize
- Add background music or sounds for extra romance 🎵

## 🐛 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Free to use for personal projects

## 💌 Made with ❤️

This app is designed to make Valentine's Day proposals unforgettable!
