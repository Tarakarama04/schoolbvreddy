import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
 function GridPage(){
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);}

    return (
  //   <Container>
  //   <Row>
  //   <Col>
  //    <Row>
  //    <Col className='rowitems'><h3>Experienced Teachers</h3>
  //     <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
  //       </Col>
  //       <Col>
  //       <img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/></Col>
       
  //    </Row>
  //    <Row>
       
  //       <Col className='rowitems'><h3>A/C Residential campus</h3>
  //     <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
  //       </Col>
  //       <Col>
  //       <img src='./images/AC.png' alt='girls' className='gridPageImage'/>
  //       </Col>
  //    </Row>
  //    <Row>
       
  //       <Col className='rowitems'><h3>Delicious food</h3>
  //     <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
  //       </Col>
  //       <Col>
  //       <img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/>
  //       </Col>
  //    </Row>
  //    </Col>
      
  //     <Col class='col-4' > 
  //     <Carousel activeIndex={index} onSelect={handleSelect} variant='transperent'  >
  //     <Carousel.Item >
  //       <img
  //         className="d-block w-100 h-30"
  //         src="./images/C3750T01.jpg"
  //         alt="First slide"
          
  //       />
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="./images/F29A9495.jpg"
  //         alt="Second slide" />
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="./images/C3750T01.jpg"
  //         alt="Third slide"
  //       />

  //     </Carousel.Item>
  //   </Carousel>    
  //       {/* <img src='./images/C3750T01.jpg' alt='girls' className='body'/>  */}
  //      </Col>
    
  //    <Col>
  //    <Row>
  //       <Col>
  //       <img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/></Col>
  //       <Col className='rowitems'><h3>Experienced Teachers</h3>
  //     <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
  //       </Col>
  //    </Row>
  //    <Row>
  //       <Col>
  //       <img src='./images/AC.png' alt='girls' className='gridPageImage'/>
  //       </Col>
  //       <Col className='rowitems'><h3>A/C Residential campus</h3>
  //     <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
  //       </Col>
  //    </Row>
  //    <Row>
  //       <Col>
  //       <img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/>
  //       </Col>
  //       <Col className='rowitems'><h3>Delicious food</h3>
  //     <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
  //       </Col>
  //    </Row>
  //    </Col>
  //   </Row>
  // </Container>
  <div class='container'>
    <div class='row'>
      <div class='col'>
      <Row>
        <Col className='rowitems'><h3>Experienced Teachers</h3>
          <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
         <Col className='imagealign'><img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/></Col>
      </Row>
      </div>
      <div class='col-6'>
      <Carousel   >
        <Carousel.Item >
          <img
            className="d-block w-100 "
            src="./images/AB6I1043.jpg"
            alt="First slide"
      
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/F29A9495.jpg"
            alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/AB6I1043.jpg"
            alt="Third slide"/>
        </Carousel.Item>
      </Carousel>    
      </div>
      <div class='col'>
      <Row>
        <Col className='rowitems'><h3>Delicious food</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
        <Col className='imagealign'> <img src='./images/Teacher.jpg' alt='girls' className='gridPageImage'/> </Col>
     </Row>
      </div>
    </div>
    <div class='row'>
      <div class='col'>
      <Row>
       
            <Col className='rowitems'><h3>A/C Residential campus</h3>
             <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
            </Col>
            <Col className='imagealign'> <img src='./images/AC.png' alt='girls' className='gridPageImage'/> </Col>
         </Row>
      </div>
      <div class='col-4'>
      <img
            className="col4image"
            src="./images/C3750T01.jpg"
            alt="First slide"
            
          />
      </div>
      <div class='col-2' >
      {/* <img
            className="col2image"
            src="./images/C3750T01.jpg"
            alt="First slide"
            
          /> */}
          <div className='divbox'>
          <h4>Dream</h4>
          <h4>Belive</h4>
          <h4>Achieve</h4>
          </div>
      </div>
      <div class='col'>
      <Row>
        <Col className='rowitems'><h3>Delicious food</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
        <Col className='imagealign'> <img src='./images/AC.png' alt='girls' className='gridPageImage'/> </Col>
     </Row>
      </div>
    </div>
    <div class='row'>
      <div class='col'>
      <Row>
        <Col className='rowitems'><h3>Delicious food</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
        <Col className='imagealign'> <img src='./images/AC.png' alt='girls' className='gridPageImage'/> </Col>
     </Row>

      </div>
      <div class='col-3'>
      <img
            className="d-block w-100"
            src="./images/C3750T01.jpg"
            alt="Third slide"/>
      </div>
      <div class='col-3'>
      <Carousel >
        
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="./images/F29A9495.jpg"
            alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/C3750T01.jpg"
            alt="Third slide"/>
        </Carousel.Item>
      </Carousel>    
      </div>
      <div class='col'>
      <Row>
        <Col className='rowitems'><h3>Delicious food</h3>
      <p className='text'>soijwej welkjwej lkjkjowej oijnksndksnd</p>
        </Col>
        <Col className='imagealign'> <img src='./images/AC.png' alt='girls' className='gridPageImage'/> </Col>
     </Row>
      </div>
    </div>
  </div>
    )
}
export default GridPage