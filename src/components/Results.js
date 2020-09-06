import React, { useContext } from "react";
import userContext from "../utils/userContext";
import { Col, Row, Card, CardTitle, CardHeader, CardBody } from "reactstrap";

const Results = () => {
  const { users, search } = useContext(userContext);

  if (users === null) {
    return <div />;
  } else if (search === "") {
    return (
      <Row>
        <Col md={12}>
          {users.map((prsn) => {
           

            return (
              <Row key={prsn.login.uuid}>
                <Col>
                  <Card key={prsn.login.uuid}>
                    <CardHeader>{`${prsn.name.first} ${prsn.name.last}`}</CardHeader>
                    <CardTitle>Username: {prsn.login.username}</CardTitle>
                    <CardBody>
                      <span>
                        <img
                          src={prsn.picture.thumbnail}
                          alt={`${prsn.name.first} ${prsn.name.last}`}
                        />
                      </span>
                      <br />
                      <span>Phone #: {prsn.phone} </span>
                    </CardBody>
                  </Card>
                  <br />
                  <br />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    );
  } else {


    return (
      <Row>
        <Col>
          {users
            .filter((user) => {
              return (
                user.name.first.toLowerCase().includes(search.toLowerCase()) ||
                user.name.last.toLowerCase().includes(search.toLowerCase()) ||
                user.login.username.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((prsn) => {

              return (
                <Row key={prsn.login.uuid}>
                  <Col>
                    <Card key={prsn.login.uuid}>
                      <CardHeader>{`${prsn.name.first} ${prsn.name.last}`}</CardHeader>
                      <CardTitle>Username: {prsn.login.username}</CardTitle>
                      <CardBody>
                        <span>
                          <img
                            src={prsn.picture.thumbnail}
                            alt={`${prsn.name.first} ${prsn.name.last}`}
                          />
                        </span>
                        <br />
                        <span>Phone #: {prsn.phone} </span>
                      </CardBody>
                    </Card>
                    <br />
                    <br />
                  </Col>
                </Row>
              );
            })}
        </Col>
      </Row>
    );
  }
};

export default Results;
