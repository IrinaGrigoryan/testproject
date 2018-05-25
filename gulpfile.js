var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    autoprefixer   = require('gulp-autoprefixer'),
    nunjucksRender = require('gulp-nunjucks-render'),
    concat = require('gulp-concat'),
    cleanCSS       = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');

gulp.task('default', ['sass', 'browser-sync', 'njk'], function() {
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src/templates/**/*.njk', ['njk']);
    gulp.watch('dist/*.html', browserSync.reload);

});

gulp.task('browser-sync', function() { /*Автоматическое отражение изменений в браузере*/
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        notify: false
    });

    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/templates/**/*.njk', ['njk']);
    gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {               /*Компиляция SASS файла в CSS с browserSync*/
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});
gulp.task('njk', function () {                      //Рендеринг .njk файлолв в html
    return gulp.src(['src/templates/**/*.njk'])
        .pipe(nunjucksRender({
            path: ['src/templates/']
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('imgmin', function() {                    //Минификация картинок
    return gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
});

gulp.task('build', ['imgmin', 'sass'], function() { //Рендеринг проекта для продакшена

    gulp.src([
        'src/css/main.css',
    ]).pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));

    gulp.src([
        'src/fonts/**/*',
    ]).pipe(gulp.dest('dist/fonts'));
});



