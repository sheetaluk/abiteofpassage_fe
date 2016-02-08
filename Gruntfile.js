module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          "app/app.css": "app/app.less"
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js',
        'karma.conf.js',
        'app/app.js',
        'app/components/**/*.js',
        'app/e2e-tests/**/*.js',
        'app/entry/**/*.js'],
      options: {
        globals: {
          angular: true,
          module: true,
          console: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['less', 'jshint']);
};