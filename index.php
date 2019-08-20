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
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> <!-- Fa fa lib -->

      <link rel="stylesheet" type="text/css" media="all" href="css/myEncryptCss.css">
	  <link rel="stylesheet" type="text/css" media="all" href="css/changeTheme.css">
      <script src="dist/js/bundle_js.js"></script><!--  Core  COMMON JS-->
	  <meta name="viewport" content="width=device-width" />

     </head>

     <body>

       <div id="headX" class="jumbotron text-center gradient head-style" style =''> <!--#2ba6cb;-->
         <h1 id="h1Text"> <span id="textChange"> Crypto-js</span>   </h1>
           <p class="header_p">generates encrypted and decrypted data based on secret key, etc <span class="glyphicon glyphicon-wrench"></span></p> 
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
			


			 <!------------------------     START PAGE 1 (main page with form)  -------------------------------------->
    	     <!------------------------START id="randList" DIV 1111 (visible by default)-------------------------------------->
    	     <!-- Each div should have id = checkboxID + "Div", input should be checkboxID + "_Input" to automate it in JS -->
			 <div class="col-md-12 col-sm-12 col-xs-12 random" id="randListDiv"> <!--5-->       


               <!----------------------- TextArea Form  Start-------------------------------->
    		   <p> Encrypt <span class="span-small"> &nbsp;(enter the items, each from the new line)  </span>&nbsp;<span class='glyphicon glyphicon-retweet'></span></p>
			   
    		   <form role="form">  	
    		     <div class="form-group">
				    <label for="intMin">Your secret key:</label>
					<input type="text" class="form-control" id="userSecretKey" placeholder="Your Key"/><!--User's secret key-->
					<button type="button" id="copyme">Copy key <i class="fa fa-space-shuttle"></i></button> <span class ="flashMessage"></span>
				</div>
				
				 <div class="form-group"> <!--User's data input to encrypt-->
    		       <textarea class="form-control" rows="6" placeholder= "Your data here...." id="userDataX"></textarea><!-- open and close tag must be on the same line, otherwise placeholder won't work-->  		  				  			
    		     </div>
    			</form>	  		
               <!--------------------TextArea FORM  END----------------------------------->
 
 
                 <!---------------------------START BUTTONS------------------------------>
                                        <!--mine-->
					<br>
					<div class="col-md-8"  id="" style="margin-top:33px;">   
										
    				     <button id="encryptButton" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide bt-mobile-mine">Encrypt</button>
						 <button id="decryptButton" type="button" class="btn btn-danger btn-embossed btn-lg btn-wide bt-mobile-mine">Decrypt</button>
                         <button id="clearButton" type="button"  class="btn btn-success btn-embossed btn-lg btn-wide bt-mobile-mine">Reset</button >
					     <!--<button id="examplebutton" type="button" class="btn btn-info btn-embossed btn-lg btn-wide bt-mobile-mine">Example</button>-->
                         <button id="instructionButton" type="button" class="btn btn-warning btn-embossed btn-lg btn-wide bt-mobile-mine">Instructions</button>
                         <!--<button id="cr_footer" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide">CR Footer</button>-->
    				</div>
                <!----------------------------END START BUTTONS ---------------------------------------->
    		 </div><!-- /.col-md-5 --> <!-- END  <div class="col-md-5">-->

             <!----------------------------------------END id="randListDiv" DIV 1111----------------------------------->
              <!------------------------     END PAGE 1 (main page with form)  -------------------------------------->


  
  
  
  
  
  
  
              <!------------------------     START PAGE 2 (hidden by default)  -------------------------------------->
             <!------------------------START id="randInteger" DIV 222 (hidden by default)(returns one single random int from range) -------------------------------------->
    		 <!-- Each div should have id = checkboxID + "Div", input should be checkboxID + "_Input" to automate it in JS -->
			 <div class="col-md-12 random" id="randIntegerDiv"> <!--5-->       
    		   <!--<h3 class="margin-bottom-40 editContent">Your  <span class='subtext'> text</span></h3>-->

     
    		   <p> Generate hash key <span class='glyphicon glyphicon-list-alt'></span></p>
			    <button id="generatehashKey" type="button" class="btn btn-primary btn-embossed btn-lg btn-wide bt-mobile-mine">Generate hash</button>
			  		
             	
    		 </div><!-- /.col-md-5 --> <!-- END  <div class="col-md-5">-->

             <!----------------------------------------------END id="randIntegerDiv DIV 222---------------------------------------------------->
             <!------------------------     START PAGE 2 (hidden by default)  -------------------------------------->
  
  
  
  
  
  
  
			 
			 
			 
			 
  
  
  
  















    <!------------------------------------------Start INSTRUCTIONS  ------------------------------->
    <br>
    <div class="col-md-12 col-sm-12 col-xs-12 jumbotron"  id="hiddenInstructions" style="display:none;margin-top:2%;"> 

      <!-- INSTRUCTIONS-->
      <br>
      A tool to encrypt/decrypt your any data with your secret key  &nbsp; <span class='glyphicon glyphicon-user'></span>
      <!-- END RU-->

      <br><br>How to proceed:</hr>
      <br>1.Enter your data you want to encrypt.
      <br>2.Enter yor secret hash key. Don't divulge your secret hask key to the third parties.
      <br>3.Click "Encrypt" or "Decrypt" button in order to Encrypt or Decrypt the data.
      <br>4.Use "Copy" button to copy your hash key.

      <!--END  INSTRUCTIONS-->
    </div>
   <!-----------------------------------------END  INSTRUCTIONS ---------------------->



					
					
    <!--------------------------------mine RESULTS------------------------------------->
	<br><br>
	<div class="col-md-8"  id="resultFinal" style="margin-top:33px;">...</div> <br><br><br>
    <!--------------------------------- end  mine-------------------------------------->
					
                                   

    	</div><!-- /.container -->
				
				
    		</div><!-- /.wrapper -->

                <div style="height:77px;"></div>


    	
    	</div><!-- /.item -->
		
		
		
		
		<!------- Footer ---------->     
				<div class="footer">
				    Contact: <strong>dimmm931@gmail.com</strong><br>
					<?php  echo date("Y"); ?>
				</div>
		<!------- END Footer ------->
		
		
	   <!-----------------  Button to change Style theme------------------------->
	   <input type="button" class="btn" value=">>" id="changeStyle" style="position:absolute;top:0px;right:0px;" title="click to change theme"/>
	   <!-----------------  Button to change Style theme------------------------->
	   
    
    </body>
</html>




<!--
<?php
// Record (with CLASS) all the  input  to  txt;  //;
      include("Classes/RecordTxt.php");
      RecordTxt::RecordAnyInput(array(/*$user*/), 'recordText/myEncrypt.txt');// Record  to  text;
//End  Record;
?>-->