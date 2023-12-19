import { StyleSheet } from 'react-native'

import { horizontalScale, moderateScale, verticalScale } from '@helpers'

export const styles = StyleSheet.create({
  image: {
    width: moderateScale(150),
    height: moderateScale(150),
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
    marginTop: verticalScale(2),
  },
})
