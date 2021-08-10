import React from "react";


import "./block.scss";
import "./responsive.scss";



export function Job(props){
    return (
        <div className="job">
            {/* timeline */}
{/*             <div className="job--timeline">
                <div className="timeline_symbol" />
            </div> */}

            <div className="job--boxed">
                <div className="job--boxed--first_line">
                    <h2 className="job--job_title">{props.jobTitle}</h2>
                    <span className="job--date">{props.startDate} - {props.endDate}</span>
                </div>
                <div className="job--boxed--second_line">
                    <span className="job--company"><a href={props.company_url}>{props.company}</a></span>
                </div>
                <div className="job--boxed--third_line">
                    <span>Techs used:</span>
                    <StringToLogo techs={props.techs}/>
                </div>
                <div className="job--boxed--fourth_line" id="job--last_section">
                    <div className="job--description" id="job--description">{props.description}</div>
                    <img className="job--photo" id="job--photo" src="/logos/C_logo.svg" alt="C"></img>
                    {/* image gallery */}
                </div>
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
        //console.log(props.photos[1].caption);



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



export function Language(props){
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



/*************************/

export class StringToLogo extends React.Component{

    static toLogo = {
        "C": <img className="skill_logo" src="/logos/C_logo.svg" alt="C"/>,
        "C++": <img className="skill_logo" src="/logos/C++_logo.svg" alt="C++"/>,
        "Java": <img className="skill_logo" src="/logos/Java_logo.svg" alt="Java"/>,
        "JavaScript": <img className="skill_logo" src="/logos/Javascript_logo.svg" alt="JavaScript"/>,
        "Python": <img className="skill_logo" src="/logos/Python_logo.svg" alt="Python"/>,

        "HTML": <img className="skill_logo" src="/logos/HTML5_logo.svg" alt="HTML"/>,
        "CSS": <img className="skill_logo" src="/logos/CSS3_logo.svg" alt="CSS"/>,
        "React": <img className="skill_logo" src="/logos/React_logo.svg" alt="React"/>,
        "Sass": <img className="skill_logo" src="/logos/Sass_logo.svg" alt="Sass"/>,
        "Django": <img className="skill_logo" src="/logos/Django_logo.svg" alt="Django"/>,
    }

    constructor(props){
        super(props);

        this.stringToJSX = this.stringToJSX.bind(this);
    }

    stringToJSX(string, index){
        let logo_JSX = StringToLogo.toLogo[string];
        console.log(index);
        return React.cloneElement(logo_JSX, {key: index});
    }

    render(){
        return this.props.techs.map((str, index) => this.stringToJSX(str, index));
    }

}