import React from 'react';

interface RubiksCubeVisualizationProps {
  size?: number;
  color?: string;
}

export const RubiksCubeVisualization: React.FC<RubiksCubeVisualizationProps> = ({
  size = 300,
  color = '#2c3e50'
}) => {
  const center = size / 2;
  const cubeSize = size * 0.4;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background gradient */}
      <defs>
        <radialGradient id="cubeGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Cube faces */}
      <g className="cube">
        {/* Front face */}
        <rect
          x={center - cubeSize/2}
          y={center - cubeSize/2}
          width={cubeSize}
          height={cubeSize}
          fill="none"
          stroke={color}
          strokeWidth="2"
          className="front-face"
        />

        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <React.Fragment key={`grid-${i}`}>
            <line
              x1={center - cubeSize/2 + (cubeSize/3) * i}
              y1={center - cubeSize/2}
              x2={center - cubeSize/2 + (cubeSize/3) * i}
              y2={center + cubeSize/2}
              stroke={color}
              strokeWidth="1"
              className="grid-line"
            />
            <line
              x1={center - cubeSize/2}
              y1={center - cubeSize/2 + (cubeSize/3) * i}
              x2={center + cubeSize/2}
              y2={center - cubeSize/2 + (cubeSize/3) * i}
              stroke={color}
              strokeWidth="1"
              className="grid-line"
            />
          </React.Fragment>
        ))}

        {/* Corner pieces */}
        {[0, 1, 2, 3].map((i) => (
          <React.Fragment key={`corner-${i}`}>
            <circle
              cx={center - cubeSize/2 + (cubeSize/3) * (i % 2)}
              cy={center - cubeSize/2 + (cubeSize/3) * Math.floor(i/2)}
              r={cubeSize/6}
              fill={color}
              className="corner-piece"
            />
          </React.Fragment>
        ))}

        {/* Edge pieces */}
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <circle
            key={`edge-${i}`}
            cx={center - cubeSize/2 + (cubeSize/3) * (i % 4)}
            cy={center - cubeSize/2 + (cubeSize/3) * Math.floor(i/4)}
            r={cubeSize/6}
            fill={color}
            className="edge-piece"
          />
        ))}

        {/* Center piece */}
        <circle
          cx={center}
          cy={center}
          r={cubeSize/6}
          fill={color}
          className="center-piece"
        />
      </g>

      {/* Labels */}
      <text
        x={center}
        y={center + cubeSize/2 + 20}
        textAnchor="middle"
        fill={color}
        fontSize="12"
        className="label"
      >
        43,252,003,274,489,856,000 positions
      </text>
    </svg>
  );
}; 