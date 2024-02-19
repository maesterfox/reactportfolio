import React, { useState } from "react";
import { Col, Button, Modal } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, altText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [projectDetails, setProjectDetails] = useState(null);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = () => {
    setShowModal(true);
    // Fetch project details here based on the title from the JSON file
    // For simplicity, I'm assuming your JSON file is in the same directory
    import(`/projects.json`)
      .then((module) => {
        const data = module.default; // Extract the array from the 'default' property
        const project = data.find((proj) => proj.title === title);
        setProjectDetails(project);
      })
      .catch((error) =>
        console.error("Error fetching project details:", error)
      );
  };

  // Close modal and reset project details
  const closeModal = () => {
    setShowModal(false);
    setProjectDetails(null);
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className={`proj-imgbx ${isExpanded ? "expanded" : ""}`}>
        <img src={imgUrl} alt={altText || title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>
            {isExpanded ? description : `${description.slice(0, 100)}...`}
          </span>
          <Button
            onClick={isExpanded ? toggleExpansion : openModal}
            variant="primary"
          >
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>{projectDetails?.modalContent?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {projectDetails?.modalContent?.content?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <ul>
            {projectDetails?.modalContent?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="tech-stack-container">
            <h3>Tech Stack</h3>
            <ul className="overlay-stack">
              {projectDetails?.modalContent?.techStack?.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
          <a
            href={projectDetails?.modalContent?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-3"
          >
            Visit {projectDetails?.modalContent?.title}
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};

export default ProjectCard;
