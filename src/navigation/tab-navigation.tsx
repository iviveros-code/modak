import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Events, Favorite } from '@screens'

import { SCREEN_NAMES } from '@constants'

import { TabBar } from './components'

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator screenOptions={TabBar}>
      <Tab.Screen name={SCREEN_NAMES.EVENTS} component={Events} options={{ tabBarLabel: 'Events' }} />
      <Tab.Screen name={SCREEN_NAMES.FAV_EVENT} component={Favorite} options={{ tabBarLabel: 'Favorites' }} />
    </Tab.Navigator>
  )
}
