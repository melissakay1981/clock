import React from "react";
import { Navigation } from "react-router-dom"

function Welcome(props) {
  return (
    <div className="Welcome"> 
   <h1>Welcome,{props.name}</h1>
   
    </div>
  );
}

export default Welcome;