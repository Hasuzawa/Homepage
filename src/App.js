import './App.css';
import React from 'react';
import {TabIndex} from "./components/enum.js";
import {Introduction, WorkExperience, Contact} from "./components/TabContent.jsx";


//pseudo-enum

/*
function App() {
  return (
    <div className="App">
      <navTab />
    </div>
  );
}*/


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: TabIndex.introduction}; //initial select; 0


    this.displayContent = this.displayContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //I might want to keep track of the active tab by a state, and have a componentdidmount set the initial active state to the first page



  displayContent(){
    //hide all non-active tab content
    //in this special case there will be one and only one tab active at any time so we can just display one tab depending on state
    switch(this.state.selectedTab){
      case TabIndex.introduction: return <Introduction />
      case TabIndex.workExperience: return <WorkExperience />
      case TabIndex.expertise: return;
      case TabIndex.knowledge: return;
      case TabIndex.expertise: return <Contact />
    }

  }

  handleClick(e){
    var id = e.target.id;
    console.log("clicked");
    console.log(id);
    console.log(TabIndex.introduction);
  }

  render(){
    return (
      <div className = "App">
        <span>hello world</span>

        <navigator className = "tabMenu">
          <button id={1} onClick={this.handleClick}>Intro</button>
          <button id={2} onClick={this.handleClick}>Experience</button>
          <button id={3} onClick={this.handleClick}>Contact</button>
        </navigator>

        {/*refactor these later, each div should be a component1*/}

        {/*this is BAD practice, but bear with it now*/}
        {this.displayContent()}

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

      </div>
    )
  }
}

export default App;
