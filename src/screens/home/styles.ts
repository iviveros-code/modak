import { StyleSheet } from 'react-native'

import { horizontalScale, verticalScale, moderateScale } from '@helpers'
import { theme } from '@theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paddingContainer: {
    paddingHorizontal: horizontalScale(20),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  animatedView: {
    backgroundColor: theme.colors.white,
    marginBottom: verticalScale(20),
    padding: moderateScale(20),
    borderRadius: moderateScale(12),
  },
  image: {
    width: moderateScale(80),
    height: moderateScale(80),
  },
  weight: {
    fontWeight: '700',
  },
  containerTitle: {
    paddingHorizontal: horizontalScale(35),
    flexWrap: 'nowrap',
    left: horizontalScale(-20),
  },
  title: {
    flexWrap: 'wrap',
    textAlign: 'left',
  },
})
