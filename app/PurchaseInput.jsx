// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

// const GaugeMeter = ({ percentage }) => {
//   const filledWidth = (percentage / 100) * 200; // 200 is the total width of the gauge

//   return (
//     <View style={styles.gaugeContainer}>
//       <View style={styles.gaugeBackground}>
//         <View style={[styles.gaugeFill, { width: filledWidth }]} />
//       </View>
//       <Text style={styles.gaugeText}>{percentage.toFixed(0)}%</Text>
//     </View>
//   );
// };

// const PurchaseInput = () => {
//   const [purchaseData, setPurchaseData] = useState([]);
//   const [product, setProduct] = useState('');
//   const [price, setPrice] = useState('');
//   const [sustainabilityScore, setSustainabilityScore] = useState('');
//   const [averageScore, setAverageScore] = useState(0);

//   const handleAddPurchase = () => {
//     if (!product || !price || !sustainabilityScore) return;

//     const newPurchase = {
//       product,
//       price: parseFloat(price),
//       sustainabilityScore: parseInt(sustainabilityScore, 10)
//     };
//     const updatedPurchaseData = [...purchaseData, newPurchase];
//     setPurchaseData(updatedPurchaseData);
//     calculateAverageScore(updatedPurchaseData);

//     // Reset input fields
//     setProduct('');
//     setPrice('');
//     setSustainabilityScore('');
//   };

//   const calculateAverageScore = (data) => {
//     const totalScore = data.reduce((acc, purchase) => acc + purchase.sustainabilityScore, 0);
//     const avgScore = data.length ? totalScore / data.length : 0;
//     setAverageScore(avgScore);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Log Your Purchases</Text>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Product Name"
//           value={product}
//           onChangeText={setProduct}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Price"
//           value={price}
//           onChangeText={setPrice}
//           keyboardType="numeric"
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Sustainability Score (0-100)"
//           value={sustainabilityScore}
//           onChangeText={setSustainabilityScore}
//           keyboardType="numeric"
//         />
//         <TouchableOpacity style={styles.button} onPress={handleAddPurchase}>
//           <Text style={styles.buttonText}>Add Purchase</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.scoreContainer}>
//         <Text style={styles.subtitle}>Average Sustainability Score</Text>
//         <GaugeMeter percentage={averageScore} />
//       </View>
//       <View style={styles.listContainer}>
//         <Text style={styles.subtitle}>Purchase History</Text>
//         <FlatList
//           data={purchaseData}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item }) => (
//             <Text style={styles.listItem}>
//               {item.product} - ${item.price} - Score: {item.sustainabilityScore}
//             </Text>
//           )}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   inputContainer: {
//     marginBottom: 20,
//   },
//   input: {
//     backgroundColor: '#ffffff',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   scoreContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   subtitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   gaugeContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   gaugeBackground: {
//     width: 200,
//     height: 20,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   gaugeFill: {
//     height: '100%',
//     backgroundColor: '#FFA500',
//   },
//   gaugeText: {
//     marginTop: 5,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   listContainer: {
//     flex: 1,
//   },
//   listItem: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
// });

// export default PurchaseInput;
// PurchaseInput.jsx

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import GaugeMeter from './GaugeMeter'; // Update the path accordingly

const PurchaseInput = () => {
  const [purchaseData, setPurchaseData] = useState([]);
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [sustainabilityScore, setSustainabilityScore] = useState('');
  const [averageScore, setAverageScore] = useState(0);

  const handleAddPurchase = () => {
    if (!product || !price || !sustainabilityScore) return;

    const newPurchase = {
      product,
      price: parseFloat(price),
      sustainabilityScore: parseInt(sustainabilityScore, 10)
    };
    const updatedPurchaseData = [...purchaseData, newPurchase];
    setPurchaseData(updatedPurchaseData);
    calculateAverageScore(updatedPurchaseData);

    // Reset input fields
    setProduct('');
    setPrice('');
    setSustainabilityScore('');
  };

  const calculateAverageScore = (data) => {
    const totalScore = data.reduce((acc, purchase) => acc + purchase.sustainabilityScore, 0);
    const avgScore = data.length ? totalScore / data.length : 0;
    setAverageScore(avgScore);
  };

  const handleReset = () => {
    setPurchaseData([]);
    setAverageScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log Your Purchases</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Product Name"
          value={product}
          onChangeText={setProduct}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Sustainability Score (0-100)"
          value={sustainabilityScore}
          onChangeText={setSustainabilityScore}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddPurchase}>
          <Text style={styles.buttonText}>Add Purchase</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.scoreContainer}>
        <Text style={styles.subtitle}>Average Sustainability Score</Text>
        <GaugeMeter percentage={averageScore} />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.subtitle}>Purchase History</Text>
        <FlatList
          data={purchaseData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>
              {item.product} - ${item.price} - Score: {item.sustainabilityScore}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

// Your existing styles...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  resetButton: {
    backgroundColor: '#FF6347',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gaugeContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeBackground: {
    width: 200,
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  gaugeFill: {
    height: '100%',
    backgroundColor: '#FFA500',
  },
  gaugeText: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
  listItem: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PurchaseInput;

