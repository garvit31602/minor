import React from "react";
import "./login.css"

function Login(){
    return(
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>

</head>
<body className="login">
    <div className="wrapper">
        <form action="#">
    {/* used to tell where to send the form-data when the form is submitted.
        will add the url after sometime */}

        <h1>Learnify</h1>
       <div className="input-box">
       {/* form action and required use  */}
       <input type="text" placeholder="Username" required/>
       <i className='bx bxs-user'></i>
       </div>


       <div className="input-box">
        <input type="password" placeholder="password" required/>
        <i className='bx bxs-lock-alt'></i>
       </div>


       <div className="remember-forgot">
        <label><input type="checkbox"/>Remember me
        </label>
        <a href="#">Forgot password</a>
       </div>


       <button type="submit" class="btn">Login</button>

       <div className="register-link">
        <p>Don't have an account?
            <a href="#">Register</a></p>

            {/* when signup for first time it will be used further after adding up the link */}

       </div>
    </form>
       </div>

     
</body>
</html>
    );
}

export default Login;