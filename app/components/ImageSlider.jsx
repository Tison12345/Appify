import React, { useState, useRef, useEffect } from 'react';
import {StyleSheet,View,Image,Dimensions,ScrollView,TouchableOpacity,Animated,} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  // Replace these with your actual image paths
  const images = [
    require('../Public/images/image1.jpg'),
    // require('../Public/images/image2.jpg'),
    require('../Public/images/image3.jpg'),
    require('../Public/images/image4.jpg'),
    require('../Public/images/image5.jpg'),
  ];
  

  const handleScroll = (event) => {
    const contentOffset = event.nativeEvent.contentOffset;
    const index = Math.round(contentOffset.x / SCREEN_WIDTH);
    setActiveIndex(index);
  };

  const scrollToIndex = (index) => {
    scrollRef.current?.scrollTo({
      x: index * SCREEN_WIDTH,
      animated: true,
    });
    setActiveIndex(index);
  };

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (activeIndex + 1) % images.length;
      scrollToIndex(nextIndex);
    }, 5000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={image}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      {/* Navigation Arrows */}
      <View style={styles.arrowsContainer}>
        <TouchableOpacity
          style={[styles.arrow, styles.leftArrow]}
          onPress={() => {
            const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
            scrollToIndex(nextIndex);
          }}
        >
          <AntDesign name="left" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.arrow, styles.rightArrow]}
          onPress={() => {
            const nextIndex = (activeIndex + 1) % images.length;
            scrollToIndex(nextIndex);
          }}
        >
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Dots Indicator */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
            ]}
            onPress={() => scrollToIndex(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    position: 'relative',
  },
  imageContainer: {
    width: SCREEN_WIDTH,
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  arrowsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  arrow: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: 'white',
  },
});

export default ImageSlider;
// import React, { useState, useEffect, useRef } from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   Animated,
//   PanResponder,
//   Platform,
//   StatusBar,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const { width, height } = Dimensions.get('window');
// const SWIPE_THRESHOLD = 50;

// const ImageSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const progressAnim = useRef(new Animated.Value(0)).current;
//   const duration = 5000;

//   // Sample data - replace with your actual content
//   const stories = [
//     {
//       image: require('../Public/images/image1.jpg'), // Update path to your assets
//       title: 'Praesent purus justo',
//       text: 'Duis nunc purus massa. Sed elit ligula et eros ultrices eleifend.'
//     },
//     {
//       image: require('../Public/images/image2.jpg'),
//       title: 'Second Story',
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
//     },
//     {
//       image: require('../Public/images/image3.jpg'),
//       title: 'Third Story',
//       text: 'Vestibulum ante ipsum primis in faucibus orci luctus.'
//     }
//   ];

//   const panResponder = useRef(
//     PanResponder.create({
//       onStartShouldSetPanResponder: () => true,
//       onMoveShouldSetPanResponder: (_, gestureState) => {
//         const { dx, dy } = gestureState;
//         return Math.abs(dx) > Math.abs(dy);
//       },
//       onPanResponderGrant: () => {
//         setIsPaused(true);
//         progressAnim.stopAnimation();
//       },
//       onPanResponderRelease: (_, gestureState) => {
//         setIsPaused(false);
//         const { dx } = gestureState;
        
//         if (Math.abs(dx) >= SWIPE_THRESHOLD) {
//           if (dx < 0 && activeIndex < stories.length - 1) {
//             handleNext();
//           } else if (dx > 0 && activeIndex > 0) {
//             handlePrevious();
//           }
//         }
//       },
//     })
//   ).current;

//   const handleNext = () => {
//     if (activeIndex < stories.length - 1) {
//       setActiveIndex(activeIndex + 1);
//       progressAnim.setValue(0);
//     }
//   };

//   const handlePrevious = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//       progressAnim.setValue(0);
//     }
//   };

//   useEffect(() => {
//     if (!isPaused) {
//       progressAnim.setValue(0);
//       const animation = Animated.timing(progressAnim, {
//         toValue: 1,
//         duration: duration,
//         useNativeDriver: false,
//       });

//       animation.start(({ finished }) => {
//         if (finished && activeIndex < stories.length - 1) {
//           handleNext();
//         }
//       });

//       return () => animation.stop();
//     }
//   }, [activeIndex, isPaused]);

//   const renderProgressBars = () => (
//     <View style={styles.progressContainer}>
//       {stories.map((_, index) => (
//         <View key={index} style={styles.progressBar}>
//           <Animated.View
//             style={[
//               styles.progressFill,
//               {
//                 width: index < activeIndex
//                   ? '100%'
//                   : index === activeIndex
//                     ? progressAnim.interpolate({
//                         inputRange: [0, 1],
//                         outputRange: ['0%', '100%'],
//                       })
//                     : '0%',
//               },
//             ]}
//           />
//         </View>
//       ))}
//     </View>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="light-content" />
//       {renderProgressBars()}

//       <View style={styles.contentWrapper} {...panResponder.panHandlers}>
//         {/* Navigation Areas */}
//         <View style={styles.navigationContainer}>
//           <TouchableOpacity
//             style={styles.navButton}
//             onPress={handlePrevious}
//             activeOpacity={1}
//           />
//           <TouchableOpacity
//             style={styles.navButton}
//             onPress={handleNext}
//             activeOpacity={1}
//           />
//         </View>

//         {/* Current Story */}
//         <View style={styles.storyContainer}>
//           <Image
//             source={stories[activeIndex].image}
//             style={styles.image}
//             resizeMode="cover"
//           />
          
//           <View style={styles.overlay} />

//           <View style={styles.textContainer}>
//             <Text style={styles.title}>{stories[activeIndex].title}</Text>
//             <Text style={styles.description}>{stories[activeIndex].text}</Text>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#000',
//   },
//   contentWrapper: {
//     width:300,
//     height:500,
//   },
//   progressContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 8,
//     paddingTop: 8,
//     paddingBottom: 8,
//     gap: 4,
//   },
//   progressBar: {
//     flex: 1,
//     height: 3,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     borderRadius: 2,
//     overflow: 'hidden',
//   },
//   progressFill: {
//     height: '100%',
//     backgroundColor: '#fff',
//   },
//   navigationContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     flexDirection: 'row',
//     zIndex: 1,
//   },
//   navButton: {
//     flex: 1,
//     height: '100%',
//   },
//   storyContainer: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   overlay: {
//     position: 'absolute',
//     left: 0,
//     right: 0,
//     bottom: 0,
//     height: '50%',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   textContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     padding: 20,
//     paddingBottom: Platform.OS === 'ios' ? 50 : 30,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 8,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     color: '#fff',
//     opacity: 0.9,
//     textAlign: 'center',
//     lineHeight: 24,
//   },
// });

// export default ImageSlider;