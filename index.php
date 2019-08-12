<!doctype html>
<!--------------------------------Bootstrap  Main variant ------------------------------------------>
  <html lang="en-US">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="Content-Type" content="text/html">
      <meta name="description" content="Crypto-js" />
      <meta name="keywords" content="Crypto-js, encrypt Crypto-js, decrypt ">
      <title>Crypto-js</title>
  
      <!--Favicon-->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">

      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

      <link rel="stylesheet" type="text/css" media="all" href="css/myEncryptCss.css">
      <script src="dist/js/bundle_js.js"></script><!--  Core  COMMON JS-->
	  <meta name="viewport" content="width=device-width" />

     </head>

     <body>

       <div id="headX" class="jumbotron text-center gradient" style =''> <!--#2ba6cb;-->
         <h1 id="h1Text"> <span id="textChange"> Crypto-js</span>   </h1>
           <p class="header_p">generates Crypto-js, etc <span class="glyphicon glyphicon-wrench"></span></p> 
           <!--<p class="language"><a href="../">Ru</a></p>-->
	   </div>



       <div class="item contact padding-top-0 padding-bottom-0" id="contact1">
         <div class="wrapper grey">
    	   <div class="container">

             <div class="checkbox"> <!-- Checkbox ID will be used in JS to form div ids (randListDiv,etc) -->
               <label><input type="checkbox" value="" name="r" id="randList" checked >Encrypt/decrypt</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   <label><input type="checkbox" value="" name="r" id="randInteger">Generate hash key</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			   <!--<label><input type="checkbox" value="" name="r" id="randIntegList">Random int list</label>-->
              </div>
			


				
    	     <!------------------------START id="randList" DIV 1111 (visible by default)-------------------------------------->
    	     <!-- Each div should have id = checkboxID + "Div", input should be checkboxID + "_Input" to automate it in JS -->
			 <div class="col-md-12 random" id="randListDiv"> <!--5-->       
    		   <!--<h3 class="margin-bottom-40 editContent">Your  <span class='subtext'> text</span></h3>-->

               <!----------------------- TextArea Form  Start-------------------------------->
    		   <p> Encrypt <span class="span-small"> &nbsp;(enter the items, each from the new line)  </span>&nbsp;<span class='glyphicon glyphicon-retweet'></span></p>
			   
    		   <form role="form">  	
    		     <div class="form-group"><!--coordsInput-->
				    <label for="intMin">Your key:</label><input type="text" class="form-control" id="randInteger_Input">
				</div>
				
				 <div class="form-group"><!--coordsInput-->
    		       <textarea class="form-control" rows="6" placeholder="Your list here.." id='randList_Input' required>
				   </textarea>	  		  				  			
    		     </div>
    			</form>	  		
               <!--------------------TextArea FORm  END----------------------------------->
 
 
                 <!---------------------------START BUTTONS------------------------------>
                                        <!--mine-->
					<br>
					<div class="col-md-8"  id="" style="margin-top:33px;">   
										
    				  		<button id="encryptButton" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide bt-mobile-mine">Encrypt</button>
							<button id="decryptButton" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide bt-mobile-mine">Decrypt</button>
                            <button id="clearButton" type="button"  class="btn btn-primary btn-embossed btn-lg btn-wide bt-mobile-mine">Reset</button >
							<button id="examplebutton" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide bt-mobile-mine">Example</button>
                            <button id="instructionButton" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide bt-mobile-mine">Instructions</button>
                            <!--<button id="cr_footer" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide">CR Footer</button>-->
    				</div>
<!-------------------------------------------------------START BUTTONS---------------------------------------->
    		 </div><!-- /.col-md-5 --> <!-- END  <div class="col-md-5">-->

             <!----------------------------------------END id="randListDiv" DIV 1111----------------------------------->



  
  
  
  
  
  
  
  
             <!------------------------START id="randInteger" DIV 222 (hidden by default)(returns one single random int from range) -------------------------------------->
    		 <!-- Each div should have id = checkboxID + "Div", input should be checkboxID + "_Input" to automate it in JS -->
			 <div class="col-md-12 random" id="randIntegerDiv"> <!--5-->       
    		   <!--<h3 class="margin-bottom-40 editContent">Your  <span class='subtext'> text</span></h3>-->

     
    		   <p> Generate hash key <span class='glyphicon glyphicon-list-alt'></span></p>
			    <button id="generatehashKey" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide bt-mobile-mine">Generate hash</button>
			  		
             	
    		 </div><!-- /.col-md-5 --> <!-- END  <div class="col-md-5">-->

             <!----------------------------------------------END id="randIntegerDiv DIV 222---------------------------------------------------->

  
  
  
  
  
  
  
			 
			 
			 
			 
  
  
  
  















<!------------------------------------------Start INSTRUCTIONS  ------------------------------->
<br><div class="col-md-8 jumbotron"  id="hiddenInstructions" style="display:none;margin-top:2%;"> 

<!-- INSTRUCTIONS-->
<br>
A tool to encrypt/decrypt your data &nbsp; <span class='glyphicon glyphicon-user'></span>
<!-- END RU-->

<br><br>How to proceed:
<br>1.Enter your data to encrypt.
<br>2.Enter yor secret hash key.

<br>3.Click "Copy" button to copy results.

<!--END  INSTRUCTIONS-->

 </div>
<!-----------------------------------------END  INSTRUCTIONS ---------------------->



					
					
					<!--------------------------------mine RESULTS------------------------------------->
					<br><br>
					<div class="col-md-8"  id="resultFinal" style="margin-top:33px;">HERE will be result</div> <br><br><br>
					<!--------------------------------- end  mine-------------------------------------->
					
                                   

    	</div><!-- /.container -->
				
				
    		</div><!-- /.wrapper -->

                <div style="height:77px;"></div>


    	
    	</div><!-- /.item -->
		
		
		<!-----Footer ---->
		        
				<div class="footer">
				    Contact: <strong>dimmm931@gmail.com</strong><br>
					<?php  echo date("Y"); ?>
				</div>
		<!--END Footer ---->
    
    </body>
</html>




<!--
<?php
// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array(/*$user*/), 'recordText/myEncrypt.txt');// Record  to  text;
//End  Record;
?>-->