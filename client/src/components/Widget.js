import React from "react";
import { Card } from "react-bootstrap";

export default class Widget extends React.Component {

    render(){
        let widgetTitle = this.props.widgetTitle;

        return (
            <div className="col variable-widget bottom-padded">
                <Card>
                    <div className="card-header">
                        <h2 className="light-text"> {widgetTitle} </h2>
                    </div>
                    <div className="card-body">
                        {this.props.children}
                    </div>
                </Card>
            </div>
        );
    }

}