module.exports = function(grunt) {

    grunt.initConfig({

        eslint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ]
        },

        lokalise_co: {
            test: {
                options: {
                    api_token: process.env.LOKALISE_API_TOKEN,
                    id: process.env.LOKALISE_PROJECT_ID,
                    type: 'json'
                },
                dest: 'test/data/out'
            }
        },

        clean : {
            options: {
                force : true
            },
            test: ['test/data/out/*']
        },

        mochaTest: {
            options: {
                reporter: 'spec'
            },
            test: {
                src: ['test/lokalise_co_spec.js']
            }
        },

        watch : {
            test: {
                files : ['tasks/*.js', 'test/*_spec.js'],
                tasks:  ['test'],
                options: {
                    debounceDelay: 2000
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.loadTasks('tasks');


    grunt.registerTask('test', 'Run tests', [
        'clean:test',
        'lokalise_co:test',
        'mochaTest:test'
    ]);

    grunt.registerTask('devtest', ['watch:test']);
};
