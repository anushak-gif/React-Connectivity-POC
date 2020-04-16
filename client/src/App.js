import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    onChange = updatedValue => {
        this.setState({
          fields: {
            ...this.state.fields,
            ...updatedValue
          }
        });
      };

    render() {
        return (
            <div className="App">
                 <Form onChange={fields => this.onChange(fields)} />
                <p>
                {JSON.stringify(this.state.fields, null, 2)}
                 </p>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );

    
    }
}

export default App;
