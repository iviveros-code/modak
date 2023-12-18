import { View, Image, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image'

import { EventType } from '@types'

import { styles } from './styles'

interface Props {
  item: EventType
  onPress: () => void
}

export const EventItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {item?.image_url ? (
        <FastImage source={{ uri: item.image_url }} style={styles.image} />
      ) : (
        <ActivityIndicator size='large' color='#0000ff' />
      )}
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{item.title}</Text>
        {/* <Text style={styles.description}>{item.description}</Text> */}
      </View>
    </TouchableOpacity>
  )
}
