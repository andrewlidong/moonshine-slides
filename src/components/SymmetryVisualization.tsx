import React from 'react';

interface SymmetryVisualizationProps {
  size?: number;
  color?: string;
}

export const SymmetryVisualization: React.FC<SymmetryVisualizationProps> = ({
  size = 400,
  color = '#2c3e50'
}) => {
  const center = size / 2;
  const radius = size * 0.3;
  const lineLength = size * 0.4;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Regular hexagon */}
      <polygon
        points={[0, 60, 120, 180, 240, 300].map(angle => {
          const x = center + radius * Math.cos(angle * Math.PI / 180);
          const y = center + radius * Math.sin(angle * Math.PI / 180);
          return `${x},${y}`;
        }).join(' ')}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      {/* Symmetry lines */}
      {[0, 60, 120, 180, 240, 300].map((angle, index) => {
        const x1 = center + lineLength * Math.cos(angle * Math.PI / 180);
        const y1 = center + lineLength * Math.sin(angle * Math.PI / 180);
        const x2 = center + lineLength * Math.cos((angle + 180) * Math.PI / 180);
        const y2 = center + lineLength * Math.sin((angle + 180) * Math.PI / 180);
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="1"
            strokeDasharray="4,4"
          />
        );
      })}

      {/* Center point */}
      <circle
        cx={center}
        cy={center}
        r="4"
        fill={color}
      />

      {/* Labels */}
      <text
        x={center}
        y={center - radius - 20}
        textAnchor="middle"
        fill={color}
        fontSize="16"
      >
        D₆ Symmetry
      </text>
      <text
        x={center}
        y={center + radius + 20}
        textAnchor="middle"
        fill={color}
        fontSize="16"
      >
        6-fold rotation
      </text>
    </svg>
  );
}; 