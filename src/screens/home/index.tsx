import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, View, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { useGetEventsQuery } from '@redux/events-slice'
import { EventType } from '@types'
import { EventItem } from '@components'

import { styles } from './styles'

export const OneScreenExample = () => {
  const { t } = useTranslation()

  const [page, setPage] = useState(1)
  const [dataSource, setDataSource] = useState<EventType[]>([])
  const [isListEnd, setIsListEnd] = useState(false)

  const { data: events, error, isLoading, isFetching } = useGetEventsQuery({ limit: 10, page })

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
        return <Text>Error desconocido</Text>
      }
    }

    return null
  }

  return (
    <SafeAreaView style={[styles.container, { paddingHorizontal: 20 }]}>
      <Text>{t('Home.welcome')}</Text>

      {isLoading && page === 1 && <Text>Cargando...</Text>}
      {renderError()}
      <FlatList
        data={dataSource}
        renderItem={({ item }: { item: EventType }) => (
          <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
            <EventItem item={item} onPress={() => {}} />
          </View>
        )}
        keyExtractor={(item, index) => item.id + '_' + index}
        onEndReached={loadMoreEvents}
        onEndReachedThreshold={0.5} // Ajusta este valor según tus necesidades
        ListFooterComponent={() => (isLoading || isFetching ? <Text>Cargando más...</Text> : null)}
        numColumns={2}
        ListEmptyComponent={() => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>No hay eventos</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />

      <Text>PAGE :{page}</Text>
    </SafeAreaView>
  )
}
