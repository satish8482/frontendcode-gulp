// including plugins

var gulp = require('gulp')
, minifyHtml = require("gulp-minify-html");
 
// task
gulp.task('minify-html', function () {
    gulp.src('./index.html') // path to your files
    .pipe(minifyHtml({keepBreaks:true}))
    .pipe(gulp.dest('destination'));
});


//gulp for minifying css files

  var gulp = require('gulp')
 , minifyCss = require("gulp-minify-css");
 
// task
gulp.task('minify-css', function () {
    gulp.src('./style.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('postcss'));


});


//gulp for linting the js files

// including plugins
var gulp = require('gulp')
, jshint = require("gulp-jshint");
 
// task
gulp.task('jsLint', function () {
    gulp.src('./*.js') // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()); // Dump results
});