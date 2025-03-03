import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython, DiJavascript1, DiGit, DiJava } from "react-icons/di";
import { SiMysql, SiPostgresql, SiWireshark, SiLinux, SiMicrosoft, SiVisualstudiocode, SiPostman, SiMacos } from "react-icons/si";
import { FaUserSecret, FaShieldAlt, FaBug, FaNetworkWired } from "react-icons/fa";

// Import Custom SVG Icons
import MetasploitIcon from "../../Assets/Icons/Metasploit.svg";
import NmapIcon from "../../Assets/Icons/Nmap.svg";
import BurpsuiteIcon from "../../Assets/Icons/Burpsuite.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons" title="C++"><CgCPlusPlus /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Java"><DiJava /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Python"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript"><DiJavascript1 /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons" title="MySQL"><SiMysql /></Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL"><SiPostgresql /></Col>

      {/* Cybersecurity Tools */}
      <Col xs={4} md={2} className="tech-icons" title="Wireshark"><SiWireshark /></Col>

      {/* Custom SVG Icons */}
      <Col xs={4} md={2} className="tech-icons" title="Metasploit">
        <img src={MetasploitIcon} alt="Metasploit" width="50" height="50" style={{ filter: "invert(1)" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Nmap">
        <img src={NmapIcon} alt="Nmap" width="50" height="50" style={{ filter: "invert(1)" }} />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Burp Suite">
        <img src={BurpsuiteIcon} alt="Burp Suite" width="50" height="50" style={{ filter: "invert(1)" }} />
      </Col>

      {/* Security Tools */}
      <Col xs={4} md={2} className="tech-icons" title="Ethical Hacking"><FaUserSecret /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Vulnerability Testing"><FaBug /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Security Frameworks"><FaShieldAlt /></Col>

      {/* OS & Security Environments */}
      <Col xs={4} md={2} className="tech-icons" title="Linux"><SiLinux /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Security"><SiMicrosoft /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Networking"><FaNetworkWired /></Col>

      {/* Version Control */}
      <Col xs={4} md={2} className="tech-icons" title="Git"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Postman"><SiPostman /></Col>
      <Col xs={4} md={2} className="tech-icons" title="Mac OS"><SiMacos /></Col>
    </Row>
  );
}

export default Techstack;
