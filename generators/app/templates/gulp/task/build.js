
var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Task: Build
 * The build task runs a series of task to generate
 * a new build from the sources.
 */
gulp.task('build', ['cache-clear', 'clean', 'jshint'], function(cb) {
  runSequence(
    'browserify',
    'copyjs',
    'copycss',
    'copyassets',
    'styles',
    'markup',
    'images',
    cb
  );
});
