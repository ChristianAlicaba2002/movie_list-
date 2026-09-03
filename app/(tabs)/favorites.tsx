import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { styles } from '../styles/favorites'

export default function favorites() {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <Text style={styles.header}> Favorites</Text>
      </View>
    </View>
  )
}

