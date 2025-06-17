import { Container, Row, Col, Card } from "react-bootstrap"
import { Heart, Shield, Smile, AlertTriangle } from 'lucide-react'

export function PatientEducation() {
  return (
    <div className="bg-light py-5">
      <Container>
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="display-5 fw-bold text-blue-900 mb-3">Patient Education</h2>
          <p className="fs-5 text-secondary">Essential information for maintaining optimal oral health</p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          <Col>
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Header className="bg-white border-0">
                <div className="d-flex align-items-center">
                  <Heart className="text-danger me-2" size={24} />
                  <div>
                    <Card.Title className="mb-0">Daily Oral Care</Card.Title>
                    <Card.Text className="text-muted small">Essential daily routines for healthy teeth and gums</Card.Text>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="small ps-3">
                  <li className="mb-1">Brush twice daily with fluoride toothpaste</li>
                  <li className="mb-1">Floss daily to remove plaque between teeth</li>
                  <li className="mb-1">Use mouthwash to kill bacteria</li>
                  <li>Replace toothbrush every 3-4 months</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Header className="bg-white border-0">
                <div className="d-flex align-items-center">
                  <Shield className="text-primary me-2" size={24} />
                  <div>
                    <Card.Title className="mb-0">Preventive Care</Card.Title>
                    <Card.Text className="text-muted small">Preventing dental problems before they start</Card.Text>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="small ps-3">
                  <li className="mb-1">Regular dental checkups every 6 months</li>
                  <li className="mb-1">Professional cleanings</li>
                  <li className="mb-1">Fluoride treatments</li>
                  <li>Dental sealants for children</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Header className="bg-white border-0">
                <div className="d-flex align-items-center">
                  <Smile className="text-success me-2" size={24} />
                  <div>
                    <Card.Title className="mb-0">Healthy Diet</Card.Title>
                    <Card.Text className="text-muted small">Foods that promote dental health</Card.Text>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="small ps-3">
                  <li className="mb-1">Limit sugary and acidic foods</li>
                  <li className="mb-1">Eat calcium-rich foods</li>
                  <li className="mb-1">Drink plenty of water</li>
                  <li>Choose healthy snacks</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Header className="bg-white border-0">
                <div className="d-flex align-items-center">
                  <AlertTriangle className="text-warning me-2" size={24} />
                  <div>
                    <Card.Title className="mb-0">Warning Signs</Card.Title>
                    <Card.Text className="text-muted small">When to see your dentist immediately</Card.Text>
                  </div>
                </div>
              </Card.Header>
              <Card.Body>
                <ul className="small ps-3">
                  <li className="mb-1">Persistent tooth pain</li>
                  <li className="mb-1">Bleeding or swollen gums</li>
                  <li className="mb-1">Loose teeth</li>
                  <li>Bad breath that won't go away</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Header className="bg-white border-0">
                <Card.Title className="mb-0">Common Dental Issues</Card.Title>
                <Card.Text className="text-muted small">Understanding common oral health problems</Card.Text>
              </Card.Header>
              <Card.Body>
                <ul className="small ps-3">
                  <li className="mb-1">Tooth decay and cavities</li>
                  <li className="mb-1">Gum disease (gingivitis/periodontitis)</li>
                  <li className="mb-1">Tooth sensitivity</li>
                  <li>Oral infections</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Header className="bg-white border-0">
                <Card.Title className="mb-0">Special Care</Card.Title>
                <Card.Text className="text-muted small">Oral health for different life stages</Card.Text>
              </Card.Header>
              <Card.Body>
                <ul className="small ps-3">
                  <li className="mb-1">Pregnancy and oral health</li>
                  <li className="mb-1">Children's dental care</li>
                  <li className="mb-1">Senior oral health</li>
                  <li>Diabetes and dental health</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="bg-primary bg-opacity-10 p-4 rounded">
          <h3 className="fs-3 fw-bold text-blue-900 mb-3">Remember</h3>
          <p className="fs-5 text-secondary">
            Good oral health is essential for overall health and well-being. Regular dental visits, proper oral hygiene,
            and a healthy lifestyle can prevent most dental problems and help you maintain a beautiful, healthy smile for
            life.
          </p>
        </div>
      </Container>
    </div>
  )
}