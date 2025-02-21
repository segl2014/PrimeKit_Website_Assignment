import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaApple, FaGooglePlay, FaFacebookF, FaGithub, FaTwitter, FaPaperPlane, FaEnvelope } from "react-icons/fa";

const FooterComponent = () => {
  return (
    <footer className="bg-light py-5 mt-5 pt-5">
      <Container>
        <Row className="gy-4">
        
          <Col md={4}>
            <h4>
              Prime<span className="text-primary">Kit</span>
            </h4>
            <p className="text-muted">
              In the fast-paced world of modern technology, many leadership executives and organizations understand that building.
            </p>
            <p className="fw-bold">Get Our Apps From:</p>
            <div className="d-flex gap-2">
              <Button variant="primary">
                <FaApple /> Apple Store
              </Button>
              <Button variant="outline-primary">
                <FaGooglePlay /> Play Store
              </Button>
            </div>
          </Col>

      
          <Col md={2}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled text-muted">
              <li>About Us</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Privacy Policy</li>
              <li>Blogs</li>
              <li>Contact Us</li>
            </ul>
          </Col>

       
          <Col md={2}>
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled text-muted">
              <li>Online Payments</li>
              <li>Balance Transfer</li>
              <li>Payment Request</li>
              <li>Bank Withdraw</li>
              <li>Send Money</li>
              <li>Receive Money</li>
            </ul>
          </Col>

        
          <Col md={4}>
            <h5 className="fw-bold">Newsletter</h5>
            <p className="text-muted">Sign up and receive the latest tips via email.</p>
            <Form className="d-flex">
              <Form.Control type="email" placeholder="Enter Your Mail" className="me-2" />
              <Button variant="primary">
                <FaPaperPlane />
              </Button>
            </Form>
          </Col>
        </Row>

        <hr />

     
        <Row className="mt-3 text-center">
          <Col>
            <div className="d-flex justify-content-center gap-3 mb-2">
              <FaFacebookF className="text-muted" size={18} />
              <FaGithub className="text-muted" size={18} />
              <FaTwitter className="text-muted" size={18} />
            </div>
            <p className="text-muted m-0">© 2025 PrimeKit. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
