import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export function Gallery() {
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch gallery images");
        return res.json();
      })
      .then((data) => {
        if (data.galleryImages) setGalleryImages(data.galleryImages);
      })
      .catch((error) => {
        console.error("Error loading gallery images:", error);
      });
  }, []);

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
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-0 hover-overlay d-flex align-items-center justify-content-center"
                    style={{ transition: "opacity 0.3s ease" }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = 0.5)}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = 0)}
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
  );
}