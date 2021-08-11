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
    this.state = {
      selectedTab: TabIndex.introduction,
      bannerFolded: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleFold = this.handleFold.bind(this);
  }

  handleClick(e){
    var tabClicked = parseInt(e.target.id); //id is a string when passed by event
    console.log("clicked");
    console.log(tabClicked);
    this.setState({selectedTab: tabClicked});
  }

  handleFold(e){
    console.log("before change", this.state.bannerFolded);
    var newFoldStatus = this.state.bannerFolded ? false : true;
    this.setState({bannerFolded: newFoldStatus});
    console.log("after change", newFoldStatus);
  }

  render(){
    return (
      <div className = "App">
        <Banner bannerFolded={this.state.bannerFolded}/>
        <Header handleClick={this.handleClick} selectedTab={this.state.selectedTab} handleFold={this.handleFold} bannerFolded={this.state.bannerFolded}/>
        <Content selectedTab={this.state.selectedTab}/>
        <Footer handleClick={this.handleClick}/>
      </div>
    )
  }
}