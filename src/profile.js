import React from "react"
import "./profile.css"
import data from './data';
import Card from "./Card"

export default  function Profile(){
  const cardElement=data.map(item=>
    {
      return <Card
          {...item}
          />
    })
  return(
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Spotify - Web Player: Music for everyone</title>
    <meta name="description" content="Spotify clone made using html,css" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="./assets/logo.png" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'/>
  </head>
  <body className="profile">
    
    <div class="container">
      <div class="sidebar">
        <h1>Learnify</h1>
        <div class="top-icons">
          <div class="link-flex">
            <a href="#">Home</a>
          </div>
          <div class="link-flex">
            <a href="#">About us</a>
          </div>
          <div class="link-flex">
            <a href="#">Help</a>
          </div>
          <div class="link-flex">
            <a href="#">Quiz</a>
          </div>
          <div class="link-flex">
            <a href="#">Map</a>
          </div>
        </div>
        <div class="library">
        </div>
      </div>
      <div class="main-content">
        <div class="link-flex">
          <i class='bx bx-search'></i>  
          <input id ="search" type="text" placeholder="search learnify.in"/>
        </div>
        <h3>Teachers</h3>
        <div class="cards-container">
          {cardElement}
        </div>
      </div>
      </div>
  </body>
</html>
);
}
