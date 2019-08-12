//var $ = require('jquery');
//Switching windows between encrypt/decrypt to generating hash key


function switch_windows(){

	
  this.changeWindowsAction = function(){
	  
      // On CheckBox change
	
      $('input[type="checkbox"]').on('change', function() {
	      
		  // Make sure that the oly checkbox is not unselected
		if ($('input:checked', $(this).parent()).length === 0) {
			$(this).prop('checked', true);
            return false; // this prevents from event triggering-> html-ing the div again
        }
		// Make sure that the oly checkbox is not unselected
		
		
		
		// Start Allow  to  checkBox  only  one  itembox at once;
        $('input[name="' + this.name + '"]').not(this).prop('checked', false); // });
       // End Start Allow  to  checkBox  only  one  item;	
       
	   
	    //USING DIFFERENT FUNCTION INSIDE
	    //Init the drawing the relevant window, //Switching windows between encrypt/decrypt to generating hash key
		var changeWindow = new showRelevantWindow();
		changeWindow.traceCheckBoxSelection(this.id);
		
	   });
	   // END On CheckBox change
   }

} //END function switch_windows()





//----------------------------------------------------------------------

//Switching windows between encrypt/decrypt to generating hash key
function showRelevantWindow(){

	
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
}



module.exports = switch_windows;



