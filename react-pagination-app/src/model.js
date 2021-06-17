
import React from 'react';
import './App.css'


const Model = (props) => (
    <div>
    
<div className="card">
  <img src={props.src} alt="Avatar"/>
  <div className="container">
    <h4><b>{props.first} {props.last}</b></h4> 
    <p>{props.email}</p> 
    <p>Employee id: {props.id}</p> 
  </div>
</div>
</div>
);
export default Model;
