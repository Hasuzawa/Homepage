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
        <nav className="tab-menu">
          <button id={TabIndex.introduction} onClick={this.handleClick} className="tab">Intro</button>
          <button id={TabIndex.workExperience} onClick={this.handleClick} className="tab">Experience</button>
          <button id={TabIndex.expertise} onClick={this.handleClick} className="tab">Expertise</button>
          <button id={TabIndex.knowledge} onClick={this.handleClick} className="tab">Knowledge</button>
          <button id={TabIndex.contact} onClick={this.handleClick} className="tab">Contact</button>
        </nav>
        );
    }
}