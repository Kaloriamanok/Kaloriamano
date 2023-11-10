import React from "react";
import { Link } from "react-router-dom";
import { etelszoveg, etlap } from "../assets";
import styles from "../style";

const Kaloriamano = () => {
  return (
    <div
      className={
        "sm:py-16 py-6 flex-col items-center justify-center flex-1 px-6 md:items-start sm:px-16"
      }
    >
      <h1 className={`flex-1 ${styles.heading2} text-center `}>
        <p>Szerezze meg a tápértéket vagy a receptötletet</p>
        <p>
          több mint <span className="text-verdigris-500">100,000</span> étel és
          ital egyikéhez.
        </p>
      </h1>

      <div className={"sm:py-16 py-6"}>
        <div
          className={
            "flex items-center justify-center w-full md:flex-row flex-col"
          }
        >
          <div className={"w-1/2 flex items-center justify-center"}>
            <img src={etelszoveg} alt="etelszoveg" className="mt-2" />
          </div>
          <div className={"w-1/2 text-center pt-3"}>
            <Link to="/nutrition">
              <h1 className={`${styles.heading2} hover:text-verdigris-500`}>
                Írjon be bármilyen szöveget
              </h1>
            </Link>
            <p className={`pt-3 ${styles.paragraph}`}>
              Nincs szükség formázásra, bármiből ki tudjuk nyerni a megfelelő
              információt.
            </p>
          </div>
        </div>

        <div
          className={
            "flex items-center justify-center w-full md:flex-row flex-col pt-6"
          }
        >
          <div className={"w-1/2 text-center"}>
            <Link to="/imagenutrition">
              <h1 className={`${styles.heading2} hover:text-verdigris-500`}>
                Töltsön fel egy képet
              </h1>
            </Link>
            <p className={`pt-3 ${styles.paragraph}`}>
              Képes felismerni az élelmiszerekre vonatkozó szavakat, és
              kiszámítja a tápértékre vonatkozó információkat. Remek
              receptekhez, ételnaplókhoz és éttermi menükhöz!
            </p>
          </div>
          <div className={"w-1/2 justify-center items-center flex pt-3"}>
            <img src={etlap} alt="étlap" className="w-[400px]" />
          </div>
        </div>

        {/*<table class="table-auto max-w-2xl">
                  <tr>
                      <td class="w-1/3 border px-4 py-5"><img src={etelszoveg} alt="etelszoveg" className="w-[400px] mt-2"/></td>
                      <td class="w-2/3 border px-4 py-5">
                          <Link to="/nutrition">
                            <h1 className={"text-center text-xl font-bold"}>Írjon be bármilyen szöveget</h1>
                          </Link>
                          <p>Nincs szükség formázásra, bármiből ki tudjuk nyerni a megfelelő információt.</p>
                      </td>
                  </tr>
                  <tr>
                      <td class="border px-4 py-5">
                          <Link to="/imagenutrition">
                              <h1 className={"text-center text-xl font-bold"}>Töltsön fel egy képet</h1>
                          </Link>
                          <p>Képes felismerni az élelmiszerekre vonatkozó szavakat, és kiszámítja a tápértékre vonatkozó információkat. Remek receptekhez, ételnaplókhoz és éttermi menükhöz!</p>
                      </td>
                      <td class="border px-4 py-5"><img src={etlap} alt="étlap" className="w-[300px] mt-2"/></td>
                  </tr>
              </table>*/}
      </div>
    </div>
  );
};

export default Kaloriamano;
