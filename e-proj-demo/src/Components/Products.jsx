import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Form, Badge, Button } from "react-bootstrap";
import { Star, Filter, Heart } from "lucide-react";

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [userRatings, setUserRatings] = useState({});
  const [products, setProducts] = useState([]);

  // Load products from db.json on mount
  useEffect(() => {
    fetch("/db.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error loading products:", error));
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleRating = (productId, rating) => {
    setUserRatings((prev) => ({ ...prev, [productId]: rating }));
  };

  const renderStars = (rating, interactive = false, productId) => {
    const currentRating = productId && userRatings[productId] ? userRatings[productId] : 0;

    return (
      <div className="d-flex align-items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`me-1 ${
              star <= currentRating ? "text-warning fill-warning" : "text-secondary"
            } ${interactive ? "cursor-pointer" : ""}`}
            onClick={
              interactive && productId
                ? () => handleRating(productId, star)
                : undefined
            }
            style={{ cursor: interactive ? "pointer" : "default" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-light py-2 mt-5">
      <Container>
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="display-5 fw-bold text-blue-900 mb-3">Dental Products</h2>
          <p className="fs-5 text-secondary">
            Quality dental care products with user ratings and reviews
          </p>
        </div>

        <div className="mb-4 d-flex flex-column flex-sm-row align-items-center justify-content-between">
          <div className="d-flex align-items-center mb-3 mb-sm-0">
            <Filter size={20} className="text-secondary me-2" />
            <Form.Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{ width: "200px" }}
            >
              <option value="all">All Products</option>
              <option value="toothpaste">Toothpaste</option>
              <option value="brushes">Brushes</option>
              <option value="electrical">Electrical Accessories</option>
              <option value="kids">Kids Products</option>
              <option value="mouthwash">Mouthwash</option>
            </Form.Select>
          </div>
          <Badge bg="secondary">{filteredProducts.length} products found</Badge>
        </div>

        <Row xs={1} md={2} lg={3} xl={4} className="g-5">
          {filteredProducts.map((product) => (
            <Col key={product.id}>
              <Card className="h-100 shadow-sm hover-shadow">
                <Card.Header className="border-0 bg-white">
                  <div
                    className="aspect-ratio bg-light rounded mb-3 d-flex align-items-center justify-content-center"
                    style={{ aspectRatio: "1/1" }}
                  >
                    <img
                      src={product.src}
                      alt={product.name}
                      className="card-product"
                      style={{ height: "310px", width: "280px", objectFit: "cover" }}
                    />
                  </div>
                  <Card.Title className="fs-5">{product.name}</Card.Title>
                  <Badge bg="light" text="dark" className="mb-2">
                    {product.category}
                  </Badge>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <span className="fs-4 fw-bold text-primary">{product.price}</span>
                    </div>

                    <div>
                      <p className="small fw-medium mb-2">Rate this product:</p>
                      {renderStars(0, true, product.id)}
                      {userRatings[product.id] && (
                        <p className="small text-success mt-1">Thank you for rating!</p>
                      )}
                    </div>

                    <Button
                      variant="outline-primary"
                      className="w-100"
                      onClick={() => {
                        const element = document.getElementById("contact-us");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      <Heart size={16} className="me-2" />
                      Want Some
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}