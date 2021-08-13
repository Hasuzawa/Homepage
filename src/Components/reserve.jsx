/*These are codes that are not used in the project. I might need them for another project so
  I leave them here.
  */

import React from "react";

//Gallery component

class Gallery extends React.Component{
    constructor(props){
        super(props);


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
        this.renderButton = this.renderButton.bind(this);
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
        console.log(selectedPhoto.src);
        if (this.props.imageType === "pdf"){
            return (
                <>  
                    <embed
                        className="gallery--image"
                        src={selectedPhoto.src}
                        width={this.props.image_width}
                        height={this.props.image_height}
                        type="application/pdf"
                    />
                </>

            );
        } else {
            return(
                <>  
                    <img
                        className="gallery--image"
                        src={selectedPhoto.src}
                        alt={selectedPhoto.alt}
                        width={this.props.image_width}
                        height={this.props.image_height}
                    />
                </>
            );
        }
    }

    renderButton(){
        var selectedPhoto = this.props.photos[this.state.selectedIndex];

        if (this.state.numberOfPhoto === 1){
            return (
                <>
                    <p className="gallery--caption">{selectedPhoto.caption}</p>
                </>
            );
        } else {
            return (
                <>
                    <button id="+" onClick={this.handleClick}>◀</button>
                    <p className="gallery--caption">{selectedPhoto.caption}</p>
                    <button id="-" onClick={this.handleClick}>▶</button>
                </>
            );
        }
    }


    render(){

        var selectedPhoto = this.props.photos[this.state.selectedIndex];
        console.log("selectedPhoto is ", selectedPhoto);

        return(
            <div className="gallery">
                <div>
                    {this.renderImage()}
                </div>
                <div>
                    {this.renderButton()}
                </div>
            </div>
        );
    }
}



function Language(props){
    return (
        <div className="language">
            <h3 className="language--heading">{props.heading}</h3>
            <div>
                <p className="language--description">{props.description}</p>
                <Gallery
                    photos={props.photos}
                    imageType={props.imageType}
                    image_width={props.image_width}
                    image_height={props.image_width}
                />
            </div>
        </div>
    );
}


/*******************/

//more concise functional component made
class DropdownMenu extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="dropdown_menu">
                <button className="dropdown_menu--icon">≡</button>
                <div className="dropdown_menu--content">
                    {this.props.buttons}
                </div>
            </div>
        );
    }
}

//shorter component made
function ToTheTopButton(){
    return (
        <button className="toTheTopButton" onClick={()=>window.location.href="#root"}/>
    );
}

//not used
var buttons = {
    "introduction": {
        "id": 0,
        "buttonName": "Intro"
    },
    "workExperience": {
        "id": 1,
        "buttonName": "Experience"
    },
    "projects": {
        "id": 2,
        "buttonName": "Projects"
    },
    "expertise": {
        "id": 3,
        "buttonName": "Skill"
    },
    "contact": {
        "id": 4,
        "buttonName": "Contact"
    }
}