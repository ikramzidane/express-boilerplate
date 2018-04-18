module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      express: {
        files:  [ 'routes/**/*.js', 'app.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false // for grunt-contrib-watch v0.5.0+, "nospawn: true" for lower versions. Without this option specified express won't be reloaded
        }
      }
    },
    express: {
      dev: {
        options: {
          script: 'bin/www',
          livereload: false,
          harmony: true,
          background: true,
          debug: false
        }
      }
    }

  });


  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['express:dev', 'watch']);

};