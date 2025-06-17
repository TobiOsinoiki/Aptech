import { Container, Row, Col } from "react-bootstrap"

export function Footer({ scrollToSection }) {
  return (
    <footer className="bg-dark text-white py-4 mb-0">
      <Container>
        <Row className="gy-4">
          <Col md={3}>
            <h3 className="fs-5 fw-bold mb-3">Belleville Dental</h3>
            <p className="text-secondary">
              Your comprehensive resource for dental health, education, and professional development.
            </p>
          </Col>

          <Col md={3}>
            <h4 className="fs-6 fw-semibold mb-3">Quick Links</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("professional-education")}
                  className="btn btn-link text-secondary p-0 text-decoration-none"
                >
                  Professional Education
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("patient-education")}
                  className="btn btn-link text-secondary p-0 text-decoration-none"
                >
                  Patient Education
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("research")}
                  className="btn btn-link text-secondary p-0 text-decoration-none"
                >
                  Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="btn btn-link text-secondary p-0 text-decoration-none"
                >
                  Products
                </button>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h4 className="fs-6 fw-semibold mb-3">Support</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("contact-us")}
                  className="btn btn-link text-secondary p-0 text-decoration-none"
                >
                  Contact Us
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => scrollToSection("about-us")}
                  className="btn btn-link text-secondary p-0 text-decoration-none"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="btn btn-link text-secondary p-0 text-decoration-none"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </Col>

          <Col md={3}>
            <h4 className="fs-6 fw-semibold mb-3">Contact</h4>
            <p className="text-secondary mb-1">123 Dental Education Blvd</p>
            <p className="text-secondary mb-1">Belleville, ON K8N 5A4</p>
            <p className="text-secondary">+1 (555) 123-4567</p>
          </Col>
        </Row>

        <div className="border-top border-secondary mt-4 pt-4 text-center text-secondary">
          <p className="mb-0">&copy; 2024 Belleville Dental. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}