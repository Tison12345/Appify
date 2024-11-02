// app/(tabs)/Bookmark.jsx
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert, Linking } from 'react-native';
import { Stack } from 'expo-router';
import { articles } from '../data/articles';

export default function ArticlesScreen() {
  const openArticle = async (url) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Cannot open this URL", [{ text: "OK" }]);
      }
    } catch (error) {
      Alert.alert("Error", "Unable to open the article. Please try again later.", [{ text: "OK" }]);
    }
  };

  const renderArticle = ({ item }) => (
    <TouchableOpacity 
      style={styles.articleCard}
      onPress={() => openArticle(item.url)}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: item.image }}
        style={styles.articleImage}
      />
      <View style={styles.articleInfo}>
        <Text style={styles.articleTitle} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.articleDescription} numberOfLines={3}>
          {item.description}
        </Text>
        <TouchableOpacity 
          style={styles.readMoreButton}
          onPress={() => openArticle(item.url)}
        >
          <Text style={styles.readMoreText}>Read Article</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          headerTitle: "Learning Resources",
          headerTitleStyle: styles.headerTitle,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerShadowVisible: false,
        }} 
      />
      
      <FlatList
        data={articles}
        renderItem={renderArticle}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.articleList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  articleList: {
    padding: 16,
  },
  articleCard: {
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
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
  articleImage: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  articleInfo: {
    padding: 16,
  },
  articleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
    lineHeight: 24,
  },
  articleDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  readMoreButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
});