import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";


const Header = () => {
  return (
    <Row>
      <Col md={12}>
      <Jumbotron className="text-center">Employee Directory</Jumbotron>
      </Col>
    </Row>
  );
};

export default Header;
