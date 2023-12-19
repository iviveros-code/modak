import { FC } from 'react'
import { View, Text } from 'react-native'
import { RouteProp } from '@react-navigation/native'

import { RootStackParamList } from '@types'
import { SCREEN_NAMES } from '@constants'

type DetailEventScreenRouteProp = RouteProp<RootStackParamList, (typeof SCREEN_NAMES)['DETAIL_EVENT']>

type DetailEventScreenProps = {
  route: DetailEventScreenRouteProp
}

export const DetailEventScreen: FC<DetailEventScreenProps> = ({ route }) => {
  const { event } = route.params

  return (
    <View>
      <Text>Detail Event Screen</Text>
      <Text>{event?.title}</Text>
    </View>
  )
}
