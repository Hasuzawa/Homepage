import React from "react";
import {Introduction, WorkExperience, Projects, Skill , Contact} from "./contents.jsx";

export const TabIndex = Object.freeze({
    introduction: 0,
    workExperience: 1,
    projects: 2,
    skill: 3,
    contact: 4
});

export default class Content extends React.Component {
    constructor(props){
        super(props);

        this.displayTabContent = this.displayTabContent.bind(this);
    }

    displayTabContent(){

        switch(this.props.selectedTab){
            case TabIndex.introduction: return <Introduction />;
            case TabIndex.workExperience: return <WorkExperience />;
            case TabIndex.projects: return <Projects />;
            case TabIndex.skill: return <Skill />;
            case TabIndex.contact: return <Contact />;
            default: return null;
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