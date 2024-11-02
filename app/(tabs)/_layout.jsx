// // app/(tabs)/_layout.js
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, TextInput, StatusBar,Image } from 'react-native';
// import { Tabs } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';
// import { MaterialIcons } from '@expo/vector-icons';

// const logo=require('../../assets/appifyLogo.png');

// export default function TabsLayout() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   return (
//     <View style={styles.container}>
//       <StatusBar hidden={true} />
      
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
//           <Ionicons name="menu" size={24} color="black" />
//         </TouchableOpacity>        
//         <View>
//           <Image source={logo} style={styles.logo}></Image>
//         </View>
//         <Text style={styles.title}>APPIFY</Text>
        
//       </View>

//       {/* Menu */}
//       {isMenuOpen && (
//         <View style={styles.menu}>
//           <View style={styles.searchContainer}>
//             <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
//             <TextInput
//               style={styles.searchInput}
//               placeholder="Search..."
//               value={searchQuery}
//               onChangeText={setSearchQuery}
//             />
//           </View>
          
//           <TouchableOpacity style={styles.menuItem}>
//             <Ionicons name="home-outline" size={20} color="#333" style={styles.menuIcon} />
//             <Text style={styles.menuItemText}>Home</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.menuItem}>
//             <Ionicons name="settings-outline" size={20} color="#333" style={styles.menuIcon} />
//             <Text style={styles.menuItemText}>Settings</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.menuItem}>
//             <Ionicons name="help-circle-outline" size={20} color="#333" style={styles.menuIcon} />
//             <Text style={styles.menuItemText}>Help</Text>
//           </TouchableOpacity>
          
//           <TouchableOpacity style={styles.menuItem}>
//             <Ionicons name="log-out-outline" size={20} color="#333" style={styles.menuIcon} />
//             <Text style={styles.menuItemText}>Logout</Text>
//           </TouchableOpacity>
//         </View>
//       )}

//       {/* Tabs */}
//       <View style={styles.content}>
//         <Tabs
//           screenOptions={{
//             headerShown: false,
//             tabBarStyle: styles.tabBar,
//             tabBarActiveTintColor: '#007AFF',
//             tabBarInactiveTintColor: '#8E8E93',
//             tabBarLabel: ({ focused, color }) => (
//               <Text style={[styles.tabBarLabel, { color }]}>
//                 {/* Make sure tab labels are wrapped in Text components */}
//               </Text>
//             ),
//           }}
//         >
//           <Tabs.Screen
//             name="Home"
//             options={{
//               title: 'Home',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="home" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="About"
//             options={{
//               title: 'About',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="trophy" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="Article"
//             options={{
//               title: 'Article',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="book" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="PurchaseHistory"
//             options={{
//               title: 'PurchaseHistory',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="time" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tabs.Screen
//             name="Profile"
//             options={{
//               title: 'Profile',
//               tabBarIcon: ({ color, size }) => (
//                 <Ionicons name="person" size={size} color={color} />
//               ),
//             }}
//           />

          
//         </Tabs>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   logo:{
//     height:55,
//     width:55,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   container: {
//     marginTop:8,
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     paddingTop: 0,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//     backgroundColor: '#FFFFFF',
//     height: 56,
//   },
//   headerText: {
//     marginLeft: 16,
//     fontSize: 20,
//     fontWeight: '600',
//     color: '#000000',
//   },
//   // menu: {
//   //   position: 'absolute',
//   //   top: 56,
//   //   left: 0,
//   //   right: 0,
//   //   backgroundColor: '#FFFFFF',
//   //   borderBottomWidth: 1,
//   //   borderBottomColor: '#E5E5E5',
//   //   zIndex: 2,
//   //   elevation: 3,
//   //   shadowColor: '#000',
//   //   shadowOffset: {
//   //     width: 0,
//   //     height: 2,
//   //   },
//   //   shadowOpacity: 0.25,
//   //   shadowRadius: 3.84,
//   // },
//   menu: {
//         position: 'absolute',
//         top: 58,
//         left: 0,
//         backgroundColor: '#ffffff',
//         borderRightWidth: 1,
//         borderRightColor: '#e0e0e0',
//         padding: 16,
//         zIndex: 1,
//         width: '80%', // Adjust as needed
//         height: '100%',
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//       },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//   },
//   searchIcon: {
//     marginRight: 8,
//   },
//   searchInput: {
//     flex: 1,
//     height: 36,
//     padding: 8,
//     backgroundColor: '#F2F2F7',
//     borderRadius: 8,
//     fontSize: 16,
//   },
//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#E5E5E5',
//   },
//   menuIcon: {
//     marginRight: 12,
//   },
//   menuItemText: {
//     fontSize: 16,
//     color: '#333333',
//   },
//   content: {
//     flex: 1,
//     backgroundColor: '#F2F2F7',
//   },
//   tabBar: {
//     backgroundColor: '#FFFFFF',
//     borderTopWidth: 1,
//     borderTopColor: '#E5E5E5',
//     height: 60,
//     paddingBottom: 5,
//     paddingTop: 5,
//   },
//   tabBarLabel: {
//     fontSize: 12,
//     fontWeight: '500',
//   },
// });
// app/(tabs)/_layout.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, StatusBar, Image } from 'react-native';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const logo = require('../../assets/appifyLogo.png');

export default function TabsLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>        
        <View>
          <Image source={logo} style={styles.logo}></Image>
        </View>
        <Text style={styles.title}>APPIFY</Text>
      </View>

      {/* Menu */}
      {isMenuOpen && (
        <View style={styles.menu}>
          <View style={styles.searchContainer}>
            <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="home-outline" size={20} color="#333" style={styles.menuIcon} />
            <Text style={styles.menuItemText}>Home</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="settings-outline" size={20} color="#333" style={styles.menuIcon} />
            <Text style={styles.menuItemText}>Settings</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="help-circle-outline" size={20} color="#333" style={styles.menuIcon} />
            <Text style={styles.menuItemText}>Help</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <Ionicons name="log-out-outline" size={20} color="#333" style={styles.menuIcon} />
            <Text style={styles.menuItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Tabs */}
      <View style={styles.content}>
        <Tabs
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: '#007AFF',
            tabBarInactiveTintColor: '#8E8E93',
            tabBarLabel: ({ focused, color }) => (
              <Text style={[styles.tabBarLabel, { color }]}>
                {/* Tab labels will be handled by individual tab options */}
              </Text>
            ),
          }}
        >
          <Tabs.Screen
            name="Home"
            options={{
              title: 'Home',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="About"
            options={{
              title: 'About',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="trophy" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Scanner"
            options={{
              title: 'Scan',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="scan-circle" size={size + 8} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="PurchaseHistory"
            options={{
              title: 'History',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="time" size={size} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="Profile"
            options={{
              title: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" size={size} color={color} />
              ),
            }}
          />

          {/* Hidden ProductDetails screen */}
          <Tabs.Screen
            name="ProductDetails"
            options={{
              href: null, // This hides the screen from the URL scheme
              tabBarStyle: { display: 'none' }, // This hides the tab bar when this screen is active
              title: 'Product Details',
            }}
          />
        </Tabs>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  logo: {
    width: 30,
    height: 30,
    marginLeft: 16,
  },
  menu: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    zIndex: 1000,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 36,
    padding: 8,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    height: 60,
  },
  tabBarLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
});
