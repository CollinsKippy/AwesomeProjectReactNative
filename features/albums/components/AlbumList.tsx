import { StyleSheet, Text, View } from 'react-native'

const AlbumList = () => {
  return (
    <View style={styles.albumContainer}>
      <Text style={styles.heading}>
        My Album List
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  albumContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 24
  }
})

export default AlbumList