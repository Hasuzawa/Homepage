import React from "react";
import "./block.css";

export function Job (props){
    return (
        <div className="job">
            <h3>{props.jobTitle}</h3>
            <span>{props.startDate} - {props.endDate}</span>
            <span>{props.company}</span>
            <p>{props.description}</p>
            {/* image */}
        </div>
    );
}