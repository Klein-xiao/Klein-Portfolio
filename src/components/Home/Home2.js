import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub, AiOutlineMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHackthebox } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Cybersecurity Analyst</b> with expertise in
              <b className="purple"> Cyber Threat Intelligence (CTI), Penetration Testing, and Malware Analysis.</b>
              <br />
              <br />
              I have a strong background in programming and security, working with:
              <i>
                <b className="purple"> Java, C++, C, Python, SQL, and JavaScript. </b>
              </i>
              <br />
              <br />
              My passion lies in exploring &nbsp;
              <i>
                <b className="purple">Security Research, Ethical Hacking, and Threat Hunting</b>, 
                as well as securing & improving{" "}
                <b className="purple">
                  Enterprise Networks and Cloud Security.
                </b>
              </i>
              <br />
              <br />
              I work extensively with tools like{" "}
              <b className="purple">Burp Suite, Metasploit, Nmap, Wireshark, Nessus, OpenVAS</b>, 
              and more for cybersecurity testing.
              <br />
              <br />
              Whenever possible, I share knowledge through <b className="purple">technical write-ups</b> 
              <space/> and contribute to security communities like{" "}
              <i>
                <b className="purple">Hack The Box and TryHackMe.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><span className="purple">EMAIL</span> ME TO GET <span className="purple">CV!</span></h1>
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Klein-xiao"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/xiaohai-wang/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* Email */}
            <li className="social-icons">
              <a
                href="mailto:xiaohaiwang17@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineMail /> 
              </a>
            </li>
            {/* HackTheBox */}
            <li className="social-icons">
              <a
                href="https://app.hackthebox.com/profile/overview"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiHackthebox />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
