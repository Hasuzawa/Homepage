import React from "react";

import "./style.scss";
import "./responsive.scss";

const buttons = Object.freeze({
    0: "Intro",
    1: "Experience",
    2: "Projects",
    3: "Skill",
    4: "Contact"
});

export default class Header extends React.Component{
    constructor(props){
        super(props);

        this.renderButtons = this.renderButtons.bind(this);
    }

    
    renderButtons(){
        return (
            Object.keys(buttons).map((buttonID, i) =>
                <button
                    key={i}
                    id={"headerCell" + buttonID}
                    onClick={this.props.handleClick}
                    className={"switch_tab" + (this.props.selectedTab === parseInt(buttonID) ? " selected" : "")}
                    testid={"headerButton" + i}
                >
                    {buttons[buttonID]}
                </button>
            )
        );
    }


    render(){
        return (
        <nav className="header">
            <span>Hasuzawa@Home</span>
            <div className="filler" />
            <div className="tab_menu">
                {this.renderButtons()}
            </div>
            <div className="filler" />
            <DropdownMenu
                handleClick={this.props.handleClick}
                selectedTab={this.props.selectedTab}
                buttons={this.renderButtons()}
            />
            <ToTheTopButton />
            <button
                className="fold_button"
                onClick={this.props.handleFold}
                testId="fold_button"
            >
                {this.props.bannerFolded ? "▼" : "▲"}
            </button>
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