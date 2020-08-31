import React,{useContext} from 'react';
import {Row, Col, Button, Input, Label} from 'reactstrap';
import userContext from '../utils/userContext';
const Main = ({handleInputChange, handleSubmit}) => {
    const {search} = useContext(userContext);
 return (
    <Row>
        <Col md={12} xs={12}>
        <Label for="employee-search"></Label><Input name="search" onChange={handleInputChange} value={search}/>
        <Button color="danger" onClick={handleSubmit}>
    Sort
        </Button>
        
        </Col>
    </Row>
 )
};
export default Main;