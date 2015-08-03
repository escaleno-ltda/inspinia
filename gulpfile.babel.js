"use strict"

import gulp from "gulp"
import del from "del"
import gulpLoadPlugins from "gulp-load-plugins"
const plugins = gulpLoadPlugins()

gulp.task("clean", (cb) => {
  del(["dist/**/*"], cb)
})

gulp.task("fonts", ["clean"], () => {
  return gulp.src("./fonts.list")
    .pipe(plugins.googleWebfonts())
    .pipe(gulp.dest("./dist"))
})

gulp.task("less", ["fonts"], () => {
  return gulp.src("./src/style.less")
    .pipe(plugins.less())
    .pipe(gulp.dest("./dist"))
})

gulp.task("copy", ["less"], () => {
  return gulp.src("./patterns/**/*")
    .pipe(gulp.dest("./dist/patterns"))
})

gulp.task("default", ["copy"])
