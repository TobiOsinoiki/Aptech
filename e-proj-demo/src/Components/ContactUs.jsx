import { useState } from "react"
import { Container, Row, Col, Card, Form, Button, Spinner } from "react-bootstrap"
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import emailjs from "emailjs-com";

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .send(
        "viper",          // e.g. 'service_xxx'
        "viper001",         // e.g. 'template_xxx'
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "danieldavidviper001@gmail.com", // EmailJS template can use this param or hardcode
        },
        "S4sTHjB2EcL0hIkq-"               // e.g. 'user_xxx'
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
        },
        (error) => {
          alert("Failed to send message, please try again.");
          setIsSubmitting(false);
        }
      );

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="py-5">
      <Container>
        <div className="text-center mb-4 animate-fade-in">
          <h2 className="display-5 fw-bold text-blue-900 mb-3">Contact Us</h2>
          <p className="fs-5 text-secondary">Get in touch with our team</p>
        </div>

        <Row className="g-4">
          <Col md={6}>
            <Card className="shadow-sm h-100">
              <Card.Header className="bg-white">
                <Card.Title>Send us a Message</Card.Title>
                <Card.Text className="text-muted">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </Card.Text>
              </Card.Header>
              <Card.Body>
                {isSubmitted ? (
                  <div className="alert alert-success" role="alert">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                ) : (
                  <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Control 
          type="text" 
          name="subject" 
          value={formData.subject} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={5} 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </Form.Group>

      <Button 
        type="submit" 
        variant="primary" 
        className="w-100" 
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <span className="me-2">Sending...</span>
            <Spinner animation="border" size="sm" />
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </Form>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <div className="d-flex flex-column gap-4">
              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="d-flex align-items-center fs-5 fw-semibold mb-3">
                    <Mail className="text-primary me-2" size={20} />
                    Email
                  </h4>
                  <p className="text-secondary mb-1">info@bellevilledental.com</p>
                  <p className="text-secondary mb-0">support@bellevilledental.com</p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="d-flex align-items-center fs-5 fw-semibold mb-3">
                    <Phone className="text-success me-2" size={20} />
                    Phone
                  </h4>
                  <p className="text-secondary mb-1">Main: +1 (555) 123-4567</p>
                  <p className="text-secondary mb-0">Support: +1 (555) 987-6543</p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="d-flex align-items-center fs-5 fw-semibold mb-3">
                    <MapPin className="text-danger me-2" size={20} />
                    Address
                  </h4>
                  <p className="text-secondary mb-1">123 Dental Education Blvd</p>
                  <p className="text-secondary mb-1">Belleville, ON K8N 5A4</p>
                  <p className="text-secondary mb-0">Canada</p>
                </Card.Body>
              </Card>

              <Card className="shadow-sm">
                <Card.Body>
                  <h4 className="d-flex align-items-center fs-5 fw-semibold mb-3">
                    <Clock className="text-warning me-2" size={20} />
                    Business Hours
                  </h4>
                  <p className="text-secondary mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-secondary mb-1">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-secondary mb-0">Sunday: Closed</p>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}