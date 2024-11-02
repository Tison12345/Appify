

// // Home.jsx
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import ImageSlider from './ImageSlider';

// const Home = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Welcome to the Home Page</Text>
//       <ImageSlider/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default Home;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageSlider from '../components/ImageSlider';
import BouncingBall from '../components/animation';
import FallingLeaf from '../components/animation';


export default function Home() {
  return (
    <View style={styles.container}>
      {/* <ImageSlider/> */}
      {/* <BouncingBall/> */}
      <FallingLeaf/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});