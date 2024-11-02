// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function Profile() {
// //   return (
// //     <View style={styles.container}>
// //       <Text>Profile!</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });
// import React from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
// } from 'react-native';
// import { userData } from '../data/userData';

// const Profile = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.name}>Profile</Text>
//       </View>
//       <View style={styles.infoContainer}>
//         <InfoItem label="Name" value={userData.name} />
//         <InfoItem label="Email" value={userData.email} />
//         <InfoItem label="Age" value={userData.age.toString()} />
//         <InfoItem label="Weight" value={userData.weight} />
//         <InfoItem label="Gender" value={userData.gender} />
//       </View>
//     </View>
//   );
// };

// const InfoItem = ({ label, value }) => (
//   <View style={styles.infoItem}>
//     <Text style={styles.label}>{label}:</Text>
//     <Text style={styles.value}>{value}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     padding: 20,
//     backgroundColor: 'green',
//     alignItems: 'center',
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   infoContainer: {
//     padding: 20,
//   },
//   infoItem: {
//     flexDirection: 'row',
//     paddingVertical: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   label: {
//     flex: 1,
//     fontSize: 16,
//     color: '#666',
//   },
//   value: {
//     flex: 2,
//     fontSize: 16,
//   },
// });

// export default Profile;
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { userData } from '../data/userData';

const Profile = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={image ? { uri: image } : require('../Public/images/profileicon.png')}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <Text style={styles.name}>{userData.name}</Text>
        <View style={styles.infoContainer}>
          <InfoItem label="Email" value={userData.email} />
          <InfoItem label="Age" value={userData.age.toString()} />
          <InfoItem label="Weight" value={userData.weight} />
          <InfoItem label="Gender" value={userData.gender} />
        </View>
      </View>
    </View>
  );
};

const InfoItem = ({ label, value }) => (
  <View style={styles.infoItem}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding:20,
  },
  profile: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding:20,
    borderRadius:20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    width:250,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    color: '#666',
  },
});

export default Profile;