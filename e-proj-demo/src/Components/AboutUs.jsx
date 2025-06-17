import { Container, Row, Col, Card } from "react-bootstrap"
import { Mail, Phone, MapPin, Users, Award, Clock } from 'lucide-react'

export function AboutUs() {
  return (
    <div className="py-5 bg-light">
      <Container>
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="display-5 fw-bold text-blue-900 mb-3">About Us</h2>
          <p className="fs-5 text-secondary">Learn more about Belleville Dental and our commitment to oral health</p>
        </div>

        <Row className="g-4 mb-5">
          <Col md={6}>
            <h3 className="fs-3 fw-bold text-blue-900 mb-3">Our Mission</h3>
            <p className="text-secondary mb-4">
              At Belleville Dental, we are dedicated to providing comprehensive dental education, cutting-edge research,
              and quality products to improve oral health worldwide. Our mission is to bridge the gap between dental
              professionals and patients through accessible information and resources.
            </p>

            <h3 className="fs-3 fw-bold text-blue-900 mb-3">Our Vision</h3>
            <p className="text-secondary">
              To be the leading platform for dental education and oral health awareness, empowering both professionals and
              patients with the knowledge and tools needed for optimal dental care.
            </p>
          </Col>

          <Col md={6}>
            <div className="d-flex flex-column gap-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="d-flex align-items-center fs-5 fw-semibold mb-3">
                    <Users className="text-primary me-2" size={20} />
                    Our Team
                  </h4>
                  <p className="text-secondary mb-0">
                    Our team consists of experienced dental professionals, educators, and technology experts committed to
                    advancing oral health education.
                  </p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="d-flex align-items-center fs-5 fw-semibold mb-3">
                    <Award className="text-success me-2" size={20} />
                    Our Achievements
                  </h4>
                  <ul className="text-secondary ps-3 mb-0">
                    <li>10+ years of dental education excellence</li>
                    <li>50,000+ professionals trained</li>
                    <li>100+ research publications</li>
                    <li>Award-winning educational platform</li>
                  </ul>
                </Card.Body>
              </Card>

              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="d-flex align-items-center fs-5 fw-semibold mb-3">
                    <Clock className="text-warning me-2" size={20} />
                    Our History
                  </h4>
                  <p className="text-secondary mb-0">
                    Founded in 2008, Belleville Dental has grown from a small educational initiative to a comprehensive
                    platform serving the global dental community.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>

        <div className="bg-primary bg-opacity-10 p-4 rounded">
          <h3 className="fs-3 fw-bold text-blue-900 mb-4 text-center">Contact Information</h3>
          <Row xs={1} md={3} className="g-4">
            <Col className="text-center">
              <Mail size={32} className="text-primary mb-2" />
              <h5 className="fw-semibold mb-2">Email</h5>
              <p className="text-secondary mb-1">info@bellevilledental.com</p>
              <p className="text-secondary mb-0">support@bellevilledental.com</p>
            </Col>

            <Col className="text-center">
              <Phone size={32} className="text-success mb-2" />
              <h5 className="fw-semibold mb-2">Phone</h5>
              <p className="text-secondary mb-1">+1 (555) 123-4567</p>
              <p className="text-secondary mb-0">+1 (555) 987-6543</p>
            </Col>

            <Col className="text-center">
              <MapPin size={32} className="text-danger mb-2" />
              <h5 className="fw-semibold mb-2">Address</h5>
              <p className="text-secondary mb-1">123 Dental Education Blvd</p>
              <p className="text-secondary mb-0">Belleville, ON K8N 5A4</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}