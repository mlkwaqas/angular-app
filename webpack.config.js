const path = require('path');

module.exports = {
  context: path.join(__dirname, 'client'),
  entry: './app.js',
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  devtool: 'source-map'
}
