import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const images = [
  "/shine.jpg",
  "/wallpaperflare.com_wallpaper (1).jpg",
  "/teeth.jpg",
  "/white.webp"
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero-bg min-vh-100 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(40, 116, 122, 0.6), rgba(34, 89, 122, 0.6)), url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out"
      }}
    >
      <Container className="py-5">
        <div className="text-center mb-5 text-white">
          <h1 className="display-4 fw-bold mb-3">Welcome to Belleville Dental</h1>
          <p className="fs-5 text-white-50 mx-auto" style={{ maxWidth: "800px" }}>
            Your comprehensive resource for dental health, education, and professional development. We're committed to
            maintaining your oral health and providing the latest information in dental care.
          </p>
        </div>

       
        
      </Container>
    </div>
  );
}
// 