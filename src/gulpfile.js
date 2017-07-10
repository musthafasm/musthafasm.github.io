const gulp        = require('gulp')
const concat      = require('gulp-concat')
const minifycss   = require('gulp-clean-css')
const minifyjs    = require('gulp-uglify')
const sass        = require('gulp-sass');
const rename      = require('gulp-rename');
const header      = require('gulp-header');

const pkg         = require('./package.json');
const banner      = ['/**',
                      '* @name      <%= pkg.name %> - <%= pkg.description %>',
                      '* @version   v<%= pkg.version %>',
                      '* @author    <%= pkg.author %>',
                      '* @link      <%= pkg.homepage %>',
                      '* @license   <%= pkg.license %>',
                      '*/',
                      ''].join('\n');


/**
 * Convert SASS files.
 */
gulp.task('sass', function () {
  return gulp.src([
    'scss/base.scss',
    'scss/theme.scss'
    ])
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('css/'));
});


/**
 * Aggregate the files.
 *
 * Note that these files are explicitly defined instead of fetching all files
 * from the dir because the concat order of CSS files matter, by definition.
 */
 gulp.task('concatcss', ['sass'], function() {
  return gulp.src([
    'css/base.css',
    'css/theme.css',
    ])
  .pipe(concat('style.css'))
  .pipe(gulp.dest('../css/'))
})


/**
 * Minify the CSS files.
 *
 * Remove spacing, comments, and unneeded formatting for the smallest possible filesize to serve. Keeps the
 * first special comment (as denoted by "/*!" opening comment delimiter), so we can use it for versioning.
 */
 gulp.task('minifycss', ['concatcss'], function() {
  return gulp.src('../css/style.css')
  .pipe(minifycss())
  .pipe(rename({
            suffix: '.min'
        }))
  .pipe(gulp.dest('../css/'))
})


/**
 * Minify the JS files.
 *
 * We need to preserve comments to allow for versioning later
 */
 gulp.task('minifyjs', function() {
  return gulp.src('js/*.js')
  .pipe(minifyjs())
  .pipe(gulp.dest('../js/'))
})


/**
 * Version the files.
 *
 * Takes the version number specified in the files and adds it to the filename. The `silent` option suppresses
 * errors from files if no version is found within the file.
 */
 gulp.task('version', ['minifycss', 'minifyjs'],function() {
  return gulp.src(['../css/style.css', '../css/style.min.css', '../js/main.js'], {base: "../"})
  .pipe(header(banner, { pkg : pkg } ))
  .pipe(gulp.dest('../'))
})



