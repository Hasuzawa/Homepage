import React from "react";
import {TabIndex} from "./enum.js";
import {Introduction, WorkExperience, Projects, Skill , Contact} from "./contents.jsx";

export default class Content extends React.Component {
    constructor(props){
        super(props);
        this.displayTabContent = this.displayTabContent.bind(this);
    }

    displayTabContent(){
        console.log(this.props.selectedTab);
        switch(this.props.selectedTab){
            case TabIndex.introduction: return <Introduction />;
            case TabIndex.workExperience: return <WorkExperience />;
            case TabIndex.expertise: return <Projects />;
            case TabIndex.knowledge: return <Skill />;
            case TabIndex.contact: return <Contact />;
            default: console.log("wrong"); return null;
          }
    }

    render(){
        return (
            <>
                {this.displayTabContent()}
            </>
        );
    }
}