import './App.css';
import React from 'react';
import {TabIndex} from "./components/enum.js";
import {TabMenu} from "./components/TabMenu.jsx";
import TabBody from "./components/TabBody.jsx";


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: TabIndex.introduction};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id){
    var tabClicked = parseInt(id); //id is a string when passed by event
    console.log("clicked");
    console.log(tabClicked);
    this.setState({selectedTab: tabClicked});
  }

  render(){
    return (
      <div className = "App">
        <TabMenu handleClick={this.handleClick}/>
        <TabBody selectedTab={this.state.selectedTab}/>
      </div>
    )
  }
}