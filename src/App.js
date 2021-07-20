import './App.css';
import React from 'react';
import {TabIndex} from "./components/enum.js";
import {Introduction, WorkExperience, Expertise, Knowledge , Contact} from "./components/TabContent.jsx";


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: TabIndex.introduction};


    this.displayContent = this.displayContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  displayContent(){
    //hide all non-active tab content
    //in this special case there will be one and only one tab active at any time so we can just display one tab depending on state
    switch(this.state.selectedTab){
      case TabIndex.introduction: return <Introduction />;
      case TabIndex.workExperience: return <WorkExperience />;
      case TabIndex.expertise: return <Expertise />;
      case TabIndex.knowledge: return <Knowledge />;
      case TabIndex.contact: return <Contact />;
    }
  }

  handleClick(e){
    var tabClicked = parseInt(e.target.id); //id is a string when passed by event
    console.log("clicked");
    console.log(tabClicked);
    this.setState({selectedTab: tabClicked});
  }

  render(){
    return (
      <div className = "App">
        <span>hello world</span>

        <nav className = "tabMenu">
          <button id={TabIndex.introduction} onClick={this.handleClick}>Intro</button>
          <button id={TabIndex.workExperience} onClick={this.handleClick}>Experience</button>
          <button id={TabIndex.expertise} onClick={this.handleClick}>Expertise</button>
          <button id={TabIndex.knowledge} onClick={this.handleClick}>Knowledge</button>
          <button id={TabIndex.contact} onClick={this.handleClick}>Contact</button>
        </nav>

        {/*refactor these later, each div should be a component1*/}

        {/*this is BAD practice, but bear with it now*/}
        {this.displayContent()}

        {/*}
        <div id = {TabIndex.introduction} className = "tabContent">
          <h1>front page</h1>
          <p>Welcome to my homepage.</p>
        </div>

        <div id={TabIndex.workExperience}>
          <h1>second page</h1>
          <p>This is the second page</p>
        </div>

        <div id={TabIndex.Expertise}>
          <h1>3rd page</h1>
          <p>the third page</p>
        </div>
        */}

      </div>
    )
  }
}

export default App;
