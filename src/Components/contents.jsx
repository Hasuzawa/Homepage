import React from "react";
import {Job} from "./blocks.jsx";
import "./style.scss";

import { language_English_photos, language_Japanese_photos, language_German_photos, language_Chinese_photos } from "./photos.js";
import { StringToLogo, Languages } from "./blocks.jsx";

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
                <span>I am a full stack developer and system engineer currently working in Osaka, Japan.</span>
                <div className="domains">
                    <div className="domain">
                        <h2>Frontend</h2>
                        <p>I have used HTML, CSS and JavaScript to design frontend for fetching data input and display HLML response.
                            I also have project done using React and Sass.
                        </p>
                    </div>
                    <div className="domain">
                        <h2>Backend</h2>
                        <p>I have implemented a backend to an intranet system using Java and SQL connected to a PostgreSQL database.
                            I also know Python, Django and C++.
                        </p>
                    </div>
{/*                     <div className="domain">
                        <h2>System Engineer</h2>
                        <p>I know basic Linux commands and networking. </p>
                    </div> */}
                    <div className="domain">
                        <h2>Soft Skills</h2>
                        <p>I am a polygot in real life and can speak a total of 6 languages and dialects, including English, German, Japanese and Chinese.
                            I am invaluable in an increasingly interconnected world, in which diverse culture and nationality is the norm.
                        </p>
                    </div>
                </div>
            </div>
            <div className="introduction--section3">
                <h1>Employment Status</h1>
                <p>
                    I am employed but actively looking for job opportunities.<br />
                    I am willing to relocate while preparing for the job beforehand if I receive a formal offer.
                </p>
            </div>
        </div>
    );
}


export function WorkExperience(){
    return (
        <div className="content work-experience">
            <Job
                jobTitle="Programmer -> System&nbsp;Engineer"
                startDate="15&nbsp;March&nbsp;2021"
                endDate="current"
                company="NetValue Co., Ltd. (Japan)"
                company_url="https://www.netvalue-io.com/"
                techs={["HTML","CSS","JavaScript","Java","Apache", "PostgreSQL"]}
                /* description="I started as a programmer and later full stack developer. I implemented both frontend and backend of a intranet sytem.
                    In the forntend, I used HTML, JavaScript, CSS to display data and send information to the backend by API. In the backend,
                    I used Java, SQL to handle downloading, returning enquired information or updating the database." */
                description={
                <>
                    <h3>responsilities</h3>
                    <ul>
                        <li>design and implement frontend</li>
                        <li></li>
                        <li></li>
                    </ul>
                    <h3>accomplishment</h3>
                    <p>I completed a part of a intranet system. I designed the frontend with HTTP, CSS and JavaScript. The
                        user interface include calendar, sortable table, input field to enter query data to send to the
                        backend by HTTP request.
                        In the backend, I used Java to receive the request message. Depending on the request, it might
                        require data to be fetched from the database by SQL and formatted as a CSV and sent back to the frontend.
                        
                    </p>
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
                        <li>tab-indexed buttons. You can navigate the whole website using tab and arrow keys.</li>
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
                    <p className="skill--paragraph">I am most proficient in JavaScript, Python and Java.<br />
                        I am familiar with concepts that are common in programming language including looping, class and object-oriented approach, functional
                        programming, refactoring and modular programming. I can migrate my knowledge and skill into other programming language.
                    </p>
                </details>
            </div>
            <div className="skills--section">
                <details open className="skill">
                    <summary>Web Development</summary>
                    <div>
                        <StringToLogo techs={["HTML","CSS","React","Sass","Django"]}/>
                    </div>
                    <p className="skill--paragraph">I have experience using many popular languages and frameworks.
                        As a full stack developer, I have a full picture of the project. I can design the database and backend needed for the
                        task and anticipate how user can interact in the frontend. Since I know what users are going to see and what data is
                        necessary, I can keep the time needed to re-design the system to the minimum.
                        I would consider specialise later in career.
                    </p>
                </details>
            </div>
            <div className="skills--section">
                <details open className="skill">
                    <summary>Technology</summary>
                    <div className="skill--technologies">
                        <div className="skill--technology">
                            <h3>Networking</h3>
                            <p>I am a nationally qualified information engineer in Japan.
                                I have knowledge on HTTP(S), IPv4 and IPv6 address, subnet, OSI model, server, DHCP,
                                Address Resolution Protocol,
                                memory types, port number, SSH.
                            </p>
                        </div>
{/*                         <div className="skill--technology">
                            <h3>Cyber Security</h3>
                            <p></p>
                        </div> */}
                        <div className="skill--technology">
                            <h3>Cloud Computing</h3>
                            <img className="AWS_badge" src="logos/AWS_Cloud_Practitioner_logo.png" alt="AWS Cloud Practitioner"/>
                            <p>I am a certificated AWS Cloud Practitioner. I know the servies on AWS.
                                In this year (2021), a new Region was opened in Osaka.
                            </p>
                        </div>
                        <div className="skill--technology">
                            <h3>Graphics</h3>
                            <div>
                                <StringToLogo techs={["Gimp","Inkscape"]}/>
                            </div>
                            <p>I primarily use Gimp for raster graphics and Inkscape for vector graphics.
                                I also have some experience using Adobe Flash and Adobe Animation.
                            </p>
                        </div>
                    </div>
                </details>
            </div>
            <div className="skills--section">
                <details open className="skill language_section">
                    <Languages />
                </details>
            </div>
        </div>
    );
}

export function Contact(){
    return (
        <div className="content contact">
            <h3>Thank you for reading this.</h3>
            <p>
                I can be reached at <a href="https://github.com/Hasuzawa">GitHub</a>.<br />
                This website is hosted on GitHub and you can see the source code there.<br />
                Collaboration, enquiry, compensated offer are all welcomed.<br />
            </p>
        </div>
    );
}