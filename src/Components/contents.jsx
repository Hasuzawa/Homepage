import React from "react";
import {Job} from "./blocks.jsx";
import "./style.scss";

import {Gallery, Language} from "./blocks.jsx";
import { language_English_photos, language_Japanese_photos, language_German_photos, language_Chinese_photos } from "./photos.js";
import { StringToLogo } from "./blocks.jsx";

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
                /* description="I started as a programmer and later full stack developer. I implemented both frontend and backend of a intranet sytem.
                    In the forntend, I used HTML, JavaScript, CSS to display data and send information to the backend by API. In the backend,
                    I used Java, SQL to handle downloading, returning enquired information or updating the database." */
                description={
                <>
                    <h3>role</h3>
                    <p>text goes here</p>
                    <h3>accomplishment</h3>
                    <p>I designed</p>
                </>}
            />
        </div>
    );
}


export function Projects(){
    return (
        <div className="content projects">

            <div className="project">
                <h2 className="project--title"><u>Project 1: Website with React</u></h2>
                <div>
                    <StringToLogo techs={["HTML","CSS","JavaScript","React","Sass"]}/>
                </div>
                <div className="project--description">
                    <h3>This project features:</h3>
                    <ul>
                        <li>React, JSX, JavaScript. List rendering, functional and class component.</li>
                        <li>HTML, CSS, Scss. Various graphics, HTML element and nested selector.</li>
                        <li>responsive design. Page layout is different for shorter screen for greater readability.</li>
                        <li>animation and interactive buttons. What is changed and what can be clicked should be intuitive.</li>
                        <li>tab-indexed buttons.(not fully implemented yet)</li>
                    </ul>
                    <p>
                    This website is written by me. I used the React framework along with standard HTML, CSS, JavaScript.<br />
                    I want to keep it simple and organised. it has no dependency on any library, such as JQuery.
                    I used Scss to refactor and organise CSS. I am aware of frameworks such as Bootstrap and Tailwind, but they tend to
                    further obfuscate an already complex HTML tree. This defeats the purpose of separating the web content
                    and how it is presented. But I will give it a try in the future.<br />
                    The website is hosted on GitHub and the source code is available at <a href="https://github.com/Hasuzawa/homepage">GitHub</a>.
                    </p>
                </div>
            </div>
        </div>
    );
}


export function Skill(){
    return (
        <div className="content skills">
            <div className="skills--section">
                <details open className="skill">
                    <summary>Programming Languages</summary>
                    <div>
                        <StringToLogo techs={["C","C++","Java","JavaScript","Python"]}/>
                    </div>
                </details>
            </div>
            <div className="skills--section">
                <details open className="skill">
                    <summary>Web Development</summary>
                    <div>
                        <StringToLogo techs={["HTML","CSS","React","Sass","Django"]}/>
                    </div>
                </details>
            </div>
            <div className="skills--section">
                <details open className="skill">
                    <summary>Technology</summary>
                    <div className="skill--technologies">
                        <div className="skill--technology">
                            <h3>Networking</h3>
                            <p>I am a nationally qualified information engineer in Japan.
                                I have knowledge on HTTP(S), IPv4 and IPv6 address, subnet, OSI model, server, memory types, binary, byte endian.
                            </p>
                        </div>
{/*                         <div className="skill--technology">
                            <h3>Cyber Security</h3>
                            <p></p>
                        </div> */}
                        <div className="skill--technology">
                            <h3>Cloud Computing</h3>
                            <img className="AWS_badge_cloud_practitioner" href="" alt="AWS Cloud Practitioner"/>
                            <p>I am a certificated AWS Cloud Practitioner. I know the servies on AWS.
                                In this year (2021), a new Region was opened in Osaka.
                            </p>
                        </div>
                    </div>
                </details>
            </div>
            <div className="skills--section">
                <details open className="skill">
                    <summary>Languages</summary>
                    <div className="skill--languages">
                        <div className="skill--langauge">
                            <h3>English</h3>
                            
                            <p>text here</p>
                        </div>
                        <div className="skill--langauge">
                            <h3>Japanese</h3>
                            <p>test here</p>
                        </div>
                        <div className="skill--langauge">
                            <h3>German</h3>
                            <p>
                                I can understand daily life German and can read German news and publications.
                            </p>
                        </div>
                        <div className="skill--langauge">
                            <h3>Chinese</h3>
                            <p>
                                I am a native speaker of Chinese and two more dialects.
                            </p>
                        </div>

                    </div>

{/*                     <Language
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
                    /> */}

                </details>
            </div>
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