// Example gulpfile
const gulp = require('gulp')
const textureMapper = require('node-texturemapper')
const folders = require('gulp-folders')
const path = require('path')

gulp.task('animations', folders('assets/animations', function (folder) {
  return gulp.src(path.join('assets/animations', folder, '*.png'))
    .pipe(textureMapper(folder + '.png'))
    .pipe(gulp.dest('dist'))
}))
