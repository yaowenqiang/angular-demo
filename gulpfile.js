var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')({lazy:true});
gulp.task('test',function(){
    log('task is running');

});
gulp.task('html',browserSync.reload);
gulp.task('js',browserSync.reload);
gulp.task('serve',function(){
    browserSync.init({
    server:{
        baseDir:"./"
    }
    });
    gulp.watch('*.html',['html']);
    gulp.watch('*.js',['js']);
});
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg ) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
