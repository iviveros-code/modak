import config from 'react-native-config'

export const EnvConfig = {
  APP_CONFIG: config.APP_CONFIG ?? '',
  API_URL: config.API_URL ?? '',
  APP_ID: config.APP_ID ?? '',
}
