'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('squarecore-build');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);