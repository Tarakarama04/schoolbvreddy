import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GridPage(){
    return (
    <Container>
    <Row>
    <Col>
     <Row>
     <Col className='rowitems'><h3>Experienced Teachers</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
        <Col>
        <img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/></Col>
       
     </Row>
     <Row>
       
        <Col className='rowitems'><h3>A/C Residential campus</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
        <Col>
        <img src='./images/AC.png' alt='girls' className='gridPageImage'/>
        </Col>
     </Row>
     <Row>
       
        <Col className='rowitems'><h3>Delicious food</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
        <Col>
        <img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/>
        </Col>
     </Row>
     </Col>
      <Col xs={6}>  <img src='./images/C3750T01.jpg' alt='girls' className='body'/></Col>
     <Col>
     <Row>
        <Col>
        <img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/></Col>
        <Col className='rowitems'><h3>Experienced Teachers</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
     </Row>
     <Row>
        <Col>
        <img src='./images/AC.png' alt='girls' className='gridPageImage'/>
        </Col>
        <Col className='rowitems'><h3>A/C Residential campus</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
     </Row>
     <Row>
        <Col>
        <img src='./images/Teacher.jpg' alt='girls' className='body'/>
        </Col>
        <Col className='rowitems'><h3>Delicious food</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
     </Row>
     </Col>
    </Row>
  </Container>
    )
}
export default GridPage
