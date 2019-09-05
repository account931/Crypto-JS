===============
CRYPTO JS Library https://www.npmjs.com/package/crypto-js
===============
Stack: CommonJS module, npm, gulp, Browserify, Watchify, Sweet alerts lib, Promises, sideNavFullScreenMenu.
================



Updated version 
1. Js rewritten with CommonJS Modules, packed by Browserify + Watchify
2.App uses 1 script - dist/js/bundle.js, which contains all scripts, packed by Browserify

Table of Content:
1.NPM
2.
3.Gulp
4.Crypto JS lib.
5.sideNavFullScreenMenu
6.Sweet alerts

============================================================================
1.NPM
CLI Commands for NPM
npm init  -> to create package.json which contains all dependencies.
npm install -> in case if u have package.json with dependencies and no {node-modules} folder yet.

===============================================
Commands
1.1. browserify js/my_crypto_main_js_file.js -o dist/js/bundle_js.js -d    =>  creates one js bundle file (packs all modules in one bundle_js.js). No obfuscate is applied.
     if u use browserify standalone(without watchify), u 'll have to recreate it manually after any changes in script).
	 You can either run command from package.json => npm run build-js
   
1.2. npm run watch-js  = >  watches changes without rebuild, i.e without having u to run {npm run build-js} manually.

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
3.Gulp
Run gulp task in the end of development, it will not only concatanate all js modules to one, but additionally 'll uglify/obfuscate it.
Saves all modules to 1 file => {dist/js/bundle_js.js}. Only this 1 file must be included in index.php header.

gulp browserifyX  => run gulp task "browserifyX"

gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('app/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});









===============================================
4.Crypto JS lib.
https://www.npmjs.com/package/crypto-js
{js_modules/crypto_core.js} is the core Module for CryptoJS. All modules are packed to 1 file => {dist/js/bundle_js.js}. Only this 1 file must be included in index.php header.
It uses Sweet Alerts instead of Alerts. 
As Sweet Alerts don't freeze the code like alerts, had to rewrite it with Promises {.then}. 
Otherwise the code will continue till the end not waiting till used confirms Aweet Alert.
If u find this too complicated & want to know just about CryptoJS, see js_modules/crypto_core_copy_without _Sweet_Alerts.js, 
it is the same but without Sweet Alerts & Promises, it is easier to understand CryptoJS there.


=================================================
5.sideNavFullScreenMenu
sideNavFullScreenMenu -> uses css/sideNavFullScreenMenu.css + code in index.php (section sideNavFullScreenMenu)





==================================================
6.Sweet alerts
https://sweetalert.js.org/guides/
 #6.1 if use NPM:
  6.1.1 $ npm install sweetalert --save
  6.1.2 var sweetAlert = require('sweetalert');  //import sweet alert in necessary module 
  6.1.3 swal("Here's the title!", "...and here's the text!");  //use it 
  
  #6.2 if use CDN:
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>