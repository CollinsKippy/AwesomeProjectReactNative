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
      <TouchableOpacity style={styles.button} onPress={() => handleGetAlbums()}>
        <Text style={styles.buttonText}>Get Albums</Text>
      </TouchableOpacity>

      {albums.map(album => {
        return (
          <View key={album.id} style={styles.album}>
            <Text style={styles.albumTitle}>{album.title}</Text>
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
    fontSize: 24,
    fontWeight: '500',
    color: 'purple',
  },
  button: {
    marginTop: 16,
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
    backgroundColor: 'navy',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    textAlign: 'center'
  },
  album: {
    marginBottom: 8,
    marginTop: 8,
    paddingBottom: 16,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1
  },
  albumTitle: {
    fontSize: 18
  }
})

export default AlbumList