import React, { Component } from "react";
import "./App.css";
import LineGraph from "./components/Linegraph";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "./components/Chatbot";
import News from "./components/News";

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <h1>My COVID-19 Dashboard</h1>
        <LineGraph />
        <Chatbot />
        <News />
      </div>
    );
  }
}

export default App;
