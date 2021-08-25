(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),i=a(11),c=a.n(i),o=(a(17),a(12)),l=a(3),r=a(4),d=a(2),j=a(6),h=a(5),b=a(10),p=(a(18),a(7),a(0));function m(e){return Object(p.jsxs)("div",{className:"job",children:[Object(p.jsxs)("div",{className:"job--boxed--first_line",children:[Object(p.jsx)("h2",{className:"job--job_title",children:e.jobTitle}),Object(p.jsxs)("span",{className:"job--date",children:[e.startDate," - ",e.endDate]})]}),Object(p.jsx)("div",{className:"job--boxed--second_line",children:Object(p.jsx)("span",{className:"job--company",children:Object(p.jsx)("a",{href:e.company_url,children:e.company})})}),Object(p.jsxs)("div",{className:"job--boxed--third_line",children:[Object(p.jsx)("span",{children:"Techs used:"}),Object(p.jsx)(u,{techs:e.techs})]}),Object(p.jsxs)("div",{className:"job--boxed--fourth_line",id:"job--last_section",children:[Object(p.jsx)("div",{className:"job--description",id:"job--description",children:e.description}),Object(p.jsxs)("div",{className:"job--photo_area",id:"job--photo_area",children:[Object(p.jsx)("img",{className:"job--photo",id:"job--photo",src:"%PUBLIC_URL%/images/near_Osaka_Castle.png",alt:"near Osaka Castle"}),Object(p.jsx)("span",{className:"photo--caption",children:"The building where I work at is right beside Osaka Castle."})]})]})]})}Object(b.a)("baseURL");var u=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).stringToJSX=s.stringToJSX.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"stringToJSX",value:function(e,t){var s=a.toLogo[e];if(void 0===s)throw TypeError("The following string does not a corresponding logo: ".concat(e));return n.a.cloneElement(s,{key:t})}},{key:"render",value:function(){var e=this;return this.props.techs.map((function(t,a){return e.stringToJSX(t,a)}))}}]),a}(n.a.Component);u.toLogo={C:Object(p.jsx)("img",{className:"skill_logo",src:"logos/C_logo.svg",alt:"C"}),"C++":Object(p.jsx)("img",{className:"skill_logo",src:"logos/C++_logo.svg",alt:"C++"}),Java:Object(p.jsx)("img",{className:"skill_logo",src:"logos/Java_logo.svg",alt:"Java"}),JavaScript:Object(p.jsx)("img",{className:"skill_logo",src:"logos/Javascript_logo.svg",alt:"JavaScript"}),Python:Object(p.jsx)("img",{className:"skill_logo",src:"logos/Python_logo.svg",alt:"Python"}),TypeScript:Object(p.jsx)("img",{className:"skill_logo",src:"logos/Typescript_logo.svg",alt:"TypeScript"}),HTML:Object(p.jsx)("img",{className:"skill_logo",src:"logos/HTML5_logo.svg",alt:"HTML"}),CSS:Object(p.jsx)("img",{className:"skill_logo",src:"logos/CSS3_logo.svg",alt:"CSS"}),React:Object(p.jsx)("img",{className:"skill_logo",src:"logos/React_logo.svg",alt:"React"}),Sass:Object(p.jsx)("img",{className:"skill_logo",style:{width:"80px"},src:"logos/Sass_logo.svg",alt:"Sass"}),Django:Object(p.jsx)("img",{className:"skill_logo",style:{width:"100px"},src:"logos/Django_logo.svg",alt:"Django"}),Gimp:Object(p.jsx)("img",{className:"skill_logo",src:"logos/Gimp_logo.svg",alt:"Gimp",style:{objectFit:"contain"}}),Inkscape:Object(p.jsx)("img",{className:"skill_logo",src:"logos/Inkscape_logo.svg",alt:"Inkscape"}),GraphQL:Object(p.jsx)("img",{className:"skill_logo",src:"logos/GraphQL_logo.svg",alt:"GraphQL"}),"Graphene-django":Object(p.jsx)("img",{className:"skill_logo",src:"logos/Graphene-django_logo.svg",alt:"Graphene-django"}),Apollo:Object(p.jsx)("img",{className:"skill_logo",src:"logos/Apollo_logo.svg",alt:"Apollo"}),Apache:Object(p.jsx)("img",{className:"skill_logo",src:"logos/Apache_logo.png",alt:"Apache"}),PostgreSQL:Object(p.jsx)("img",{className:"skill_logo",src:"logos/PostgreSQL_logo.svg",alt:"PostgreSQL"})};var g={0:{heading:"English",image:{src:"pdf/TOEIC_965_certificate_redacted.pdf#toolbar=0",alt:"TOEIC 965"},text:"I have lived in a city bilingual in English and Chinese for over 20 years. The vast majority of my education is completed using English."},1:{heading:"Japanese",image:{src:"pdf/JLPT_N1_redacted.pdf#toolbar=0",alt:"Japanese Language Proficiency Test N1"},text:"I am working in Japan and has passed the highest level of the most recognised Japanese language exam."},2:{heading:"German",image:{src:"pdf/Goethe_Institut_B1_reading_certificate_redacted.pdf#toolbar=0",alt:"Goethe Institut B1 Reading passed"},text:"I can understand daily life German and can read German news and publications."},3:{heading:"Chinese",image:{src:"pdf/HSK_level_6_certificate_redacted.pdf#toolbar=0",alt:"Chinese Proficiency Test Level 6"},text:"I am a native speaker of Chinese and two more dialects."}},O=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={load:!1},s.renderButton=s.renderButton.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"renderButton",value:function(){var e=this;return Object(p.jsx)("button",{className:"languages--button"+(this.state.load?" loaded":""),onClick:function(){return e.setState({load:!e.state.load})},children:this.state.load?"Hide Certificate":"Show Certificate"})}},{key:"render",value:function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("summary",{children:"Languages"}),Object(p.jsxs)("div",{className:"languages-preface",children:[Object(p.jsxs)("p",{className:"languages-explanation",children:["Due to privacy and security concern, personal information have been redacted.",Object(p.jsx)("br",{}),"I can send original versions to verify I am the owner if you contact me directly."]}),Object(p.jsx)("hr",{width:"100%"}),Object(p.jsxs)("p",{className:"languages-explanation",children:["Click the button to load certificates,",Object(p.jsx)("br",{}),"it might take a few seconds."]}),this.renderButton()]}),Object(p.jsxs)("div",{className:"skill--languages",children:[Object(p.jsx)(x,{id:"0",load:this.state.load}),Object(p.jsx)(x,{id:"1",load:this.state.load}),Object(p.jsx)(x,{id:"2",load:this.state.load}),Object(p.jsx)(x,{id:"3",load:this.state.load})]})]})}}]),a}(n.a.Component),x=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).getImages=s.getImages.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"getImages",value:function(e){return Object(p.jsx)("embed",{id:"language--image",className:"language--pdf",src:e.image.src,type:"application/pdf",alt:e.image.alt})}},{key:"render",value:function(){var e=this.props.id,t=g[e];return Object(p.jsxs)("div",{className:"skill--language",children:[Object(p.jsx)("h3",{children:t.heading}),this.props.load?this.getImages(t):null,Object(p.jsx)("p",{className:"language--description",children:t.text})]})}}]),a}(n.a.Component);a(8);function f(){return Object(p.jsxs)("div",{className:"content introduction",children:[Object(p.jsx)("p",{className:"notification",children:"This website will soon be deprecated. After I finish some other projects, I will create a new website with Next.js with better presentation."}),Object(p.jsxs)("div",{className:"introduction--section0",children:[Object(p.jsx)("h1",{children:"Hasuzawa@Home"}),Object(p.jsxs)("p",{children:["Welcome to my homepage. This is primarily my portfolio.",Object(p.jsx)("br",{}),"I have gathered all my work experiences, skills on this website. ",Object(p.jsx)("br",{}),"For the latest progress on projects, please visit my ",Object(p.jsx)("a",{href:"https://github.com/Hasuzawa",children:"GitHub"}),"."]})]}),Object(p.jsxs)("div",{className:"introduction--section1",children:[Object(p.jsx)("h1",{children:"Values"}),Object(p.jsxs)("div",{className:"values",children:[Object(p.jsxs)("div",{className:"value",children:[Object(p.jsx)("h2",{children:"Efficiency"}),Object(p.jsx)("p",{children:"In the digital world, there are infinite ways to implement most idea but only a small subset is efficient. To be efficient is to pursue that singularity among possibilities."})]}),Object(p.jsxs)("div",{className:"value",children:[Object(p.jsx)("h2",{children:"Timely"}),Object(p.jsx)("p",{children:"There is merit in perfection and there is also virtue in a timely solution. I know the importance of precious time and make the best of it during and outside work."})]}),Object(p.jsxs)("div",{className:"value",children:[Object(p.jsx)("h2",{children:"Initiative"}),Object(p.jsx)("p",{children:"The modern world changes fast. I constantly learn new techs, languages, frameworks and improve my skill to prepare for unforeseen challenges and opportunities."})]})]})]}),Object(p.jsxs)("div",{className:"introduction--section2",children:[Object(p.jsx)("h1",{children:"About me"}),Object(p.jsx)("span",{children:"I am a full stack developer and system engineer currently working in Osaka, Japan."}),Object(p.jsxs)("div",{className:"domains",children:[Object(p.jsxs)("div",{className:"domain",children:[Object(p.jsx)("h2",{children:"Frontend"}),Object(p.jsx)("p",{children:"I have used HTML, CSS and JavaScript to design frontend for fetching data input and display HLML response. I also have project done using React and Sass."})]}),Object(p.jsxs)("div",{className:"domain",children:[Object(p.jsx)("h2",{children:"Backend"}),Object(p.jsx)("p",{children:"I have implemented a backend to an intranet system using Java and SQL connected to a PostgreSQL database. I also know Python, Django and C++."})]}),Object(p.jsxs)("div",{className:"domain",children:[Object(p.jsx)("h2",{children:"Soft Skills"}),Object(p.jsx)("p",{children:"I am a polygot in real life and can speak a total of 6 languages and dialects, including English, German, Japanese and Chinese. I am invaluable in an increasingly interconnected world, in which diverse culture and nationality is the norm."})]})]})]}),Object(p.jsxs)("div",{className:"introduction--section3",children:[Object(p.jsx)("h1",{children:"Employment Status"}),Object(p.jsxs)("p",{children:["I am employed but actively looking for job opportunities.",Object(p.jsx)("br",{}),"I am willing to relocate while preparing for the job beforehand if I receive a formal offer."]})]})]})}function v(){return Object(p.jsx)("div",{className:"content work-experience",children:Object(p.jsx)(m,{jobTitle:"Programmer -> System\xa0Engineer",startDate:"15\xa0March\xa02021",endDate:"current",company:"NetValue Co., Ltd. (Japan)",company_url:"https://www.netvalue-io.com/",techs:["HTML","CSS","JavaScript","Java","Apache","PostgreSQL"],description:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"responsilities"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"design and implement frontend, using HTML, CSS, JavaScript"}),Object(p.jsx)("li",{children:"implement backend logic, from HTTP to database operations"}),Object(p.jsx)("li",{children:"unit test frontend and backend"})]}),Object(p.jsx)("h3",{children:"accomplishment"}),Object(p.jsx)("p",{children:"I completed a part of a intranet system. I designed the frontend with HTTP, CSS and JavaScript. The user interface include calendar, sortable table, input field to enter query data to send to the backend by HTTP request. In the backend, I used Java to receive the request message. Depending on the request, it might require data to be fetched from the database by SQL and formatted as a CSV and sent back to the frontend."}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"I also participated in implementing part of a reservation and management system for a local hospital. The project involves PostgreSQL database and Java in the backend."}),Object(p.jsx)("hr",{}),Object(p.jsx)("p",{children:"I have work experience using HTML, CSS, JavaScript, Java, SQL, PostgreSQL. In my free time, I learned React, Python, C++, Sass, Bootstrap, Django, TypeScript, GraphQL, Git, Apollo, AWS and used them in my project."})]})})})}function k(){return Object(p.jsx)("div",{className:"content projects",children:Object(p.jsxs)("div",{className:"project",children:[Object(p.jsx)("h2",{className:"project--title",children:Object(p.jsx)("u",{children:"Project 1: Website with React"})}),Object(p.jsx)("div",{children:Object(p.jsx)(u,{techs:["HTML","CSS","JavaScript","React","Sass"]})}),Object(p.jsxs)("div",{className:"project--description",children:[Object(p.jsx)("h3",{children:"This project features:"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"React, JSX, JavaScript. List rendering, functional and class component."}),Object(p.jsx)("li",{children:"HTML, CSS, Scss. Various graphics, HTML element and nested selector."}),Object(p.jsx)("li",{children:"responsive design. Page layout is different for shorter screen for greater readability."}),Object(p.jsx)("li",{children:"animation and interactive buttons. What is changed and what can be clicked should be intuitive."}),Object(p.jsx)("li",{children:"tab-indexed buttons. You can navigate the whole website using tab and arrow keys."})]}),Object(p.jsxs)("p",{children:["This website is written by me. I used the React framework along with standard HTML, CSS, JavaScript.",Object(p.jsx)("br",{}),"I want to keep it simple and organised. it has no dependency on any library, such as JQuery. I used Scss to refactor and organise CSS. I am aware of frameworks such as Bootstrap and Tailwind, but they tend to further obfuscate an already complex HTML tree. This defeats the purpose of separating the web content and how it is presented. But I will give it a try in the future.",Object(p.jsx)("br",{}),"The website is hosted on GitHub and the source code is available at ",Object(p.jsx)("a",{href:"https://github.com/Hasuzawa/homepage",children:"GitHub"}),"."]}),Object(p.jsx)("hr",{}),Object(p.jsxs)("p",{children:["I used the ",Object(p.jsx)("a",{href:"https://en.wikipedia.org/wiki/Complementary_colors",children:"colour theory of supplementary colour"})," in designing the background colour. I have always felt a pure white background is too bright. A tinture of colour softens it a lot."]})]})]})})}function y(){return Object(p.jsxs)("div",{className:"content skills",children:[Object(p.jsx)("div",{className:"skills--section",children:Object(p.jsxs)("details",{open:!0,className:"skill",children:[Object(p.jsx)("summary",{children:"Programming Languages"}),Object(p.jsx)("div",{children:Object(p.jsx)(u,{techs:["C","C++","Java","JavaScript","Python","TypeScript"]})}),Object(p.jsxs)("p",{className:"skill--paragraph",children:["I am most proficient in JavaScript, Python and Java.",Object(p.jsx)("br",{}),"I am familiar with concepts that are common in programming language including looping, class and object-oriented approach, functional programming, refactoring and modular programming. I can migrate my knowledge and skill into other programming language."]})]})}),Object(p.jsx)("div",{className:"skills--section",children:Object(p.jsxs)("details",{open:!0,className:"skill",children:[Object(p.jsx)("summary",{children:"Web Development"}),Object(p.jsx)("div",{children:Object(p.jsx)(u,{techs:["HTML","CSS","React","Sass","Django","GraphQL","Graphene-django"]})}),Object(p.jsx)("p",{className:"skill--paragraph",children:"I have experience using many popular languages and frameworks. As a full stack developer, I have a full picture of the project. I can design the database and backend needed for the task and anticipate how user can interact in the frontend. Since I know what users are going to see and what data is necessary, I can keep the time needed to re-design the system to the minimum. I would consider specialise later in career."})]})}),Object(p.jsx)("div",{className:"skills--section",children:Object(p.jsxs)("details",{open:!0,className:"skill",children:[Object(p.jsx)("summary",{children:"Technology"}),Object(p.jsxs)("div",{className:"skill--technologies",children:[Object(p.jsxs)("div",{className:"skill--technology",children:[Object(p.jsx)("h3",{children:"Networking"}),Object(p.jsxs)("p",{children:["I am a nationally qualified information engineer in Japan. I have knowledge on HTTP(S), IPv4 ","&"," IPv6 address, subnet, OSI model, server, DHCP, Address Resolution Protocol, port number, SSH."]})]}),Object(p.jsxs)("div",{className:"skill--technology",children:[Object(p.jsx)("h3",{children:"Cloud Computing"}),Object(p.jsx)("img",{className:"AWS_badge",src:"logos/AWS_Cloud_Practitioner_logo.png",alt:"AWS Cloud Practitioner"}),Object(p.jsx)("p",{children:"I am a certificated AWS Cloud Practitioner. I know the servies on AWS. In this year (2021), a new Region was opened in Osaka."})]}),Object(p.jsxs)("div",{className:"skill--technology",children:[Object(p.jsx)("h3",{children:"Graphics"}),Object(p.jsx)("div",{children:Object(p.jsx)(u,{techs:["Gimp","Inkscape"]})}),Object(p.jsx)("p",{children:"I primarily use Gimp for raster graphics and Inkscape for vector graphics. I also have some experience using Adobe Flash and Adobe Animation."})]})]})]})}),Object(p.jsx)("div",{className:"skills--section",children:Object(p.jsx)("details",{open:!0,className:"skill language_section",children:Object(p.jsx)(O,{})})})]})}function w(){return Object(p.jsxs)("div",{className:"content contact",children:[Object(p.jsx)("h3",{children:"Thank you for reading this."}),Object(p.jsxs)("address",{children:["I can be reached by email: ",Object(p.jsx)("a",{href:"mailto:hasuzawa.yuichi.international@gmail.com",children:"hasuzawa.yuichi.international@gmail.com"})]}),Object(p.jsxs)("p",{children:["It would likely be in your interest to visit ",Object(p.jsx)("a",{href:"https://github.com/Hasuzawa",children:"my GitHub"})," first to have an overview of my expertise."]}),Object(p.jsxs)("p",{children:["This website is hosted on GitHub and you can see the ",Object(p.jsx)("a",{href:"https://github.com/Hasuzawa/homepage",children:"source code"})," there.",Object(p.jsx)("br",{}),"Collaboration, enquiry, compensated offer are all welcomed.",Object(p.jsx)("br",{})]})]})}var N=Object.freeze({introduction:0,workExperience:1,projects:2,skill:3,contact:4}),C=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).displayTabContent=s.displayTabContent.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"displayTabContent",value:function(){switch(this.props.selectedTab){case N.introduction:return Object(p.jsx)(f,{});case N.workExperience:return Object(p.jsx)(v,{});case N.projects:return Object(p.jsx)(k,{});case N.skill:return Object(p.jsx)(y,{});case N.contact:return Object(p.jsx)(w,{});default:return null}}},{key:"render",value:function(){return Object(p.jsx)(p.Fragment,{children:this.displayTabContent()})}}]),a}(n.a.Component);function S(e){return Object(p.jsx)("div",{className:"banner "+(e.bannerFolded?"folded":"expanded"),children:Object(p.jsx)("p",{children:"banner placeholder"})})}var I=Object.freeze({0:"Intro",1:"Experience",2:"Projects",3:"Skill",4:"Contact"}),_=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).renderButtons=s.renderButtons.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"renderButtons",value:function(){var e=this;return Object.keys(I).map((function(t,a){return Object(p.jsx)("button",{id:"headerCell"+t,onClick:e.props.handleClick,className:"switch_tab"+(e.props.selectedTab===parseInt(t)?" selected":""),testid:"headerButton"+a,children:I[t]},a)}))}},{key:"render",value:function(){return Object(p.jsxs)("nav",{className:"header",children:[Object(p.jsx)("span",{children:"Hasuzawa@Home"}),Object(p.jsx)("div",{className:"filler"}),Object(p.jsx)("div",{className:"tab_menu",children:this.renderButtons()}),Object(p.jsx)("div",{className:"filler"}),Object(p.jsx)(T,{handleClick:this.props.handleClick,selectedTab:this.props.selectedTab,buttons:this.renderButtons()}),Object(p.jsx)(L,{}),Object(p.jsx)("button",{className:"fold_button",onClick:this.props.handleFold,testId:"fold_button",children:this.props.bannerFolded?"\u25bc":"\u25b2"})]})}}]),a}(n.a.Component),T=function(e){return Object(p.jsxs)("div",{className:"dropdown_menu",children:[Object(p.jsx)("button",{className:"dropdown_menu--icon",children:"\u2261"}),Object(p.jsx)("div",{className:"dropdown_menu--content",children:e.buttons})]})},L=function(){return Object(p.jsx)("button",{className:"toTheTopButton",onClick:function(){return window.location.href="#root"}})};function H(e){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("span",{className:"footer--site",children:"Hasuzawa@Home"}),Object(p.jsx)("button",{id:"footerCell"+N.introduction,className:"footer--button",onClick:e.handleClick,tabIndex:"0",children:"Intro"}),Object(p.jsx)("span",{id:"footerCell"+N.workExperience,className:"footer--experience",onClick:e.handleClick,tabIndex:"0",children:"Experience"}),Object(p.jsx)("span",{id:"footerCell"+N.projects,className:"footer--projects",onClick:e.handleClick,tabIndex:"0",children:"Projects"}),Object(p.jsx)("span",{id:"footerCell"+N.skill,className:"footer--skill",onClick:e.handleClick,tabIndex:"0",children:"Skill"}),Object(p.jsx)("span",{id:"footerCell"+N.contact,className:"footer--contact",onClick:e.handleClick,tabIndex:"0",children:"Contact"}),Object(p.jsx)("a",{href:"https://github.com/Hasuzawa/homepage",target:"_blank",rel:"noreferrer noopener",id:"footer--link",children:Object(p.jsx)("img",{className:"footer--GitHub",src:"logos/GitHub_logo.png",alt:"repository of webpage"})})]})}var J=function(e){Object(j.a)(a,e);var t=Object(h.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={selectedTab:N.introduction,bannerFolded:!1},s.handleClick=s.handleClick.bind(Object(d.a)(s)),s.handleFold=s.handleFold.bind(Object(d.a)(s)),s}return Object(r.a)(a,[{key:"handleClick",value:function(e){var t=parseInt(e.target.id.slice(-1));this.setState({selectedTab:t})}},{key:"handleFold",value:function(e){var t=!this.state.bannerFolded;this.setState({bannerFolded:t})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(S,{bannerFolded:this.state.bannerFolded}),Object(p.jsx)(_,Object(o.a)({handleClick:this.handleClick,handleFold:this.handleFold},this.state)),Object(p.jsx)(C,{selectedTab:this.state.selectedTab}),Object(p.jsx)(H,{handleClick:this.handleClick})]})}}]),a}(n.a.Component);c.a.render(Object(p.jsx)(J,{}),document.getElementById("root"))},7:function(e,t,a){},8:function(e,t,a){}},[[20,1,2]]]);
//# sourceMappingURL=main.1ef7090d.chunk.js.map