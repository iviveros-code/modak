import { StyleSheet } from 'react-native'

import { FontSize18 } from '@constants'
import { theme } from '@theme'
import { horizontalScale } from '@helpers'

export const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  containerTitle: {
    flex: 1,
    width: horizontalScale(130),
    alignSelf: 'center',
  },
  title: {
    flexWrap: 'wrap',
    textAlign: 'left',
  },
})
