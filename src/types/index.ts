import { SCREEN_NAMES } from '@constants'

export type EventType = {
  id?: number
  api_model?: string
  api_link?: string
  title?: string
  title_display?: string | null
  image_url?: string
}

type RootStackParamList = {
  [SCREEN_NAMES.EVENTS]: undefined
  [SCREEN_NAMES.EventDetails]: { event: EventType }
}

export { type RootStackParamList }
