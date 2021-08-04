import React from "react";
import "./block.scss";

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

        //testing
        console.log("testing");
        console.log(props);
        console.log(props.photos.photo_0.caption);
        console.log(props.photos["photo_0"].caption);



        var numberOfPhoto = 0;
        //probably pass JS object as photos into this component
        numberOfPhoto = Object.keys(props.photos).length;
        console.log(numberOfPhoto);

        if (numberOfPhoto <= 0){
            throw TypeError("cannot create gallery with improper amount of photo: {0}".format(numberOfPhoto));
        }

        this.state = {selectedIndex: 0};

        this.handleClick = this.handleClick.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }




    handleClick(e){
        var change = 0;
        switch(e.target.id){
            case "+": change = 1;
            case "-": change = -1;
            default: break;
        }
        console.log(change);

        var newIndex = this.state.selectedIndex + change;
        
        console.log(newIndex);

    
    }


    renderImage(){
        //list jsx render
        return(
            <>
                <img />
            </>
        );
    }


    render(){
        return(
            <div className="gallery">
                {this.renderImage()}

                {/* a pair of > and < for the buttons */}
                <button id="+"></button>
                <button id="-"></button>
                <span></span>
                {/* image */}
                {/* 2 arrow that pop up when hovered over photo */}
            </div>
        );
    }
}