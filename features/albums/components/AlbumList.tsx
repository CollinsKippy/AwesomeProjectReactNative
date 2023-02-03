import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { fetchAlbums, selectAlbums } from '../albumSlice';

const AlbumList = () => {
  const dispatch = useAppDispatch();
  const albums = useAppSelector(selectAlbums)

  const handleGetAlbums = () => {
    dispatch(fetchAlbums());
  }

  return (
    <View style={styles.albumContainer}>
      <Text style={styles.heading}>
        My Album List
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => handleGetAlbums()}>Get Albums</TouchableOpacity>

      {albums.map(album => {
        return (
          <View>
            <Text>{album.title}</Text>
          </View>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  albumContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 24
  },
  button: {
    marginTop: 16,
    padding: 12
  }
})

export default AlbumList