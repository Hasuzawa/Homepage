import './App.css';
import React from 'react';
import {TabIndex} from "./components/enum.js";
import {Introduction, WorkExperience, Expertise, Knowledge , Contact} from "./components/TabContent.jsx";
import {TabMenu} from "./components/TabMenu.jsx";
import TabBody from "./components/TabBody.jsx";


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: TabIndex.introduction};

    this.handleClick = this.handleClick.bind(this);
    //this.displayButtons = this.displayButtons.bind(this);
  }

  handleClick(e){
    var tabClicked = parseInt(e.target.id); //id is a string when passed by event
    console.log("clicked");
    console.log(tabClicked);
    this.setState({selectedTab: tabClicked});
  }

  /*displayButtons(){
    TabIndex.map(entry => (
        <button id={}>



        </button>
      )
    );
  }*/

  render(){
    return (
      <div className = "App">
        {/*<TabMenu />*/}
        <nav className = "tabMenu">
          <button id={TabIndex.introduction} onClick={this.handleClick}>Intro</button>
          <button id={TabIndex.workExperience} onClick={this.handleClick}>Experience</button>
          <button id={TabIndex.expertise} onClick={this.handleClick}>Expertise</button>
          <button id={TabIndex.knowledge} onClick={this.handleClick}>Knowledge</button>
          <button id={TabIndex.contact} onClick={this.handleClick}>Contact</button>
        </nav>
        <TabBody selectedTab={this.state.selectedTab}/>
      </div>
    )
  }
}