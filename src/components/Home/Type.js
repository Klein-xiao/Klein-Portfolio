import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cybersecurity Analyst",
          "Penetration Tester",
          "Threat Intelligence Researcher",
          "Malware Analyst",
          "Ethical Hacker",
          "Cloud Security Enthusiast",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
