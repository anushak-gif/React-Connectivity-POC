import React, { Component } from "react";
import "./App.css";
import LineGraph from "./components/LineGraph";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Coronavirus Testing Statistics</h1>
          <LineGraph />
      </div>
    );
  }
}

export default App;
