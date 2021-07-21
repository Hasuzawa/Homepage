import React from "react";

export function Introduction (){
    return (
        <div className="tabContent">
            <h1>Work in progress</h1>
            <h3>Welcome</h3>
            <p>
                Welcome to the homepage of Hasuzawa. This is primarily my portfolio.<br />
                I prefer to keep my projects maintained at one place. For the latest progress and projects, please pay a visit to my <a href="https://github.com/Hasuzawa">GitHub</a>.
            </p>
            <h3>About me</h3>
            <p>
                I am a programmer currently working in Osaka, Japan. I primarily work on web development and has comprehensive understanding of HTML, CSS, JavaScript and React.<br />

                
                I am also a polygot and can speak a total of 6 languages and dialects, including English, German, Japanese and Chinese. I am immensely helpful in an
                increasingly interconnected world, in which diverse culture and nationality is the norm.
            </p>
        </div>
    );
}

export function WorkExperience(){
    return (
        <div className="tabContent">
            {/*refactor this later */}
            <div>
                <h3>Programmer</h3>
                <span>15 March - current</span>
                <span>NetValue Co., Ltd. (Japan)</span>
                <p>
                    Implemented frontend and backend.
                </p>
                {/* image */}
            </div>
        </div>
    );
}

export function Expertise(){
    return (
        <div className="tabContent">
            <h1>third page</h1>
            <p>3rd</p>
        </div>
    );
}
//might want to change it to skill
export function Knowledge(){
    return (
        <div className="tabContent">
            <details>
                <summary>Programming Languages</summary>
    
            </details>
            <details>
                <summary>Software, Tools</summary>
            </details>
            <details>
                <summary>Languages</summary>
                <h3>English</h3>
                    <blockquote>
                        work in progress
                    </blockquote>
                    <p>
                        I have lived in a city bilingual in English for over 20 years. In addition, I am quite educated in the Humanities for a programmer.
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
        <div className="tabContent">
            <h1>5th page</h1>
            <p>
                I can be reached at <a href="https://github.com/Hasuzawa">GitHub</a> or Linkdeln. This website is in fact hosted on GitHub and you can see the source code there.<br />
                Collaboration, enquiry, job offer are all welcomed.
            </p>
        </div>
    );
}