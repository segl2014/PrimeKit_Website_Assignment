import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { FaUsers, FaSmile, FaStar, FaDownload } from "react-icons/fa";
import mobileImage from "../images/mobile_image.png";
import mobileImages from "../images/mobiles_image.png";

const SolutionComponent = () => {
  return (
    <Container className="my-5 mt-5">
   
      <Row className="align-items-center">
        <Col md={6}>
          <h5 className="text-primary">ABOUT BESTKIT</h5>
          <h2>Connecting All Your Daily Payment Needs Easily With Bestkit</h2>
          <ul className="list-unstyled">
            <li>
              <strong>A New Global Payment System</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <strong>Your Money Arrives Instantly</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <strong>Payment Faster Than Others</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
          </ul>
        </Col>
        <Col md={6} className="text-center">
          <img
            src={mobileImage}
            alt="Mobile UI"
            className="img-fluid"
          />
        </Col>
      </Row>

    
      <Row className="text-center my-5">
        <Col md={3}>
          <FaUsers size={40} className="text-primary" />
          <h3>47,595</h3>
          <p>Users</p>
        </Col>
        <Col md={3}>
          <FaSmile size={40} className="text-primary" />
          <h3>34,797</h3>
          <p>Happy Clients</p>
        </Col>
        <Col md={3}>
          <FaStar size={40} className="text-primary" />
          <h3>895</h3>
          <p>Reviews</p>
        </Col>
        <Col md={3}>
          <FaDownload size={40} className="text-primary" />
          <h3>50,927</h3>
          <p>App Downloads</p>
        </Col>
      </Row>

  
      <Row className="text-center">
        <h5 className="text-primary">APP INTERFACE</h5>
        <h2>Choose The Offering That Works Best For You.</h2>
        <Col md={12}>
          <Carousel className="mt-4">
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src={mobileImages}
                alt="App Screen 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src={mobileImages}
                alt="App Screen 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block mx-auto"
                src={mobileImages}
                alt="App Screen 3"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default SolutionComponent;
