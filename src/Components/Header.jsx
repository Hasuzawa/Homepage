import React from "react";
import {TabIndex} from "./enum.js";
import "./style.css";

export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.handleClick(e.target.id);
        //console.log(this.props.selectedTab);
    }

    render(){
        return (
        <nav className="header">
            {/* should not have word here, only tabs should have word at the header bar*/}
            <span>Hasuzawa@Home</span>
            <div className="filler"></div>
            <button id={TabIndex.introduction} onClick={this.handleClick} className={this.props.selectedTab === TabIndex.introduction ? "selected" : null}>Intro</button>
            <button id={TabIndex.workExperience} onClick={this.handleClick} className={this.props.selectedTab === TabIndex.workExperience ? "selected" : null}>Experience</button>
            <button id={TabIndex.expertise} onClick={this.handleClick} className={this.props.selectedTab === TabIndex.expertise ? "selected" : null}>Expertise</button>
            <button id={TabIndex.knowledge} onClick={this.handleClick} className={this.props.selectedTab === TabIndex.knowledge ? "selected" : null}>Knowledge</button>
            <button id={TabIndex.contact} onClick={this.handleClick} className={this.props.selectedTab === TabIndex.contact ? "selected" : null}>Contact</button>
            <div className="filler"></div>
            {/* could place some font-change / light, dark mode switch button here etc */}
        </nav>
        );
    }
}