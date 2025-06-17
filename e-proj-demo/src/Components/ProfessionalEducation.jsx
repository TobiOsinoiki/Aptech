import { Container, Row, Col, Card, Nav, Tab, Button } from "react-bootstrap"
import { BookOpen, Users, FileText, Microscope } from 'lucide-react'

export function ProfessionalEducation({ scrollToSection }) {
  const handleEnrollClick = () => {
    scrollToSection("contact-us")
  }

  return (
    <div className="py-5">
      <Container>
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="display-5 fw-bold text-blue-900 mb-3">Professional Education</h2>
          <p className="fs-5 text-secondary">Advancing dental education and professional development</p>
        </div>

        <Tab.Container defaultActiveKey="courses">
          <Nav variant="pills" className="mb-4 justify-content-center flex-wrap">
            <Nav.Item>
              <Nav.Link eventKey="courses">Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="help-docs">Help Documents</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="faculty">Faculty Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="student">Student Resources</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="case-studies">Case Studies</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="courses">
              <Row xs={1} md={2} lg={3} className="g-5">
                {[
                  { title: "Advanced Periodontics", duration: "40 hours", level: "Advanced" },
                  { title: "Pediatric Dentistry", duration: "30 hours", level: "Intermediate" },
                  { title: "Oral Surgery Techniques", duration: "50 hours", level: "Advanced" },
                  { title: "Dental Radiology", duration: "25 hours", level: "Beginner" },
                  { title: "Endodontic Procedures", duration: "35 hours", level: "Intermediate" },
                  { title: "Cosmetic Dentistry", duration: "45 hours", level: "Advanced" },
                ].map((course, index) => (
                  <Col key={index}>
                    <Card className="h-100 shadow-sm hover-shadow">
                      <Card.Header className="bg-white border-0">
                        <div className="d-flex align-items-center">
                          <BookOpen className="text-primary me-2" size={20} />
                          <Card.Title className="mb-0 fs-5">{course.title}</Card.Title>
                        </div>
                        <Card.Text className="text-muted small mt-1">
                          Duration: {course.duration} | Level: {course.level}
                        </Card.Text>
                      </Card.Header>
                      <Card.Body>
                        <Button variant="primary" className="w-100" onClick={handleEnrollClick}>
                          Enroll Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="help-docs">
              <Row xs={1} md={2} className="g-5">
                {[
                  "Clinical Guidelines and Protocols",
                  "Equipment Operation Manuals",
                  "Safety and Infection Control",
                  "Patient Management Procedures",
                  "Emergency Response Protocols",
                  "Quality Assurance Standards",
                ].map((doc, index) => (
                  <Col key={index}>
                    <Card className="h-100 shadow-sm hover-shadow">
                      <Card.Header className="bg-white border-0">
                        <div className="d-flex align-items-center">
                          <FileText className="text-success me-2" size={20} />
                          <Card.Title className="mb-0 fs-5">{doc}</Card.Title>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Button variant="outline-primary">Download PDF</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="faculty">
              <Row xs={1} md={2} lg={3} className="g-5">
                {[
                  "Curriculum Development Tools",
                  "Assessment and Evaluation Resources",
                  "Research Collaboration Platform",
                  "Teaching Methodology Guides",
                  "Student Progress Tracking",
                  "Professional Development Programs",
                ].map((resource, index) => (
                  <Col key={index}>
                    <Card className="h-100 shadow-sm hover-shadow">
                      <Card.Header className="bg-white border-0">
                        <div className="d-flex align-items-center">
                          <Users className="text-purple me-2" size={20} />
                          <Card.Title className="mb-0 fs-5">{resource}</Card.Title>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Button variant="outline-primary">Access Resource</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="student">
              <Row xs={1} md={2} className="g-5">
                {[
                  "Study Materials and Textbooks",
                  "Practice Exams and Quizzes",
                  "Clinical Skills Videos",
                  "Anatomy and Physiology Resources",
                  "Career Guidance and Counseling",
                  "Scholarship and Financial Aid",
                ].map((resource, index) => (
                  <Col key={index}>
                    <Card className="h-100 shadow-sm hover-shadow">
                      <Card.Header className="bg-white border-0">
                        <div className="d-flex align-items-center">
                          <BookOpen className="text-warning me-2" size={20} />
                          <Card.Title className="mb-0 fs-5">{resource}</Card.Title>
                        </div>
                      </Card.Header>
                      <Card.Body>
                        <Button variant="outline-primary">Access Now</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="case-studies">
              <Row xs={1} md={2} className="g-5">
                {[
                  { title: "Complex Root Canal Treatment", category: "Endodontics", difficulty: "Advanced" },
                  { title: "Pediatric Behavior Management", category: "Pediatric Dentistry", difficulty: "Intermediate" },
                  { title: "Implant Placement in Compromised Sites", category: "Oral Surgery", difficulty: "Advanced" },
                  { title: "Periodontal Disease Management", category: "Periodontics", difficulty: "Intermediate" },
                ].map((study, index) => (
                  <Col key={index}>
                    <Card className="h-100 shadow-sm hover-shadow">
                      <Card.Header className="bg-white border-0">
                        <div className="d-flex align-items-center">
                          <Microscope className="text-danger me-2" size={20} />
                          <Card.Title className="mb-0 fs-5">{study.title}</Card.Title>
                        </div>
                        <Card.Text className="text-muted small mt-1">
                          {study.category} | {study.difficulty}
                        </Card.Text>
                      </Card.Header>
                      <Card.Body>
                        <Button variant="outline-primary">View Case Study</Button>
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