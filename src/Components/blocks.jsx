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
        //console.log(props.photos.photo_0.caption);
        //console.log(props.photos["photo_0"].caption);

        console.log(props.photos[0].caption);
        console.log(props.photos[1].caption);



        var numberOfPhoto = 0;
        //probably pass JS object as photos into this component
        numberOfPhoto = Object.keys(props.photos).length;
        console.log(numberOfPhoto);

        if (numberOfPhoto <= 0){
            let errorMessage = `cannot create gallery with improper amount of photo: ${numberOfPhoto}`;
            throw TypeError(errorMessage);
        }

        this.state = {
            numberOfPhoto: numberOfPhoto,
            selectedIndex: 0
        };

        this.handleClick = this.handleClick.bind(this);
        this.renderImage = this.renderImage.bind(this);
    }




    handleClick(e){
        var change = 0;

        switch(e.target.id){
            case "+": change = 1; break;
            case "-": change = -1; break;
            default: break;
        }

        const numberOfPhoto = this.state.numberOfPhoto;
        var newIndex = (this.state.selectedIndex + change + numberOfPhoto) % numberOfPhoto;

        console.log("change is", change);
        console.log("N is", numberOfPhoto);
        console.log("newIndex is", newIndex);

        this.setState({selectedIndex: newIndex});
    }


    renderImage(){
        var selectedPhoto = this.props.photos[this.state.selectedIndex];
        console.log("selectedPhoto is ", selectedPhoto);
        //use filter, we will always only render one image
        //list jsx render
        return(
            <>
                <img
                    src={selectedPhoto.src}
                    alt={selectedPhoto.alt}
                />
                <button id="+" onClick={this.handleClick}>◀</button>
                <span>{selectedPhoto.caption}</span>
                <button id="-" onClick={this.handleClick}>▶</button>
            </>
        );
    }




    render(){
        return(
            <div className="gallery">
                {this.renderImage()}


                {/* 2 arrow that pop up when hovered over photo */}
            </div>
        );
    }
}