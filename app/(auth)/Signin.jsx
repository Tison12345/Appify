import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking,Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { router } from 'expo-router';

const backgroundImage = require('../../assets/backkgroundd.jpg');
const logo=require('../../assets/appifyLogo.png');

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSignIn = () => {
    console.log('Sign in with:', email, password);
    router.replace('/(tabs)/Home');  // Navigate to tabs
  };

  const handleSignUp = () => {
    router.push('/(auth)/Signup');  // Navigate to signup
  };

  const handleSocialSignIn = (platform) => {
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
    <ImageBackground 
      source={backgroundImage} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View>
          <Image source={logo} style={styles.logo}></Image>
        </View>
        <Text style={styles.title}>Welcome Back!</Text>
        
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
        
        <TouchableOpacity onPress={() => console.log('Forgot Password')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>New User? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignIn('facebook')}>
            <Ionicons name="logo-facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignIn('google')}>
            <Ionicons name="logo-google" size={24} color="#db4437" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignIn('apple')}>
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
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
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
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 16,
    color: '#888',
  },
  signUpButtonText: {
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

export default SignIn;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking ,ImageBackground} from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// const backgroundImage = require('../../assets/backkgroundd.jpg');

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = () => {
//     // Handle sign-in logic here
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   const handleSocialSignIn = (platform) => {
//     let url;
//     switch (platform) {
//       case 'facebook':
//         url = 'https://www.facebook.com/';
//         break;
//       case 'google':
//         url = 'https://accounts.google.com/'; 
//         break;
//       case 'apple':
//         url = 'https://appleid.apple.com/';
//         break;
//       default:
//         return;
//     }
//     Linking.openURL(url);
//   };

//   return (
//     <ImageBackground 
//       source={backgroundImage} 
//       style={styles.backgroundImage}
//     >
//     <View style={styles.container}>
//       <Text style={styles.title}>Sign In</Text>
//       <View style={styles.formGroup}>
//         <Text style={styles.label}>Email address</Text>
//         <TextInput
//           style={styles.input}
//           value={email}
//           onChangeText={setEmail}
//           placeholder="Enter email"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           required
//         />
//       </View>
//       <View style={styles.formGroup}>
//         <Text style={styles.label}>Password</Text>
//         <TextInput
//           style={styles.input}
//           value={password}
//           onChangeText={setPassword}
//           placeholder="Enter password"
//           secureTextEntry
//           required
//         />
//       </View>
//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => Linking.openURL('https://example.com/forgot-password')}>
//         <Text style={styles.forgotPassword}>Forgot password?</Text>
//       </TouchableOpacity>
//       <View style={styles.socialContainer}>
//         <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignIn('facebook')}>
//           <Ionicons name="logo-facebook" size={24} color="#3b5998" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignIn('google')}>
//           <Ionicons name="logo-google" size={24} color="#db4437" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialSignIn('apple')}>
//           <Ionicons name="logo-apple" size={24} color="#000" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backgroundImage: {
//         flex: 1,
//         width: '100%',
//         height: '100%',
//       },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//   },
//   formGroup: {
//     marginBottom: 15,
//     width: '100%',
//   },
//   label: {
//     marginBottom: 5,
//   },
//   input: {
//     backgroundColor: '#ffffff',
//     padding: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     width: '100%',
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     width: '100%',
//   },
//   submitButtonText: {
//     color: '#ffffff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   forgotPassword: {
//     marginTop: 10,
//     color: '#007BFF',
//   },
//   socialContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     width: '60%',
//   },
//   socialButton: {
//     width: 50,
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 11,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
// });

// export default SignIn;
