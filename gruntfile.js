module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-webpack');

  var webpackConfig = require("./webpack.config.js");

  grunt.initConfig({
    externalResourcesPath: 'app/external-resources',
    clean: {
      dev: ["<%= externalResourcesPath %>", "app/built"]
    },
    copy: {
      dev: {
        files: [{
          src: 'node_modules/bootstrap/dist/css/bootstrap.css',
          dest: '<%= externalResourcesPath %>/styles/bootstrap.css'
        }, {
          src: 'node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css',
          dest: '<%= externalResourcesPath %>/styles/bootstrap-material-design.css'
        }, {
          src: 'node_modules/bootstrap-material-design/dist/css/ripples.css',
          dest: '<%= externalResourcesPath %>/styles/ripples.css'
        }]
      }
    },
    webpack: {
      // configuration for all builds
      options: webpackConfig,
      // configurations for specific builds
      build: {}
    },
    'webpack-dev-server': {
      options: {
        webpack: webpackConfig
      },
      start: {}
    }
  });

  grunt.registerTask('build:dev', ['clean:dev', 'copy:dev']);

};
