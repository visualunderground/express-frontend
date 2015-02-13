module.exports = function(grunt) {
    
    require('time-grunt')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Builds SASS
        sass: {
          dist: {
            files: {
              'app/public/stylesheets/app.css': 'src/scss/app.scss'
            },
            options: {
              //includePaths: ['path/to/included/files'],
              outputStyle: 'expanded',
              imagePath: '../images'
            }
          }
        },

        scsslint: {
            dist: [
                'src/**/*.scss'
            ]
        },

        concat: {
            dist: {
                src: [
                    'src/javascripts/application.js',
                    'src/javascripts/application/utils.js',
                    'src/javascripts/application/*'
                ],
                dest: 'app/public/javascripts/application.js',
            }
        },

        uglify: {
            dist: {
                src: 'app/public/javascripts/application.js',
                dest: 'app/public/javascripts/application.min.js'
            },
            vendor: {
                options: {
                    preserveComments : true,
                    banner : "<script>",
                    footer : "</script>" 
                },
                files: {
                   'app/views/vendor/loadJS.hbs': ['src/javascripts/vendor/loadJS.js']
                }
            }
        },

        modernizr: {

            dist: {
                // [REQUIRED] Path to the build you're using for development.
                "devFile" : "remote",

                // Path to save out the built file.
                "outputFile" : "src/javascripts/application/modernizr-custom.js",

                // Based on default settings on http://modernizr.com/download/
                "extra" : {
                    "shiv" : true,
                    "printshiv" : false,
                    "load" : false,
                    "mq" : true,
                    "cssclasses" : true
                },

                // Based on default settings on http://modernizr.com/download/
                // "extensibility" : {
                //     "addtest" : false,
                //     "prefixed" : false,
                //     "teststyles" : false,
                //     "testprops" : false,
                //     "testallprops" : false,
                //     "hasevents" : false,
                //     "prefixes" : false,
                //     "domprefixes" : false,
                //     "cssclassprefix": ""
                // },

                // By default, source is uglified before saving
                // "uglify" : false,

                // Define any tests you want to implicitly include.
                //"tests" : [],

                // By default, this task will crawl your project for references to Modernizr tests.
                // Set to false to disable.
                // "parseFiles" : true,

                // When parseFiles = true, this task will crawl all *.js, *.css, *.scss and *.sass files,
                // except files that are in node_modules/.
                // You can override this by defining a "files" array below.
                "files" : {
                    "src": ['src/**/*.scss', 'src/**/*.js', '!**/modernizr-custom.js']
                },

                // This handler will be passed an array of all the test names passed to the Modernizr API, and will run after the API call has returned
                // "handler": function (tests) {},

                // When parseFiles = true, matchCommunityTests = true will attempt to
                // match user-contributed tests.
                // "matchCommunityTests" : false,

                // Have custom Modernizr tests? Add paths to their location here.
                // "customTests" : []
            }

        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
            },
            all: ['Gruntfile.js', 'src/**/*.js', '!src/**/modernizr-custom.js']
        },

        imagemin: {
            options: {
                optimizationLevel: 3
            },
            dist: {
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'src/images/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,jpeg,gif}'], // Actual patterns to match
                    dest: 'app/public/images/' // Destination path prefix
                }]
            }
        },

        copy: {
            vendor: {
                files: [
                    {
                        src: 'bower_components/meyer-reset/stylesheets/_meyer-reset.scss',
                        dest: 'src/scss/vendor/_meyer-reset.scss'
                    },
                    {
                        src: 'bower_components/loadJS/loadJS.js',
                        dest: 'src/javascripts/vendor/loadJS.js'
                    }
                ]
                
            }
        }


    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-notify');
    
    // Setup vendor assets
    grunt.registerTask('get:vendor',    ['copy:vendor', 'uglify:vendor']);

    // Build assets from src
    grunt.registerTask('build:css',     ['scsslint:dist', 'sass:dist']);
    grunt.registerTask('build:js',      ['jshint:all', 'modernizr', 'concat:dist', 'uglify:dist']);
    grunt.registerTask('build:img',     ['imagemin:dist']);

    grunt.registerTask('build',         ['build:css', 'build:js', 'build:img']);

    // Default task during development
    grunt.registerTask('default', ['build:css']);

};
