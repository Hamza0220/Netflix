import React from "react";
import "./card.scss"; // Use PascalCase for file names for consistency

function Card(props) {
  return (
    
    <div className="container">
      
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt="series image" /> 
        <div className="card-info">
          <span className="card-category">{props.category}</span>
          <h3 className="card-title">{props.title}</h3>
          <a href={props.link} target="_blank" rel="noopener noreferrer"> 
            <button className="watch-button">Watch Now</button> 
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Card;
