import { useState } from "react"
import { Container, Row, Col, Card, Form, Badge, Button } from "react-bootstrap"
import { Star, Filter, Heart } from 'lucide-react'

export function Products() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [userRatings, setUserRatings] = useState({})

  const products = [
 
    {src: "white.png",
      id: 1,
      name: "Professional Whitening Toothpaste",
      category: "toothpaste",
      price: "$12.99",
    },
    { src: "sensitive.jpg", id: 2, name: "Sensitive Teeth Formula", category: "toothpaste", price: "$9.99" },
    { src:"flo.png", id: 3, name: "Fluoride Protection Plus", category: "toothpaste", price: "$8.99" },
    { src:"herbs.png",id: 4, name: "Natural Herbal Toothpaste", category: "toothpaste", price: "$11.99" },
    { src:"cavity.png", id: 5, name: "Cavity Defense Formula", category: "toothpaste", price: "$10.99" },

   
    { src:"manual.png", id: 6, name: "Soft Bristle Manual Brush", category: "brushes", price: "$4.99" },
    { src:"medium.png",id: 7, name: "Medium Bristle Pro Brush", category: "brushes", price: "$5.99" },
    { src:"bamboo.jpg",id: 8, name: "Bamboo Eco Toothbrush", category: "brushes", price: "$6.99" },
    { src:"travel.png", id: 9, name: "Travel Size Compact Brush", category: "brushes", price: "$3.99" },
    {src: "ortho2.png", id: 10, name: "Orthodontic Specialty Brush", category: "brushes", price: "$7.99" },


    { src:"electric.png", id: 11, name: "Electric Toothbrush Pro", category: "electrical", price: "$89.99" },
    { src:"water.png", id: 12, name: "Water Flosser Deluxe", category: "electrical", price: "$79.99" },
    { src:"sanitize.png", id: 13, name: "UV Toothbrush Sanitizer", category: "electrical", price: "$45.99" },
    { src:"Sonic.png", id: 14, name: "Sonic Cleaning System", category: "electrical", price: "$129.99" },
    { src:"oral.png", id: 15, name: "Portable Oral Irrigator", category: "electrical", price: "$59.99" },
  

   
    { src: "pack.png" , id: 16, name: "Kids Fun Toothbrush Set", category: "kids", price: "$15.99" },
    { src: "paste.png", id: 17, name: "Children's Fluoride Toothpaste", category: "kids", price: "$6.99" },
    { src: "brush.png", id: 18, name: "Cartoon Character Brush", category: "kids", price: "$8.99" },
    { src: "kids2.png", id: 19, name: "Kids Electric Toothbrush", category: "kids", price: "$29.99" },
    { src: "gum.png", id: 20, name: "Fun Flavored Mouthwash", category: "kids", price: "$7.99" },

    // Mouthwash
    
    {src: "flo2.png",  id: 21, name: "Fluoride Mouthwash", category: "mouthwash", price: "$8.99" },
    { src: "rinse.png", id: 22, name: "Antibacterial Rinse", category: "mouthwash", price: "$9.99" },
    { src: "whiten.png", id: 23, name: "Whitening Mouthwash", category: "mouthwash", price: "$11.99" },
    { src: "sensitive-gums.png", id: 24, name: "Sensitive Gums Formula", category: "mouthwash", price: "$10.99" },
    { src: "fresh.png", id: 25, name: "Fresh Breath Rinse", category: "mouthwash", price: "$7.99" },
  ]

  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((product) => product.category === selectedCategory)

  const handleRating = (productId, rating) => {
    setUserRatings((prev) => ({ ...prev, [productId]: rating }))
  }

  const renderStars = (rating, interactive = false, productId) => {
    const currentRating = productId && userRatings[productId] ? userRatings[productId] : 0

    return (
      <div className="d-flex align-items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={`me-1 ${
              star <= currentRating ? "text-warning fill-warning" : "text-secondary"
            } ${interactive ? "cursor-pointer" : ""}`}
            onClick={interactive && productId ? () => handleRating(productId, star) : undefined}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="bg-light py-2 mt-5">
      <Container>
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="display-5 fw-bold text-blue-900 mb-3">Dental Products</h2>
          <p className="fs-5 text-secondary">Quality dental care products with user ratings and reviews</p>
        </div>

        <div className="mb-4 d-flex flex-column flex-sm-row align-items-center justify-content-between">
          <div className="d-flex align-items-center mb- mb-sm-0">
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
                  <div className="aspect-ratio bg-light rounded mb-3 d-flex align-items-center justify-content-center" style={{ aspectRatio: "1/1" }}>
                    <div className="display-4"><img src= {product.src}  className="card-product" style={{ height: "310px", width: "280px", objectFit: "cover" }} /></div>
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
                      {userRatings[product.id] && <p className="small text-success mt-1">Thank you for rating!</p>}
                    </div>

                    <Button
                      variant="outline-primary"
                      className="w-100"
                      onClick={() => {
                        const element = document.getElementById("contact-us")
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" })
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
  )
}