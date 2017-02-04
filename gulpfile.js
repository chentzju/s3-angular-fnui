var gulp = require("gulp");
var gutil = require("gulp-util");
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var imgmin = require('gulp-imagemin');
var fse = require('fs-extra');
var config = require("./config.js");




//load assets
gulp.task("assets",function(){
     gulp.src([
        'bower_components/jquery/dist/jquery.js',
        'bower_components/fnui/dist/js/fnui.js',
        'bower_components/iscroll/build/iscroll-probe.js'
    ])
        .pipe(concat("vendor.js"))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));

    gulp.src([
        'bower_components/angular/angular.js',
       // 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
        'bower_components/ngAnimate/js/angular-animate.min.js',
        'bower_components/oclazyload/dist/ocLazyLoad.js'
    ])
        .pipe(concat('angular.min.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
    gulp.src('bower_components/fnui/dist/fonts/*').pipe(gulp.dest('dist/assets/fonts'));
    gulp.src('bower_components/fnui/dist/css/*').pipe(gulp.dest('dist/assets/styles'));
});

//build app
gulp.task('image',function(){
    gulp.src('src/app/images/*')
        .pipe(imgmin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('copy',function(){
    gulp.src('src/app/templates/*').pipe(gulp.dest('dist/templates'));
    gulp.src('src/index.html').pipe(gulp.dest('dist'));
    gulp.src('src/404.html').pipe(gulp.dest('dist'));
});

gulp.task('views',function(){
    config.modules.forEach(function (item) {
        fse.copySync(item.path, 'dist/views/'+item.name);
    })
});

gulp.task('client',function(){
    gulp.src(['src/app/app.js','src/app/components/*'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/scripts'));

    gulp.src('src/app/*.css')
        .pipe(concat('app.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('clean', function () {
    fse.emptyDirSync('dist');
});

gulp.task('build',['clean', 'assets', 'copy', 'image','views','client']);

gulp.task('default',['build']);

gulp.task('buid-dev',function(){

});


