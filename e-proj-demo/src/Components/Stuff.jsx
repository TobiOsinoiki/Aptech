import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export function Stuff(){
return(
    <div>
    <Container>
 <Row className="g-5 mb-5 mt-5">
           <Col md={6} lg={3}>
             <Card className="h-100 border-0 shadow scale-hover shadow-hover">
               <Card.Body className="p-4">
                 <div className="fs-1 text-primary mb-3">🎓</div>
                 <h3 className="fs-4 fw-semibold mb-2">Professional Education</h3>
                 <p className="text-secondary">Courses, resources, and case studies for dental professionals</p>
               </Card.Body>
             </Card>
           </Col>

           <Col md={6} lg={3}>
             <Card className="h-100 border-0 shadow scale-hover shadow-hover">
               <Card.Body className="p-4">
                 <div className="fs-1 text-success mb-3">👥</div>
                 <h3 className="fs-4 fw-semibold mb-2">Patient Education</h3>
                 <p className="text-secondary">Essential information for maintaining optimal oral health</p>
               </Card.Body>
             </Card>
           </Col>

           <Col md={6} lg={3}>
             <Card className="h-100 border-0 shadow scale-hover shadow-hover">
               <Card.Body className="p-4">
                 <div className="fs-1 text-purple mb-3">🔬</div>
                 <h3 className="fs-4 fw-semibold mb-2">Latest Research</h3>
                 <p className="text-secondary">Cutting-edge research and developments in dental science</p>
               </Card.Body>
             </Card>
           </Col>

           <Col md={6} lg={3}>
             <Card className="h-100 border-0 shadow scale-hover shadow-hover">
               <Card.Body className="p-4">
                 <div className="fs-1 text-warning mb-3">🛍</div>
                 <h3 className="fs-4 fw-semibold mb-2">Dental Products</h3>
                 <p className="text-secondary">Quality dental care products with user ratings and reviews</p>
               </Card.Body>
             </Card>
           </Col>
         </Row>

        <div className="text-center mt-5">
          <h2 className="fs-2 fw-bold text-blue-900 mb-4">Why Oral Health Matters</h2>
          <Row className="g-4">
            <Col md={4}>
              <Card className="h-100 border-0 shadow">
                <Card.Body className="p-4">
                  <h3 className="fs-4 fw-semibold mb-3 text-primary">Prevention</h3>
                  <p className="text-secondary">
                    Regular dental care prevents complications like tooth decay and gum disease, saving you from pain and
                    costly treatments.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow">
                <Card.Body className="p-4">
                  <h3 className="fs-4 fw-semibold mb-3 text-primary">Overall Health</h3>
                  <p className="text-secondary">
                    Oral health is linked to your overall health. Problems in your mouth can affect other parts of your
                    body.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="h-100 border-0 shadow">
                <Card.Body className="p-4">
                  <h3 className="fs-4 fw-semibold mb-3 text-primary">Quality of Life</h3>
                  <p className="text-secondary">
                    A healthy smile improves confidence, speech, and ability to enjoy food, enhancing your quality of life.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </div>
</Container>
</div>
)
}