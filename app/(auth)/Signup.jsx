import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking,Image, ImageBackground} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const backgroundImage = require('../../assets/backkgroundd.jpg');
const logo=require('../../assets/appifyLogo.png');


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    // Implement sign-in logic here
    console.log('Sign Up with:', email, password);
  };

  const handleSocialSignUp = (platform) => {
    let url;
    switch (platform) {
      case 'facebook':
        url = 'https://www.facebook.com/';
        break;
      case 'google':
        url = 'https://accounts.google.com/';
        break;
      case 'apple':
        url = 'https://appleid.apple.com/';
        break;
      default:
        return;
    }
    Linking.openURL(url);
  };

  return (
  <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
    <View style={styles.container}>
      {/* <Image source="./images/backkgroundd" /> */}
      <View>
        <Image source={logo} style={styles.logo}></Image>
      </View>
      <Text style={styles.title}>Start Your Eco Journey!</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#888" />
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <View style={styles.signInContainer}>
          <Text style={styles.signInText}>Existing User?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignUp('facebook')}>
          <Ionicons name="logo-facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignUp('google')}>
          <Ionicons name="logo-google" size={24} color="#db4437" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignUp('apple')}>
          <Ionicons name="logo-apple" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  logo:{
    height:125,
    width:125,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#90EE90',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
  },
  forgotPassword: {
    color: '#888',
    marginBottom: 20,
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    fontSize: 16,
    color: '#888',
  },
  signInButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 11,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

});

export default SignUpPage;
