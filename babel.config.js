module.exports = function(api) {
  api.cache(true);
  return {
    // presets: [['@babel/preset-env',{targets: {node: 
    //   'current',},loose:true,},],['babel-preset-expo']],
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin',
    '@babel/plugin-proposal-export-namespace-from'],
  };
};
