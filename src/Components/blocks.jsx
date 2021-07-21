import React from "react";

export function Job (props){
    return (
        <div>
            <h3>{props.jobTitle}</h3>
            <span>{props.startDate} - {props.endDate}</span>
            <span>{props.company}</span>
            <p>{props.description}</p>
            {/* image */}
        </div>
    );
}