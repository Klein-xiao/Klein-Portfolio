import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Updated Project Images
import scripts4everything from "../../Assets/Projects/scripts4everything.png";
import scripts from "../../Assets/Projects/scripts.png";
import pentesting from "../../Assets/Projects/pentesting.jpg";
import ctiML from "../../Assets/Projects/CTI-ml.png";
import truCTF from "../../Assets/Projects/TRU-CTF.png";
import c2Malware from "../../Assets/Projects/C2-malware.png";

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
              imgPath={scripts4everything}
              isBlog={false}
              title="Scripts4Everything"
              description="Collection of automation scripts for cybersecurity tasks, including reconnaissance, exploitation, and data analysis."
              ghLink="https://github.com/Klein-xiao/scripts4Everything"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scripts}
              isBlog={false}
              title="VirusShareDownload"
              description="To interact with the VirusShare API, you can use the Python library PyVirusShare. This library is specifically designed for VirusShare API v2, allowing users to fetch information about malware samples"
              ghLink="https://github.com/Klein-xiao/VirusShareDownload"
              // demoLink="https://yourdemo.com/cybersecurity-scripts"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pentesting}
              isBlog={false}
              title="Pentesting Labs"
              description="A curated collection of penetration testing challenges and solutions from Vulnhub, Hack The Box, and TryHackMe."
              ghLink="https://github.com/Klein-xiao/Vulnhub_pentest"
              // demoLink="https://yourdemo.com/pentesting-toolkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ctiML}
              isBlog={false}
              title="CTI-ML: Machine Learning for Threat Intelligence"
              description="Leveraging machine learning to enhance cyber threat intelligence, focusing on anomaly detection and automated classification of threats."
              ghLink="https://github.com/Klein-xiao/Malware-Analysis-Using-Machine-Learning"
              // demoLink="https://yourdemo.com/CTI-ML"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={truCTF}
              isBlog={false}
              title="TRU-CTF Challenge"
              description="Conducted threat hunting exercises using SIEM and YARA rules to detect and analyze zero-day attacks and phishing threats."
              ghLink="https://github.com/Klein-xiao/TRU-eSentire-Threat-Hunting-CTF"
              // demoLink="https://yourdemo.com/TRU-CTF"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c2Malware}
              isBlog={false}
              title="C2-Malware Analysis Framework"
              description="A command and control (C2) malware analysis framework designed to monitor and analyze threat actor behaviors in real-time."
              ghLink="https://github.com/Klein-xiao/C2-malware"
              // demoLink="https://yourdemo.com/C2-malware"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
