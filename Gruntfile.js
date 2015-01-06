// Manually run the following:
// gem install sass
// gem update --system
// gem install scss-lint

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
    // SCSS Lint
    // =========
    scsslint: {
      allFiles: [
          'scss/*.scss'
      ],
      options: {
        config: 'scss/.scss-lint.yml'
     }
    },
    // SASS Compile
    // ============
    sass: {
      options: {
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
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', [
      'scsslint',
      'sass',
      'cssmin'
  ]);
};