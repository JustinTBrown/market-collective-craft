var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./stylesheets/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./stylesheets/scss/**/*.scss', ['sass']);
});

gulp.task('default', [ 'sass:watch' ]);

// gulp.task('production-build', [ 'html', 'css' ]);