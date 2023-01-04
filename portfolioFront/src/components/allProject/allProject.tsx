import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import './../../css/allProject.css';



 function allProject() {
  

  return (
    <>
<Container className='m-0 w-100 allproject'>
  <Row>
    <Col>
      <Container className='titleContainer'>
        <Row>
          <Col>
            <h3>allProject</h3>
          </Col>
        </Row>
      </Container>
    </Col>
        </Row>
        <Row>
    <Col xs={6}>
      
            
      <Row className='rowProject'>
        <Col className='ps-5'>
          Test ---
        </Col>
      </Row>

      <Row className='rowProject'>
        <Col className='ps-5'>
          Test ---
        </Col>
      </Row>

      <Row className='rowProject'>
        <Col className='ps-5'>
          Test ---
        </Col>
      </Row>

      <Row className='rowProject'>
        <Col className='ps-5'>
          Test ---
        </Col>
      </Row>

      <Row className='rowProject last'>
        <Col className='ps-5'>
          Test ---
        </Col>
      </Row>
    </Col>
  </Row>
</Container>
    </>
  );
}
 export default allProject;

