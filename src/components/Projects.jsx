import React from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projImg1 from "../assets/img/gaz.jpg";
import projImg2 from "../assets/img/compdir.jpg";
import projImg3 from "../assets/img/blog.jpg";
import projImg4 from "../assets/img/helpdesk.jpg";
import projImg5 from "../assets/img/netflix.jpg";
import projImg6 from "../assets/img/betbuild.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Gazetteer",
      description:
        "Cutting-edge mapping application designed with a mobile-first approach.",
      imgUrl: projImg1,
      modalContent: (
        <div
          className="modal fade"
          id="projectModal1"
          tabIndex="-1"
          aria-labelledby="projectModalLabel1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="projectModalLabel1">
                  Gazetteer 🌍
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Created as part of my IT Career Switch traineeship, Gazetteer
                  is a cutting-edge mapping application designed with a
                  "mobile-first" approach. Built on a robust stack of modern web
                  technologies, it provides real-time profiling for countries
                  around the world, offering demographic, climatic, and various
                  other types of data. Ideal for researchers, travelers, and
                  geography enthusiasts.
                </p>
                <ul>
                  <li>
                    <strong>Real-Time Map Updates</strong> 🌍: The app
                    continuously updates maps to provide the latest information.
                  </li>
                </ul>
                <div className="tech-stack-container">
                  <h3>Tech Stack</h3>
                  <ul className="overlay-stack">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>Leaflet.js</li>
                    <li>API</li>
                  </ul>
                </div>
                <a
                  href="https://davidfoxdev.co.uk/gaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Visit Gazetteer
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Company Directory",
      description:
        "🌐 Company personnel databases, illustrating organizational hierarchies, employee reporting lines, and locations.",
      imgUrl: projImg2,
      modalContent: (
        <div
          className="modal fade"
          id="projectModal2"
          tabIndex="-1"
          aria-labelledby="projectModalLabel2"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="projectModalLabel2">
                  Company Directory 📁
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Created as part of my IT Career Switch traineeship, this web
                  application 🌐 efficiently manages company personnel
                  databases, illustrating organizational hierarchies, employee
                  reporting lines, and locations. It’s responsive across desktop
                  💻 and mobile 📱 platforms.
                </p>
                <ul>
                  <li>
                    <strong>Add, Edit, and Delete Personnel Records</strong>:
                    Users can effortlessly manage employee information, keeping
                    the database up-to-date and accurate.
                  </li>
                  <li>
                    <strong>View Personnel by Department and Location</strong>:
                    Offers a structured view of employees, sorted by their
                    department and workplace, enhancing organizational
                    oversight.
                  </li>
                  <li>
                    <strong>Search Personnel Records</strong>: A powerful search
                    feature that allows quick retrieval of specific employee
                    details.
                  </li>
                </ul>
                <div className="tech-stack-container">
                  <h3>Tech Stack</h3>
                  <ul className="overlay-stack">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>React</li>
                    {/* Add other technologies specific to the React version */}
                  </ul>
                </div>
                <a
                  href="https://davidfoxdev.co.uk/compdirect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Visit Company Directory
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Tech Blog",
      description:
        "Explore my Tech Blog, a comprehensive platform dedicated to sharing knowledge and insights on technology and programming. This full-stack application 🌐 showcases:",
      imgUrl: projImg3,
      modalContent: (
        <div
          className="modal fade"
          id="projectModal3"
          tabIndex="-1"
          aria-labelledby="projectModalLabel3"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="projectModalLabel3">
                  NodeJS Tech Blog
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Explore my <strong>Tech Blog</strong>, a comprehensive
                  platform dedicated to sharing knowledge and insights on
                  technology and programming. This full-stack application 🌐
                  showcases:
                </p>

                <ul>
                  <li>
                    <strong>NodeJS and Express Backend</strong> 🚀: Powering the
                    server-side with efficiency and scalability to handle
                    dynamic content and user interactions.
                  </li>
                  <li>
                    <strong>MongoDB Database Integration</strong> 🗄️: Utilizing
                    MongoDB for robust and flexible data storage and retrieval,
                    facilitating efficient content management.
                  </li>
                  <li>
                    <strong>AWS Deployment</strong> ☁️: Hosted on AWS EC2,
                    ensuring reliable and scalable cloud-based service.
                  </li>
                  <li>
                    <strong>User Authentication</strong> 🔐: Secure login and
                    registration system, enabling users to contribute through
                    comments and interactions.
                  </li>
                  <li>
                    <strong>Email Form with Nodemailer</strong> ✉️: Integrated
                    contact form for direct user communication, leveraging
                    Nodemailer for email services.
                  </li>
                  <li>
                    <strong>Admin Section</strong> ⚙️: An exclusive admin area,
                    equipped with authentication for managing blog content and
                    user interactions.
                  </li>
                </ul>
                <div className="tech-stack-container">
                  <h3>Tech Stack</h3>
                  <ul className="overlay-stack">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>AWS</li>
                    {/* Add other technologies specific to the React version */}
                  </ul>
                </div>
                <a
                  href="https://blog.davidfoxdev.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Visit Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "FoxTech IT Helpdesk",
      description:
        "Explore my Next.js IT Helpdesk, a next-generation IT Helpdesk built with Next.js, Tailwind CSS, and Supabase. This project provides a streamlined and intuitive interface for managing support tickets, full authentication setup, ticket creation, deletion, ticket prioritization, with email sign up and verification.",
      imgUrl: projImg4,
      modalContent: (
        <div
          className="modal fade"
          id="projectModal6"
          tabIndex="-1"
          aria-labelledby="projectModalLabel6"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="projectModalLabel6">
                  Next.js Helpdesk
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Explore my <strong>Next.js IT Helpdesk</strong>, a
                  next-generation IT Helpdesk built with Next.js, Tailwind CSS,
                  and Supabase. This project provides a streamlined and
                  intuitive interface for managing support tickets, full
                  authentication setup, ticket creation, deletion, ticket
                  prioritization, with email sign up and verification.
                </p>

                <h3>Features:</h3>
                <ul>
                  <li>
                    <strong>Ticket Management:</strong> Create, track, and
                    resolve tickets efficiently with categories, priorities, and
                    assigned agents.
                  </li>
                  <li>
                    <strong>User Portal:</strong> Users can submit tickets,
                    track their status, and access knowledge base articles
                    through a dedicated portal.
                  </li>
                </ul>

                <div className="tech-stack-container">
                  <h3>Tech Stack</h3>
                  <ul className="overlay-stack">
                    <li>Next.js</li>
                    <li>JavaScript</li>
                    <li>Tailwind CSS</li>
                    <li>Supabase</li>
                    <li>Vercel</li>
                    {/* Add other technologies specific to the React version */}
                  </ul>
                </div>

                {/* Add the link to the live project or repository */}
                <a
                  href="https://helpdesk.davidfoxdev.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Visit Project
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Netflix Clone",
      description:
        "This project is a clone of the Netflix landing page, designed to demonstrate proficiency in front-end development using HTML, CSS, and JavaScript. Key features include:",
      imgUrl: projImg5,
      modalContent: (
        <div
          className="modal fade"
          id="projectModal5"
          tabIndex="-1"
          aria-labelledby="projectModalLabel5"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="projectModalLabel5">
                  Netflix Landing Page Clone
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  This project is a clone of the Netflix landing page, designed
                  to demonstrate proficiency in front-end development using
                  HTML, CSS, and JavaScript. Key features include:
                </p>

                <ul>
                  <li>
                    <strong>Responsive Design</strong>: Adapts seamlessly to
                    different screen sizes, providing an optimal viewing
                    experience.
                  </li>
                  <li>
                    <strong>Interactive Tabs</strong>: JavaScript-driven tabs
                    for easy navigation through content.
                  </li>
                  <li>
                    <strong>Modern CSS Techniques</strong>: Utilization of Grid
                    and Flexbox for layout, along with overlays and shadows for
                    aesthetics.
                  </li>
                </ul>

                <div className="tech-stack-container">
                  <h3>Tech Stack</h3>
                  <ul className="overlay-stack">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    {/* Add other technologies specific to the React version */}
                  </ul>
                </div>

                <a
                  href="https://davidfoxdev.co.uk/netflix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Visit Netflix Clone
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Match Predictor",
      description:
        "Delve into the Football Match Prediction Website, a specialized web application designed for football (soccer) enthusiasts eager to predict match outcomes. This innovative platform 🌐 is equipped with:",
      imgUrl: projImg6,
      modalContent: (
        <div
          className="modal fade"
          id="projectModal4"
          tabIndex="-1"
          aria-labelledby="projectModalLabel4"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="projectModalLabel4">
                  Football Match Predictor ⚽
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Delve into the{" "}
                  <strong>Football Match Prediction Website</strong>, a
                  specialized web application designed for football (soccer)
                  enthusiasts eager to predict match outcomes. This innovative
                  platform 🌐 is equipped with:
                </p>

                <ul>
                  <li>
                    <strong>Dynamic Match Input Generation</strong> 🔄: Set the
                    stage for your predictions by specifying the number of
                    matches. The app intelligently generates corresponding input
                    fields, offering a tailored forecasting experience.
                  </li>
                  <li>
                    <strong>Team Data Fetching</strong> 📊: Gain a competitive
                    edge with up-to-date SQL database. The app fetches key team
                    data such as strength, average goals scored, and conceded,
                    all sourced reliably from a PHP backend.
                  </li>
                </ul>

                <div className="tech-stack-container">
                  <h3>Tech Stack</h3>
                  <ul className="overlay-stack">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>JQuery</li>
                    <li>SQL</li>
                    {/* Add other technologies specific to the React version */}
                  </ul>
                </div>

                <a
                  href="https://davidfoxdev.co.uk/logandreg/game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-3"
                >
                  Visit Bet Builder
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <TrackVisibility partialVisibility={true}>
      {({ isVisible }) => (
        <section
          className={`project ${
            isVisible ? "animate__animated animate__fadeIn" : "invisible"
          }`}
          id="projects"
        >
          <Container>
            <div className="outer">
              <Row>
                <Col xs={12}>
                  <h2>A Few of My Projects</h2>
                  <p>
                    As a full-stack developer, my portfolio highlights my
                    adeptness with React.js for interactive UIs, Node.js and
                    Express for server-side functionality, and Next.js for
                    optimized rendering. My projects demonstrate a commitment to
                    quality, showcasing my skill in API integration, database
                    optimization, and the delivery of scalable web applications
                    that adhere to industry standards.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={`${
                        isVisible
                          ? "animate__animated animate__fadeIn justify-content-center"
                          : "invisible"
                      }`}
                    >
                      <Tab.Pane eventKey="first">
                        <Carousel
                          responsive={responsive}
                          infinite={true}
                          className="owl-carousel owl-theme project-slider"
                        >
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Carousel>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Col>
              </Row>
              {/* Render modals outside of Carousel */}
              {projects.map((project, index) => (
                <React.Fragment key={index}>
                  {project.modalContent}
                </React.Fragment>
              ))}
            </div>
          </Container>
        </section>
      )}
    </TrackVisibility>
  );
};
