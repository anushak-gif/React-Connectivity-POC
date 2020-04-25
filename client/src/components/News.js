import React from "react";
import xml from "xml-js";
import { ListGroup } from "react-bootstrap";
import Widget from "./Widget";

const request = fetch(
  "https://tools.cdc.gov/api/v2/resources/media/404952.rss"
);

export default class News extends React.Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const json = await request
      .then((res) => res.text())
      .then((txt) => JSON.parse(xml.xml2json(txt)));
    const items = json.elements[0].elements[0].elements
      .filter((e) => e.name === "item")
      .map((item) => item.elements);
    this.setState({ items });
  }

  render() {
    return (
      <div>
        <Widget widgetTitle="News">
          <ListGroup>
            {this.state.items.map((item, key) => (
              <ListGroup.Item as="a" href={item[2].elements[0].text} target="new" key={key}>
                <h5>{item[0].elements[0].text}</h5>
                <p>{item[1].elements[0].text}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Widget>
      </div>


    );
  }
}
