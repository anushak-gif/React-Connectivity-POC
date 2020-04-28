import React, { Component } from "react";
import "./App.css";
import LineGraph from "./components/Linegraph";
import "bootstrap/dist/css/bootstrap.min.css";
import Chatbot from "./components/Chatbot";
import Canvas from "./components/Canvas";
import image from "./images/covid.png";
import { Container, Image } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Image src={image} id="title" alt="covid" fluid />
        <LineGraph />
        <Chatbot />
        <Canvas />
      </Container>
    );
  }
}

export default App;
