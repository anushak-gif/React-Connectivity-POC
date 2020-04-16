import React from "react";
import { Line } from "react-chartjs-2";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

let totalTests = 0,
  positiveCases = 0,
  negativeCases = 0;

const states = [
  "AL",
  "AK",
  "AS",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "DC",
  "FM",
  "FL",
  "GA",
  "GU",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MH",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "MP",
  "OH",
  "OK",
  "OR",
  "PW",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VI",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
];

let state = "GA";

export default class LineGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: [],
      datasets: [
        {
          label: "Total",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [],
        },
        {
          label: "Positive",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "green",
          borderColor: "green",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "green",
          pointBackgroundColor: "green",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "green",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [],
        },
        {
          label: "Negative",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "red",
          borderColor: "red",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "red",
          pointBackgroundColor: "red",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "red",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [],
        },
      ],
    };
    this.chartReference = React.createRef();
  }

  async componentDidMount() {
   this.fetchData();
  }

  async fetchData() {
    const currentState = Object.assign(this.state);
    const response = await fetch("http://localhost:9000/testAPI/states/daily")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        return data
          .filter((obj) => obj.state === state)
          .reduce(
            (curr, next) => {
              curr[0].push(next.totalTestResults);
              curr[1].push(next.positive);
              curr[2].push(next.negative);
              curr[3].push(
                next.date
                  .toString()
                  .replace(/(\d{4})(\d{2})(\d{2})/g, "$2-$3-$1")
              );
              return curr;
            },
            [[], [], [], []]
          );
      })
      .catch(function (err) {
        console.log(err);
        return null;
      });
    totalTests = response[0][0];
    positiveCases = response[1][0];
    negativeCases = response[2][0];
    response[0].reverse(); // total
    response[1].reverse(); // positive
    response[2].reverse(); // negative
    response[3].reverse(); // dates
    currentState.datasets[0].data = response[0];
    currentState.datasets[1].data = response[1];
    currentState.datasets[2].data = response[2];
    currentState.labels = response[3];
    this.setState({ currentState });
  }

  chooseState = e => {
    state = e.target.innerHTML;
    this.fetchData();
  }

  render() {
    return (
      <Container fluid>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {state}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {states.map((state, i) => (
              <Dropdown.Item onClick={this.chooseState} key={i}>{state}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Row>
          <Col>
            <Line
              ref={this.chartReference}
              data={this.state}
              width={50}
              height={25}
              options={{ maintainAspectRatio: true }}
            />
          </Col>
          <Col>
            <Row>Positive Cases</Row>
            <Row>{positiveCases}</Row>
            <br />
            <Row>Negative Cases</Row>
            <Row>{negativeCases}</Row>
            <br />
            <Row>Total Tests</Row>
            <Row>{totalTests}</Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
