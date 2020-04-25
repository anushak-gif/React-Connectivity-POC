import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class Chatbot extends React.Component {
    render() {
        return (
            <div id="chatbot" className="container-fluid bottom-padded">
                <Row>
                    <Col className="col-7">
                        <div className="card">
                            <div className="card-header" id="chat-head">
                                <h2 className="light-text">Want to Chat? </h2>
                            </div>
                            <div className="card-body">
                                <p className="no-emphasis bottom-padded">Watson is ready to answer your questions.</p>
                                <input className="form-control form-control-sm" type="text" placeholder="type here to chat"></input>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }

};