import React from "react";
import "./block.css";

export function Job (props){
    return (
        <div className="job">
            <div>
                <h3>{props.jobTitle}</h3>
                <span>{props.startDate} - {props.endDate}</span>
            </div>
            <div>
                <span>{props.company}</span>
            </div>
            <p>{props.description}</p>
            {/* image */}
        </div>
    );
}