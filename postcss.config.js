module.exports = {
  plugins: [
    require('postcss-px-to-viewport')({
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
