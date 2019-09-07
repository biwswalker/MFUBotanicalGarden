const plugins = [
  [
    'module-resolver',
    {
      alias: {
        "@src": "./src",
        "@components": "./src/components",
        "@services": "./src/services",
        "@configs": "./src/configs",
        "@constants": "./src/constants",
        "@features": "./src/features",
        "@redux": "./src/redux",
        "@utils": "./src/utils",
        "@images": "./src/assets/images",
        "@fonts": "./src/constants/fonts",
        "@colors": "./src/constants/colors",
      }
    }

  ]
]

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins
};
