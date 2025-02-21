import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import featuresImage from "../images/features_image.png"; 
import stepsImage1 from "../images/install_app.png"; 
import stepsImage2 from "../images/setup_account.png"; 
import stepsImage3 from "../images/secure_payments.png"; 

const FeatureComponent = () => {
  return (
    <Container className="py-5 mt-5">
      <Row className="align-items-center">
       
        <Col lg={6} className="text-center">
          <img src={featuresImage} alt="Mobile App" className="img-fluid" />
        </Col>

       
        <Col lg={6}>
          <h6 className="text-primary fw-bold">GREAT FEATURES</h6>
          <h2 className="fw-bold">What Makes Us Special</h2>

          <Row className="mt-4">
            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-sm text-center p-3">
                <div className="text-primary fs-3">📷</div>
                <h5 className="mt-3">Transfer Your Balances</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit a Captivate your guests.
                </p>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-sm text-center p-3">
                <div className="text-success fs-3">💰</div>
                <h5 className="mt-3">Request a Payment</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit a Captivate your guests.
                </p>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-sm text-center p-3">
                <div className="text-warning fs-3">💳</div>
                <h5 className="mt-3">Receiving Payments</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit a Captivate your guests.
                </p>
              </Card>
            </Col>

            <Col md={6} className="mb-4">
              <Card className="border-0 shadow-sm text-center p-3">
                <div className="text-info fs-3">🏦</div>
                <h5 className="mt-3">Withdraw to Your Bank</h5>
                <p className="text-muted">
                  Lorem ipsum dolor sit a Captivate your guests.
                </p>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mt-5 text-center">
      <Col>
        <h6 className="text-primary fw-bold">HOW DOES IT WORK?</h6>
        <h2 className="fw-bold">Follow Some Simple Steps For Using Bestkit</h2>
      </Col>
    </Row>

    <Row className="mt-4 text-center">
      <Col md={4}>
        <img src={stepsImage1} alt="Install App" className="img-fluid mb-3" />
        <h5>Install Our App</h5>
        <p className="text-muted">Use community groups to promote your services.</p>
      </Col>

      <Col md={4}>
        <img src={stepsImage2} alt="Setup Account" className="img-fluid mb-3" />
        <h5>Set Up Your Account</h5>
        <p className="text-muted">Use community groups to inspire and motivate.</p>
      </Col>

      <Col md={4}>
        <img src={stepsImage3} alt="Secure Payments" className="img-fluid mb-3" />
        <h5>Secure Payments</h5>
        <p className="text-muted">Use community groups to drive revenue.</p>
      </Col>
    </Row>
    </Container>
  );
};

export default FeatureComponent;
