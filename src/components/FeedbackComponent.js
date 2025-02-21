import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const testimonials = [
  {
    text: "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
    name: "Jhon Smith",
    role: "Web Developer",
    img: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    text: "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
    name: "Kumar Amar",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    text: "Lorem Ipsum is a simply dummy text of the printing and type settings for has been the industry's standard dummy text the ever since unknown printer.",
    name: "Jesica Lirona",
    role: "Front End Developer",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
];

const FeedbackComponent = () => {
  return (
    <Container className="my-5 mt-5 pt-5 pb-5">
      <Row className="text-center mb-4">
        <Col>
          <p className="text-primary fw-bold">TESTIMONIAL</p>
          <h2 className="fw-bold">See What Others Have to Say About Us</h2>
        </Col>
      </Row>

      <Carousel indicators={false} controls={true} interval={3000}>
        {testimonials.map((testimonial, index) => (
          <Carousel.Item key={index}>
            <Row className="justify-content-center">
              {testimonials.map((t, i) => (
                <Col md={4} key={i}>
                  <div
                    className={`p-4 text-dark rounded shadow ${
                      i === index ? "bg-primary text-white" : "bg-light text-dark"
                    }`}
                  >
                    <p className="fs-5">“{t.text}”</p>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mt-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="rounded-circle"
                      width="50"
                      height="50"
                    />
                    <div className="ms-3">
                      <h5 className="mb-0">{t.name}</h5>
                      <p className="text-primary">{t.role}</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default FeedbackComponent;
