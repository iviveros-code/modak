import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Config from 'react-native-config'

const baseQuery = fetchBaseQuery({
  baseUrl: Config.API_URL,
  credentials: 'include',
  prepareHeaders: headers => {
    // Configura el encabezado AIC-User-Agent como se muestra en el ejemplo
    headers.set('AIC-User-Agent', 'aic-bash (engineering@artic.edu)')

    return headers
  },
})

export const apiSlice = createApi({
  baseQuery,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  endpoints: builder => ({}),
})
