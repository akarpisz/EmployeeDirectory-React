import React, { useContext } from "react";
import userContext from "../utils/userContext";
import { Col, Row, Card, CardTitle, CardHeader, CardBody } from "reactstrap";
const Results = () => {
  const { users, search } = useContext(userContext);
  if (users === null) {
    return <div />;
  }
  if (search === "") {
    return (
      <Row>
        <Col md={12}>
          {users.map((user) => {
            let prsn = user[1];

            return (
              <Row key={prsn.login.uuid}>
                <Col>
                  <Card key={prsn.login.uuid}>
                    <CardHeader>{`${prsn.name.first} ${prsn.name.last}`}</CardHeader>
            <CardTitle>Username: {prsn.login.username}</CardTitle>
                    <CardBody>
                        <span><img src={prsn.picture.thumbnail} alt={`${prsn.name.first} ${prsn.name.last}`}/></span>
                    </CardBody>
                  </Card>
                  <br/><br/>
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    );
  } else {
    return null;
  }
};

export default Results;
