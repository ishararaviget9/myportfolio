import "../assets/testcss.css";
import React from "react";
import ailogo from "../assets/img/ailogopreview.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Expertices = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, disable: "mobile" });
  }, []);

  return (
    <>
      <div className="expert" id="expert">
        <div className="expert_right">
          <div
            className="right_line_1"
            data-aos="slide-up"
            data-aos-delay="300"
          >
            <h1>EXPERTICES</h1>
          </div>
          <div className="right_line_2">
            <div
              className="line_2_left"
              data-aos="slide-up"
              data-aos-delay="300"
              style={{
                "--hover-card-color":
                  "linear-gradient(90deg, #c08dec, #9e73d2, #6b4b9f)",
              }}
            >
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://skillicons.dev/icons?i=visualstudio)`,
                }}
              >
                Software Development
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Experienced in both functionsl and OOP: C#, Dart, Python,
                  Java, JavaScript, TypeScript
                </p>
              </div>
            </div>
            <div
              className="line_2_left"
              data-aos="slide-up"
              data-aos-delay="600"
              style={{
                "--hover-card-color":
                  "linear-gradient(90deg, #6b4b9f, #00d8ff)",
              }}
            >
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://skillicons.dev/icons?i=react)`,
                }}
              >
                Frontend Dev React, NextJS
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Passionate about UI/UX. Over 3 years of development Experience
                  in HTML, CSS, JS, .NET, React and NextJS frameworks
                </p>
              </div>
            </div>
            <div
              className="line_2_left"
              data-aos="slide-up"
              data-aos-delay="900"
              style={{
                "--hover-card-color":
                  "linear-gradient(90deg, #3fb6d3, #19599a)",
              }}
            >
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg)`,
                }}
              >
                Flutter Dev Android
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Skilled in developin hybrid mobile apps and cross-platform
                  solutions using the Flutter framework.
                </p>
              </div>
            </div>
          </div>

          <div className="right_line_2">
            <div
              className="line_2_left"
              data-aos="slide-up"
              data-aos-delay="200"
              style={{
                "--hover-card-color":
                  "linear-gradient(90deg, #3996d1, #2288ca, #0676b8)",
              }}
            >
              <div
                className="icons"
                style={{
                  "--background-image": `url(https://skillicons.dev/icons?i=vscode)`,
                }}
              >
                Web Development
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Proficient in responsive design, front-end and back-end
                  technologies, also modern frameworks like React and Node.js.
                </p>
              </div>
            </div>
            <div
              className="line_2_left"
              data-aos="slide-up"
              data-aos-delay="300"
              style={{
                "--hover-card-color":
                  "linear-gradient(90deg, #d9248b, #aa1fba, #3616db)",
              }}
            >
              <div
                className="icons"
                style={{
                  "--background-image": `url(${ailogo})`,
                }}
              >
                AI Model Development
              </div>
              <div className="title">
                <div className="htag">
                  <h1>{"<h2>"}</h1>
                  <h1>{"</h2>"}</h1>
                </div>
                <p>
                  Skilled in data preprocessing, model building, evaluation,
                  deployment, and monitoring, using cutting-edge techniques and
                  tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
