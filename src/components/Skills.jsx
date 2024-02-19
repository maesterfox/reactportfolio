import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import SkillsBg from "./SkillsBg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills" aria-labelledby="skills-heading">
      <SkillsBg />

      <div className="container">
        <div className="skill-bx wow zoomIn">
          <TrackVisibility partialVisibility>
            {({ isVisible }) => (
              <div
                className={`${
                  isVisible ? "animate__animated animate__fadeIn" : "invisible"
                } mx-auto`}
                style={{ opacity: isVisible ? 1 : 0 }}
              >
                <h2>Skills</h2>
                <p>
                  My expertise spans creating interactive and responsive
                  front-end interfaces with technologies like HTML, CSS,
                  JavaScript, React, and Vue.js, alongside backend development
                  using Node.js, Express.js, and database management with
                  MongoDB and SQL. I'm adept in cloud services such as AWS,
                  implementing DevOps practices, and ensuring web performance
                  and security, reflecting a comprehensive full-stack
                  development capability.
                </p>

                <Carousel
                  responsive={responsive}
                  infinite
                  className="skill-slider"
                >
                  {/* Skill Categories Here */}
                  {skillCategories.map((category, index) => (
                    <div key={index} className="item col d-flex">
                      <section className="skill-category flex-fill">
                        <h3>{category.title}</h3>
                        <ul>
                          {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>{skill}</li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </TrackVisibility>
        </div>
      </div>
    </section>
  );
};

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vue.js",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Next.js",
    ],
  },
  {
    title: "Mobile Development Technologies",
    skills: ["React Native", "Flutter"],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Express.js",
      "PHP",
      "ASP.Net",
      "RESTful API",
      "GraphQL",
      "Microservices Architecture",
    ],
  },
  {
    title: "Database Technologies",
    skills: ["MongoDB", "SQL", "Supabase"],
  },
  {
    title: "DevOps & Cloud Technologies",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Linux",
      "CI/CD Pipelines",
      "Cloud-Native",
      "DevOps practices",
    ],
  },
  {
    title: "Testing & Quality Assurance",
    skills: ["Cypress", "Jest"],
  },
  {
    title: "Performance & Security",
    skills: [
      "Web Security Practices",
      "Performance Optimization",
      "Ethical Hacking",
      "Cybersecurity",
    ],
  },
  {
    title: "Other Technologies & Methodologies",
    skills: [
      "WebAssembly (WASM)",
      "Machine Learning/AI",
      "Agile methodologies",
    ],
  },
];
