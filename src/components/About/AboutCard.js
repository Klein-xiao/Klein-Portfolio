import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Xiaohai Wang</span>, a passionate <span className="purple">Cybersecurity Analyst</span> from <span className="purple">Guelph, Ontario</span>.
            <br />
            <br />
            I recently graduated with a <strong>Master’s degree in Cybersecurity and Threat Intelligence</strong> from the University of Guelph. I have over <strong>three years of hands-on experience</strong> in <span className="purple">penetration testing</span>, <span className="purple">cyber threat intelligence (CTI)</span>, and <span className="purple">malware analysis</span>.
            <br />
            <br />
            My expertise lies in:
            <ul>
              <li className="about-activity"><ImPointRight /> White-box penetration testing</li>
              <li className="about-activity"><ImPointRight /> Code auditing & security consulting</li>
              <li className="about-activity"><ImPointRight /> Threat intelligence and malware analysis</li>
            </ul>
            I am dedicated to <strong>identifying and mitigating digital threats</strong>, improving security infrastructure, and sharing cybersecurity knowledge through <span className="purple">technical writeups</span> and
            <span className="purple"> open-source contributions</span>.
          </p>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Protecting the data contributes to the future of the world!"
          </p>
          <footer className="blockquote-footer">Xiaohai Wang</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
