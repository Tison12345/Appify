// app/(tabs)/ProductDetails.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { productDatabase } from '../data/productDatabase';

export default function ProductDetails() {
  const { barcode } = useLocalSearchParams();
  const product = productDatabase[barcode];

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nutrition Facts</Text>
        {Object.entries(product.nutrition).map(([key, value]) => (
          <View key={key} style={styles.row}>
            <Text style={styles.label}>{key}</Text>
            <Text style={styles.value}>{value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <Text style={styles.ingredients}>{product.ingredients}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Allergens</Text>
        {product.allergens.map((allergen, index) => (
          <Text key={index} style={styles.allergen}>• {allergen}</Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Health Score</Text>
        <Text style={styles.healthScore}>{product.healthScore}/100</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  ingredients: {
    fontSize: 16,
    lineHeight: 24,
  },
  allergen: {
    fontSize: 16,
    marginBottom: 5,
  },
  healthScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});