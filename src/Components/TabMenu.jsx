import React from "react";
import {TabIndex} from "./enum.js";
import "./style.css";

export class TabMenu extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.handleClick(e.target.id);
    }

    render(){
        return (
        <nav className="header">
          <span>Hasuzawa@Home</span>
          <button id={TabIndex.introduction} onClick={this.handleClick}>Intro</button>
          <button id={TabIndex.workExperience} onClick={this.handleClick}>Experience</button>
          <button id={TabIndex.expertise} onClick={this.handleClick}>Expertise</button>
          <button id={TabIndex.knowledge} onClick={this.handleClick}>Knowledge</button>
          <button id={TabIndex.contact} onClick={this.handleClick}>Contact</button>
          {/* could place some font-change / light, dark mode switch button here etc */}
        </nav>
        );
    }
}