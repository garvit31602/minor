import React from "react"
import "./signup.css"

export default function Signup(){
    return(
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
</head>
<body className="signup">
    <div className="signup-container">
        <div id="z3">
            Signup                                                                                                                                                                                                                                                                                                                                                                                                              
        </div>

        <br/>

        <div id="x">already have an account?
            <a href="#">login</a>
        </div>
        
       <h2>Already have an account?</h2> 
         <a href="#"><h3>login</h3></a>
          <br/><br/>
        
       
<div id="icons">
        

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"/>

<ul>
  <li>
    <a href="#">
      <i class="fab fa-facebook-f icon"></i>  
      </a>
     { /* i class used for fb icon  */}
  </li>
  <li>
    <a href="#"><i class="fab fa-twitter icon"></i></a>
  </li>
  <li>
    <a href="#"><i class="fab fa-linkedin-in icon"></i></a></li>
  <li>
    <a href="#"><i class="fab fa-google-plus-g icon"></i></a></li>
</ul>

</div>
        
{/* <form action="$">
    <div id="sites">
      <input type="radio" id="html" name="fav_site" value="Google">
      <label for="Google">Google</label><br>
    <input type="radio" id="Github" name="fav_site" value="Github">
    <label for="css">Github</label><br>
    <input type="radio" id="Twitter" name="fav_site" value="Twitter">
    <label for="Twitter">Twitter</label>
    </div> */}



  {/* <ul class="social-list">
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Google</a></li>
            <li><a href="#">Facebook</a></li>
</ul> */}


        <form action="#" method="POST">
            { /*Specifying a value of POST means the browser will send the data 
                to the web server to be processed.
                 This is necessary when adding data to a database,
or when submitting sensitive information, such as passwords. */}
            <div class="form-group">
                <label for="full-name">Full Name:</label>
                <input type="text" id="full-name" name="full-name" required/>
            </div>
             <div class="form-group">
                <label for="email">Email ID:</label>
                <input type="email" id="email" name="email" required/>
            </div>
             <div class="form-group">
                <label for="enrollment-number">Enrollment Number:</label>
                <input type="text" id="enrollment-number" name="enrollment-number" required/>
            </div>
             <div class="form-group">
                <label for="year">Year:</label>
                <input type="text" id="year" name="year" required/>
            </div>
            <div class="form-group">
                <label for="branch">Branch:</label>
                <input type="text" id="branch" name="branch" required/>
            </div>
            <div class="form-group">
                <label for="batch">Batch:</label>
                <input type="text" id="batch" name="batch" required/>
            </div> 
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="confirm-password">Confirm Password:</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>
            </div> 
            <div class="form-group">
                <label>
                    
                    <input type="checkbox" name="agree" required/> I agree to <a href="#"> Learnify's terms </a> and <a href="#">privacy policy </a>
                </label>
        
            </div>
            <button type="submit" class="btn">Register</button>
        </form>
        <p class="help-text">
            For any issues or assistance, please email <a href="#"> <span class="help-email">help@learnify.com</span></a>
        </p>
    </div>

</body>
</html>
    );
}