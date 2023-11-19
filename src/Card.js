import React from "react";
import img from "./images/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"

export default function Card(prop){
    return(
        <div class="card">
        <img src={img} class="card-img" />
        <p class="card-name">{prop.name}</p>
        <p class="card-dept">{prop.dept}</p>        
        <p class="card-description">{prop.desc}</p>
        </div>
    )
}