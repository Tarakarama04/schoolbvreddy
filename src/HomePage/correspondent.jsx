import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image from "../images/F29A9496.JPG";

function Correspondent() {
    return (
 <Container style={{ backgroundImage:`url(${image})` }}>
            <Row>
                <Col>
                    <img src='./images/Madam.jpg' className='madam' />
                </Col>
                <Col>
                    <p className='text1'>
                       Mrs. SOUMINI REDDY a simple and benign person,
                        did her schooling in Bihar and collegiate education at Bangalore.
                        She has been the correspondent of B.V.REDDY SCHOOL from 1 st December 1986.
                        She is credited as the most significant person who has made the founder's vision, a reality.
                        She has utilised all her energy into moulding and shaping an established school of repute.
                    </p>
                </Col>
            </Row>
            </Container>
    );
}

export default Correspondent