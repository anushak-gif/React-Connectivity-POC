import React, { Component } from "react";
import "./App.css";
import LineGraph from "./components/Linegraph";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "./components/Chatbot";
import Canvas from "./components/Canvas";
import image from './images/covid.png';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <img src={image} id="title" alt="covid"/>
        <LineGraph />
        <Chatbot />
        <Canvas />
      </div>
    );
  }
}

export default App;
