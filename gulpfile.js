const gulp = require('gulp');
const sass = require('gulp-sass');
const browsersync = require('browser-sync');
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const minifyjs = require("gulp-js-minify");
const minifyjson = require('gulp-json-minify');
const imagemin = require("gulp-imagemin");
const imageminPngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');
const ghPages = require('gulp-gh-pages');
const urlPrefixer = require('gulp-url-prefixer');
const clean = require('gulp-clean');

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
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browsersync.stream());
}

function js() {
  return gulp
    .src('./src/js/**/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(rename({
      suffix: ".min"
    }))
    .pipe(minifyjs())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browsersync.stream());
}

function fonts() {
  return gulp
    .src('./src/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(browsersync.stream());
}

function img() {
  return gulp
    .src('./src/img/**/*')
    .pipe(
      imagemin([
        imagemin.gifsicle({
          interlaced: true
        }),
        imagemin.jpegtran({
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imageminPngquant({
          quality: '70-90'
        }),
        imagemin.svgo({
          plugins: [{
            removeViewBox: false,
            collapseGroups: true
          }]
        })
      ])
    )
    .pipe(gulp.dest('./dist/img/png'))
    .pipe(webp())
    .pipe(gulp.dest('./dist/img/webp'))
    .pipe(browsersync.stream());
}

function html() {
  return gulp
    .src('./src/**/*.html')
    .pipe(gulp.dest('./dist'))
    .pipe(browsersync.stream());
}

function json() {
  return gulp
    .src('./src/assets/**/*.json')
    .pipe(minifyjson())
    .pipe(gulp.dest('./dist/assets'))
    .pipe(browsersync.stream());
}


function vendorFiles() {
  return gulp
    .src('./src/vendor/**/*')
    .pipe(gulp.dest('./dist/vendor'))
    .pipe(browsersync.stream());
}

function watchFiles() {
  gulp.watch("./src/scss/**/*", css);
  gulp.watch("./src/js/**/*", js);
  gulp.watch("./src/fonts/**/*", fonts);
  gulp.watch("./src/img/**/*", img);
  gulp.watch("./src/**/*.html", html);
  gulp.watch("./src/", browserSyncReload);
  gulp.watch("./src/assets/**/*.json", json);
  gulp.watch("./src/vendor/**/*", vendorFiles);
}

function cloneToGhPage() {
  return gulp
    .src('./dist/**/*')
    .pipe(gulp.dest('./gh-pages/'));
}

function addUrlGhPagePrefix() {
  return gulp
    .src('./src/**/*.html')
    .pipe(urlPrefixer.html({
      prefix: 'https://ladanovn.github.io/ulyanovsk-monastery/'
    }))
    .pipe(gulp.dest('./gh-pages/'));
}

function pushToGhPage() {
  return gulp.src('./gh-pages/**/*')
    .pipe(ghPages());
}

function clearTempFolders() {
  return gulp.src('.publish', {
      read: false
    })
    .pipe(clean());
}

gulp.task('deploy', gulp.series(cloneToGhPage, addUrlGhPagePrefix, pushToGhPage, clearTempFolders));
gulp.task("watch", gulp.parallel(watchFiles, browserSync));