import React from 'react';

interface MonsterGroupVisualizationProps {
  size?: number;
  color?: string;
}

export const MonsterGroupVisualization: React.FC<MonsterGroupVisualizationProps> = ({
  size = 400,
  color = '#2c3e50'
}) => {
  const center = size / 2;
  const radius = size * 0.35;
  const innerRadius = size * 0.15;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Outer circle representing the Monster Group */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="2"
      />

      {/* Inner circle representing the center */}
      <circle
        cx={center}
        cy={center}
        r={innerRadius}
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="4,4"
      />

      {/* Connecting lines */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => {
        const x1 = center + innerRadius * Math.cos(angle * Math.PI / 180);
        const y1 = center + innerRadius * Math.sin(angle * Math.PI / 180);
        const x2 = center + radius * Math.cos(angle * Math.PI / 180);
        const y2 = center + radius * Math.sin(angle * Math.PI / 180);
        return (
          <line
            key={index}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="1"
            strokeDasharray="2,2"
          />
        );
      })}

      {/* Labels */}
      <text
        x={center}
        y={center - radius - 20}
        textAnchor="middle"
        fill={color}
        fontSize="16"
      >
        Monster Group M
      </text>
      <text
        x={center}
        y={center}
        textAnchor="middle"
        fill={color}
        fontSize="14"
      >
        196,883
      </text>
      <text
        x={center}
        y={center + 20}
        textAnchor="middle"
        fill={color}
        fontSize="12"
      >
        dimensions
      </text>
      <text
        x={center}
        y={center + radius + 20}
        textAnchor="middle"
        fill={color}
        fontSize="14"
      >
        Order: ~8×10⁵³
      </text>
    </svg>
  );
}; 