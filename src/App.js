import './App.css';
import navTab from "./Components/navTab.jsx";
import React from 'react';



/*
function App() {
  return (
    <div className="App">
      <navTab />
    </div>
  );
}*/


class App extends React.Component {
  constructor(){
    super();


    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    var id = e.target.id;
    console.log("clicked");
    console.log(id);
  }

  render(){
    return (
      <div className = "App">
        <span>hello world</span>
        <div>
          <button id="1" onClick={this.handleClick}>Intro</button>
          <button id={2} onClick={this.handleClick}>Experience</button>
          <button id={3} onClick={this.handleClick}>Contact</button>
        </div>
      </div>
    )
  }
}

export default App;
