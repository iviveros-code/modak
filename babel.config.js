module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './assets',
          '@constants': './src/constants',
          '@components': './src/components',
          '@screens': './src/screens',
          '@config': './src/config',
          '@theme': './src/theme',
          '@types': './src/types',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@i18n': './src/i18n',
          '@helpers': './src/helpers',
        },
      },
    ],
  ],
}
