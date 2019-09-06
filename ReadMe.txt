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
2.Browserify
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
2.Browserify
As we use CommonJs Modules here, all modules must be packed to one file {dist/js/bundle_js.js} with Browserify:  CLI -> npm build-js (this command is predefined by you in package.json)
You have to do it after every change in js files to see the changes in browser 
or you can better run {npm watch-js} (this command is predefined by you in package.json) and it will rebuild {dist/js/bundle_js.js} automatically.






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
As Sweet Alerts don't freeze the code like alerts, had to rewrite it with callback (not Promises as thew don't support some browsers, but deactivated working version with promises is included in js_modules/crypto_core_with_PROMISES_and_SwAlerts.js" }. 
Without CallBacks the code will continue till the end not waiting till used confirms Aweet Alert.
If u find this too complicated & want to know just about CryptoJS, see js_modules/crypto_core_copy_without _Sweet_Alerts.js, 
it is the same but without Sweet Alerts & Promises, it is easier to understand CryptoJS there.

How it works:
  #on Click it checks if Data input is not empty, 
  #then checks if Secret Key Input is not empty. If it is empty, script suggests to autogenerate the Secret Key and paste it to Input.
  #then if 2 inputs are not empty, script runs {proceedCrypting()} whick checks if a user could mistakenly click "Encrypt" (when input == result)
  #then {proceedCrypting()} uses {goProceed_Part_2()} which does the encyption:
      var my_encrypted = CryptoJS.AES.encrypt($("#userDataX").val(), $("#userSecretKey").val());
  #Decryption is done by:
      var descr2 = CryptoJS.AES.decrypt($.trim($("#userDataX").val()).toString(), $("#userSecretKey").val()); //message to decrypt, your secret Key
      var descryptedFinal = descr2.toString(CryptoJS.enc.Utf8);
	  
	  
	  
	  
      
=================================================
5.sideNavFullScreenMenu
sideNavFullScreenMenu -> uses css/sideNavFullScreenMenu.css + code in index.php (section sideNavFullScreenMenu)





==================================================
6.Sweet alerts 
NB: {Simple Sweet Alerts} and {SweetAlert for Bootstrap} are not THE SAME. 1st uses Promises and the 2nd uses Callback.
We use here {SweetAlert for Bootstrap}, as we need to work with Callbacks 'cause Promises, are not supported in every browser

6.3 If you want to use SweetAlert for Bootstrap(our case):
    https://lipis.github.io/bootstrap-sweetalert/
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css" rel="stylesheet"/>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert-dev.min.js"></script>
	

6.4 If you want to use simple Sweet Alert Library 
(we don't use it as it does not support Callbacks, just Promises, which are supported in every browser)
If you want to activate this simple Sweet Alert Library with Promises: uncomment in {/js_modules/crypto_core.js} line {//var sweetAlert = require('sweetalert'); } + temporary rename "js_modules/crypto_core_with_PROMISES_and_SwAlerts.js" to "js_modules/crypto_core.js"
    https://sweetalert.js.org/guides/
    6.4 if use NPM:
    6.4.1 $ npm install sweetalert --save
    6.4.2 var sweetAlert = require('sweetalert');  //import sweet alert in necessary module 
    6.4.3 swal("Here's the title!", "...and here's the text!");  //use it 
  
    #6.4 if use CDN:
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
6.4 END If you use simple Sweet Alert Library (we don't use it as it does not support Callbacks, just Promises, which are supported in every browser)  
  
  
  