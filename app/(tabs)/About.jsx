// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function AboutPage() {
//   return (
//     <View style={styles.container}>
//       <Text>About!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
import React from 'react';
import { ScrollView, StyleSheet, FlatList } from 'react-native';
import PurchaseInput from '../PurchaseInput'; // Assuming PurchaseInput is in the same directory

export default function About() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <PurchaseInput />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
