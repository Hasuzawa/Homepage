import React from "react";
import "./block.css";

export function Job(props){
    return (
        <div className="job">
            <div>
                <h3>{props.jobTitle}</h3>
                <span>{props.startDate} - {props.endDate}</span>
            </div>
            <div>
                <span>{props.company}</span>
            </div>
            <div>
                <p>{props.description}</p>
                {/* image gallery */}
                <img />
            </div>
        </div>
    );
}


export class Gallery extends React.Component{
    constructor(props){
        super(props);

        var numberOfPhoto = 0;
        //probably pass JS object as photos into this component
        numberOfPhoto = this.props.photos.legnth;
        console.log(numberOfPhoto);

        this.state = {selectedPhoto: 0};

        this.renderImage = this.renderImage.bind(this);
    }

    renderImage(){
        return(
            <>
                <img />
                <span>photo's caption</span>
            </>
        );
    }


    render(){
        return(
            <div>
                {this.renderImage()}
                {/* image */}
                {/* 2 arrow that pop up when hovered over photo */}
            </div>
        );
    }
}