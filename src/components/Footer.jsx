import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/fox-logo2.png";
import navIcon1 from "../assets/img/linkedin.png";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/fox2.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="David Fox's Logo" />{" "}
            {/* More descriptive alt text */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/davidfoxtechcode/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile" // Adding aria-label for screen readers
              >
                <img src={navIcon1} alt="LinkedIn" />{" "}
                {/* Simplified alt text */}
              </a>
              <a
                href="https://github.com/maesterfox"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub repository" // Adding aria-label for screen readers
              >
                <img src={navIcon2} alt="GitHub" /> {/* Simplified alt text */}
              </a>
              <a
                href="https://blog.davidfoxdev.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my blog" // Adding aria-label for screen readers
              >
                <img src={navIcon3} alt="My Blog" /> {/* Simplified alt text */}
              </a>
            </div>
            <p>
              &copy; {new Date().getFullYear()} David Fox • Built with React,
              Node.js, Express.js, and Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
