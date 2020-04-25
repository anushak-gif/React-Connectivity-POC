import React from "react";
import { Card } from "react-bootstrap";

export default class Widget extends React.Component {

    render(){
        let widgetTitle = this.props.widgetTitle;

        return (
            <div className="col col-4 variable-widget">
                <Card className="bottom-padded">
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