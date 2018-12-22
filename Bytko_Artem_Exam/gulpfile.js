var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

gulp.task('sass', function () {
	return gulp.src('assets/sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
	return gulp.src('assets/img/**/*')
		.pipe(gulp.dest('build/img'))
		.pipe(browserSync.reload({stream: true}));

});

gulp.task("html", function () {
	return gulp.src("assets/html/**/*.html")
		.pipe(gulp.dest("build/html"))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task("script", function () {
    return gulp.src('assets/js/**/*.js')
        .pipe(gulp.dest("build/js"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task("watch", [ 'sass', "html", 'img', 'script' ], function () {
	browserSync.init({
		server: "./build/html",
		notify: false,
		ui: {
			port: 3000
		}
    });
    gulp.watch('assets/sass/**/*.scss', ["sass"]);
    gulp.watch('assets/html/**/*.html' , ['html']);
	gulp.watch('assets/img/**/*', ["img"]);
	gulp.watch('assets/js/**/*.js', ["script"]);
});
