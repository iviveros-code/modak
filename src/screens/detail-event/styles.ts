import { StyleSheet } from 'react-native'

import { verticalScale, horizontalScale } from '@helpers'
import { theme } from '@theme'

export const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: verticalScale(200),
  },
  weight: {
    fontWeight: '700',
    marginTop: verticalScale(5),
  },
  paddingH: {
    paddingHorizontal: horizontalScale(20),
  },
  divider: {
    marginVertical: verticalScale(10),
    height: verticalScale(1.5),
  },
  color: {
    color: theme.colors.primary_red,
  },
  align: {
    alignItems: 'center',
  },
  entrance: {
    alignSelf: 'center',
    marginLeft: horizontalScale(55),
  },
  bottom: {
   marginTop: verticalScale(120),
  },
})
