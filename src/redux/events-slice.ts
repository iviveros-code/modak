import { apiSlice } from './api-slice'

export const eventsSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getEvents: builder.query({
      query: params => {
        const queryString = new URLSearchParams(params).toString()

        return {
          url: `/events?${queryString}`,
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetEventsQuery } = eventsSlice
