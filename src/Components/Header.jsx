import React from "react";

import buttons from "./buttons.json";

import "./responsive.scss";
import "./style.scss";

export default class Header extends React.Component{
    constructor(props){
        super(props);

        this.renderButtons = this.renderButtons.bind(this);

    }

    
    renderButtons(){
        return (
            Object.keys(buttons).map((button, i) =>
                <button
                    key={buttons[button].id}
                    id={buttons[button].id}
                    onClick={this.props.handleClick}
                    className={"switch_tab " + (this.props.selectedTab === buttons[button].id ? "selected" : "")}
                >
                    {buttons[button].buttonName}
                </button>
            )
        );
    }


    render(){
        return (
        <nav className="header">
            {/* should not have word here, only tabs should have word at the header bar*/}
            <span>Hasuzawa@Home</span>
            <div className="filler" />
            {this.renderButtons()}
            <div className="filler" />
            <DropdownMenu
                handleClick={this.props.handleClick}
                selectedTab={this.props.selectedTab}
                buttons={this.renderButtons()}
            />
            <ToTheTopButton />
            <button className="fold_button" onClick={this.props.handleFold}>{this.props.bannerFolded ? "▼" : "▲"}</button>
        </nav>
        );
    }
}


const DropdownMenu = (props) => (
        <div className="dropdown_menu">
            <button className="dropdown_menu--icon">≡</button>
            <div className="dropdown_menu--content">
                {props.buttons}
            </div>
        </div>
);


const ToTheTopButton = () => (
    <button className="toTheTopButton" onClick={()=>window.location.href="#root"}/>
);