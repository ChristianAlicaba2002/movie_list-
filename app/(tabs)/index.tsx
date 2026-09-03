import React from 'react'
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import { movies, useFavorites } from '@/app/data'
import { styles } from '../styles/home'

export default function Index() {
  const { isFavorite, toggleFavorite } = useFavorites()

  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Ionicons name="film-outline" size={28} color="white" />
        <Text style={styles.header}> Sul@s0k List</Text>
      </View>

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BlurView intensity={50} tint="dark" style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.details}>
                <Ionicons name="person-outline" size={14} color="lightgray" /> Director: {item.director}
              </Text>
              <Text style={styles.details}>
                <Ionicons name="time-outline" size={14} color="lightgray" /> {item.duration}
              </Text>
              <Text style={styles.details}>
                <FontAwesome name="users" size={14} color="lightgray" /> {item.cast}
              </Text>
              <Text style={styles.details}>
                <Ionicons name="pricetag-outline" size={14} color="lightgray" /> {item.genre}
              </Text>

              <View style={styles.actions}>
                <TouchableOpacity onPress={() => toggleFavorite(item.id)}>
                  <Ionicons
                    name={isFavorite(item.id) ? "star" : "star-outline"}
                    size={20}
                    color={isFavorite(item.id) ? "gold" : "white"}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="play-circle-outline" size={20} color="dodgerblue" />
                </TouchableOpacity>
              </View>
            </View>
          </BlurView>
        )}
      />
    </View>

  )
}

