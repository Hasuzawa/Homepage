import React from "react";
import "./style.scss";
import buttons from "./buttons.json";

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
                    className={this.props.selectedTab === buttons[button].id ? "selected" : null}
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
            <div className="filler"></div>
            {this.renderButtons()}
            <div className="filler"></div>
            <button className="fold_button" onClick={this.props.handleFold}>{this.props.bannerFolded ? "▼" : "▲"}</button>

            {/* special bar for small screen, e.g. phone */}
            {/* could place some font-change / light, dark mode switch button here etc */}
        </nav>
        );
    }
}