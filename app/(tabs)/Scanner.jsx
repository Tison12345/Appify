// // app/(tabs)/Scanner.js
// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button, Alert } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';
// import { useRouter } from 'expo-router';

// export default function Scanner() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     const getBarCodeScannerPermissions = async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     };

//     getBarCodeScannerPermissions();
//   }, []);

//   const handleBarCodeScanned = ({ data }) => {
//     setScanned(true);
//     // Check if the barcode exists in our database
//     const productInfo = productDatabase[data];
    
//     if (productInfo) {
//       router.push({
//         pathname: '/ProductDetails',
//         params: { barcode: data }
//       });
//     } else {
//       Alert.alert('Product Not Found', 'This product is not in our database.');
//     }
//   };

//   if (hasPermission === null) {
//     return <Text>Requesting camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={styles.scanner}
//       />
//       {scanned && (
//         <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   scanner: {
//     flex:1,
//   },
// });


import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { productDatabase } from '../data/productDatabase';

export default function Scanner() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned');

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // Save scanned product to AsyncStorage
  const saveScannedProduct = async (barcode) => {
    try {
      // Find product in database
      const product = productDatabase[barcode];

      if (!product) {
        Alert.alert('Product Not Found', 'This product is not in our database.');
        return;
      }

      // Prepare product data to save
      const productToSave = {
        ...product,
        barcode,
        scannedAt: new Date().toISOString()
      };

      // Retrieve existing purchases
      const existingPurchases = await AsyncStorage.getItem('purchases');
      const purchases = existingPurchases ? JSON.parse(existingPurchases) : [];

      // Add new purchase
      const updatedPurchases = [productToSave, ...purchases];

      // Save updated purchases
      await AsyncStorage.setItem('purchases', JSON.stringify(updatedPurchases));
      Alert.alert('Product Saved', `${product.name} has been added to your purchase history.`);
    } catch (error) {
      console.error('Error saving product:', error);
      Alert.alert('Error', 'Could not save the product.');
    }
  };

  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log('Type: ' + type + '\nData: ' + data);

    // Save the scanned product
    saveScannedProduct(data);
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} />
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 300, width: 300 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && (
        <Button
          title={'Tap to Scan Again'}
          onPress={() => setScanned(false)}
          color='tomato'
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
    backgroundColor: 'tomato'
  }
});
