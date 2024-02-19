import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/profpic1.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setButtonText("Sending...");

      let response = await fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      handleSubmissionResult(result);
    } catch (error) {
      console.error("Error during form submission:", error);
      setStatus({
        type: "error",
        message: "Something went wrong, please try again later.",
      });
    } finally {
      setButtonText("Send");
      setFormDetails(formInitialDetails);
    }
  };

  const handleSubmissionResult = (result) => {
    if (result.code === 200) {
      setStatus({ type: "success", message: "Message sent successfully" });
    } else {
      setStatus({
        type: "error",
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <TrackVisibility partialVisibility={true}>
      {({ isVisible }) => (
        <section
          className={`contact ${
            isVisible ? "animate__animated animate__fadeIn" : "invisible"
          }`}
          id="connect"
        >
          <Container>
            <div className="outer">
              <Row className="align-items-center">
                <Col size={12} md={4}>
                  <img
                    className={
                      isVisible
                        ? "animate__animated animate__zoomIn mx-auto d-block"
                        : "invisible"
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                </Col>
                <Col size={12} md={7}>
                  <div
                    className={
                      isVisible
                        ? "animate__animated animate__fadeIn mx-auto d-block text-center"
                        : "invisible"
                    }
                  >
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.firstName}
                            placeholder="First Name"
                            onChange={(e) =>
                              onFormUpdate("firstName", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.lastName}
                            placeholder="Last Name"
                            onChange={(e) =>
                              onFormUpdate("lastName", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            value={formDetails.email}
                            placeholder="Email Address"
                            onChange={(e) =>
                              onFormUpdate("email", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            value={formDetails.phone}
                            placeholder="Phone No."
                            onChange={(e) =>
                              onFormUpdate("phone", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="3"
                            value={formDetails.message}
                            placeholder="Message"
                            onChange={(e) =>
                              onFormUpdate("message", e.target.value)
                            }
                          ></textarea>
                          {status.message && (
                            <div
                              className={`${
                                status.type === "error" ? "error" : "success"
                              }-popup`}
                            >
                              {status.message}
                            </div>
                          )}
                          <button type="submit">
                            <span>{buttonText}</span>
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      )}
    </TrackVisibility>
  );
};
