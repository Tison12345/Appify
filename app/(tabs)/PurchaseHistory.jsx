// // app/(tabs)/PurchaseHealthAnalysis.js
// import React, { useState } from 'react';
// import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import { purchaseHealthHistory } from '../data/purchaseHistory';

// export default function PurchaseHealthAnalysis() {
//   const [expandedItem, setExpandedItem] = useState(null);

//   const getHealthScoreColor = (score) => {
//     if (score >= 80) return '#4CAF50';
//     if (score >= 60) return '#FFC107';
//     return '#F44336';
//   };

//   const renderHealthScore = (score) => (
//     <View style={[styles.scoreIndicator, { backgroundColor: getHealthScoreColor(score) }]}>
//       <Text style={styles.scoreText}>{score}</Text>
//       <Text style={styles.scoreLabel}>Health Score</Text>
//     </View>
//   );

//   const renderCategoryBreakdown = (categories) => (
//     <View style={styles.categorySection}>
//       <Text style={styles.sectionTitle}>Category Breakdown</Text>
//       {Object.entries(categories).map(([category, data]) => (
//         <View key={category} style={styles.categoryRow}>
//           <View style={styles.categoryLabel}>
//             <Text style={styles.categoryText}>{category}</Text>
//             <Text style={styles.percentageText}>{data.percentage}%</Text>
//           </View>
//           <View style={styles.scoreBar}>
//             <View 
//               style={[
//                 styles.scoreProgress, 
//                 { 
//                   width: `${data.score}%`,
//                   backgroundColor: getHealthScoreColor(data.score)
//                 }
//               ]} 
//             />
//           </View>
//           <Text style={styles.categoryScore}>{data.score}</Text>
//         </View>
//       ))}
//     </View>
//   );

//   const renderNutritionalBalance = (nutrition) => (
//     <View style={styles.nutritionSection}>
//       <Text style={styles.sectionTitle}>Nutritional Balance</Text>
//       <View style={styles.nutritionGrid}>
//         {Object.entries(nutrition).map(([nutrient, data]) => (
//           <View key={nutrient} style={styles.nutrientItem}>
//             <Text style={styles.nutrientName}>{nutrient}</Text>
//             <Text style={styles.nutrientAmount}>{data.amount}</Text>
//             <View style={[styles.nutrientScore, { backgroundColor: getHealthScoreColor(data.score) }]}>
//               <Text style={styles.nutrientScoreText}>{data.score}</Text>
//             </View>
//           </View>
//         ))}
//       </View>
//     </View>
//   );

//   const renderCertifications = (certs) => (
//     <View style={styles.certSection}>
//       <Text style={styles.sectionTitle}>Sustainability & Certifications</Text>
//       <View style={styles.certGrid}>
//         {Object.entries(certs).map(([cert, percentage]) => (
//           <View key={cert} style={styles.certItem}>
//             <Text style={styles.certLabel}>{cert}</Text>
//             <View style={styles.certProgress}>
//               <View 
//                 style={[
//                   styles.certBar, 
//                   { width: `${percentage}%`, backgroundColor: getHealthScoreColor(percentage) }
//                 ]} 
//               />
//             </View>
//             <Text style={styles.certPercentage}>{percentage}%</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>Purchase Health Analysis</Text>
      
//       {purchaseHealthHistory.map((purchase) => (
//         <TouchableOpacity
//           key={purchase.id}
//           style={styles.purchaseCard}
//           onPress={() => setExpandedItem(expandedItem === purchase.id ? null : purchase.id)}
//         >
//           <View style={styles.cardHeader}>
//             <View style={styles.headerInfo}>
//               <Text style={styles.date}>{purchase.date}</Text>
//               <Text style={styles.amount}>${purchase.totalAmount}</Text>
//               <Text style={styles.itemCount}>{purchase.itemCount} items</Text>
//             </View>
//             {renderHealthScore(purchase.healthMetrics.overallHealthScore)}
//           </View>

//           {expandedItem === purchase.id && (
//             <View style={styles.expandedContent}>
//               {renderCategoryBreakdown(purchase.healthMetrics.categoryBreakdown)}
//               {renderNutritionalBalance(purchase.healthMetrics.nutritionalBalance)}
              
//               <View style={styles.insightsSection}>
//                 <Text style={styles.sectionTitle}>Health Insights</Text>
//                 <View style={styles.concerns}>
//                   <Text style={styles.subsectionTitle}>Concerns</Text>
//                   {purchase.healthConcerns.map((concern, index) => (
//                     <Text key={index} style={styles.concernText}>• {concern}</Text>
//                   ))}
//                 </View>
//                 <View style={styles.recommendations}>
//                   <Text style={styles.subsectionTitle}>Recommendations</Text>
//                   {purchase.recommendations.map((rec, index) => (
//                     <Text key={index} style={styles.recommendationText}>• {rec}</Text>
//                   ))}
//                 </View>
//               </View>

//               {renderCertifications(purchase.certifications)}

//               <View style={styles.topItems}>
//                 <Text style={styles.sectionTitle}>Top Healthy Items</Text>
//                 {purchase.topHealthyItems.map((item, index) => (
//                   <View key={index} style={styles.topItemRow}>
//                     <Text style={styles.topItemName}>{item.name}</Text>
//                     <Text style={[styles.topItemScore, { color: getHealthScoreColor(item.score) }]}>
//                       {item.score}
//                     </Text>
//                   </View>
//                 ))}
//               </View>
//             </View>
//           )}
//         </TouchableOpacity>
//       ))}
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   purchaseCard: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 16,
//     marginBottom: 16,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   cardHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   headerInfo: {
//     flex: 1,
//   },
//   date: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//   },
//   amount: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 4,
//   },
//   itemCount: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 2,
//   },
//   scoreIndicator: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   scoreText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   scoreLabel: {
//     fontSize: 10,
//     color: 'white',
//   },
//   expandedContent: {
//     marginTop: 20,
//     paddingTop: 20,
//     borderTopWidth: 1,
//     borderTopColor: '#eee',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//     color: '#333',
//   },
//   categorySection: {
//     marginBottom: 24,
//   },
//   categoryRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   categoryLabel: {
//     width: 100,
//   },
//   categoryText: {
//     fontSize: 14,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   percentageText: {
//     fontSize: 12,
//     color: '#666',
//   },
//   scoreBar: {
//     flex: 1,
//     height: 8,
//     backgroundColor: '#eee',
//     borderRadius: 4,
//     marginHorizontal: 12,
//   },
//   scoreProgress: {
//     height: '100%',
//     borderRadius: 4,
//   },
//   categoryScore: {
//     width: 30,
//     fontSize: 14,
//     fontWeight: '500',
//     textAlign: 'right',
//   },
//   nutritionSection: {
//     marginBottom: 24,
//   },
//   nutritionGrid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//   },
//   nutrientItem: {
//     width: '50%',
//     paddingRight: 12,
//     marginBottom: 16,
//   },
//   nutrientName: {
//     fontSize: 14,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   nutrientAmount: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: '#333',
//     marginTop: 2,
//   },
//   nutrientScore: {
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 4,
//     alignSelf: 'flex-start',
//     marginTop: 4,
//   },
//   nutrientScoreText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   insightsSection: {
//     marginBottom: 24,
//   },
//   subsectionTitle: {
//     fontSize: 16,
//     fontWeight: '500',
//     marginBottom: 8,
//     color: '#333',
//   },
//   concernText: {
//     fontSize: 14,
//     color: '#d32f2f',
//     marginBottom: 4,
//   },
//   recommendationText: {
//     fontSize: 14,
//     color: '#2e7d32',
//     marginBottom: 4,
//   },
//   certSection: {
//     marginBottom: 24,
//   },
//   certGrid: {
//     gap: 12,
//   },
//   certItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   certLabel: {
//     width: 100,
//     fontSize: 14,
//     color: '#333',
//     textTransform: 'capitalize',
//   },
//   certProgress: {
//     flex: 1,
//     height: 8,
//     backgroundColor: '#eee',
//     borderRadius: 4,
//   },
//   certBar: {
//     height: '100%',
//     borderRadius: 4,
//   },
//   certPercentage: {
//     width: 40,
//     fontSize: 14,
//     textAlign: 'right',
//     color: '#666',
//   },
//   topItems: {
//     marginBottom: 8,
//   },
//   topItemRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//   },
//   topItemName: {
//     fontSize: 14,
//     color: '#333',
//   },
//   topItemScore: {
//     fontSize: 16,
//     fontWeight: '500',
//   },
// });

import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  Modal, 
  ScrollView,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PurchaseHistory = () => {
  const [purchases, setPurchases] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalVisible, setIsProductModalVisible] = useState(false);

  // Load purchases on component mount
  useEffect(() => {
    loadPurchases();
  }, []);

  // Load purchases from AsyncStorage
  const loadPurchases = async () => {
    try {
      const storedPurchases = await AsyncStorage.getItem('purchases');
      if (storedPurchases) {
        setPurchases(JSON.parse(storedPurchases));
      }
    } catch (error) {
      console.error('Error loading purchases:', error);
    }
  };

  // Clear all purchase history
  const clearPurchaseHistory = async () => {
    try {
      await AsyncStorage.removeItem('purchases');
      setPurchases([]);
    } catch (error) {
      console.error('Error clearing purchases:', error);
    }
  };

  // Product Details Modal
  const ProductDetailsModal = () => {
    if (!selectedProduct) return null;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isProductModalVisible}
        onRequestClose={() => setIsProductModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedProduct.name}</Text>
            
            <Text style={styles.sectionTitle}>Nutrition Facts</Text>
            {Object.entries(selectedProduct.nutrition).map(([key, value]) => (
              <View key={key} style={styles.nutritionRow}>
                <Text style={styles.nutritionLabel}>{key}</Text>
                <Text style={styles.nutritionValue}>{value}</Text>
              </View>
            ))}

            <Text style={styles.sectionTitle}>Ingredients</Text>
            <Text>{selectedProduct.ingredients}</Text>

            {selectedProduct.allergens && selectedProduct.allergens.length > 0 && (
              <>
                <Text style={styles.sectionTitle}>Allergens</Text>
                <Text>{selectedProduct.allergens.join(", ")}</Text>
              </>
            )}

            <Text style={styles.sectionTitle}>Scanned At</Text>
            <Text>{new Date(selectedProduct.scannedAt).toLocaleString()}</Text>

            <TouchableOpacity 
              style={styles.closeButton}
              onPress={() => setIsProductModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>
    );
  };

  // Render Purchase List Item
  const renderPurchaseItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.purchaseItem}
      onPress={() => {
        setSelectedProduct(item);
        setIsProductModalVisible(true);
      }}
    >
      <View>
        <Text style={styles.purchaseItemName}>{item.name}</Text>
        <Text style={styles.purchaseItemTimestamp}>
          {new Date(item.scannedAt).toLocaleString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {purchases.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No purchases scanned yet</Text>
        </View>
      ) : (
        <>
          <FlatList
            data={purchases}
            renderItem={renderPurchaseItem}
            keyExtractor={(item, index) => index.toString()}
            style={styles.purchaseList}
          />
          <Button 
            title="Clear Purchase History" 
            onPress={clearPurchaseHistory} 
            color="#BFF528"
          />
        </>
      )}

      <ProductDetailsModal />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
  purchaseList: {
    flex: 1,
  },
  purchaseItem: {
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  purchaseItemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  purchaseItemTimestamp: {
    color: 'gray',
    fontSize: 12,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  nutritionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  nutritionLabel: {
    fontSize: 16,
  },
  nutritionValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PurchaseHistory;
