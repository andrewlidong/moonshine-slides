# Monstrous Moonshine Presentation

An interactive presentation about the fascinating connection between the Monster Group and the j-function in mathematics. This presentation explores the history, discovery, and implications of Monstrous Moonshine.

**[View Live Presentation](https://andrewlidong.xyz/moonshine-slides/)**

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

## Deployment to GitHub Pages

1. Build the project as described above

2. Create (or update) `.github/workflows/deploy.yml` with the following content:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '20'
          
      - name: Install Dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages
          folder: dist
```

3. Push your changes to the main branch. The GitHub Action will automatically:
   - Build your project
   - Deploy to the gh-pages branch
   - Make it available at https://andrewlidong.xyz/moonshine-slides/

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
