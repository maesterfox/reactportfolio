import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/superme-min.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = ({ isLoading }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 50);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Full-Stack Developer",
    "Web Developer",
    "Part-time Freelancer",
    "Billionaire, Philantropist...",
  ];
  const period = 200;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      className={`banner ${!isLoading ? "start-animations" : ""}`}
      id="home"
    >
      <div className="bg-orb1"></div>
      <div className="bg-orb2"></div>
      <div className="bg-orb3"></div>
      <div className="bg-orb4"></div>
      <div className="bg-orb5"></div>
      <div className="bg-orb6"></div>
      <div className="bg-orb7"></div>
      <div className="bg-orb8"></div>
      <div className="bg-orb9"></div>
      <div className="bg-orb10"></div>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={`${
                    isVisible
                      ? "animate__animated animate__zoomIn mx-auto d-block"
                      : "invisible"
                  }`}
                >
                  <img src={headerImg} alt="Header Img" id="headerImg" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <h1>
            {`I'm David Fox,`}{" "}
            <span
              className="txt-rotate"
              data-period="1000"
              data-rotate={JSON.stringify(toRotate)}
            >
              <span className="wrap">{text}</span>
            </span>
          </h1>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility partialVisibility={true}>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__fadeIn mx-auto d-block"
                      : "invsible"
                  }
                  style={{ opacity: isVisible ? 1 : 0 }} // Set opacity based on visibility
                >
                  <span className="tagline justify-content-center align-items-center">
                    Welcome to my Portfolio
                  </span>
                  <p>
                    As a Full-stack Developer with a deep command of JavaScript
                    and proficiency in various JS frameworks, I offer a blend of
                    technical skill and creative vision, shaped by a rich
                    tapestry of experiences across multiple industries. My
                    approach to development is anchored in delivering solutions
                    that are not only efficient and scalable but also secure,
                    ensuring that each project is built on a foundation of
                    robustness and reliability. With a user-first mindset, I
                    prioritize user-centric design and functionality, crafting
                    interfaces that are intuitive and engaging. My commitment to
                    excellence extends to embracing Design Systems principles
                    for a cohesive digital environment, adhering to WCAG
                    guidelines to guarantee accessibility, and implementing
                    automated testing alongside cross-browser compatibility
                    checks to uphold the highest standards of quality. My
                    portfolio stands as a testament to my passion for leveraging
                    technology to address real-world challenges, embodying my
                    dedication to developing solutions that resonate with users
                    and drive forward business objectives.
                  </p>
                  <button onClick={() => (window.location = "#connect")}>
                    Let’s Connect <ArrowRightCircle size={28} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
