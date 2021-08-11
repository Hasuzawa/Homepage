import React from "react";
import "./style.scss";
import "./responsive.scss";

export default function Footer(props){
    return (
        <div className="footer">
            <span className="footer--site">Hasuzawa@Home</span>
            <span id="0" className="footer--intro" onClick={props.handleClick}>Intro</span>
            <span id="1" className="footer--experience" onClick={props.handleClick}>Experience</span>
            <span id="2" className="footer--projects" onClick={props.handleClick}>Projects</span>
            <span id="3" className="footer--skill" onClick={props.handleClick}>Skill</span>
            <span id="4" className="footer--contact" onClick={props.handleClick}>Contact</span>

            {/*add some github icon link and contact info */}
        </div>
    );
}