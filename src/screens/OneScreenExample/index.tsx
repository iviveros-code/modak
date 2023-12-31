import React, { useState } from 'react'
import { SafeAreaView, Text, Keyboard, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import config from 'react-native-config'

import { TextInputComponent } from '@components'

import { styles } from './styles'

export const OneScreenExample = () => {
  const [text, setText] = useState('')

  const cleanInput = () => {
    setText('')
  }

  const { t } = useTranslation()
  const isFrom = config.APP_CONFIG ?? ''

  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: 20 }]}>
      <Text>{t('Home.welcome')}</Text>

      <View style={{ flex: 1, width: '100%' }}>
        <TextInputComponent
          label={'placeholder'}
          value={text}
          onChangeText={setText}
          right={text}
          actionX={cleanInput}
          onSubmitEditing={Keyboard.dismiss}
          keyboardType='default'
          mode='outlined'
          autoFocus={true}
          inlineImageLeft='search_icon'
        />

      <Text style={{color:'black'}}> {`I am from ${isFrom}`}</Text>
      </View>

    </SafeAreaView>
  )
}
