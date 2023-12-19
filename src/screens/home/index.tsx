import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList, ActivityIndicator } from 'react-native'
import { useTranslation } from 'react-i18next'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { useGetEventsQuery } from '@redux/events-slice'
import { EventType, RootStackParamList } from '@types'
import { EventItem } from '@components'
import { globalStyles, theme } from '@theme'
import { SCREEN_NAMES } from '@constants'

import { styles } from './styles'

export const OneScreenExample = () => {
  const { t } = useTranslation()

  const [page, setPage] = useState(1)
  const [dataSource, setDataSource] = useState<EventType[]>([])
  const [isListEnd, setIsListEnd] = useState(false)

  const { data: events, error, isLoading, isFetching } = useGetEventsQuery({ limit: 10, page })

  type DetailEventNavigationProp = StackNavigationProp<RootStackParamList, typeof SCREEN_NAMES.DETAIL_EVENT>
  const navigation = useNavigation<DetailEventNavigationProp>()

  useEffect(() => {
    if (events?.data && !isFetching) {
      if (events.data.length > 0) {
        setDataSource([...dataSource, ...events.data])
      } else {
        setIsListEnd(true)
      }
    }
  }, [events, isFetching])

  const loadMoreEvents = () => {
    if (!isFetching && !isListEnd) {
      setPage(currentPage => currentPage + 1)
    }
  }

  const renderError = () => {
    if (error) {
      if (error instanceof Error) {
        return <Text>Error: {error.message}</Text>
      } else if ('status' in error) {
        const queryError = error as FetchBaseQueryError

        return (
          <Text>
            Error: {queryError.status} - {JSON.stringify(queryError.data)}
          </Text>
        )
      } else {
        return <Text>Error unknow</Text>
      }
    }

    return null
  }

  return (
    <SafeAreaView style={[styles.container, styles.paddingContainer]}>
      <Text>{t('Home.welcome')}</Text>

      {isLoading ? (
        <View style={globalStyles.center}>
          <ActivityIndicator size='large' color={theme.colors.primary_red} />
        </View>
      ) : (
        <>
          {isLoading && page === 1 && <Text>Loading...</Text>}
          {renderError()}
          <FlatList
            data={dataSource}
            renderItem={({ item }: { item: EventType }) => (
              <View style={styles.containerEvent}>
                <EventItem
                  item={item}
                  onPress={() => {
                    navigation.navigate(SCREEN_NAMES.DETAIL_EVENT, { event: item })
                  }}
                />
              </View>
            )}
            keyExtractor={(item, index) => item.id + '_' + index}
            onEndReached={loadMoreEvents}
            onEndReachedThreshold={0.5}
            ListFooterComponent={() => (isLoading || isFetching ? <Text>Please wait, loading more...</Text> : null)}
            numColumns={2}
            ListEmptyComponent={() => (
              <View style={globalStyles.center}>
                <Text>No events</Text>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />

          <Text>PAGE :{page}</Text>
        </>
      )}
    </SafeAreaView>
  )
}
