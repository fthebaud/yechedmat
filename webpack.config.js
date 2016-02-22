module.exports = {
  // entry is the "main" source file we want to include/import
  entry: "./app/scripts/main.js",
  // output tells webpack where to put the bundle it creates
  output: {
    // in the case of a "plain global browser library", this will be used as the reference
    //to our module that is hung off of the window object.
    library: "yechedmat",
    // We want webpack to build a UMD wrapper for our module
    libraryTarget: "umd",
    // the destination file name
    filename: "yechedmat-bundle.js",
    //TODO FTH
    publicPath: "/built/",
  },
  // babel loader, testing for files that have a .js extension (except for files in our node_modules folder!)
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/,
      query: {
        compact: false // because I want readable output
      }
    }]
  },
  devServer: {
    "port": 9090,
    "contentBase": "app",
    "inline": true, //automatically reload page
    "stats": {
      colors: true
    },
    noInfo: true
  }
};
