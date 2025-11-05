import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Musaib Zahoor</span>{" "}
            from <span className="purple">Kashmir, India</span>.
            <br />
            I previously worked at{" "}
            <span className="purple">InterGlobe Aviation Pvt. Ltd.</span> at{" "}
            <span className="purple">Indigo</span>.
            <br />I hold a Bachelor of Engineering (B.E.) in Computer Science and Engineering{" "}
            <span className="purple">(CSE)</span> from{" "}
            <span className="purple">PVG’s College of Engineering and Technology, Pune.</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Cycling  — Keeps me active and clears my mind for fresh coding ideas. 🚴‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking — I love long treks that test endurance and offer new perspectives.🏔️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring Mountains - Mountaineering — Teaches patience, persistence, and focus — just like debugging! 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Code with purpose, build with passion."{" "}
          </p>
          <footer className="blockquote-footer">Musaib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
