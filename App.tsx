import './src/i18n'
import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'
import { PersistGate } from 'redux-persist/integration/react'
import SplashScreen from 'react-native-splash-screen'

import { theme } from '@theme'

import { MainNavigation } from './src/navigation/main-navigation'
import store, { storePersistor } from './src/redux/store'

const App = () => {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={storePersistor}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <MainNavigation />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App
