import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaArrowRight, FaSignInAlt, FaPaperPlane } from "react-icons/fa";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Sat", value: 30 },
  { day: "Sun", value: 60 },
  { day: "Mon", value: 80 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 50 },
  { day: "Thu", value: 100 },
  { day: "Fri", value: 65 },
];

const PricingComponent = () => {
  return (
    <Container className="my-5 mt-5 pt-5 pb-5">
      <Row className="align-items-center">
     
        <Col md={6}>
          <h2>This App Is Simple & Affordable Which Created For You</h2>
          <p>
            We design & build brand, campaigns & digital projects for business
            large & small with customer experiences.
          </p>
          <Row>
            <Col md={6}>
              <Card className="p-3 border-0 shadow-sm">
                <FaSignInAlt size={30} className="text-success" />
                <h5 className="mt-2">Easy to Sign Up</h5>
                <p className="text-muted">
                  Projects for business large & small with customer experiences.
                </p>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="p-3 border-0 shadow-sm">
                <FaPaperPlane size={30} className="text-warning" />
                <h5 className="mt-2">Fast & Simple</h5>
                <p className="text-muted">
                  Projects for business large & small with customer experiences.
                </p>
              </Card>
            </Col>
          </Row>
        </Col>

      
        <Col md={6} className="text-center">
          <h5>Analytics</h5>
          <div className="d-flex justify-content-between">
            <div className="bg-white p-2 rounded shadow-sm">
              ✅ Weekly Transaction Report
            </div>
            <span className="text-primary">Last 7 days ⓘ</span>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={data}>
              <XAxis dataKey="day" />
              <YAxis hide />
              <Tooltip />
              <Bar dataKey="value" fill="#FFA500" />
              <Bar dataKey="value" data={[data[5]]} fill="#007BFF" />
            </BarChart>
          </ResponsiveContainer>
          <Button variant="primary" size="medium" className="d-flex align-items-center gap-2">
            View Details <FaArrowRight />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingComponent;
