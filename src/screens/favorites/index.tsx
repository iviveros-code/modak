import { SafeAreaView, Text, FlatList, View, TouchableOpacity, Alert } from 'react-native'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useDispatch } from 'react-redux'
import { StackNavigationProp } from '@react-navigation/stack'

import { EventType, RootStackParamList } from '@types'
import { theme, globalStyles } from '@theme'
import { SCREEN_NAMES } from '@constants'
import { removeFavorite } from '@redux/favorite-slice'
import { RootState } from '@redux/store'

import { styles } from './styles'

export const Favorite = () => {
  const favorites = useSelector((state: RootState) => state.favorite.items)
  const dispatch = useDispatch()

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const removeFav = (event: EventType) => {
    Alert.alert(
      'Delete Event',
      'Are you sure you want to delete this event?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => dispatch(removeFavorite(event)),
        },
      ],
      { cancelable: false },
    )
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.title}>Favorite Events</Text>
      <FlatList
        data={favorites}
        keyExtractor={(item, index) => item.id + '_' + index}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={globalStyles.text_fs14}>{item.title}</Text>
            <View style={[globalStyles.row, globalStyles.jcontent, styles.top]}>
              <TouchableOpacity
                onPress={() => navigation.navigate(SCREEN_NAMES.DETAIL_EVENT, { event: item })}
                style={[globalStyles.row]}
              >
                <Icon name='check-circle' size={24} color={theme.colors.primary_red} />
                <Text style={globalStyles.text_fs14}>View</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeFav(item)} style={[globalStyles.row]}>
                <Icon name='delete' size={24} color={theme.colors.primary_red} />
                <Text style={globalStyles.text_fs14}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  )
}
