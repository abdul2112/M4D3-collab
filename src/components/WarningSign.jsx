
import { Component } from "react";
import { Alert, Container } from "react-bootstrap";

class MyAlert extends Component {
  render() {
    return (
      <Container>
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      </Container>
    );
  }
}

export default MyAlert;

import React from "react";

