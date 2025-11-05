import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Zomapp"
              description="ZomApp enables users to browse food vendors, add items to a cart, and place orders via a smooth, modern UI. The system handles menu management, order placement and checkout flow for a small-to-medium scale food service business."
              ghLink="https://github.com/musaibzahoor/zomapp"
              demoLink="https://delicate-brioche-b983c9.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Image upload"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/musaibzahoor/imageupload"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="LoginApp"
              description="LoginApp provides a full-stack solution for user authentication and access management. From signup and login flows to password reset and session handling, it’s built to be easily integrated into any React or web project."
              ghLink="https://github.com/musaibzahoor/loginapp"
              demoLink="https://login-app-musi.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="MyPortfolio"
              description="MyPortfolio is a fully responsive, modern website built to highlight my skills, projects (like ZomApp, LoginApp, etc.), and full-stack engineering capabilities. Designed with attention to UI/UX and performance, it reflects my identity as a full-stack developer from Srinagar."
              ghLink="https://github.com/musaibzahoor/myportfolio"
              demoLink="https://musaibzahoor.github.io/myportfolio/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="WeatherApp"
              description="WeatherApp allows users to enter a city or use geolocation to retrieve current weather conditions, forecasts, and additional meteorological data in a clean, user-friendly UI. It’s built to showcase real-time API integration, asynchronous data handling, and responsive design."
              ghLink="https://github.com/musaibzahoor/weatherapp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/musaibzahoor/Face_And_Emotion_Detection"
              //demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
