import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      paddingTop: 50,
      paddingHorizontal: 10,
    },
    headerBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    header: {
      fontSize: 26,
      fontWeight: 'bold',
      color: '#fff',
      marginLeft: 10,
    },
    card: {
      flexDirection: 'row',
      marginBottom: 15,
      borderRadius: 15,
      overflow: 'hidden',
      backgroundColor: 'rgba(255,255,255,0.05)',
    },
    image: {
      width: 100,
      height: 150,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
    },
    info: {
      flex: 1,
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 5,
    },
    details: {
      color: '#ccc',
      fontSize: 14,
      marginBottom: 3,
    },
    actions: {
      flexDirection: 'row',
      marginTop: 10,
      gap: 15,
    },
  })
  