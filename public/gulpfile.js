var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
      includePaths: [
        'node_modules/foundation-sites/scss',
        // 'node_modules/motion-ui/src'
      ]
    }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch([
    './scss/**/*.scss',
    'gulpfile.js',
    './node_modules/foundation-sites/scss/**/*.scss',
  ], ['sass']);
});

gulp.task('default', [ 'sass', 'watch', ]);