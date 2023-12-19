import { createStackNavigator } from '@react-navigation/stack'
import { DetailEventScreen } from '@screens'

import { RootStackParamList } from '@types'
import { SCREEN_NAMES } from '@constants'

import { TabNavigation } from './tab-navigation'

const MainNavigation = () => {
  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREEN_NAMES.TAB_BAR}
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={SCREEN_NAMES.DETAIL_EVENT} component={DetailEventScreen} />
    </Stack.Navigator>
  )
}

export { MainNavigation }
