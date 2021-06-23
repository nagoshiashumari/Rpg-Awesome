const sass = require('sass');

module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    // Metadata
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= props.license %> */\n',
    // Stylelint
    // =========
    stylelint: {
      src: [
          'scss/*.scss'
      ],
      options: {
        configFile: 'css/.stylelintrc.json',
        formatter: 'string',
        ignoreDisables: false,
        failOnError: true,
        outputFile: '',
        reportNeedlessDisables: false,
        fix: false,
        syntax: ''
     }
    },
    // SASS Compile
    // ============
    sass: {
      options: {
        implementation: sass,
        style: 'expanded',
        sourcemap: 'auto'
      },
      dist: {
        files: {
          'css/rpg-awesome.css' : 'scss/rpg-awesome.scss'
        }
      }
    },
    // CSS Min
    // =======
    cssmin: {
      target: {
        files: {
          'css/rpg-awesome.min.css' : 'css/rpg-awesome.css'
        }
      }
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-stylelint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
      'stylelint',
      'sass',
      'cssmin'
  ]);
};