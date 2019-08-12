//var $ = require('jquery');
var CryptoJS = require("crypto-js");
//Switching windows between encrypt/decrypt to generating hash key


function crypto_core(){

	
  this.encryptXX = function(){
	  //alert(5);
	   var encrr = CryptoJS.AES.encrypt("My Message to encrypt", "SecretKey");
	   alert(encrr);
	   var finalTextt = "GGGG";
	   //var finalTextt = "<h2>" + encrr + "</h2>";
	   $("#resultFinal").stop().fadeOut("slow",function(){ $(this).html(finaltextt)}).fadeIn(2000);
      
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



