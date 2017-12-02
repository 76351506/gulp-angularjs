/**
 * Created by Nan on 2017/12/1.
 */
var gulp = require("gulp");
var concat = require("gulp-concat");
var minifycss = require("gulp-minify-css");
var uglify = require("gulp-uglify");
//var gulpSequence = require('gulp-sequence')\
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var git =require('gulp-git');

gulp.task("task1", function () {
    gulp.src("App/Content/css/*.css")
        .pipe(concat("main.css"))
        .pipe(minifycss())
        .pipe(gulp.dest("Public"));
});
gulp.task("task2", function () {
    gulp.src("App/Controller/*.js")
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("Public"));
});

gulp.task("task3", function () {
    gulp.src("App/Script/*.js")
        .pipe(concat("library.js"))
        .pipe(uglify())
        .pipe(gulp.dest("Public"));
});

gulp.task('clean', function () {
    return gulp.src("Public")
        .pipe(clean());
});
gulp.task("default", function () {
    //gulp.start("task3", "task1", "task2");
    runSequence('clean', 'task3', 'task1', 'task2');
});

gulp.task('upload',function(){
    runSequence("init","add","commit","remote","push")
});

gulp.task('init', function(){
    git.init(function (err) {
        if (err) throw err;
    });
});

gulp.task('add', function(){
    return gulp.src('./*')
        .pipe(git.add());
});


gulp.task('commit', function(){
    return gulp.src('./')
        .pipe(git.commit('initial commit'));
});

gulp.task('addremote', function(){
    git.addRemote('origin', 'git@github.com:76351506/gulp-angularjs.git', function (err) {
        if (err) throw err;
    });
});

gulp.task('removeremote', function(){
    git.removeRemote('origin', function (err) {
        if (err) throw err;
    });
});

gulp.task('push', function(){
    git.push('origin', 'master', function (err) {
        if (err) throw err;
    });
});

gulp.task('pull', function(){
    git.pull('origin', 'master', {args: '--rebase'}, function (err) {
        if (err) throw err;
    });
});


gulp.task('fetch', function(){
    git.fetch('', '', {args: '--all'}, function (err) {
        if (err) throw err;
    });
});

gulp.task('clone', function(){
    git.clone('https://github.com/stevelacy/gulp-git', function (err) {
        if (err) throw err;
    });
});

gulp.task('branch', function(){
    git.branch('newBranch', function (err) {
        if (err) throw err;
    });
});

gulp.task('checkout', function(){
    git.checkout('branchName', function (err) {
        if (err) throw err;
    });
});

gulp.task('merge', function(){
    git.merge('branchName', function (err) {
        if (err) throw err;
    });
});

gulp.task('reset', function(){
    git.reset('SHA', function (err) {
        if (err) throw err;
    });
});

gulp.task('diff', function(){
    gulp.src('./*')
        .pipe(git.diff('master', {log: true}))
        .pipe(gulp.dest('./diff.out'));
});

gulp.task('rm', function(){
    return gulp.src('./gruntfile.js')
        .pipe(git.rm());
});


gulp.task('status', function(){
    git.status({args: '--porcelain'}, function (err, stdout) {
        if (err) throw err;
    });
});

gulp.task('log', function(){
    git.exec({args : 'log --follow index.js'}, function (err, stdout) {
        if (err) throw err;
    });
});

gulp.task('clean', function() {
    git.clean({ args: '-f' }, function (err) {
        if(err) throw err;
    });
});

