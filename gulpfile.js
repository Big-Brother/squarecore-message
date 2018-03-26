'use strict';

var gulp = require('gulp');
var squarecoreTasks = require('squarecore-build');

squarecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
