import Card from "react-bootstrap/Card"
import "../styles/Experience.css" // Import the CSS file
import { SiHuawei } from "react-icons/si"

function ExperienceCard() {
  // Define the most important 14 keywords to highlight across all responsibilities
  const priorityKeywords = [
    "cybersecurity consulting",
    "vulnerability evaluations",
    "security testing",
    "mitigating vulnerabilities",
    "cybersecurity strategies",
    "threat mitigation",
    "incident response",
    "security incidents",
    "penetration testing",
    "security infrastructure",
    "white-box security assessments",
    "source code audits",
    "reverse engineering",
    "exploit development",
  ]

  const experiences = [
    {
      title: "Cybersecurity Consultant",
      company: "Huawei Technologies Co., Ltd (FESCO Adecco), China",
      dates: "Feb 2023 – Mar 2024",
      responsibilities: [
        {
          text: "Provided cybersecurity consulting services, conducting risk assessments and vulnerability evaluations for enterprise clients across 7+ countries.",
          highlights: ["cybersecurity consulting", "vulnerability evaluations"],
        },
        {
          text: "Performed security testing and analysis on Huawei's security products and solutions, identifying and mitigating vulnerabilities.",
          highlights: ["security testing", "mitigating vulnerabilities"],
        },
        {
          text: "Engaged with international clients, delivering technical presentations on cybersecurity strategies, secure deployment, and best practices for threat mitigation.",
          highlights: ["cybersecurity strategies", "threat mitigation"],
        },
        {
          text: "Liaised with development and incident response teams to analyze security incidents, implement countermeasures, and enhance security postures.",
          highlights: ["incident response", "security incidents"],
        },
        {
          text: "Reported on-site cybersecurity risks, recommended security enhancements, and optimized testing processes.",
          highlights: [],
        },
        {
          text: "Assisted in penetration testing of Huawei's security infrastructure, uncovering weaknesses in authentication mechanisms, encryption implementations, and API security.",
          highlights: ["penetration testing", "security infrastructure"],
        },
      ],
    },
    {
      title: "White-Box Pentester",
      company: "Huawei Technologies Co., Ltd (FESCO Adecco), China",
      dates: "Apr 2021 – Feb 2023",
      responsibilities: [
        {
          text: "Conducted in-depth white-box security assessments and source code audits using static and dynamic analysis techniques.",
          highlights: ["white-box security assessments", "source code audits"],
        },
        {
          text: "Specialized in detecting and mitigating vulnerabilities such as buffer overflows, memory leaks, SQL injection, and privilege escalation exploits.",
          highlights: [],
        },
        {
          text: "Developed custom scripts and automation tools to streamline vulnerability detection and reporting.",
          highlights: [],
        },
        {
          text: "Collaborated with development teams to implement secure coding practices and improve security hygiene.",
          highlights: [],
        },
        {
          text: "Performed reverse engineering and binary analysis using tools such as IDA Pro, Ghidra, and Radare2.",
          highlights: ["reverse engineering"],
        },
        {
          text: "Simulated real-world attack scenarios, performing exploit development and testing.",
          highlights: ["exploit development"],
        },
        {
          text: "Designed and led cybersecurity awareness training for internal teams.",
          highlights: [],
        },
      ],
    },
  ]

  // Function to highlight keywords in text
  const highlightText = (text, highlights) => {
    if (!highlights || highlights.length === 0) return text

    // Only highlight keywords that are in our priority list
    const validHighlights = highlights.filter((keyword) => priorityKeywords.includes(keyword))

    if (validHighlights.length === 0) return text

    let result = text
    validHighlights.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, "gi")
      result = result.replace(regex, '<span class="purple">$1</span>')
    })

    return <span dangerouslySetInnerHTML={{ __html: result }} />
  }

  return (
    <div style={{ padding: "50px 20px" }}>
      <h1 className="text-center mb-1" style={{ fontWeight: "bold", fontSize: "2.5rem" }}>
        Experiences
      </h1>

      {experiences.map((experience, index) => (
        <Card key={index} className="quote-card-view mb-1">
          <Card.Body>
            <div>
              <h3 style={{ color: "#b14aed", fontWeight: "bold" }}>{experience.title}</h3>
              <h5 style={{ color: "#cdcdcd", marginBottom: "20px" }}>
                <SiHuawei style={{ color: "#b14aed", marginRight: "8px" }} />
                {experience.company} | {experience.dates}
                <SiHuawei style={{ color: "#b14aed", marginLeft: "8px" }} />
              </h5>

              {experience.responsibilities.map((responsibility, idx) => (
                <p
                  key={idx}
                  style={{
                    textAlign: "justify",
                    color: "#cdcdcd",
                    marginBottom: "10px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      minWidth: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      backgroundColor: "#b14aed",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: "bold",
                      marginRight: "10px",
                      marginTop: "2px",
                    }}
                  >
                    {idx + 1}
                  </span>
                  {highlightText(responsibility.text, responsibility.highlights)}
                </p>
              ))}
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  )
}

export default ExperienceCard

