const { merge } = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
  mode: 'production',  //if someone could help here, I would appreciate. I can't found the change that I made after updating tha wbpack allows js to work in development mode
  watch: true
});