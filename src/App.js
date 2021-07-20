import './App.css';
import navTab from "./components/navTab.jsx";
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
    this.state = {}



    this.handleClick = this.handleClick.bind(this);
  }
  //I might want to keep track of the active tab by a state, and have a componentdidmount set the initial active state to the first page



  displayContent(){
    //hide all non-active tab content
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

        <navigator className = "tabMenu">
          <button id={1} onClick={this.handleClick}>Intro</button>
          <button id={2} onClick={this.handleClick}>Experience</button>
          <button id={3} onClick={this.handleClick}>Contact</button>
        </navigator>

        <div id = "intro" className = "tabContent">
          <h1>front page</h1>
          <p>Welcome to my homepage.</p>
        </div>

        <div>
          <h1>second page</h1>
          <p>This is the second page</p>
        </div>

      </div>
    )
  }
}

export default App;
