import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { movies, useFavorites } from '@/app/data';
import { styles } from '../styles/home';

export default function Index() {
  const { isFavorite, toggleFavorite, favoriteMovies } = useFavorites();

  const renderHeader = () => (
    <>
      <View style={styles.headerBar}>
        <Ionicons name="film-outline" size={28} color="#1e90ff" />
        <Text style={styles.header}>Aura Movie List</Text>
      </View>
      <Text style={styles.subtitle}>Discover your next watch</Text>

      <View style={styles.statsStrip}>
        <BlurView intensity={30} tint="dark" style={styles.statPill}>
          <Ionicons name="library-outline" size={16} color="#1e90ff" />
          <Text style={styles.statPillText}>{movies.length} Movies</Text>
        </BlurView>
        <BlurView intensity={30} tint="dark" style={styles.statPill}>
          <Ionicons name="star" size={16} color="gold" />
          <Text style={styles.statPillText}>{favoriteMovies.length} Saved</Text>
        </BlurView>
      </View>
    </>
  );

  return (
    <View style={styles.container}>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const favorited = isFavorite(item.id);
          const genres = item.genre.split(',').map((g) => g.trim());

          return (
            <BlurView
              intensity={45}
              tint="dark"
              style={[styles.card, favorited && styles.cardFavorited]}
            >
              <View style={styles.posterWrap}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.posterOverlay} />
                <View style={styles.rankBadge}>
                  <Text style={styles.rankText}>#{index + 1}</Text>
                </View>
              </View>

              <View style={styles.info}>
                <View>
                  <Text style={styles.title} numberOfLines={2}>
                    {item.title}
                  </Text>
                  <Text style={styles.director} numberOfLines={1}>
                    {item.director}
                  </Text>

                  <View style={styles.metaRow}>
                    <View style={styles.metaChip}>
                      <Ionicons name="time-outline" size={11} color="#888" />
                      <Text style={styles.metaText}>{item.duration}</Text>
                    </View>
                  </View>

                  <View style={styles.tagRow}>
                    {genres.map((genre) => (
                      <View key={genre} style={styles.genreTag}>
                        <Text style={styles.genreTagText}>{genre}</Text>
                      </View>
                    ))}
                  </View>

                  <Text style={styles.cast} numberOfLines={2}>
                    {item.cast}
                  </Text>
                </View>

                <View style={styles.actions}>
                  <TouchableOpacity
                    style={[styles.actionBtn, styles.favoriteBtn, favorited && styles.favoriteBtnActive]}
                    onPress={() => toggleFavorite(item.id)}
                    activeOpacity={0.7}
                  >
                    <Ionicons
                      name={favorited ? 'star' : 'star-outline'}
                      size={16}
                      color={favorited ? 'gold' : '#ccc'}
                    />
                    <Text
                      style={[
                        styles.actionLabel,
                        styles.favoriteLabel,
                        favorited && styles.favoriteLabelActive,
                      ]}
                    >
                      {favorited ? 'Saved' : 'Save'}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={[styles.actionBtn, styles.playBtn]} activeOpacity={0.7}>
                    <Ionicons name="play" size={14} color="#6eb5ff" />
                    <Text style={[styles.actionLabel, styles.playLabel]}>Watch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BlurView>
          );
        }}
      />
    </View>
  );
}
