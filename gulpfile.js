var gulp    	= require('gulp');
var sass    	= require('gulp-sass');
var browserSync = require('browser-sync');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglifyjs');
var cssnano     = require('gulp-cssnano');
var rename      = require('gulp-rename');
var del         = require('del');

gulp.task('sass', function() {
	return gulp.src('app/sass/**/*. + (scss | sass)')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('scripts', function() {
	return gulp.src([
		''
	])
		.pipe(concat('libs.min.js')) 
		.pipe(uglify()) 
		.pipe(gulp.dest('app/js')); 
});


gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});


gulp.task('css-libs', function() {
    return gulp.src('app/sass/libs.sass') 
        .pipe(cssnano()) 
        .pipe(rename({suffix: '.min'})) 
        .pipe(gulp.dest('app/css')); 
});

gulp.task('watch', function() {
	gulp.watch('app/sass/**/*.scss', gulp.parallel('sass'));
	gulp.watch('app/*.html', gulp.parallel('code')); // if you want sync html file, else comment it or delate 
	gulp.watch(['app/js/main.js', 'app/libs/**/*.js'], gulp.parallel('scripts'));  // if you want sync js files, else comment it or delate 
});

gulp.task('clean', function() {
    return del.sync('dist'); 
});

gulp.task('watchall', gulp.parallel('css-libs', 'sass', 'scripts', 'browser-sync', 'watch'));

