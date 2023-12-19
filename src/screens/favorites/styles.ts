import { StyleSheet } from 'react-native'

import { verticalScale, horizontalScale } from '@helpers'

export const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  top:{
    top: verticalScale(5),
  }
})
