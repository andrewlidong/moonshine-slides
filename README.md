# Monstrous Moonshine Presentation

An interactive presentation about the fascinating connection between the Monster Group and the j-function in mathematics. This presentation explores the history, discovery, and implications of Monstrous Moonshine.

## Overview

This presentation covers:
- The Monster Group and its properties
- Modular Functions and the j-invariant
- The discovery of Monstrous Moonshine
- Borcherds' proof using string theory
- Modern implications and open questions

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:5174/moonshine-slides/ in your browser

## Building for Production

1. Update the base URL in `vite.config.ts` (already set to `/moonshine-slides/`)

2. Build the project:
```bash
npm run build
```

This will create a `dist` directory with the production build.

## Deployment

To deploy to https://andrewlidong.xyz/moonshine-slides/:

1. Build the project as described above
2. Copy the contents of both `dist` and `public` directories to your web server:
   - All built files from `dist/`
   - All static assets from `public/` (images, etc.)

## Controls

- Arrow keys or Space: Navigate through slides
- F: Toggle fullscreen
- S: Show speaker notes
- ?: Show all keyboard shortcuts

## Credits

This presentation uses:
- [Reveal.js](https://revealjs.com/) for the presentation framework
- [Vite](https://vitejs.dev/) for build tooling
- [React](https://reactjs.org/) for UI components

## License

MIT License
