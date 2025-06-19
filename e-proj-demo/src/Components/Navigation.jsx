import { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Menu, X } from "lucide-react";

export function Navigation({ activeSection, scrollToSection }) {
    const [visitCount, setVisitCount] = useState(0);
  const hasCountedVisit = useRef(false); // flag to prevent double counting

  useEffect(() => {
    if (hasCountedVisit.current) return;  // skip if already incremented

    const visits = localStorage.getItem('visitorCount');
    let count = visits ? parseInt(visits, 10) : 0;
    count++;
    localStorage.setItem('visitorCount', count);
    setVisitCount(count);

    hasCountedVisit.current = true; // mark as counted
  }, []);

  const [hoveredItem, setHoveredItem] = useState(null);
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "professional-education", label: "Professional Education" },
    { id: "patient-education", label: "Patient Education" },
    { id: "research", label: "Research" },
    { id: "products", label: "Products" },
    { id: "gallery", label: "Gallery" },
    { id: "about-us", label: "About Us" },
    { id: "contact-us", label: "Contact Us" },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setExpanded(false);
  };

  

  return (
    <Navbar expand="md" className="bg-gradient-blue sticky-top shadow" expanded={expanded} onToggle={setExpanded}
  style={{ background: "linear-gradient(rgb(105, 151, 232), rgb(83, 171, 234))"}}

    >
      <Container className="p-3">
        <div className="d-flex align-items-center">
          <div className="position-relative me-3">
            <div className="rounded-circle bg-gradient-blue d-flex align-items-center justify-content-center shadow" style={{ width: "48px", height: "48px" }}>
              <svg className="text-white" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <div className="position-absolute bg-success rounded-circle border border-white" style={{ width: "16px", height: "16px", top: "-4px", right: "-4px" }}></div>
          </div>
          <div>
            <Navbar.Brand className="text-white m-0">Belleville Dental</Navbar.Brand>
            <p className="text-white small m-0">Excellence in Oral Care</p>
            <div className="text-white bold m-0" style={{ marginLeft: "auto" }}>
        <strong>Visitors:🧑🏻‍🦲{visitCount}</strong>
      </div>
          </div>
          
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          {expanded ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link
                key={item.id}
                className={`text-white px-3 ${activeSection === item.id ? "bg-primary rounded" : ""}`}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  transform: hoveredItem === item.id ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.3s ease"
                }}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}