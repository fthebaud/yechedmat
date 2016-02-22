module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.initConfig({
    // TODO: config external-resources path
    clean: {
      dev: ["app/external-resources", "app/built"]
    },
    copy: {
      dev: {
        files: [{
          src: 'node_modules/bootstrap/dist/css/bootstrap.css',
          dest: 'app/external-resources/styles/bootstrap.css'
        }, {
          src: 'node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.css',
          dest: 'app/external-resources/styles/bootstrap-material-design.css'
        }, {
          src: 'node_modules/bootstrap-material-design/dist/css/ripples.css',
          dest: 'app/external-resources/styles/ripples.css'
        }]
      }
    }
  });

  grunt.registerTask('build:dev', ['clean:dev', 'copy:dev']);

};
