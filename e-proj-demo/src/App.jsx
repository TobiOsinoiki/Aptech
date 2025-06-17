import { useEffect, useState, useRef } from "react"
import { Navigation } from "./Components/Navigation"
import { Hero } from "./Components/Hero"
import { Stuff } from "./Components/Stuff"
import { ProfessionalEducation } from "./Components/ProfessionalEducation"
import { PatientEducation } from "./Components/PatientEducation"
import { Research } from "./Components/Research"
import { Products } from "./Components/Products"
import { Gallery } from "./Components/Gallery"
import { AboutUs } from "./Components/AboutUs"
import { ContactUs } from "./Components/ContactUs"
import { Footer } from "./Components/Footer"
import { ScrollingTicker } from "./Components/ScrollingTicker"
import { Spinner } from "react-bootstrap"

function App() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  // References to each section for scrolling
  const homeRef = useRef(null)
  const professionalRef = useRef(null)
  const patientRef = useRef(null)
  const researchRef = useRef(null)
  const productsRef = useRef(null)
  const galleryRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    // Set up intersection observer to detect which section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    // Observe all section elements
    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Function to scroll to a section when navigation is clicked
  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      home: homeRef,
      "professional-education": professionalRef,
      "patient-education": patientRef,
      research: researchRef,
      products: productsRef,
      gallery: galleryRef,
      "about-us": aboutRef,
      "contact-us": contactRef,
    }

    const ref = sectionRefs[sectionId]
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (isLoading) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-white">
        <div className="text-center">
          <Spinner animation="border" variant="primary" style={{ width: "4rem", height: "4rem" }} className="mb-4" />
          <p className="fs-4 text-blue-900">Loading Belleville Dental...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <Navigation activeSection={activeSection} scrollToSection={scrollToSection} />

      <main>
        <section id="home" ref={homeRef}>
          <Hero />
        </section>

        <section id="stuff" ref={homeRef}>
          <Stuff />
        </section>


        <section id="professional-education" ref={professionalRef}>
          <ProfessionalEducation scrollToSection={scrollToSection} />
        </section>

        <section id="patient-education" ref={patientRef}>
          <PatientEducation />
        </section>

        <section id="research" ref={researchRef}>
          <Research />
        </section>

        <section id="products" ref={productsRef}>
          <Products />
        </section>

        <section id="gallery" ref={galleryRef}>
          <Gallery />
        </section>

        <section id="about-us" ref={aboutRef}>
          <AboutUs />
        </section>

        <section id="contact-us" ref={contactRef}>
          <ContactUs />
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
      <ScrollingTicker />
    </div>
  )
}

export default App