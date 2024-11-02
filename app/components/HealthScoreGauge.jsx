// components/HealthScoreGauge.js
import React from 'react';
import { View, Text } from 'react-native';
import { Svg, Path, Circle, Text as SvgText } from 'react-native-svg';

const HealthScoreGauge = ({ score, size = 120 }) => {
  // Calculate parameters for the gauge
  const strokeWidth = size * 0.12;
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate colors based on score
  const getScoreColor = (score) => {
    if (score >= 80) return '#4CAF50';
    if (score >= 60) return '#FFC107';
    return '#F44336';
  };

  // Calculate the arc path for the gauge
  const getArcPath = (value) => {
    const angle = (value / 100) * 240 - 120; // -120 to 120 degrees
    const angleRad = (angle * Math.PI) / 180;
    const x = center + radius * Math.cos(angleRad);
    const y = center + radius * Math.sin(angleRad);
    const largeArcFlag = angle > 0 ? 1 : 0;
    
    return `
      M ${center + radius} ${center}
      A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}
    `;
  };

  const scoreColor = getScoreColor(score);

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size} height={size}>
        {/* Background arc */}
        <Path
          d={getArcPath(100)}
          fill="none"
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        
        {/* Score arc */}
        <Path
          d={getArcPath(score)}
          fill="none"
          stroke={scoreColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        
        {/* Center circle */}
        <Circle
          cx={center}
          cy={center}
          r={radius - strokeWidth}
          fill="white"
        />
        
        {/* Score text */}
        <SvgText
          x={center}
          y={center - 5}
          fontSize={size * 0.25}
          fontWeight="bold"
          fill={scoreColor}
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {score}
        </SvgText>
        
        {/* Label text */}
        <SvgText
          x={center}
          y={center + size * 0.15}
          fontSize={size * 0.1}
          fill="#666"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          Health Score
        </SvgText>
      </Svg>
    </View>
  );
};

export default HealthScoreGauge;