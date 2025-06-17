import { Container, Row, Col, Card, Tab, Nav, Button } from "react-bootstrap"
import { FileText, Video, ImageIcon, Download } from 'lucide-react'

export function Research() {
  return (
    <div className="py-5">
      <Container>
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="display-5 fw-bold text-blue-900 mb-3">Latest Research</h2>
          <p className="fs-5 text-secondary">Cutting-edge developments in dental science and technology</p>
        </div>

        <Tab.Container defaultActiveKey="documents">
          <Nav variant="tabs" className="mb-4 justify-content-center">
            <Nav.Item>
              <Nav.Link eventKey="documents">Research Documents</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="videos">Educational Videos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="media">Media Library</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="documents">
              <Row xs={1} md={2} className="g-4">
                {[
                  {
                    title: "AI in Dental Diagnostics: A Comprehensive Review",
                    authors: "Dr. Smith, Dr. Johnson",
                    date: "2024",
                    category: "Technology",
                  },
                  {
                    title: "Minimally Invasive Periodontal Therapy Outcomes",
                    authors: "Dr. Brown, Dr. Davis",
                    date: "2024",
                    category: "Periodontics",
                  },
                  {
                    title: "Biocompatible Materials in Dental Implants",
                    authors: "Dr. Wilson, Dr. Taylor",
                    date: "2023",
                    category: "Materials Science",
                  },
                  {
                    title: "Pediatric Dental Anxiety Management Techniques",
                    authors: "Dr. Anderson, Dr. Martinez",
                    date: "2023",
                    category: "Pediatric Dentistry",
                  },
                  {
                    title: "3D Printing Applications in Oral Surgery",
                    authors: "Dr. Thompson, Dr. Garcia",
                    date: "2024",
                    category: "Oral Surgery",
                  },
                  {
                    title: "Microbiome and Oral Health: Recent Discoveries",
                    authors: "Dr. Lee, Dr. Rodriguez",
                    date: "2024",
                    category: "Microbiology",
                  },
                ].map((paper, index) => (
                  <Col key={index}>
                    <Card className="h-100 shadow-sm hover-shadow">
                      <Card.Header className="bg-white border-0">
                        <div className="d-flex align-items-center">
                          <FileText className="text-primary me-2" size={20} />
                          <Card.Title className="mb-0 fs-5">{paper.title}</Card.Title>
                        </div>
                        <Card.Text className="text-muted small mt-1">
                          {paper.authors} | {paper.date} | {paper.category}
                        </Card.Text>
                      </Card.Header>
                      <Card.Body>
                        <div className="d-flex gap-2">
                          <Button size="sm" variant="outline-primary">
                            <Download size={16} className="me-1" />
                            Download PDF
                          </Button>
                          <Button size="sm" variant="outline-secondary">
                            View Abstract
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="videos">
              <Row xs={1} md={2} lg={3} className="g-4">
                {[
                  "Advanced Root Canal Techniques",
                  "Digital Smile Design Workflow",
                  "Implant Placement Surgery",
                  "Pediatric Behavior Management",
                  "Periodontal Regenerative Therapy",
                  "CAD/CAM Crown Fabrication",
                ].map((video, index) => (
                  <Col key={index}>
                    <Card className="h-100 shadow-sm hover-shadow">
                      <Card.Header className="bg-white border-0">
                        <div className="d-flex align-items-center">
                          <Video className="text-danger me-2" size={20} />
                          <Card.Title className="mb-0 fs-5">{video}</Card.Title>
                        </div>
                        <Card.Text className="text-muted small">Educational video content</Card.Text>
                      </Card.Header>
                      <Card.Body>
                        <div className="bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ height: "120px" }}>
                          <Video size={48} className="text-secondary" />
                        </div>
                        <Button variant="primary" className="w-100">Watch Video</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="media">
              <Row xs={2} md={3} lg={4} className="g-4">
                {[
                  "Dental Anatomy Atlas",
                  "Pathology Image Database",
                  "Radiographic Interpretation Guide",
                  "Surgical Procedure Photos",
                  "Before/After Treatment Cases",
                  "Microscopic Tissue Images",
                  "3D Model Library",
                  "Infographic Collection",
                ].map((media, index) => (
                  <Col key={index}>
                    <Card className="h-100 shadow-sm hover-shadow">
                      <Card.Header className="bg-white border-0 py-2">
                        <div className="d-flex align-items-center">
                          <ImageIcon className="text-success me-2" size={16} />
                          <Card.Title className="mb-0 fs-6">{media}</Card.Title>
                        </div>
                      </Card.Header>
                      <Card.Body className="p-2">
                        <div className="bg-light rounded mb-2 d-flex align-items-center justify-content-center" style={{ height: "80px" }}>
                          <ImageIcon size={32} className="text-secondary" />
                        </div>
                        <Button size="sm" variant="primary" className="w-100">View Gallery</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  )
}