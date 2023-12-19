import { StyleSheet } from 'react-native'

import { horizontalScale, verticalScale } from '@helpers'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paddingContainer: {
    paddingHorizontal: horizontalScale(20),
  },
  containerEvent: {
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(20),
  },
})
