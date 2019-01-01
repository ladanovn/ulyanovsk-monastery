const gulp = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync');
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const babel = require('gulp-babel');
const rename = require("gulp-rename");

function browserSync(done) {
    browsersync.init({
      server: {
        baseDir: "./dist/"
      },
      port: 3000
    });
    done();
  }

function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function css() {
    return gulp
      .src("./src/scss/**/*.scss")
      .pipe(sass())
      .pipe(gulp.dest("./dist/css/"))
      .pipe(rename({ suffix: ".min" }))
      .pipe(postcss([autoprefixer(), cssnano()]))
      .pipe(browsersync.stream());
}

function js() {
  return gulp
    .src('./src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(browsersync.stream());
}

function fonts(){
  return gulp
    .src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(browsersync.stream());
}

function img(){
  return gulp
    .src('./src/img/**/*.png')
    .pipe(gulp.dest('./dist/img'))
    .pipe(browsersync.stream());
}

function html(){
  return gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream());
}

function watchFiles() {
    gulp.watch("./src/scss/**/*", css);
    gulp.watch("./src/js/**/*", js);
    gulp.watch("./src/fonts/**/*", fonts);
    gulp.watch("./src/img/**/*", img);
    gulp.watch("./src/**/*.html", html);
    gulp.watch("./src/", browserSyncReload);
}

gulp.task("watch", gulp.parallel(watchFiles, browserSync))