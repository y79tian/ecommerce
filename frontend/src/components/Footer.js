import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <footer>
      <Container>
        {/* row and col are grid system in bootstrap */}
        <Row>
          <Col className="text-center py-3">Copyright &copy; ProShop</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
