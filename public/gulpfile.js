var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/foundation-sites/scss']
    }))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch([
    './scss/**/*.scss',
    'gulpfile.js',
  ], ['sass']);
});

// gulp.task('html', function() {
//   gulp.src('./craft/templates/**/*.html')
//     .pipe(changed('.'))
//     .pipe(livereload());
// });

gulp.task('default', [ 'sass', 'sass:watch', ]);

// gulp.task('production-build', [ 'html', 'css' ]);