/**
 * 组件安装
 * npm install gulp-util gulp-imagemin gulp-ruby-sass gulp-minify-css gulp-jshint gulp-uglify gulp-rename gulp-concat gulp-clean gulp-livereload tiny-lr --save-dev
 */

// 引入 gulp及组件
var gulp = require('gulp'),
    connect = require('gulp-connect');
   //concat = require('gulp-concat'),
   //  imagemin = require('gulp-imagemin'),


gulp.task('watch', function() {
    gulp.watch("src/canvas" + '**/*.*',['reload-dev']);
});

gulp.task('connectDev', function() {
  connect.server({
    root: "src/canvas",
    port: 8000,
    livereload: true
  });
});

//reload server
gulp.task('reload-dev',function() {
  gulp.src("src/canvas"+ '**/*.*')
    .pipe(connect.reload());
});
//测试服务器
gulp.task('default', ['connectDev', 'watch']);