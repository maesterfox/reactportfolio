import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../assets/img/fox-logo.png";
import { BrowserRouter as Router } from "react-router-dom";

// NavBar.jsx
export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const openCV = () => {
    window.open("https://davidfoxdev.co.uk/assets/davidfoxcv.pdf", "_blank");
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const handleNavSelect = () => {
    if (window.innerWidth <= 767) {
      const navbarToggle = document.querySelector(".navbar-toggler");
      if (navbarToggle) {
        navbarToggle.click();
      }
    }
  };

  return (
    <Router>
      <Navbar expand="md" className={`${scrolled ? "scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Developer Logo" />{" "}
            {/* Added more descriptive alt text */}
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end mx-6"
          >
            <Nav className="ms-auto" onSelect={handleNavSelect}>
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
                aria-label="Home" // Explicit aria-label
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  activeLink === "skills" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("skills")}
                aria-label="Skills" // Explicit aria-label
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  activeLink === "projects"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("projects")}
                aria-label="Projects" // Explicit aria-label
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#connect"
                className={
                  activeLink === "connect"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("connect")}
                aria-label="Connect" // Explicit aria-label
              >
                Connect
              </Nav.Link>
              <Button
                className="button-cv"
                onClick={openCV}
                aria-label="View CV"
              >
                View CV
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
