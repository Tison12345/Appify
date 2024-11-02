// // ImageSlider.jsx
// import React from 'react';
// import { View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
// ;


// const images = [
//   require('../Public/images/image1.jpg'),
//   require('../Public/images/image2.jpg'),
//   require('../Public/images/image3.jpg'),
//   // add more image paths
// ];

// const ImageSlider = () => {
//   return (
//     <ScrollView 
//       horizontal 
//       pagingEnabled 
//       showsHorizontalScrollIndicator={false}
//     >
//       {images.map((image, index) => (
//         <Image key={index} source={image} style={styles.image} />
//       ))}
    
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: Dimensions.get('window').width,
//     height: 200,
//     resizeMode: 'cover',
//   },
// });

// export default ImageSlider;
