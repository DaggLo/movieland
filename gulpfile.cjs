const gulp = require("gulp");
const {
  cleanFavicons,
  createFavicons,
  minifyFavicons,
} = require("./.gulp/favicons");

gulp.task('clean:favicons', cleanFavicons(gulp));
gulp.task('create:favicons', createFavicons(gulp));
gulp.task('minify:favicons', minifyFavicons(gulp));

gulp.task(
  'default',
  gulp.series(
    'clean:favicons',
    'create:favicons',
    'minify:favicons'
  ));
