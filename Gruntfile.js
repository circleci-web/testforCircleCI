
module.exports = function (grunt) {
    grunt.initConfig({
       // for jshint check based on .jshintrc
       // package.json doesn't have jshint-stylish and grunt-contrib-jshint plugins.
       // Therefore, users of jshint must install these plugins by using npm install ...
       jshint : {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            files: { 
                expand: true,
                cwd: './',
                src: ['*.js', '!Gruntfile.js']
            } 
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('jconvention', ['jshint']);
};
