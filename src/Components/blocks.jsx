import React, { useState, useEffect } from "react";


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

/*
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
*/

/*
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
*/


/*************************/

export class StringToLogo extends React.Component{

    static toLogo = {
        "C": <img className="skill_logo" src="/logos/C_logo.svg" alt="C"/>,
        "C++": <img className="skill_logo" src="/logos/C++_logo.svg" alt="C++"/>,
        "Java": <img className="skill_logo" src="/logos/Java_logo.svg" alt="Java"/>,
        "JavaScript": <img className="skill_logo" src="/logos/Javascript_logo.svg" alt="JavaScript"/>,
        "Python": <img className="skill_logo" src="/logos/Python_logo.svg" alt="Python"/>,
        "TypeScript": <img className="skill_logo" src="/logos/Typescript_logo.svg" alt="TypeScript"/>,


        "HTML": <img className="skill_logo" src="/logos/HTML5_logo.svg" alt="HTML"/>,
        "CSS": <img className="skill_logo" src="/logos/CSS3_logo.svg" alt="CSS"/>,
        "React": <img className="skill_logo" src="/logos/React_logo.svg" alt="React"/>,
        "Sass": <img className="skill_logo" style={{"width": "80px"}} src="/logos/Sass_logo.svg" alt="Sass"/>,
        "Django": <img className="skill_logo" style={{"width": "100px"}} src="/logos/Django_logo.svg" alt="Django"/>,

        "Gimp": <img className="skill_logo" src="/logos/Gimp_logo.svg" alt="Gimp" style={{objectFit: "contain"}}/>,
        "Inkscape": <img className="skill_logo" src="/logos/Inkscape_logo.svg" alt="Inkscape"/>,

        //"GraphQL": <img className="skill_logo" src="/logos/GraphQL_logo.svg" alt="GraphQL"/>,

        "Apache": <img className="skill_logo" src="/logos/Apache_logo.png" alt="Apache"/>,

        "PostgreSQL": <img className="skill_logo" src="/logos/PostgreSQL_logo.svg" alt="PostgreSQL"/>

    }

    constructor(props){
        super(props);

        this.stringToJSX = this.stringToJSX.bind(this);
    }

    stringToJSX(string, index){
        let logo_JSX = StringToLogo.toLogo[string];
        if (logo_JSX === undefined){
            throw TypeError(`The following string does not a corresponding logo: ${string}`)
        }
        return React.cloneElement(logo_JSX, {key: index});
    }

    render(){
        return this.props.techs.map((str, index) => this.stringToJSX(str, index));
    }

}

/******************************/

const languages = {
    0: {
        heading: "English",
        image: {src: "/pdf/TOEIC_965_certificate_redacted.pdf#toolbar=0",
                alt: "TOEIC 965"},
        text: "I have lived in a city bilingual in English and Chinese for over 20 years. The vast majority of my education is completed using English."
    },
    1: {
        heading: "Japanese",
        image: {src: "/pdf/JLPT_N1_redacted.pdf#toolbar=0",
                alt: "Japanese Language Proficiency Test N1"},
        text: "I am working in Japan and has passed the highest level of the most recognised Japanese language exam."
    },
    2: {
        heading: "German",
        image: {src: "/pdf/Goethe_Institut_B1_reading_certificate_redacted.pdf#toolbar=0",
                alt: "Goethe Institut B1 Reading passed"},
        text: "I can understand daily life German and can read German news and publications."
    },
    3: {
        heading: "Chinese",
        image: {src: "/pdf/HSK_level_6_certificate_redacted.pdf#toolbar=0",
                alt: "Chinese Proficiency Test Level 6"},
        text: "I am a native speaker of Chinese and two more dialects."
    }
}


export class Languages extends React.Component{
    constructor(props){
        super(props);

        this.state = {load: false};

        this.renderButton = this.renderButton.bind(this);
    }

    renderButton(){
        return (
            <button
                className={"languages--button" + (this.state.load ? " loaded" : "")}
                onClick={()=>this.setState({load: !this.state.load})}
            >
                {this.state.load ? "Hide Certificate" : "Show Certificate"}
            </button>
        );
    }


    render(){
        return(
            <>
                <summary>Languages</summary>
                <div className="languages-preface">
                    <p className="languages-explanation">
                        Due to privacy and security concern, personal information have been redacted.<br />
                        I can send original versions to verify I am the owner if you contact me directly.
                    </p>
                    <hr width="100%"/>
                    <p className="languages-explanation">
                        Click the button to load certificates,<br />it might take a few seconds.
                    </p>
                    {this.renderButton()}
                </div>
                <div className="skill--languages">
                    <Language
                        id="0"
                        load={this.state.load}
                    />
                    <Language
                        id="1"
                        load={this.state.load}
                    />
                    <Language
                        id="2"
                        load={this.state.load}
                    />
                    <Language
                        id="3"
                        load={this.state.load}
                    />
                </div>
            </>
        );
    }
}

class Language extends React.Component{
    constructor(props){
        super(props);

        this.getImages = this.getImages.bind(this);
    }

    getImages(language){

        return (
            <embed
                id="language--image"
                className="language--pdf"
                src={language.image.src}
                type="application/pdf"
                alt={language.image.alt}
            />
        );
    }


    render(){
        const id = this.props.id;
        var language = languages[id];

        return (
            <div className="skill--language">
                <h3>{language.heading}</h3>
                {this.props.load ? this.getImages(language) : null}
                <p className="language--description">{language.text}</p>
            </div>
        );
    }
}