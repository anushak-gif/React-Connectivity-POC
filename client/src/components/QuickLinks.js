import React from "react";
import Widget from "./Widget";


export default class QuickLinks extends React.Component {
  render() {
    return (
      <div className="variable-widget">
        <Widget widgetTitle="Quick Links">
            <a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html" alt="CDC Covid-19">CDC COVID-19 Page</a><br />
            <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/index.html#cdc-chat-bot-open">Coronavirus Self-Checker</a><br />
            <a href="https://dph.georgia.gov/">State COVID-19 homepage</a>
        </Widget>
      </div>
    );
  }
}