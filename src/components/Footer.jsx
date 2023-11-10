import React from "react";

const Footer = () => {
  const creators = [
    {
      name: "Loós András Péter",
      link: "https://github.com/LoosAP",
    },
    {
      name: "Rajna Fanni",
      link: "https://github.com/rfannii",
    },
    {
      name: "Jenei Bence",
      link: "https://github.com/Bence7",
    },
    {
      name: "Gyüre Szabolcs",
      link: "https://github.com/infiteder",
    },
  ];
  /* links and names to our github and jira, etc */
  const reference = [
    {
      name: "GitHub",
      link: "https://github.com/Kaloriamanok/Kaloriamano",
    },
    {
      name: "Jira",
      link: "https://kaloriamanok.atlassian.net/",
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3 style={{ fontSize: "16px", marginBottom: "10px" }}>Készítők</h3>
            <ul style={{ fontSize: "12px", listStyle: "none", padding: 0 }}>
              {creators.map((creator, index) => (
                <li key={index}>{creator}</li>
              ))}
            </ul>
          </div>

          <div className="col-md-3">
            <h3 style={{ fontSize: "16px", marginBottom: "20px" }}>
              Referenciák
            </h3>
          </div>

          <div className="col-md-3">
            <a
              href="https://github.com/Kaloriamanok/Kaloriamano"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "16px",
                color: "#7FDBFF",
                textDecoration: "none",
                transition: "color 0.2s",
                display: "block",
                marginTop: "10px",
              }}
            >
              Kalóriamanó GitHub oldal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
