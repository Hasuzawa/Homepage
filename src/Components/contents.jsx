import React from "react";
import {Job} from "./blocks.jsx";
import "./style.scss";

import {Gallery, Language} from "./blocks.jsx";
import { language_English_photos, language_Japanese_photos, language_German_photos, language_Chinese_photos } from "./photos.js";

//import logo from "/logos/C++_logo.svg";

//import "./responsive.scss";


export function Introduction (){
    return (
        <div className="content introduction">
            <div className="introduction--section0">
                <h1>Hasuzawa@Home</h1>
                <p>
                    Welcome to my homepage. This is primarily my portfolio.<br />
                    I have gathered all my work experiences, skills on this website. <br />
                    For the latest progress on projects, please visit my <a href="https://github.com/Hasuzawa">GitHub</a>.
                </p>
            </div>
            <div className="introduction--section1">
                <h1>Values</h1>
                <div className="values">
                    <div className="value">
                        <h2>Efficiency</h2>
                        <p>In the digital world, there are infinite ways to implement most idea but only a small subset is efficient.
                            To be efficient is to pursue that singularity among possibilities.
                        </p>
                    </div>
                    <div className="value">
                        <h2>Timely</h2>
                        <p>There is merit in perfection and there is also virtue in a timely solution. I know the importance of precious
                            time and make the best of it during and outside work.
                        </p>
                    </div>
                    <div className="value">               
                        <h2>Initiative</h2>
                        <p>The modern world changes fast. I constantly learn new techs, languages, frameworks and improve my skill
                            to prepare for unforeseen challenges and opportunities.
                        </p>
                    </div>
                </div>
            </div>
            <div className="introduction--section2">    
                <h1>About me</h1>
                <p>I am a fullstack developer and system engineer currently working in Osaka, Japan.</p>
                <div className="domains">
                    <div className="domain">
                        <h2>Frontend</h2>
                        <p>I have used HTML, CSS and JavaScript to design frontend for fetching data input and display HLML response.
                            I also have project done using React and Sass.
                        </p>
                    </div>
                    <div className="domain">
                        <h2>Backend</h2>
                        <p>I have implemented a backend to a intranet system using Java and SQL connected to a PostgreSQL database.
                            I also know Python, Django and C++.
                        </p>
                    </div>
                    <div className="domain">
                        <h2>System Engineer</h2>
                        <p>content_here</p>
                    </div>
                    <div className="domain">
                        <h2>Soft Skills</h2>
                        <p>I am a polygot in real life and can speak a total of 6 languages and dialects, including English, German, Japanese and Chinese.
                            I am invaluable in an increasingly interconnected world, in which diverse culture and nationality is the norm.
                        </p>
                    </div>
                </div>
            </div>
            <div className="introduction--section3">
                <h1>Interested?</h1>
                <p>
                    I am actively looking for job opportunities.
                    I am willing to relocate to another city or country while preparing for the job beforehand if I receive a formal offer.
                </p>
            </div>
        </div>
    );
}


export function WorkExperience(){
    return (
        <div className="content work-experience">
            {/* you would likely further refactor this into json in the future*/}
            <Job
                jobTitle="Programmer -> System&nbsp;Engineer"
                startDate="15&nbsp;March&nbsp;2021"
                endDate="current"
                company="NetValue Co., Ltd. (Japan)"
                company_url="https://www.netvalue-io.com/"
                techs={["HTML","CSS","JavaScript","Java"]}
                description="I worked as a programmer and later system engineer. I implemented both frontend and backend of a intranet sytem.
                    In the forntend, I used HTML, JavaScript, CSS to display data and send information to the backend by API. In the backend,
                    I used Java, SQL to handle downloading, returning enquired information or updating the database."
            />
        </div>
    );
}


export function Projects(){
    return (
        <div className="content projects">

            <div className="project">
                <h3><u>Project 1: Website with React</u></h3>
                <div>
                    {/* some tags, e.g. HTML, CSS, JavaScript */}
                </div>
                

                <div>
                    <h4>This project features:</h4>
                    <div>
                        <ul>React, JSX, JavaScript</ul>
                        <ul>HTML, CSS, Scss</ul>
                        <ul>responsive design</ul>
                    </div>
                    This website is written by me. I used the React framework along with the the standard suite HTML, CSS, JavaScript.<br />
                    I want to keep it simple and it has no dependency on online content nor library, meaning that you can download it and host a local server to preview it even when offline.
                    I also used Scss to refactor the CSS.<br />
                    The source code is available at <a href="https://github.com/Hasuzawa/homepage">GitHub</a>.
                </div>
            </div>
        </div>
    );
}


export function Skill(){
    return (
        <div className="content skills">

            <details open className="skill">
                <summary>Programming Languages</summary>
                <div>
                    <img className="skill--logo" src="/logos/C_logo.svg" alt="C"/>
                    <img className="skill--logo" src="/logos/C++_logo.svg" alt="C++"/>
                    <img className="skill--logo" src="/logos/Java_logo.svg" alt="Java"/>
                    <img className="skill--logo" src="/logos/Javascript_logo.svg" alt="JavaScript"/>
                    <img className="skill--logo" src="/logos/Python_logo.svg" alt="Python"/>
                </div>
            </details>

            <details open className="skill">
                <summary>Web Development</summary>
                <div>
                    <img className="skill--logo" src="/logos/HTML5_logo.svg" alt="HTML"/>
                    <img className="skill--logo" src="/logos/CSS3_logo.svg" alt="CSS"/>
                    <img className="skill--logo" src="/logos/React_logo.svg" alt="React"/>
                    <img className="skill--logo" src="/logos/Sass_logo.svg" alt="Sass"/>
                    <img className="skill--logo" src="/logos/Django_logo.svg" alt="Django"/>
                </div>
            </details>

            <details open className="skill">
                <summary>Technology</summary>
                <h3>Networking</h3>
                <p>I am a qualified .
                    I have knowledge on HTTP, IP addresses, subnet, OSI model, server.
                </p>
                <h3>Cyber Security</h3>
                <p></p>
            </details>

            <details open className="skill">
                <summary>Languages</summary>

                <Language
                    heading="English"
                    description="I have lived in a city bilingual in English and Chinese for over 20 years. The vast majority of my education is completed using English."
                    photos={language_English_photos}
                    imageType="pdf"
                    image_width="400px"
                    image_height="700px"
                />
                
                <Language
                    heading="Japanese"
                    description="I am working in Japan and has passed the highest level of the most recognised Japanese language exam."
                    photos={language_Japanese_photos}
                    imageType="pdf"
                    image_width="400px"
                    image_height="700px"
                />

                <h3>German</h3>
                    <blockquote>

                    </blockquote>
                    <p>
                        I can understand daily life German and can read German news and publications.
                    </p>
                <h3>Chinese</h3>
                    <blockquote>

                    </blockquote>
                    <p>
                        I am a native speaker of Chinese and two more dialects.
                    </p>
            </details>
        </div>
    );
}

export function Contact(){
    return (
        <div className="content">
            <h1>5th page</h1>
            <p>
                I can be reached at <a href="https://github.com/Hasuzawa">GitHub</a> or Linkdeln. This website is in fact hosted on GitHub and you can see the source code there.<br />
                Collaboration, enquiry, job offer are all welcomed.
            </p>
            {/* format it better later */}
        </div>
    );
}