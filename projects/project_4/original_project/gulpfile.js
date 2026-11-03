const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const newer = require('gulp-newer')
const gulp_include = require("gulp-include");
const { files_update_css } = require('./gulp/css');
const paths = require("./gulp/path")
const del = require('del')

function clean() {
  return del(['dist/*', '!dist/source', '!dist/fonts'])
}

function css() {
  return gulp.src(paths.path.css.src)
    .pipe(sourcemaps.init())
    .pipe(sass({ silenceDeprecations: ["legacy-js-api"], }).on('error', sass.logError))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.path.css.dest))
}


function watch() {
  gulp.watch(['src/css_dev/**', '!src/css_dev/*.scss'], { ignorePermissionErrors: true, events: 'all' }, gulp.series(files_update_css, css))
}


exports.clean = clean



exports.css = css
exports.css2 = gulp.series(files_update_css, css)
exports.files_update_css = files_update_css
exports.watchCss = () => {
  gulp.watch(['src/css/**', '!src/css/*.scss'], { ignorePermissionErrors: true, events: 'all' }, gulp.series(files_update_css, css))
}



exports.watch = watch


gulp.task("dev", gulp.series(clean, watch))

