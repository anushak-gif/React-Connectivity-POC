import React from "react";
// import Widget from "./Widget";
import { CardColumns } from "react-bootstrap";
import QuickLinks from "./QuickLinks";
import Instagram from "./Instagram";
import News from "./News";


export default class Canvas extends React.Component {
  render() {
    return (
      <CardColumns id="card-canvas">
          <QuickLinks />
          <Instagram />
          <News />
      </CardColumns>
    );
  }
}