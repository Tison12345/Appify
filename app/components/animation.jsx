// import React, { useEffect, useRef } from 'react';
// import { Animated, View } from 'react-native';

// const BouncingBall = () => {
//   const ballAnim = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(ballAnim, {
//           toValue: 200,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(ballAnim, {
//           toValue: 0,
//           duration: 1000,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();
//   }, [ballAnim]);

//   return (
//     <Animated.View
//       style={{
//         position: 'absolute',
//         width: 50,
//         height: 50,
//         borderRadius: 25,
//         backgroundColor: 'red',
//         transform: [{ translateY: ballAnim }],
//       }}
//     />
//   );
// };

// export default BouncingBall;
import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

const BouncingBalls = () => {
  const [ballAnimations, setBallAnimations] = useState([]);
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'brown'];

  useEffect(() => {
    const createBallAnimation = () => {
      const ballAnimY = new Animated.Value(0);
      const ballAnimX = new Animated.Value(0);
      const directionY = Math.random() > 0.5 ? 1 : -1;
      const directionX = Math.random() > 0.5 ? 1 : -1;
      const randomColorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[randomColorIndex];

      const animation = Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(ballAnimY, {
              toValue: 200 * directionY,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(ballAnimX, {
              toValue: 100 * directionX,
              duration: 1000,
              useNativeDriver: true,
            }),
          ]),
          Animated.parallel([
            Animated.timing(ballAnimY, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true,
            }),
            Animated.timing(ballAnimX, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true,
            }),
          ]),
        ])
      );

      animation.start();

      return { animation, ballAnimY, ballAnimX, color };
    };

    // Create 10 ball animations
    const newAnimations = Array.from({ length: 10 }, createBallAnimation);
    setBallAnimations(newAnimations);

    // Clean up animations on unmount
    return () => {
      newAnimations.forEach(({ animation }) => animation.stop());
    };
  }, []);

  return (
    <View>
      {ballAnimations.map(({ ballAnimY, ballAnimX, color }, index) => (
        <Animated.View
          key={index}
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: color,
            transform: [{ translateY: ballAnimY }, { translateX: ballAnimX }],
          }}
        />
      ))}
    </View>
  );
};

export default BouncingBalls;