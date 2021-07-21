import React from "react";
import {TabIndex} from "./enum.js";

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
        <nav className = "tabMenu">
          <button id={TabIndex.introduction} onClick={this.handleClick}>Intro</button>
          <button id={TabIndex.workExperience} onClick={this.handleClick}>Experience</button>
          <button id={TabIndex.expertise} onClick={this.handleClick}>Expertise</button>
          <button id={TabIndex.knowledge} onClick={this.handleClick}>Knowledge</button>
          <button id={TabIndex.contact} onClick={this.handleClick}>Contact</button>
        </nav>
        );
    }
}