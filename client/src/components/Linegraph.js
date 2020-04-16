import React from "react";
import { Line } from "react-chartjs-2";

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
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "green",
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
          label: "Negative",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "red",
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
      ],
    };
    this.chartReference = React.createRef();
  }

  async componentDidMount() {
    const currentState = Object.assign(this.state);
    const response = await fetch("http://localhost:9000/testAPI/states/daily")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        return data
          .filter((obj) => obj.state === "GA")
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
    console.log(response);
    response[0].reverse();
    response[1].reverse();
    response[2].reverse();
    response[3].reverse();
    currentState.datasets[0].data = response[0];
    currentState.datasets[1].data = response[1];
    currentState.datasets[2].data = response[2];
    currentState.labels = response[3];
    this.setState({ currentState });
  }

  render() {
    return <Line ref={this.chartReference} data={this.state} width={50} height={20} />;
  }
}
