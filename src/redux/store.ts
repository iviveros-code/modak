// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/dist/query/react'

// import { apiSlice } from './api-slice'
// import favoritesReducer from './favorite-slice'

// const store = configureStore({
//   reducer: {
//     favorite: favoritesReducer,
//     [apiSlice.reducerPath]: apiSlice.reducer,
//   },
//   middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
// })

// setupListeners(store.dispatch)

import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query/react'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { apiSlice } from './api-slice'
import favoritesReducer from './favorite-slice'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorite'],
}

const rootReducer = combineReducers({
  favorite: favoritesReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], 
      },
    }).concat(apiSlice.middleware),
})

const persistor = persistStore(store)

export const storePersistor = persistor
setupListeners(store.dispatch)

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
