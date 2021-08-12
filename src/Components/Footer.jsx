import React from "react";
import "./style.scss";
import "./responsive.scss";
import { TabIndex } from "./Content.jsx";

export default function Footer(props){
    return (
        <div className="footer">
            <span className="footer--site">Hasuzawa@Home</span>
            <span id={"footerCell" + TabIndex.introduction} tabIndex={TabIndex.introduction} className="footer--intro" onClick={props.handleClick}>Intro</span>
            <span id={"footerCell" + TabIndex.workExperience} tabIndex={TabIndex.workExperience} className="footer--experience" onClick={props.handleClick}>Experience</span>
            <span id={"footerCell" + TabIndex.projects} tabIndex={TabIndex.projects} className="footer--projects" onClick={props.handleClick}>Projects</span>
            <span id={"footerCell" + TabIndex.skill} tabIndex={TabIndex.skill} className="footer--skill" onClick={props.handleClick}>Skill</span>
            <span id={"footerCell" + TabIndex.contact} tabIndex={TabIndex.contact} className="footer--contact" onClick={props.handleClick}>Contact</span>

            <a href="https://github.com/Hasuzawa/homepage" className="footer--link">
                <img id="5" className="footer--GitHub" src="logos/GitHub_logo.png" alt="repository of webpage"/>
            </a>
        </div>
    );
}