// GaugeMeter.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const GaugeMeter = ({ percentage }) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg height="250" width="250">
        <Circle
          stroke="#e0e0e0"
          fill="none"
          cx="125"
          cy="125"
          r={radius}
          strokeWidth={20}
        />
        <Circle
          stroke="#FFA500"
          fill="none"
          cx="125"
          cy="125"
          r={radius}
          strokeWidth={20}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </Svg>
      <Text style={styles.gaugeText}>{percentage.toFixed(0)}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  gaugeText: {
    position: 'absolute',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default GaugeMeter;
