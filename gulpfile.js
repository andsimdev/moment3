// Hämta in Gulp och nödvändiga metoder
const {src, dest, parallel, series, watch} = require('gulp');

// Hämta in paketet Gulp-concat (för att slå ihop filer)
const concat = require('gulp-concat');

// Hämta in paketet Gulp-terser (för att minifiera JS-filer)
const terser = require('gulp-terser');

// Hämta in paketet Gulp-cssnano (för att minifiera CSS-filer)
const cssnano = require('gulp-cssnano');

// Hämta in paketet Imagemin (för att komprimera bildfiler)
const imagemin = require('gulp-imagemin');

// Hämta in paketet BrowserSync för att kunna förhandsvisa i webbläsaren
const browserSync = require('browser-sync').create();

// Hämta in paketet Sourcemaps (för att kartlägga ursprungliga källkodsfiler)
const sourcemaps = require('gulp-sourcemaps');

// Definiera sökvägar för HTML-filer, CSS-filer, JavaScript-filer och bilder
const files = {
    // HTML
    htmlPath: "src/**/*.html",

    // CSS
    cssPath: "src/css/*.css",

    // JavaScript
    jsPath: "src/js/*.js",

    // Bilder
    imagePath: "src/images/*"
}

// Task för att kopiera alla existerande HTML-filer i src-mappen till pub-mappen
function copyHTML() {
    // Hämta sökvägen för HTML-källkodsfiler
    return src(files.htmlPath)

    // Placera dessa i pub-katalogen
    .pipe(dest('pub'));
}

// Task för att kopiera alla CSS-filer till pub-mappen, samt slå ihop CSS-filerna till en och minifiera den
function copyCSS() {
    // Hämta sökvägen för CSS-källkodsfiler
    return src(files.cssPath)

    // Initiera Sourcemaps
    .pipe(sourcemaps.init())

    // Slå ihop flera CSS-filer till en med namnet main.css
    .pipe(concat('main.css'))

    // Minifiera css-filen
    .pipe(cssnano())

    // Skriv sourcemaps till katalogen "maps"
    .pipe(sourcemaps.write('../maps'))

    // Placera CSS-filen i pub-katalogen
    .pipe(dest('pub/css'))

    // Kör BrowserSync Stream för att uppdatera webbläsaren efter förändring
    .pipe(browserSync.stream());
}

// Task för att kopiera alla JavaScript-filer till pub-mappen, samt slå ihop JS-filerna till en och minifiera den
function copyJS() {
    // Hämta sökvägen för JavaScript-källkodsfiler
    return src(files.jsPath)

    // Initiera Sourcemaps
    .pipe(sourcemaps.init())

    // Slå ihop flera JavaScript-filer till en med namnet main.js
    .pipe(concat('main.js'))

    // Minifiera JavaScript-filen
    .pipe(terser())

    // Skriv sourcemaps till katalogen "maps"
    .pipe(sourcemaps.write('../maps'))

    // Placera JavaScript-filen i pub-katalogen
    .pipe(dest('pub/js'));
}

// Task för att kopiera alla bilder till pub-mappen
function copyImages() {
    // Hämta sökvägen för bilder
    return src(files.imagePath)

    // Komprimera bilder
    .pipe(imagemin())

    // Placera bilder i pub-katalogen
    .pipe(dest('pub/images'));
}

// Task för att lyssna efter förändringar i källkodsfiler
function watchTask() {
    // Initiera BrowserSync
    browserSync.init({
        server: "./pub"
    });

    // Lyssna efter förändringar i källkodsfiler, i så fall kör "publiceringsfunktioner" samt ladda om BrowserSync
    watch([files.htmlPath, files.cssPath, files.jsPath, files.imagePath], parallel(copyHTML, copyCSS, copyJS, copyImages)).on('change', browserSync.reload);
}

// Exportera funktionerna till Gulp-default för att kunna köra dessa utifrån. Kör stegen i serie efter varandra.
exports.default = series(
    // Kör funktionerna för att bl.a. minifiera och kopiera källkodsfilerna parallelt med varandra
    parallel(copyHTML, copyCSS, copyJS, copyImages),

    // Kör watchTask för att lyssna efter förändringar i källkodsfilerna och kör BrowserSync
    watchTask
    );