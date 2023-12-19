import { createSlice, createAsyncThunk, PayloadAction, Slice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { EventType } from '@types'

export const loadFavorites = createAsyncThunk<EventType[]>('favorites/load', async () => {
  const jsonValue = await AsyncStorage.getItem('favorites')

  return jsonValue != null ? JSON.parse(jsonValue) : []
})

interface FavoritesState {
  items: EventType[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}

const initialState: FavoritesState = {
  items: [],
  status: 'idle',
  error: null,
}

const favoritesSlice: Slice<FavoritesState> = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<EventType>) => {
      state.items.push(action.payload)
    },
    removeFavorite: (state, action: PayloadAction<EventType>) => {
      state.items = state.items.filter(event => event.id !== action.payload.id)
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadFavorites.pending, state => {
        state.status = 'loading'
      })
      .addCase(loadFavorites.fulfilled, (state, action: PayloadAction<EventType[]>) => {
        state.status = 'succeeded'
        state.items = action.payload
      })
      .addCase(loadFavorites.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const { addFavorite, removeFavorite } = favoritesSlice.actions

export default favoritesSlice.reducer
