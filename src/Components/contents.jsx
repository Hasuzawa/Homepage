import React from "react";
import {Job} from "./blocks.jsx";
import "./style.scss";


export function Introduction (){
    return (
        <div className="content introduction">
            <h3>Hasuzawa@Home</h3>
            <p>
                Welcome to the homepage of Hasuzawa. This is primarily my portfolio.<br />
                I prefer to keep my projects maintained at one place. For the latest progress and projects, please visit my <a href="https://github.com/Hasuzawa">GitHub</a>.
            </p>
            <h3>About me</h3>
            <p>
                I am a programmer and system engineer currently working in Osaka, Japan. I have worked on a large-scale intranet system by implementing frontend using HTML, CSS, JavaScript for frontend to enter data and display result from database.<br />
                In the backend, I used Java, SQL to connect to database to update or fetch data.
                I can programme in C, C++, Java, JavaScript and Python. As a web developer, I can programme in HTML, CSS, JavaScript and React. I also use Sass, Git.<br />
                
                In addition to my programming abilities, I am also a polygot and can speak a total of 6 languages and dialects, including English, German, Japanese and Chinese. I am invaluable in an
                increasingly interconnected world, in which diverse culture and nationality is the norm.
                <br />
                I am actively looking for job opportunities. I am willing to relocate to another city or country while preparing for the job beforehand if I receive a formal offer.
            </p>
        </div>
    );
}


export function WorkExperience(){
    return (
        <div className="content work-experience">
            {/* you would likely further factorise this into json in the future*/}
            <Job
                jobTitle="Programmer -> System Engineer"
                startDate="15 March 2021"
                endDate="current"
                company="NetValue Co., Ltd. (Japan)"
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
                <h3><u>Project 1: Website</u></h3>
                <div>
                    {/* some tags, e.g. HTML, CSS, JavaScript */}
                </div>
                

                <p>
                    This website is written by me. I used the React framework along with the the standard suite HTML, CSS, JavaScript.<br />
                    I want to keep it simple and it has no dependency on online content nor library, meaning that you can download it and host a local server to preview it even when offline.
                    I also used Scss to refactor the CSS.<br />
                    The source code is available at <a href="https://github.com/Hasuzawa/homepage">GitHub</a>.
                </p>
            </div>
        </div>
    );
}


export function Skill(){
    return (
        <div className="content skills">
            <details open className="skill">
                <summary>Programming Languages</summary>
                
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
                <h3>English</h3>
                    <blockquote>
                        work in progress
                    </blockquote>
                    <p>
                        I have lived in a city bilingual in English and Chinese for over 20 years. The vast majority of my education is completed using English.
                    </p>
                <h3>Japanese</h3>
                    <blockquote>

                    </blockquote>
                    <p>
                        I am working in Japan and has passed the highest level of the most recognised Japanese language exam.
                    </p>
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
            <iframe title="Working at the city center as a system engineer" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4639.379805585421!2d135.53002579240538!3d34.69163516608814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sjp!4v1627540397403!5m2!1sen!2sjp" width="600" height="450" allowFullScreen="" loading="lazy"></iframe>
        </div>
    );
}