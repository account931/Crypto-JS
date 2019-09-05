//This is the core Module.
//It uses Sweet Alerts instead of Alerts. As Sweet Alerts don't freeze the code like alerts, had to rewrite it with Promises {.then}. Otherwise code will continue till end not waiting till used confirms Aweet Alert.
//If u find this too complicated & want to know just about CryptoJS, see js_modules/crypto_core_copy_without _Sweet_Alerts.js, it is the same but without Sweet Alerts & Promises.

//var $ = require('jquery');
var CryptoJS = require("crypto-js");
var scroll_file = require('./scrollZ.js'); 
var UUID_file = require('./generate_uuid.js'); //my funct to generate random numbers
var sweetAlert = require('sweetalert');  //import sweet alert

function crypto_core(){

 this.finalTextt = "";
 this.encr ="";
 this.comparePrevState = ""; //var to save prev user's input 
 
 
  //encrypting text data from user's input and using user's secret hash key
  this.encryptXX = function(){
	  
	   //If user has not input any data to encrypt
	   if (!$.trim($("#userDataX").val())){
		   swal({ title: "Failed, no input!", text: "Check your input", icon: "error", button: "OK",}); //Sweet alert //alert("No input");
		   return false;
	   }
	   
	   
	    //If user has not input secret hash key, generate some random
	   if (!$.trim($("#userSecretKey").val())){
		   
		   //Sweet alert. Uses Promise, to make sure it runs after clicking OK (sweetAlerts does not freeze the code, like Alert)
		   swal({ title: "You did not provide a secret hash key!", text: "Secret hash key will be generated automatically.", icon: "info", button: "OK",}) //Sweet alert   //alert("No secret hash key, will be generated automatically");
		   
		   .then((value) => {
			   
               var UUID = new UUID_file();
	           var randomKey = UUID.generate_UUID();
		       $("#userSecretKey").val(randomKey)
			   
           })
		   
		   .then((value) => {
			   proceedCrypting();
		   }); //end 2nd then promis 
       
       //if user printed  secret hash key   
	   }	else {   
		   proceedCrypting();
	   }
		   
		
		
		
	   //core CryptoJS is here
	   function proceedCrypting (){
		   
	       //prevent user to encrypt the encrypted result, when users encrypted and then instead of DECRYPT button mistakenly press ENCRYPT
	       if(crypto_core.comparePrevState == $.trim($("#userDataX").val())){
		       /*if (!confirm("Are you Sure you want to encrypt again the already encrypted data instead of decryption?")){
			       return false;
		       }*/
	         
		   
		       //Sweet Alert instead of confirm. Uses Promise, to make sure it runs after  clicking OK (sweetAlerts does not freeze the code, like Confirm)
		       swal({title: "Are you sure?", text: "Are you Sure you want to encrypt again the already encrypted data instead of decryption?",
			         icon: "warning", buttons: true, dangerMode: true,
               })
		   
               .then((willDelete) => { //if u click Cancel, then stop everything
                   if (!willDelete) {
                        swal({ title: "Ok, cancelled", text: "Request terminated", icon: "error", button: "OK",})
					    return false;
					
                   } else { //if u confirm - do it 
			           goProceed_Part_2();
	               }
               }); 
		       //END //Sweet Alert Promise, used instead of confirm
		   
		   } else { //when result & input are not the same
			   goProceed_Part_2();
		   }
	    } //end function proceedCrypting
		
		
		   
        function goProceed_Part_2(){  //used inside proceedCrypting()
	       var my_encrypted = CryptoJS.AES.encrypt($("#userDataX").val(), $("#userSecretKey").val()); //message to encrypt, your secret Key
	       crypto_core.comparePrevState = my_encrypted; //assign encrypted message to global var to access it from this.decryptX = function(){
	       //alert(my_encrypted);
	       //finalTextt = "GGGG";
	       crypto_core.finalTextt = "<h3 style='word-break: break-all'>" + my_encrypted + "</h3>";
	   
	   
	         if ($("#copyResultButton").length > 0) { //if Button "Copy" already exsits, remove it. To prevent multiple appending
                   //it doesn't exist
			       $("#copyResultButton").remove();
             }
		  
		     if ($(".flashMessage").length > 1) { //if .flashMessage more than 1, remove the rest, except for the first
                  //it doesn't exist
	              $(".flashMessage:not(:eq(0))").remove(); 
             }
	   
	       //html the results
	       $("#resultFinal").stop().fadeOut("slow",function(){ //with animation
               $(this).css({border: "1px solid black", padding:"1em"});		   
	           $(this).html(crypto_core.finalTextt);
		       $(this).after('<div class="col-sm-12 col-xs-12"><button type="button" id="copyResultButton">Copy<i class="fa fa-files-o"></i></button> <span class ="flashMessage"></span></div>'); //append button "Copy"
		    }).fadeIn(2000); //html the result 
	   
	       //scroll to
	       var scrollX = new scroll_file();
	       scrollX.scrollResults("#resultFinal");
		} //End function goProceed_Part_2()
	   

	   
      
   },
   
   
   
   
   
   
   
   
   //--------------------------------------------------------------------
   //decrypting text data from user's encrypted input and using user's secret hash key
   this.decryptX = function(){
	    //If user has not input any data to encrypt
	   if (!$.trim($("#userDataX").val()) || !$.trim($("#userSecretKey").val()) ){
		   swal({ title: "No input detected!", text: "Check your input", icon: "error", button: "OK",}); //Sweet alert 
		   //alert("No input");
		   return false;
	   }
	   
	   
	  //alert(crypto_core.encr);
	  //var descr2 = CryptoJS.AES.decrypt(crypto_core.encr.toString(), "SecretKey"); 
	  var descr2 = CryptoJS.AES.decrypt($.trim($("#userDataX").val()).toString(), $("#userSecretKey").val()); //message to decrypt, your secret Key
      var descryptedFinal = descr2.toString(CryptoJS.enc.Utf8);
	  
	  if(!descryptedFinal){descryptedFinal = "<span class='errorX'>Error, secret key doesn't match your encrypted data  <i class='fa fa-battery-1'></i></span> ";}
	  crypto_core.finalTextt = "<h3 style='word-break: break-all'>" + descryptedFinal + "</h3>";
	  $("#resultFinal").stop().fadeOut("slow",function(){ $(this).html(crypto_core.finalTextt)}).fadeIn(2000);
      
	  var scrollX = new scroll_file();
	   scrollX.scrollResults("#resultFinal");;
   }
   
   
   

} //END function crypto_core()








//----------------------------------------------------------------------

//Switching windows between encrypt/decrypt to generating hash key
/*function showRelevantWindow(){

	
  this.traceCheckBoxSelection = function(passedID){
	 
      
	  //alert (passedID);
		$(".random").fadeOut(1100); // hide all classes
		$("#" + passedID + "Div").show(2000); // show a div that matches checkbox ID + "Div" (i.e randListDiv, randIntegerDiv)
		
		//$(".random").clearQueue();//prevent endeless
        //$(".random").stop().fadeOut(900,function() {  $("#" + passedID + "Div").show() }).fadeIn(900);
		
		//html the relevant instruction to id="hiddenInstructions"
		$("#hiddenInstructions").html("").hide();
		var instr = "window." + passedID + "Instruction"; // i.e randListInstruction, randIntegerInstruction
		    instr = eval(instr); // convert the string to var, otherwise it is html-ed as a string
		$("#hiddenInstructions").html(instr);
   


   
  }
  
  
}*/



module.exports = crypto_core;



