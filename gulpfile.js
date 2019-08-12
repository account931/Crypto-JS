var gulp = require('gulp');
var browserSync = require('browser-sync'); // Подключаем Browser Sync
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)
var watch = require('gulp-watch');


gulp.task('mytask', function() {
    console.log('Hello, I am task one!');
});



//The only working
gulp.task('browserify', function() {
  return browserify('./js/encrypt_core.js')
    .bundle()
    .pipe(source('bundle_js.js')) // gives streaming vinyl file object
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(uglify()) // now gulp-uglify works 
    .pipe(gulp.dest('./dist/js/'));
});


//won't work
gulp.task('watch66', function() {
    gulp.watch('js/**/*.js', ['browserify']);
});


//won't work
gulp.task("watch", function() {
    //watch({glob: "js/**/*.js"}, function() {
   return watch('js/**/*.js', { ignoreInitial: false })
        //.pipe(gulp.dest('build'));
		gulp.run(['mytask', 'browserify']);
});

 


/*
gulp.task('browserify', function() {
    return browserify('./js/geo_mapbox_core.js')
        .bundle()
        // Передаем имя файла, который получим на выходе, vinyl-source-stream
        .pipe(source('bundle_js.js'))
        .pipe(gulp.dest('./dist/js/'));
});
*/

gulp.task('scripts', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'app/js/jquery/dist/jquery.min.js', // Берем jQuery
        //'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js' // Берем Magnific Popup
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
});


//won't work
// default task 
//gulp.task('default', ['js', 'css', 'watch']);

// Default Task -CAUSES CRASHES
//gulp.task('default', ['browserify'/*, 'two'*/]);
//gulp.task('default', ['browserify']);