import React from "react";
import { Row, Col, Table, Badge } from "react-bootstrap";
import "../styles/Github.css"; // Ensure you have a CSS file for custom styles

function Github() {
  // Skill Categories
  const skills = {
    "Programming Languages": ["Java", "C++", "C", "Python", "SQL", "JavaScript"],
    "Tools & Frameworks": ["Burp Suite", "Metasploit", "Nmap", "Sqlmap", "Git", "Nikto", "Xshell", "Navicat", "Wireshark", "VirusTotal", "Ghidra", "IDA Pro", "OllyDbg", "OpenVAS", "Nessus"],
    "Technologies": ["Virtual Machines", "Cloud Security", "SIEM (Splunk, ELK Stack)", "Malware Analysis (YARA, MITRE ATT&CK)", "Privilege Escalation Techniques", "Penetration Testing Labs (HTB, TryHackMe, VulnHub)", "Cryptography (AES, RSA, Hashing Algorithms)"],
    "Methodologies": ["Threat Modeling", "Risk Assessment", "Incident Response", "Digital Forensics (DFIR)", "Purple Teaming", "SIEM", "Secure Software Development Lifecycle (SDLC)", "Vulnerability Management", "Penetration Testing", "Threat Hunting", "Identity and Access Management (IAM)"],
    "Languages": ["Fluent in English", "Fluent in Chinese"],
    "Soft Skills": ["Teamwork", "Collaboration", "Time Management", "Active Listening", "Calm", "Passionate", "Public Speaker"]
  };

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px", textAlign: "center" }}>
      <Col md={10} className="about-text">
        <h1 className="project-heading" style={{ paddingBottom: "20px", fontSize: "2.5rem", fontWeight: "bold" }}>
          <strong className="purple">Summary</strong>
        </h1>

        {/* Styled Table */}
        <Table bordered hover responsive className="summary-table">
          <tbody>
            {Object.entries(skills).map(([category, items]) => (
              <tr key={category}>
                <th className="purple-header">{category}</th>
                <td className="white-text">
                  <div className="tag-container">
                    {items.map((skill, index) => (
                      <Badge key={index} className="skill-badge">{skill}</Badge> 
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

export default Github;
