import { Container, Row, Col, Card } from "react-bootstrap"

export function Gallery() {
  const galleryImages = [
    { src: "room.png", alt: "Modern dental office", category: "Office" },
    { src: "tools.jpg", alt: "Dental equipment", category: "Equipment" },
    { src: "procedure.png", alt: "Dental procedure", category: "Procedures" },
    { src: "team.png", alt: "Dental team", category: "Team" },
    { src: "patient.png", alt: "Patient consultation", category: "Consultation" },
    { src: "tech.png", alt: "Dental technology", category: "Technology" },
    { src: "smile.png", alt: "Smile makeover", category: "Results" },
    { src: "kids.png", alt: "Pediatric dentistry", category: "Pediatric" },
    { src: "ortho.png", alt: "Orthodontic treatment", category: "Orthodontics" },
  ]

  return (
    <div className="py-5">
      <Container>
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="display-5 fw-bold text-blue-900 mb-3">Gallery</h2>
          <p className="fs-5 text-secondary">Explore our dental practice and services</p>
        </div>

        <Row xs={1} md={2} lg={3} className="g-4">
          {galleryImages.map((image, index) => ( 
            <Col key={index}>
              <Card className="border-0 shadow-sm overflow-hidden hover-shadow">
                <div className="position-relative">
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 hover-overlay d-flex align-items-center justify-content-center"
                    style={{ 
                      transition: "opacity 0.3s ease",
                      opacity: 0
                    }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = 0.5}
                    onMouseOut={(e) => e.currentTarget.style.opacity = 0}
                  >
                    <div className="text-white text-center">
                      <h5 className="mb-1">{image.alt}</h5>
                      <p className="mb-0 small">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}