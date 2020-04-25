import React, { Component } from "react";
import "./App.css";
import LineGraph from "./components/Linegraph";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "./components/Chatbot";
import Canvas from "./components/Canvas";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <h1>My COVID-19 Dashboard</h1>
        <LineGraph />
        <Chatbot />
        <Canvas />
      </div>
    );
  }
}

export default App;
