import { View, Text, TouchableOpacity } from 'react-native'
import FastImage from 'react-native-fast-image'

import { EventType } from '@types'
import { globalStyles } from '@theme'

import { styles } from './styles'

interface Props {
  item: EventType
  onPress: () => void
}

export const EventItem = ({ item, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <FastImage source={{ uri: item.image_url }} style={styles.image} />

      <View style={styles.containerTitle}>
        <Text style={[styles.title, globalStyles.text_fs12_black]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}
