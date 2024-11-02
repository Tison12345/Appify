import { View,StatusBar } from 'react-native'
import React from 'react'

// app/(auth)/_layout.js
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signin" />
      <Stack.Screen name="Signup" />
    </Stack>
  );
}
