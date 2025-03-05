import React from 'react';

interface GroupActionVisualizationProps {
  size?: number;
  color?: string;
}

export const GroupActionVisualization: React.FC<GroupActionVisualizationProps> = ({
  size = 400,
  color = '#2c3e50'
}) => {
  const center = size / 2;
  const radius = size * 0.4;
  const pointRadius = 8;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeDasharray="4,4"
      />
      
      {/* Center point */}
      <circle
        cx={center}
        cy={center}
        r={pointRadius}
        fill={color}
      />
      
      {/* Orbit points */}
      {[0, 60, 120, 180, 240, 300].map((angle, index) => {
        const x = center + radius * Math.cos(angle * Math.PI / 180);
        const y = center + radius * Math.sin(angle * Math.PI / 180);
        return (
          <g key={index}>
            <circle
              cx={x}
              cy={y}
              r={pointRadius}
              fill={color}
            />
            {/* Connection line */}
            <line
              x1={center}
              y1={center}
              x2={x}
              y2={y}
              stroke={color}
              strokeWidth="1"
              strokeDasharray="2,2"
            />
          </g>
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
        G · x
      </text>
      <text
        x={center}
        y={center + radius + 20}
        textAnchor="middle"
        fill={color}
        fontSize="16"
      >
        Orbit
      </text>
    </svg>
  );
}; 