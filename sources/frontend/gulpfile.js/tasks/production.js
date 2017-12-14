var gulp = require('gulp');
var runSequence = require('run-sequence');

var productionTask = function productionTask(cb) {
    global.PRODUCTION = true;
	runSequence('clean', ['data', 'fonts', 'images', 'icons', 'video'], ['scripts', 'styles', 'html'], function cb(){
        process.exit(0);
    });
};

gulp.task('production', productionTask);
