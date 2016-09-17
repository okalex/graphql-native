module.exports = {
  entry: './src/app/index.js',
  output: {
    path: './dist',
    filename: 'index.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['react']
        }
      },

      { test: /\.json$/, loader: "json-loader"}
    ]
  }
}
