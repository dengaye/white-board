module.exports = {
  plugins: [
    require('postcss-px-to-viewport-8-plugin')({
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: ['.ignore'],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      landscape: false,
      landscapeUnit: 'vw',
    })
  ]
};

module.exports.postcss = true;
