import React from 'react'
import { Redirect } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function Index() {
  return <Redirect href="/(auth)/Signin" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
