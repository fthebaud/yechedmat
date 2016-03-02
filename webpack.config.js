//proccess: global object representing the procees. accessible from anywhere.
//argv: an array containing the command line arguments
var production = process.argv.indexOf("--production") > -1;

//this is not a built-in plugin, it needs to be imported.
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // entry is the "main" source file we want to include/import.
  // we can define several entry points. An entry point can have serveral scripts.
  //this is the starting point, the root from which we will start laoding(importing) moduldes.
  entry: {
    "yechedmat-main": ["./app/scripts/main.js"],
  },

  // output tells webpack where to put the bundle it creates
  output: {
    //name of the destination file. [name] is replaced by the name of the chunk (= the key in entry)
    filename: "[name]-bundle.js",
    // destination path for the file (location on disk)
    //using node path module to join path. __dirname corresponds to the directory of the current script
    path: path.join(__dirname, "app/built"),
    //address of the output file when reference in a browser (location on server)
    publicPath: "/built/",
    // in the case of a "plain global browser library",
    //this will be used as the reference to our module that is hung off of the window object.
    library: "yechedmat",
    // We want webpack to build a UMD wrapper for our module
    // TODO: test other format (var...)
    libraryTarget: "umd"
  },

  // how to find the modules we want to load
  resolve: {
    //locations of the moduldes
    //webpack will use a process similar to node when looking for this directories:
    //first it will look in the current directory, then in the parent directory, etc.
    //until finding the directory or reaching the root (?)
    modulesDirectories: ['src', 'node_modules']
  },

  //option affecting the modules we want to load
  module: {
    //loaders to apply to modules (see also preloaders and postloaders)
    loaders: [{
      //conditions that must be met by files to be processed by this loader (here file type)
      test: /\.js$/,
      //conditions that must be not met by files to be processed by this loader (here location...)
      exclude: /node_modules/,
      //loaders to apply (can be chained. /!\ We start by the end!)
      loaders: ["babel-loader"],
      //allows to pass parameters to the loaders, as a query, just like https
      //ex: babel-loader?compact=false&presets=es2015
      query: {
        compact: false,
        presets: ['es2015']
      }
    }, {
      test: /\.css$/,
      //this method creates an extracting loader from an existing loader.
      loader: ExtractTextPlugin.extract(['css'])
    }]
  },

  // complément aux loaders qui permettent de modifier et/ou d'exploiter les modules,
  // les plugins sont plus globaux au processus
  plugins: [
    //parameter : name of the output file for the extracted text
    new ExtractTextPlugin('[name].css')
  ],


  //switch loaders to debug mode (TODO ?)
  debug: true,

  //emit a sourcemap (TODO ?)
  devtool: "sourcemap",

  // TODO: watch. uglyfy from command line ?
  // TODO: charger les images via le file loader - les petites images via le url loader ?

  //webpack-dev-server configuration
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
