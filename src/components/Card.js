import React from 'react'

//Css
import '../css/Card.css';

export const Card = (props) => {
    return (
        <a href={props.link} className="card">
            
            <img src={props.cover} className="card_image"></img>
            <h1 className="card_number">{props.number + 1}#</h1>
            <div className="card_info">
            <p  className="card_text">{props.line1}</p>
            <p  className="card_text">{props.line2}</p>
            <p  className="card_text">{props.line3}</p>
            </div>
        </a>
        
    )
}
