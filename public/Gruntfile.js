module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 
  grunt.loadNpmTasks('grunt-contrib-watch');
   
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true,
        // sourceComments: true,
        includePaths: [
          'node_modules/foundation-sites/scss/',
          // '/node_modules/foundation-sites/scss',
        ],
      },
      dist: {
        files: {
          'css/main.css': 'scss/main.scss'
        },
        // options: {
        //   loadPath: ['node_modules/foundation-sites/scss']
        // },
      }
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['default'],
      },
      src: {
        files: [
          'scss/**/*.scss',
          'node_modules/foundation-sites/scss/**/*.scss',
        ],
        tasks: ['default'],
      },
      // test: {
      //   files: '<%= jshint.test.src %>',
      //   tasks: ['jshint:test', 'qunit'],
      // },
    },
  });
   
  grunt.registerTask('default', ['sass','watch']);
  
};