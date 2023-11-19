import React from "react"
import "./style.css"
import logo3 from "./images/logo3.png"
import bg4 from "./images/bg4.jpeg"
import icon1 from "./images/icon1.jpeg"
import icon2 from "./images/icon2.jpeg"
import icon3 from "./images/icon3.jpg"
import navi from "./images/navi.jpeg"
import sideimg from "./images/sideimg.png"
import { Outlet, Link } from "react-router-dom";

export default function Index(){
  return(
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
</head>
<body className="index">


<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Onest&display=swap" rel="stylesheet"/>
   
  <nav className="navbar">
        <ul>
            <li><img src={logo3}/> </li>
            <li> <Link to="login">LOG IN</Link></li>
            <li> <Link to="signup">SIGN UP</Link></li>
            <li> <Link to="profile">PROFILE</Link></li>
            <li><a href="https://www.google.com/">ABOUT US</a></li>
            <li><a href="https://www.google.com/"> HELP</a></li>
        </ul>
    </nav>
  
    <div className="total">
      <div className="box" id="box1">
      <h1>Welcome to Learnify</h1>
      <h4>Your Gateway to Education Excellence</h4>
      <h6>Discover a world of knowledge at your fingertips, dive into a treasure trove of study materials and craft your unique path to knowledge and success with us </h6> 
     </div>
      <div className="box" id="box2">
      <img src={bg4}/>
      <p></p>
      <p></p>
      <center>
      <button className="button1" type="button">SIGN UP</button></center>
      </div> 
      <div className="box" id="box3">
        <center><h2>How we help you </h2> </center>
        <div className="box" id="box4">
          <center><img src={icon1}/></center>
          <center><h3>Curated Study Resources</h3></center>
          <center><div>We curate the best study materials, ensuring you have easy access to top-quality content.</div></center>
        </div>
        <div className="box" id="box5">
          <center><img src={icon2}/></center>
          <center><h3>Interactive Learning</h3></center>
          <center><div>We offer quizzes and practice tests to make learning engaging and effective</div></center>
        </div>
        <div className="box" id="box6">
          <center><img src={icon3}/></center>
          <center><h3>Teacher Profiles</h3></center>
          <center><div>You can learn more about your teachers and the courses they teach</div></center>
        </div>
        <div className="box" id="box10">
          <center><h3>Navigation</h3></center>
          <center><img src={navi}/></center>
          <center><div>At Learnify, we're here to lead you to your learning destination, hassle-free</div></center>
        </div>
       
        </div>
      </div>
      
      <div className="box"  id="box7">
        <div className="box" id="box8">
         <center><h1> Embrace the Universe of Knowledge.</h1></center>
    
         </div>
         <div className="box" id="box9">
         <img src={sideimg}/>
       
         </div>  
     
      </div>
      </body>
      </html>
      );
    }