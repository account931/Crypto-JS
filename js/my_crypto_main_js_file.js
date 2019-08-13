var crypt_CORE =  require('./js_modules/crypto_core.js');
var switch_file = require('./js_modules/switch_windows.js'); //Switching windows between encrypt/decrypt to generating hash key
var instruct_file = require('./js_modules/instructionZ.js');  //Loads or hide Instructions
var copy_file = require('./js_modules/copy_process.js');  //Loads or hide Instructions

//Crypto library itself
var AES = require("crypto-js/aes");
var SHA256 = require("crypto-js/sha256");
var CryptoJS = require("crypto-js");


//var clear_file = require('./js_modules/clear_fields.js');
//var loadExample_file = require('./js_modules/load_example.js');
//var split_file = require('./js_modules/split_coordinates.js');
//var copy_file = require('./js_modules/copy_process.js');
//var error_file = require('./js_modules/error_process.js');

//var $ = require('jquery');



//Encrypt)

$(document).ready(function(){
	
//IIFE-------------------------------------
//(function () 


 //----TESTT
 // Encrypt
 /*
 var encr2 = CryptoJS.AES.encrypt("My Message to encrypt", "SecretKey");
 // Decrypt
 var descr2 = CryptoJS.AES.decrypt(encr2.toString(), "SecretKey");
 var descryptedFinal = descr2.toString(CryptoJS.enc.Utf8);
 console.log(descryptedFinal);
 //alert(descryptedFinal);
 */
 
 
//Core encrypting/decrypting  
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
      //Encrypt
      $("#encryptButton").click(function(){ 
		var encr = new crypt_CORE();  //Module
		encr.encryptXX();
	  });
	  
	  
	  //Decrypt
      $("#decryptButton").click(function(){ 
		var decr = new crypt_CORE();  //Module
		decr.decryptX();
	  });
	
	
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
 

 
 
 
//Switching windows between encrypt/decrypt to generating hash key
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
   
		var switchModule = new switch_file();  //Module
		switchModule.changeWindowsAction();
	
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
 

 
 
 

 //Loads or hide Instructions
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $("#instructionButton").click(function(){ 
		var instruct = new instruct_file();  //Module
		instruct.setInstruction();
	});
	
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************
 

 
 
 
 //Copy the secret hash key
// **************************************************************************************
// **************************************************************************************
//                                                                                     **
    $("#copyme").click(function(){ 
		var copy = new copy_file ();  //Module
		copy.copy_to_clipboard();
	});
	
// **                                                                                  **
// **                                                                                  **
// **************************************************************************************
// **************************************************************************************





 //})(); //END IIFE--

// END READY
});






