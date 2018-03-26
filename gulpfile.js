'use strict';

var gulp = require('gulp');
var squarecoreTasks = require('@big-brother/squarecore-build');

squarecoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
