// Karma configuration
// Generated on Wed Feb 12 2014 23:32:14 GMT-0500 (Eastern Standard Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: './karma-spike/',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],

    proxies:  {
        '/example/static': 'http://localhost:9999/',
		 '/example/tests': 'http://localhost:9998/',
      },
    // list of files / patterns to load in the browser
    files: [
      'js/lib/require.js',
      '../karma-spike.test/test/unit/test-main.js',
      {pattern: 'js/lib/**/*.js', included: false},
      {pattern: 'js/app/**/*.js', included: false},
      {pattern: 'js/app/*.js', included: false},
      {pattern: '../karma-spike.test/test/**/*test.js', included: false},
    ],

    // list of files to exclude
    exclude: [
      '**/bootstrap.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true
  });
};
