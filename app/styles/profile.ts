import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 50,
      paddingHorizontal: 20,
    },
    headerBar: {
      alignItems: 'center',
      marginBottom: 30,
    },
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#fff',
    },
    profileSection: {
      alignItems: 'center',
      marginBottom: 30,
    },
    avatar: {
      width: 120,
      height: 120,
      borderRadius: 60,
      marginBottom: 15,
      borderWidth: 2,
      borderColor: '#fff',
    },
    name: {
      fontSize: 22,
      fontWeight: 'bold',
      color: '#fff',
    },
    email: {
      fontSize: 16,
      color: '#aaa',
      marginTop: 5,
    },
    bio: {
      fontSize: 14,
      color: '#888',
      marginTop: 10,
      textAlign: 'center',
    },
    stats: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 30,
    },
    statBox: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    statLabel: {
      fontSize: 14,
      color: '#aaa',
    },
    actions: {
      gap: 15,
    },
    actionButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#222',
      padding: 15,
      borderRadius: 12,
    },
    actionText: {
      color: '#fff',
      fontSize: 16,
      marginLeft: 10,
    },
  })
  