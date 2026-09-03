import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useFavorites } from '@/app/data';
import { styles } from '../styles/favorites';

export default function Favorites() {
  const { favoriteMovies, toggleFavorite } = useFavorites();

  if (favoriteMovies.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.headerBar}>
          <Ionicons name="star" size={28} color="gold" />
          <Text style={styles.header}>Favorites</Text>
        </View>
        <Text style={styles.subtitle}>Your personal watchlist</Text>

        <View style={styles.emptyContainer}>
          <View style={styles.emptyIconRing}>
            <Ionicons name="star-outline" size={44} color="gold" />
          </View>
          <Text style={styles.emptyTitle}>No favorites yet</Text>
          <Text style={styles.emptyText}>
            Tap the star on any movie from the Home tab to save it here.
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Ionicons name="star" size={28} color="gold" />
        <Text style={styles.header}>Favorites</Text>
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{favoriteMovies.length}</Text>
        </View>
      </View>
      <Text style={styles.subtitle}>Movies you love, all in one place</Text>

      <FlatList
        data={favoriteMovies}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BlurView intensity={40} tint="dark" style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.poster} />
            <View style={styles.gradient} />
            <TouchableOpacity
              style={styles.starBadge}
              onPress={() => toggleFavorite(item.id)}
            >
              <Ionicons name="star" size={18} color="gold" />
            </TouchableOpacity>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle} numberOfLines={2}>
                {item.title}
              </Text>
              <Text style={styles.cardGenre} numberOfLines={1}>
                {item.genre}
              </Text>
              <View style={styles.cardFooter}>
                <Text style={styles.duration}>
                  <Ionicons name="time-outline" size={12} color="#ccc" /> {item.duration}
                </Text>
                <TouchableOpacity
                  style={styles.starButton}
                  onPress={() => toggleFavorite(item.id)}
                >
                  <Ionicons name="heart-dislike-outline" size={18} color="#ff6b6b" />
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        )}
      />
    </View>
  );
}
