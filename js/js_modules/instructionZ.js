//Loads or hide Instructions---------------------------------------------------------------------------------------
	
//var $ = require('jquery');
//var _ = require('underscore');
var scroll_file = require('./scrollZ.js'); 

function instructionX(){ 
	
  this.setInstruction = function(){ 
  
      $("#hiddenInstructions").toggle(1000); //hideor show instructions
	  
       if ($("#instructionButton").attr("value")=="instructions") {
                $("#instructionButton").val(" _Close_ ");
				//$("#instructionButton").css("background","red");
        } else { 
		        $("#instructionButton").val("instructions");
				//$("#instructionButton").css("background","grey");
	    }	
		
		
	   //scroll to
	   var scrollX = new scroll_file();
	   scrollX.scrollResults("#hiddenInstructions");
   }

}

module.exports = instructionX;
	
	
	
	
