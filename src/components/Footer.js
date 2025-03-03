import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { SiHackthebox } from "react-icons/si";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Xiaohai Wang</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Xiaohai Wang</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/Klein-xiao"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub /> 
              </a>
            </li>

            {/* LinkedIn */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/xiaohai-wang/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn /> 
              </a>
            </li>

            {/* Email */}
            <li className="social-icons">
              <a
                href="mailto:xiaohaiwang17@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMail /> 
              </a>
            </li>
            {/* HackTheBox */}
            <li className="social-icons">
              <a
                href="https://app.hackthebox.com/profile/overview"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiHackthebox />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
