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
  const middleRadius = size * 0.25;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background gradient */}
      <defs>
        <radialGradient id="monsterGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" style={{ stopColor: color, stopOpacity: 0.1 }} />
          <stop offset="100%" style={{ stopColor: color, stopOpacity: 0 }} />
        </radialGradient>
      </defs>

      {/* Background circle */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="url(#monsterGradient)"
        stroke="none"
      />

      {/* Outer circle representing the Monster Group */}
      <circle
        cx={center}
        cy={center}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="2"
        className="outer-circle"
      />

      {/* Middle circle representing intermediate structure */}
      <circle
        cx={center}
        cy={center}
        r={middleRadius}
        fill="none"
        stroke={color}
        strokeWidth="1"
        strokeDasharray="4,4"
        className="middle-circle"
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
        className="inner-circle"
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
            className="connecting-line"
          />
        );
      })}

      {/* Additional symmetry lines */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, index) => {
        const x1 = center + middleRadius * Math.cos(angle * Math.PI / 180);
        const y1 = center + middleRadius * Math.sin(angle * Math.PI / 180);
        const x2 = center + radius * Math.cos(angle * Math.PI / 180);
        const y2 = center + radius * Math.sin(angle * Math.PI / 180);
        return (
          <line
            key={`sym-${index}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={color}
            strokeWidth="1"
            strokeDasharray="1,1"
            opacity="0.5"
            className="symmetry-line"
          />
        );
      })}

      {/* Labels with enhanced styling */}
      <g className="labels">
        <text
          x={center}
          y={center - radius - 20}
          textAnchor="middle"
          fill={color}
          fontSize="16"
          fontWeight="bold"
          className="title-label"
        >
          Monster Group M
        </text>
        <text
          x={center}
          y={center - 10}
          textAnchor="middle"
          fill={color}
          fontSize="14"
          className="dimension-label"
        >
          196,883
        </text>
        <text
          x={center}
          y={center + 10}
          textAnchor="middle"
          fill={color}
          fontSize="12"
          className="dimension-unit"
        >
          dimensions
        </text>
        <text
          x={center}
          y={center + radius + 20}
          textAnchor="middle"
          fill={color}
          fontSize="14"
          className="order-label"
        >
          Order: ~8×10⁵³
        </text>
        <text
          x={center}
          y={center + radius + 40}
          textAnchor="middle"
          fill={color}
          fontSize="12"
          opacity="0.8"
          className="description-label"
        >
          Largest sporadic simple group
        </text>
      </g>

      {/* Decorative elements */}
      <circle
        cx={center}
        cy={center}
        r={radius * 0.02}
        fill={color}
        className="center-dot"
      />
      {[0, 90, 180, 270].map((angle, index) => (
        <circle
          key={`dot-${index}`}
          cx={center + radius * Math.cos(angle * Math.PI / 180)}
          cy={center + radius * Math.sin(angle * Math.PI / 180)}
          r={radius * 0.015}
          fill={color}
          className="corner-dot"
        />
      ))}
    </svg>
  );
}; 