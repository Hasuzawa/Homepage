import React from "react";
import "./style.scss";
import "./responsive.scss";
import { TabIndex } from "./Content.jsx";

export default function Footer(props){
    return (
        <div className="footer">
            <span className="footer--site">Hasuzawa@Home</span>
            <button id={"footerCell" + TabIndex.introduction} className="footer--button" onClick={props.handleClick} tabIndex="0">Intro</button>
            <span id={"footerCell" + TabIndex.workExperience} className="footer--experience" onClick={props.handleClick} tabIndex="0">Experience</span>
            <span id={"footerCell" + TabIndex.projects} className="footer--projects" onClick={props.handleClick} tabIndex="0">Projects</span>
            <span id={"footerCell" + TabIndex.skill} className="footer--skill" onClick={props.handleClick} tabIndex="0">Skill</span>
            <span id={"footerCell" + TabIndex.contact} className="footer--contact" onClick={props.handleClick} tabIndex="0">Contact</span>

            <a href="https://github.com/Hasuzawa/homepage" target="_blank" rel="noreferrer noopener" id="footer--link">
                <img className="footer--GitHub" src="logos/GitHub_logo.png" alt="repository of webpage"/>
            </a>
        </div>
    );
}