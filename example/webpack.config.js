//var webpack = require('webpack');

module.exports = {
  entry: {
    'react-reading-time': [
      'webpack-dev-server/client?http://localhost:8881/',
      'webpack/hot/only-dev-server',
      './example/react-reading-time.jsx'
    ]
  },
  output: {
    path: __dirname,
    filename: "[name].js",
    publicPath: 'http://localhost:8881/',
    chunkFilename: '[id].chunk.js',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es6'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: [/\.jsx$/, /\.es6$/,/\.js$/],
        exclude: /node_modules/,
        loader: 'babel-loader'
        //,
        //query: {
        //  presets: ['react', 'es2015','stage-0'],
        //  plugins:['transform-runtime']
        //}
      },
      { test: /\.scss$|\.css$/, loader: 'style-loader!style!css!sass' }
    ]
  },
  plugins: [
    //new webpack.NoErrorsPlugin()
  ],
  devtool: "eval-source-map"
};

