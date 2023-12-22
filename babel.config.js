module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components',
          data: './src/data',
          navigation: './src/navigation',
          screens: './src/screens',
          store: './src/store',
          src: './src',
        },
      },
    ],
  ],
};
