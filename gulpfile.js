const {series, watch, src, dest, parallel} = require('gulp');
const pump = require('pump');

// gulp plugins and utils
const livereload = require('gulp-livereload');
const sass = require('gulp-sass');
const zip = require('gulp-zip');
const beeper = require('beeper');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function serve(done) {
    livereload.listen();
    done();
}

const handleError = (done) => {
    return function (err) {
        if (err) {
            beeper();
        }
        return done(err);
    };
};

sass.compiler = require('node-sass');

function hbs(done) {
    pump([
        src(['*.hbs', 'partials/**/*.hbs', '!node_modules/**/*.hbs']),
        livereload()
    ], handleError(done));
}

function css(done) {
    pump([
        src('./assets/main/sass/*.scss', {sourcemaps: true}),
        sass({outputStyle: 'compressed'}).on('error', sass.logError),
        dest('assets/main/css/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}

function js(done) {
    pump([
        src([
            // pull in lib files first so our own code can depend on it
            'assets/main/js/*.js',
            '!assets/main/js/pagetags.js',
            '!assets/main/js/post.js',
            '!assets/main/js/showsidebar.js'
        ], {sourcemaps: true}),
        concat('popel.js'),
        uglify(),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}

function jslib(done) {
    pump([
        src([
            // pull in lib files first so our own code can depend on it
            'assets/main/js/lib/*.js'
        ], {sourcemaps: true}),
        concat('lib.js'),
        uglify(),
        dest('assets/built/', {sourcemaps: '.'}),
        livereload()
    ], handleError(done));
}

function zipper(done) {
    var targetDir = 'dist/';
    var themeName = require('./package.json').name;
    var filename = themeName + '.zip';

    pump([
        src([
            '**',
            '!node_modules', '!node_modules/**',
            '!dist', '!dist/**'
        ]),
        zip(filename),
        dest(targetDir)
    ], handleError(done));
}

const cssWatcher = () => watch('./assets/main/sass/**/**', css);
const hbsWatcher = () => watch(['*.hbs', 'partials/**/*.hbs', '!node_modules/**/*.hbs'], hbs);
const watcher = parallel(cssWatcher, hbsWatcher);
const build = series(css);
const dev = series(build, serve, watcher);

exports.build = build;
exports.zip = series(build, zipper);
exports.default = dev;
