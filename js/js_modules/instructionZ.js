//Loads or hide Instructions---------------------------------------------------------------------------------------
	
//var $ = require('jquery');
//var _ = require('underscore');

function instructionX(){ 
	
  this.setInstruction = function(){ 
  
      $("#hiddenInstructions").toggle(1000);
       if ($("#instructionButton").attr("value")=="instructions") {
                $("#instructionButton").val(" _Close_ ");
				//$("#instructionButton").css("background","red");
        } else { 
		        $("#instructionButton").val("instructions");
				//$("#instructionButton").css("background","grey");
	    }	
   }

}

module.exports = instructionX;
	
	
	
	
