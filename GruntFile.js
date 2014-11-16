module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jasmine');    
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-tsd');
        
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: './'
                }
            }
        },
        tsd: {
            refresh: {
                options: {
                    command: 'reinstall',
                    latest: false,
                    config: 'tsd.json'
                }
            }
        },
        ts: {
            dev: { // a particular target
              src: [
                'src/**/*.ts', 'test/**/*.ts'
              ], // The source typescript files, http://gruntjs.com/configuring-tasks#files
              html: ["app/**/*.html"], // The source html files, https://github.com/basarat/grunt-ts#html-2-typescript-support
              reference: "references.ts", // If specified, generate this file that you can use for your reference management
              // out: 'js/out.js', // If specified, generate an out.js file which is the merged js file
              // watch: 'src' // watch is done by grunt-contrib-watch instead
            }
        },
        jasmine: {
            src : 'src/**/*.js',
            options: {
              specs: 'test/*Spec.js',
              helpers: 'test/*Helper.js'
            }            
        },        
        watch: {
            typescript: {
              files: ['src/**/*.ts', 'test/**/*.ts'],
              tasks: ['ts', 'jasmine'],
              options: {
                spawn: false
              },              
            }
        },
        open: {
            dev: {
                path: 'http://localhost:8080/index.html'
            }
        }
    });
    
    grunt.registerTask('default', ['connect', 'watch']);
    grunt.registerTask('test', ['jasmine']);
}
