
var gulp = require('gulp');
var jade = require('gulp-jade');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');

var config = require('../config').markup;

/**
 * Task: Markup
 * Generate the HTML from the jade files, by using
 * the jade preprocessor.
 * The HTML can contain build logic, which can be picked
 * up by the `useref` plugin
 */
gulp.task('markup', function() {
  return gulp
    .src(config.srcPath)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulpif(global.isDeployment, useref()))
    .pipe(gulp.dest(
      global.isDeployment ? config.distPath : config.buildPath
    ));
});
