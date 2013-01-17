/*global module:false*/
module.exports = function(grunt) {

  'use strict';

  grunt.loadNpmTasks('grunt-ghost');

  // Default task.
  grunt.registerTask('default', 'lint test');

  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', 'test/**/*.js']
    },

    watch: {
      files: ['<config:lint.files>', 'test/*.js'],
      tasks: 'lint ghost'
    },

    jshint: {
      options: {
      },
      globals: {}
    },

    ghost: {
      dist: {
        src: ['tests/*'],
        options: {
          direct: true,
          logLevel: 'info',
          pre: ['functional/pre.js'],
          failFast: true,
          printCommand: true,
          printFilePaths: true
        }
      }
    }

  });

};
