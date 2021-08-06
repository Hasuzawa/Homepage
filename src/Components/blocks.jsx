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

        if ( !Number.isInteger(numberOfPhoto) || numberOfPhoto <= 0){
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

        return(
            <>  
                <div>
                    <img
                        src={selectedPhoto.src}
                        alt={selectedPhoto.alt}
                        width={this.props.image_width}
                        height={this.props.image_height}
                    />
                </div>
                <div>
                    <button id="+" onClick={this.handleClick}>◀</button>
                    <p>{selectedPhoto.caption}</p>
                    <button id="-" onClick={this.handleClick}>▶</button>
                </div>
            </>
        );
    }




    render(){
        return(
            <div className="gallery">
                {this.renderImage()}
            </div>
        );
    }
}



export function Language(props){
    return (
        <div className="language">
            <h3>{props.heading}</h3>
            <div>
                <p>{props.description}</p>
                <Gallery
                    photos={props.photos}
                    image_width={props.image_width}
                    image_height={props.image_width}
                />
            </div>
        </div>
    );
}