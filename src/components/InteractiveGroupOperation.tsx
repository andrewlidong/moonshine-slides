import React, { useState } from 'react';

interface InteractiveGroupOperationProps {
  size?: number;
  color?: string;
}

export const InteractiveGroupOperation: React.FC<InteractiveGroupOperationProps> = ({
  size = 300,
  color = '#2c3e50'
}) => {
  const [selectedElement, setSelectedElement] = useState<number | null>(null);
  const [operation, setOperation] = useState<'multiply' | 'inverse'>('multiply');
  const center = size / 2;
  const radius = size * 0.4;

  const elements = [
    { id: 1, label: 'e', angle: 0 },
    { id: 2, label: 'a', angle: 90 },
    { id: 3, label: 'b', angle: 180 },
    { id: 4, label: 'c', angle: 270 }
  ];

  const handleElementClick = (id: number) => {
    if (selectedElement === null) {
      setSelectedElement(id);
    } else {
      // Perform operation
      setSelectedElement(null);
    }
  };

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
        className="group-circle"
      />

      {/* Elements */}
      {elements.map((element) => {
        const x = center + radius * Math.cos((element.angle * Math.PI) / 180);
        const y = center + radius * Math.sin((element.angle * Math.PI) / 180);
        const isSelected = selectedElement === element.id;

        return (
          <g key={element.id} onClick={() => handleElementClick(element.id)}>
            <circle
              cx={x}
              cy={y}
              r={20}
              fill={isSelected ? color : 'white'}
              stroke={color}
              strokeWidth="2"
              className="group-element"
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill={isSelected ? 'white' : color}
              className="element-label"
            >
              {element.label}
            </text>
          </g>
        );
      })}

      {/* Operation controls */}
      <g className="operation-controls">
        <rect
          x={center - 60}
          y={center + radius + 20}
          width={120}
          height={40}
          rx={20}
          fill="white"
          stroke={color}
          strokeWidth="2"
          className="control-button"
        />
        <text
          x={center}
          y={center + radius + 45}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={color}
          className="control-label"
        >
          {operation === 'multiply' ? 'Multiply' : 'Inverse'}
        </text>
      </g>
    </svg>
  );
}; 