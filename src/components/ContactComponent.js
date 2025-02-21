import React from "react";
import { Container, Row, Col, Button, Accordion, Card } from "react-bootstrap";

const ContactComponent = () => {
  return (
    <Container className="my-5 mt-5 pt-5 pb-5">
      <Row className="align-items-center">
      
        <Col md={5}>
          <p className="text-primary fw-bold">ANSWER TO</p>
          <h2 className="fw-bold">Frequently Asked Questions</h2>
          <p className="text-muted">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </p>
          <Button variant="primary">Contact Us</Button>
        </Col>

      
        <Col md={7}>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Professional & Experienced Team Member</Accordion.Header>
              <Accordion.Body>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>Our Main Goal How To Success In IT Business</Accordion.Header>
              <Accordion.Body>
                The IT industry is constantly evolving, and success depends on
                strategic planning, innovation, and customer satisfaction.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>How Can We Improve Our Productivity?</Accordion.Header>
              <Accordion.Body>
                Productivity can be enhanced through better time management,
                automation, and collaboration tools.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>Why Choose Our IT Services?</Accordion.Header>
              <Accordion.Body>
                Our IT services offer reliability, expertise, and tailored
                solutions to meet your business needs.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactComponent;
