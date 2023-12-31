import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pwithc_1.png";
import projImg2 from "../assets/img/swoodwork.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "PEACE with CONTENTMENT",
      description:
        "Develop a web application for Talk therapy, Mindfulness and meditation, Symptom tracking, Cognitive-behavioral therapy (CBT), Self-help resources",
      imgUrl: projImg1,
      url: "https://example.com",
    },
    {
      title: "SIRIWARDHANAN WOODWORK",
      description:
        "Develop a web application for Woodworking products marketplace and publish his skill and performance. ",
      imgUrl: projImg2,
      url: "https://ishararaviget9.github.io/Woodworking/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>PROJECTS</h2>
                  <p>
                    For all of these projects, I would appreciate your feedback.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
