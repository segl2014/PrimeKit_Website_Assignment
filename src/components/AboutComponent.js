import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaGooglePlay, FaApple, FaShieldAlt, FaStar, FaRegStar } from "react-icons/fa";
import aboutImage from "../images/about_image.png";

const AboutComponent = () => {
  return (
    <Container className="py-5 mt-1">
      <Row className="align-items-center">
     
        <Col md={6} className="text-center text-md-start">
          <p className="text-primary d-flex justify-content-center justify-content-md-start align-items-center">
            <FaShieldAlt className="me-2" /> 100% Secure Payments
          </p>
          <h2 className="fw-bold">
            Make Online Payment <br /> Easily And Increase <br /> Your Business
          </h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendis varius enim in eros elementum tristique.
          </p>

        
          <div className="d-flex flex-column flex-md-row gap-3 my-3">
            <Button variant="dark" className="d-flex align-items-center justify-content-center">
              <FaGooglePlay className="me-2" /> Google Play
            </Button>
            <Button variant="dark" className="d-flex align-items-center justify-content-center">
              <FaApple className="me-2" /> App Store
            </Button>
          </div>

        
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="text-warning">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
            </div>
            <span className="ms-2">(4.9)</span>

            <div className="ms-md-4 mt-2 mt-md-0 text-warning">
              <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
            </div>
            <span className="ms-2">(4.5)</span>
          </div>
        </Col>

    
        <Col md={6} className="d-flex justify-content-center mt-4 mt-md-0">
          <div className="position-relative w-100">
            <img
              src={aboutImage}
              alt="Payment App"
              className="img-fluid"
              style={{ maxWidth: "100%" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutComponent;
