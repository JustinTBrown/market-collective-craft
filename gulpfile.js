var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./stylesheets/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets/css'))
    .pipe(livereload());
});

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('./stylesheets/scss/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass:watch' ]);

// gulp.task('production-build', [ 'html', 'css' ]);