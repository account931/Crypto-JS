//var $ = require('jquery');
var scroll_file = require('./scrollZ.js'); 


function clear_fields(){
	
	
  this.clearFields = function(){
      $("#hiddenInstructions").hide(2000);
            $("#userSecretKey").val('');
			$("#userDataX").val('');
			$("#resultFinal").hide(1000);
            $("#resultFinal").html('');
			$("#copyResultButton").hide(1000); //hide button COPY for Result
			
            //hide  instr  &  change  button
            //this.hideInstructions ();
            //END  Hide Instructions  and  change  button
			
			//scroll to top
	        var scrollX = new scroll_file();
	        scrollX.scroll_toTop();
   }
   
   
   
   
    /*
    this.hideInstructions = function(){
         if ($('#hiddenInstructions').css('display') == 'none') { 
	         //do nothing
            } else {

                $("#hiddenInstructions").hide(2000);
                if ($("#instructionButton").attr("value")=="instructions") {
                    $("#instructionButton").val("Close");$("#instructionButton").css("background","red");
		        } else { 
		            $("#instructionButton").val("instructions");$("#instructionButton").css("background", "grey");
		        }
            }
   }*/
   

}

module.exports = clear_fields;




/*


	var clear_fields = {
		
		clearFields : function() {
	        $("#hiddenInstructions").hide(2000);
            $("#coordsInput").val('');
            $("#resultFinal").hide(1000);
            //hide  instr  &  change  button
            this.hideInstructions ();
            //END  Hide Instructions  and  change  button
        },
		
		
		
		hideInstructions: function(){
            if ($('#hiddenInstructions').css('display') == 'none') { 
	         //do nothing
            } else {

                $("#hiddenInstructions").hide(2000);
                if ($("#instructionButton").attr("value")=="instructions") {
                    $("#instructionButton").val("Close");$("#instructionButton").css("background","red");
		        } else { 
		            $("#instructionButton").val("instructions");$("#instructionButton").css("background", "grey");
		        }
            }
        },
		
	}
	
	
	*/