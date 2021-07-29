import './App.css';
import React from 'react';
import {TabIndex} from "./components/enum.js";
import Banner from "./components/Banner.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import Footer from "./components/Footer.jsx";


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
        <Banner />
        <Header handleClick={this.handleClick} selectedTab={this.state.selectedTab}/>
        <Content selectedTab={this.state.selectedTab}/>
        <Footer />
      </div>
    )
  }
}