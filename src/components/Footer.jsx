import React from "react";
import { footerkep, logo } from "../assets";
import styles from "../style";

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
  const references = [
    {
      name: "GitHub",
      link: "https://github.com/Kaloriamanok/Kaloriamano",
    },
    {
      name: "Jira",
      link: "https://kaloriamanok.atlassian.net/",
    },
    {
      name: "CalorieNinja",
      link: "https://calorieninjas.com/",
    },
  ];

  return (
    <footer className="flex flex-col items-center justify-between w-full px-0 py-10 mt-auto xs:px-10 xl:px-60 ss:flex-row">
      <div>
        <img
          src={footerkep}
          alt=""
          className="h-[150px] sm:h-[200px] lg:h-[400px] "
        />
      </div>
      <div className="flex flex-col items-start space-y-8 xs:space-y-0 xs:space-x-20 sm:space-x-32 xs:flex-row ">
        <div className="flex flex-col ">
          <h3 className="font-[16px] pb-[10px] font-poppins">Készítők</h3>
          <ul className="list-none font-[12px] font-poppins  ">
            {creators.map((creator, index) => (
              <a href={creator.link}>
                <li key={index} className={`${styles.textHover} mt-1`}>
                  {creator.name}
                </li>
              </a>
            ))}
          </ul>
        </div>

        <div className="flex flex-col">
          <h3 className="font-[16px] pb-[10px] font-poppins">Referenciák</h3>
          <ul className="list-none font-[12px]  font-poppins">
            {references.map((reference, index) => (
              <a href={reference.link}>
                <li key={index} className={`${styles.textHover} mt-1`}>
                  {reference.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
