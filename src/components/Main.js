import React, { useContext } from "react";
import { Row, Col, Input, Label } from "reactstrap";
import userContext from "../utils/userContext";
const Main = ({ handleInputChange}) => {
  const { search } = useContext(userContext);
  return (
    <Row>
      <Col md={12} xs={12}>
        <Label for="employee-search"></Label>
        <Input name="search" onChange={handleInputChange} value={search} />
      </Col>
    </Row>
  );
};
export default Main;
