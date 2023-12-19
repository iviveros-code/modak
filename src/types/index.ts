import { SCREEN_NAMES } from '@constants'

export type ScreenName = (typeof SCREEN_NAMES)[keyof typeof SCREEN_NAMES]

export type EventType = {
  id?: number
  api_model?: string
  api_link?: string
  title?: string
  title_display?: string | null
  image_url?: string
  description?: string
  start_date?: string
  start_time?: string
  entrance?: string
  end_time?: string
}

type RootStackParamList = {
  [SCREEN_NAMES.EVENTS]: undefined
  [SCREEN_NAMES.DETAIL_EVENT]: { event: EventType }
  [SCREEN_NAMES.TAB_BAR]: undefined
}

export { type RootStackParamList }
