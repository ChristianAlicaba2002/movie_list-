import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import * as ImagePicker from 'expo-image-picker';
import { useFavorites } from '@/app/data';
import { styles } from '../styles/profile';
import { profile } from '../data/profile';

const user = profile[0];
const bioTags = user.bio.split(' • ');

const menuItems = [
  { icon: 'create-outline' as const, label: 'Edit Profile', style: styles.menuIconBlue },
  { icon: 'settings-outline' as const, label: 'Settings', style: styles.menuIconGray },
  { icon: 'notifications-outline' as const, label: 'Notifications', style: styles.menuIconGray },
];

export default function Profile() {
  const { favoriteMovies } = useFavorites();
  const [avatar, setAvatar] = useState(
    'https://copilot.microsoft.com/th/id/BCO.b9ba6b52-bc9f-41dc-8503-7b864e75911e.png'
  );

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const stats = [
    {
      icon: 'film-outline' as const,
      value: user.movieWatch,
      label: 'Watched',
      iconStyle: styles.statIconBlue,
      color: '#1e90ff',
    },
    {
      icon: 'star' as const,
      value: String(favoriteMovies.length),
      label: 'Favorites',
      iconStyle: styles.statIconGold,
      color: 'gold',
    },
    {
      icon: 'chatbubble-ellipses-outline' as const,
      value: user.Reviews,
      label: 'Reviews',
      iconStyle: styles.statIconPurple,
      color: '#9b59b6',
    },
  ];

  return (
    <View style={styles.container}>
      
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.headerBar}>
          <Ionicons name="person-circle-outline" size={28} color="#1e90ff" />
          <Text style={styles.header}>Profile</Text>
        </View>
        <Text style={styles.subtitle}>Your cinema identity</Text>

        <BlurView intensity={45} tint="dark" style={styles.heroCard}>
          <View style={styles.heroInner}>
            <View style={styles.memberBadge}>
              <Ionicons name="sparkles" size={14} color="gold" />
              <Text style={styles.memberBadgeText}>MOVIE BUFF</Text>
            </View>

            <TouchableOpacity onPress={pickImage} style={styles.avatarWrapper} activeOpacity={0.85}>
              <View style={styles.avatarRing}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
              </View>
              <View style={styles.cameraBadge}>
                <Ionicons name="camera" size={16} color="#fff" />
              </View>
            </TouchableOpacity>

            <Text style={styles.name}>
              {user.firstName} {user.lastName}
            </Text>
            <Text style={styles.email}>{user.email}</Text>

            <View style={styles.tagRow}>
              {bioTags.map((tag) => (
                <View key={tag} style={styles.tag}>
                  <Text style={styles.tagText}>{tag}</Text>
                </View>
              ))}
            </View>
          </View>
        </BlurView>

        <View style={styles.statsRow}>
          {stats.map((stat) => (
            <BlurView key={stat.label} intensity={35} tint="dark" style={styles.statCard}>
              <View style={styles.statInner}>
                <View style={[styles.statIconWrap, stat.iconStyle]}>
                  <Ionicons name={stat.icon} size={18} color={stat.color} />
                </View>
                <Text style={styles.statNumber}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            </BlurView>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Account</Text>
        <BlurView intensity={35} tint="dark" style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <View key={item.label}>
              {index > 0 && <View style={styles.menuDivider} />}
              <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
                <View style={[styles.menuIconWrap, item.style]}>
                  <Ionicons name={item.icon} size={20} color="#fff" />
                </View>
                <Text style={styles.menuLabel}>{item.label}</Text>
                <Ionicons name="chevron-forward" size={18} color="#666" style={styles.menuChevron} />
              </TouchableOpacity>
            </View>
          ))}
        </BlurView>

        <TouchableOpacity style={styles.logoutButton} activeOpacity={0.7}>
          <Ionicons name="log-out-outline" size={20} color="#ff6b6b" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
