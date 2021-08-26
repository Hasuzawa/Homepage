import React from 'react';
import {TabIndex} from "./components/Content.jsx";
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
    var tabClicked = parseInt(e.target.id.slice(-1)); //id is a string when passed by event
    this.setState({selectedTab: tabClicked});
  }

  handleFold(e){
    var newFoldStatus = this.state.bannerFolded ? false : true;
    this.setState({bannerFolded: newFoldStatus});
  }

  render(){
    return (
      <div className = "App">
        {/* <Banner bannerFolded={this.state.bannerFolded}/> */}
        <Header handleClick={this.handleClick} handleFold={this.handleFold} {...this.state}/>
        <Content selectedTab={this.state.selectedTab}/>
        <Footer handleClick={this.handleClick}/>
      </div>
    )
  }
}