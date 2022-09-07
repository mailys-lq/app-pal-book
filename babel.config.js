// module.exports = function(api) {
//   api.cache(true);
//   return {
//     plugins: [
//       ["module:react-native-dotenv", {
//         "envName": "APP_ENV",
//         "moduleName": "@env",
//         "path": ".env",
//         "safe": false,
//         "allowUndefined": true,
//         "verbose": false
//       }]
//     ]
//   };
// };
module.exports = {
  presets: ['babel-preset-expo'],
  "plugins": [
    ["module:react-native-dotenv", {
      "allowlist": [
        "JWT_TOKEN",
        "APIL_LARAVEL_UL",

      ]
    }],
  ]
};