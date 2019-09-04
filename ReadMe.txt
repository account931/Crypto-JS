CRYPTO JS Library https://www.npmjs.com/package/crypto-js
================
DELETE: encrypt_core -> my_crypto_main_js_file


Updated version 
1. Js rewritten with CommonJS Modules, packed by Browserify + Watchify

3.App uses 1 script - dist/js/bundle.js, which contains all scripts, packed by Browserify

============================================================================
CLI Commands for NPM
npm init  -> to create package.json which contains all dependencies.
npm install -> in case if u have package.json with dependencies and no {node-modules} folder yet.

===============================================
Commands
1. browserify js/my_crypto_main_js_file.js -o dist/js/bundle_js.js -d    =>  creates one js bundle file (packs all modules in one bundle_js.js). No obfuscate is applied.
     if u use browserify standalone(without watchify), u 'll have to recreate it manually after any changes in script).
	 You can either run command from package.json => npm run build-js
   
2. npm run watch-js  = >  watches changes without rebuild, i.e without having u to run {npm run build-js} manually.

============================================================================







============================================================================
add to packagist.json

 "scripts": {
   
    "build-js": "browserify js/my_crypto_main_js_file.js > dist/js/bundle_js.js -d",
    "watch-js": "watchify js/my_crypto_main_js_file.js -o js/bundle_js.js"
  },
 "devDependencies": {
    "browserify": "latest",
    "watchify": "latest"
  }

================================================================================
Installing dependencies (or alternatively add them manually to packagist.json and run {npm install})
npm install -g browserify
npm install gulp -g          => install globally
npm install gulp --save-dev  => add to package.json dependencies


npm i browser-sync --save-dev
npm i --save-dev gulp-concat gulp-uglifyjs
npm i --save-dev vinyl-buffer

===============================================================================
watchify.js install-> add to package.json + npm install (we need if we use browserify standalone, without Gulp)




============================
Gulp
Run gulp task in the end of development, it will not only concatanate all js modues to one, but additionally 'll uglify/obfuscate it.

gulp browserifyX  => run gulp task "browserifyX"

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});





=================================================
sideNavFullScreenMenu -> uses css/sideNavFullScreenMenu.css + code in index.php (section sideNavFullScreenMenu)