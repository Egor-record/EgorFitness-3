'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    scss = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    webserver = require('gulp-webserver');

gulp.task('js',function(){
  gulp.src([
      'builds/dev/app/**/*.js',
      '!builds/dev/app/**/*_test.js'
    ])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    // .pipe(uglify())
    .pipe(gulp.dest('builds/dev'));
  gulp.src([
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/firebase/firebase-debug.js',
      'bower_components/angularfire/dist/angularfire.js'
    ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('builds/dev'));
})

gulp.task('pjs',function(){
  gulp.src([
      'builds/dev/app/**/*.js',
      '!builds/dev/app/**/*_test.js'
    ])
    .pipe(concat('app.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest('builds/prod'));
  gulp.src([
      'bower_components/angular/angular.min.js',
      'bower_components/angular-route/angular-route.min.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
    ])
    .pipe(concat('libs.js'))
    .pipe(gulp.dest('builds/prod'));
})

gulp.task('css', function(){
  gulp.src('builds/dev/app/**/*.scss')
    .pipe(scss())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('builds/dev'));
  gulp.src([
      'bower_components/angular/angular-csp.css',
      'bower_components/angular-bootstrap/ui-bootstrap-csp.css',
      'bower_components/bootstrap/dist/css/bootstrap.css',
    ])
    .pipe(concat('theme.css'))
    .pipe(gulp.dest('builds/dev'));
})

gulp.task('pcss', function(){
  gulp.src('builds/dev/app/**/*.scss')
    .pipe(scss())
    .pipe(concat('app.css'))
    .pipe(uglify())
    .pipe(gulp.dest('builds/prod'));
  gulp.src([
      'bower_components/angular/angular-csp.css',
      'bower_components/angular-bootstrap/ui-bootstrap-csp.css',
      'bower_components/bootstrap/dist/css/bootstrap.min.css',
    ])
    .pipe(concat('theme.css'))
    .pipe(gulp.dest('builds/prod'));
})

gulp.task('phtml', function(){
  gulp.src('builds/dev/**/*.html')
    .pipe(gulp.dest('builds/prod'));
})

gulp.task('watch', function(){
  gulp.watch('builds/dev/app/**/*.js', ['js']);
  gulp.watch('builds/dev/app/**/*.scss', ['css']);
})

gulp.task('pwatch', function(){
  gulp.watch('builds/dev/app/**/*.js', ['pjs']);
  gulp.watch('builds/dev/app/**/*.scss', ['pcss']);
  gulp.watch('builds/dev/**/*.html', ['phtml']);
})

gulp.task('webserver', function(){
  gulp.src('builds/dev')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8034,
    }));
})

gulp.task('pwebserver', function(){
  gulp.src('builds/prod')
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8035,
    }));
})

gulp.task('default', [
    'js',
    'css',
    'watch',
    'webserver'
  ]);

gulp.task('prod', [
    'pjs', 
    'pcss',
    'phtml',
    'pwatch',
    'pwebserver'
  ]);