import { FC, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { RouteProp } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import { Divider } from 'react-native-paper'

import { RootStackParamList } from '@types'
import { SCREEN_NAMES } from '@constants'
import { theme, globalStyles } from '@theme'

import { styles } from './styles'

type DetailEventScreenRouteProp = RouteProp<RootStackParamList, (typeof SCREEN_NAMES)['DETAIL_EVENT']>

type DetailEventScreenProps = {
  route: DetailEventScreenRouteProp
}

export const DetailEventScreen: FC<DetailEventScreenProps> = ({ route }) => {
  const { event } = route.params
  const [isShowMore, setIsShowMore] = useState(false)

  const removeHtmlTags = (str: string | undefined) => {
    return str?.replace(/<[^>]*>?/gm, '')
  }

  const splited = event?.description?.split(' ').slice(0, 30).join(' ')

  const handleShowMore = () => {
    setIsShowMore(!isShowMore)
  }

  const formatDate = (dateString: string | number | Date) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }

    return new Date(dateString).toLocaleDateString('en-US', options)
  }

  return (
    <View>
      <FastImage source={{ uri: event?.image_url }} style={styles.image} />
      <View style={globalStyles.containerTitle}>
        <Text style={[globalStyles.text_fs16, styles.weight]}>{event?.title}</Text>
      </View>
      <Divider style={styles.divider} />

      <ScrollView style={styles.paddingH}>
        {event?.description && (
          <>
            <Text style={[globalStyles.text_fs14, styles.weight, styles.color]}>Description:</Text>
            {isShowMore ? (
              <>
                <Text style={globalStyles.text_fs14}>{removeHtmlTags(event?.description)}</Text>
                <TouchableOpacity onPress={handleShowMore}>
                  <Text style={[globalStyles.text_fs14, styles.weight]}>Show Less</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={globalStyles.text_fs14}>{removeHtmlTags(splited)}</Text>

                <TouchableOpacity onPress={handleShowMore}>
                  <Text style={[globalStyles.text_fs14, styles.weight]}>Show More</Text>
                </TouchableOpacity>
              </>
            )}
          </>
        )}

        {event?.start_date && (
          <View style={[globalStyles.row, globalStyles.jcontent, styles.align]}>
            <Text style={[globalStyles.text_fs14, styles.weight, styles.color]}>Date:</Text>
            <Text style={globalStyles.text_fs14}>{formatDate(event?.start_date)}</Text>
            <Text style={globalStyles.text_fs14}>{event?.start_time}</Text>
            <Divider style={styles.divider} />
          </View>
        )}
        <Divider style={styles.divider} />

        {event?.entrance && (
          <View style={[globalStyles.row]}>
            <Divider style={styles.divider} />
            <Text style={[globalStyles.text_fs14, styles.weight, styles.color]}>Entrance:</Text>
            <Text style={[globalStyles.text_fs14, styles.entrance]}>{event?.entrance}</Text>
            <Divider style={styles.divider} />
          </View>
        )}
        {event?.end_time && (
          <View style={[globalStyles.row]}>
            <Divider style={styles.divider} />
            <Text style={[globalStyles.text_fs14, styles.weight, styles.color]}>End time:</Text>
            <Text style={[globalStyles.text_fs14, styles.entrance]}>{event?.end_time}</Text>
            <Divider style={styles.divider} />
          </View>
        )}
      </ScrollView>
      <Divider style={styles.divider} />
    </View>
  )
}
