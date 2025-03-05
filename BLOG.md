# Building an Interactive Mathematical Presentation with React and Reveal.js

## Introduction

When I set out to create a presentation about Group Theory and the Monster Group, I knew I wanted something more than just static slides. The subject matter is inherently visual and interactive, requiring dynamic demonstrations of mathematical concepts. This led me to create an interactive web-based presentation using React, TypeScript, and Reveal.js.

## The Challenge

Teaching abstract mathematical concepts like group theory can be challenging. The traditional approach of static slides and equations often fails to convey the beauty and complexity of these ideas. I wanted to create something that would:

1. Make abstract concepts tangible through interactive visualizations
2. Allow students to experiment with mathematical operations
3. Provide immediate visual feedback
4. Work seamlessly across different devices
5. Support beautiful mathematical typography

## The Solution

### Technology Stack

I chose a modern web stack that would give me the flexibility and power I needed:

- **React + TypeScript**: For building interactive components with type safety
- **Vite**: For fast development and optimized production builds
- **Reveal.js**: For the presentation framework and slide transitions
- **KaTeX**: For beautiful mathematical typography
- **GitHub Pages**: For easy deployment and hosting

### Key Features

#### 1. Interactive Visualizations

The presentation includes several custom React components for visualizing mathematical concepts:

```typescript
// Example of a visualization component
const SymmetryVisualization: React.FC<{ size: number }> = ({ size }) => {
  // Interactive symmetry demonstration
  return (
    <div className="visualization">
      {/* Interactive elements */}
    </div>
  );
};
```

#### 2. Mathematical Typography

Using KaTeX for rendering mathematical equations:

```typescript
// Example of mathematical content
<BlockMath>
  {`G = \\{g_1, g_2, ..., g_n\\}`}
</BlockMath>
```

#### 3. Responsive Design

The presentation adapts to different screen sizes and input methods:

```css
/* Example of responsive styling */
.visualization {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 100%;
  }
}
```

## Development Process

### 1. Setting Up the Project

```bash
# Create a new Vite project
npm create vite@latest moonshine-slides -- --template react-ts

# Install dependencies
npm install reveal.js katex react-katex
```

### 2. Building Components

Each visualization component was built iteratively:

1. Start with a basic static version
2. Add interactivity
3. Implement mathematical logic
4. Add animations and transitions
5. Optimize performance

### 3. Deployment Challenges

The main challenge was ensuring the presentation worked correctly with GitHub Pages' base path:

```typescript
// vite.config.ts
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? '/moonshine-slides/' 
    : '/',
  // ... other config
});
```

## Key Learnings

1. **Component Design**: Breaking down complex visualizations into reusable components
2. **Performance Optimization**: Using React's memo and useCallback for smooth animations
3. **Mathematical Visualization**: Finding the right balance between accuracy and visual appeal
4. **Responsive Design**: Ensuring the presentation works well on all devices
5. **Deployment**: Handling base paths and asset loading in different environments

## Future Improvements

1. Add more interactive exercises
2. Implement progress tracking
3. Add speaker notes
4. Include more mathematical visualizations
5. Add export to PDF functionality

## Conclusion

Building this presentation was a great exercise in combining mathematical concepts with modern web technologies. The result is an engaging, interactive learning tool that makes complex mathematical ideas more accessible and enjoyable to learn.

The code is available on GitHub: [moonshine-slides](https://github.com/andrewlidong/moonshine-slides)

Feel free to try it out and contribute to its development! 