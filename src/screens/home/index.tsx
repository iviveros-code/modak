import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView, Text, View, ActivityIndicator, Animated, StatusBar, Image, TouchableOpacity } from 'react-native'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { useGetEventsQuery } from '@redux/events-slice'
import { EventType, RootStackParamList } from '@types'
import { globalStyles, theme } from '@theme'
import { SCREEN_NAMES } from '@constants'

import { styles } from './styles'

export const Events = () => {
  const [page, setPage] = useState(1)
  const [dataSource, setDataSource] = useState<EventType[]>([])
  const [isListEnd, setIsListEnd] = useState(false)

  const { data: events, error, isLoading, isFetching } = useGetEventsQuery({ limit: 10, page })

  type DetailEventNavigationProp = StackNavigationProp<RootStackParamList, typeof SCREEN_NAMES.DETAIL_EVENT>
  const navigation = useNavigation<DetailEventNavigationProp>()

  //Animation
  const scrollY = useRef(new Animated.Value(0)).current
  const SPACING = 20
  const AVATAR_SIZE = 70
  const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

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
      {isLoading ? (
        <View style={globalStyles.center}>
          <ActivityIndicator size='large' color={theme.colors.primary_red} />
        </View>
      ) : (
        <>
          {isLoading && page === 1 && <Text>Loading...</Text>}
          {renderError()}
          <StatusBar hidden />
          <View style={styles.paddingContainer}>
            <Text>PAGE :{page}</Text>
            {renderError()}
            <Animated.FlatList
              data={dataSource}
              keyExtractor={(item, index) => item.id + '_' + index}
              onEndReached={loadMoreEvents}
              onEndReachedThreshold={0.5}
              ListFooterComponent={() => (isLoading || isFetching ? <Text>Please wait, loading more...</Text> : null)}
              contentContainerStyle={{
                padding: SPACING,
              }}
              onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}
              renderItem={({ item, index }) => {
                const scale = scrollY.interpolate({
                  inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)],
                  outputRange: [1, 1, 1, 0],
                })
                const opacity = scrollY.interpolate({
                  inputRange: [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)],
                  outputRange: [1, 1, 1, 0],
                })

                return (
                  <Animated.View style={[styles.animatedView, { opacity, transform: [{ scale }] }]}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate(SCREEN_NAMES.DETAIL_EVENT, { event: item })}
                      style={styles.button}
                    >
                      <Image source={{ uri: item?.image_url }} style={styles.image} />
                      <View style={styles.containerTitle}>
                        <Text style={[styles.title, globalStyles.text_fs12_black, styles.weight]}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </Animated.View>
                )
              }}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  )
}
