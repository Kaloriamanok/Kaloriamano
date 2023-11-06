import React from "react";
import {etlap, etelszoveg} from "../assets";
import {Link} from "react-router-dom";

const Kaloriamano = () => {
  return (
      <div className={"m-5"}>
        <h1 className={"text-center text-2xl font-bold pb-5"}>Szerezze meg a tápértéket vagy a receptötletet több mint 100,000 étel és ital egyikéhez.</h1>
          <div>
              <div className={"flex flex-wrap justify-center"}>
                <div>
                    <img src={etelszoveg} alt="etelszoveg" className="w-[400px] mt-2"/>
                </div>
                  <div>
                      <Link to="/nutrition">
                          <h1 className={"text-center text-xl font-bold"}>Írjon be bármilyen szöveget</h1>
                      </Link>
                      <p>Nincs szükség formázásra, bármiből ki tudjuk nyerni a megfelelő információt.</p>
                  </div>
              </div>
              <div className={"flex flex-wrap justify-center pt-5"}>
                  <div className={"w-1/3"}>
                      <Link to="/imagenutrition">
                          <h1 className={"text-center text-xl font-bold"}>Töltsön fel egy képet</h1>
                      </Link>
                      <p className={"justify-center text-center"}>Képes felismerni az élelmiszerekre vonatkozó szavakat, és kiszámítja a tápértékre vonatkozó információkat. Remek receptekhez, ételnaplókhoz és éttermi menükhöz!</p>
                  </div>
                  <div className={"w-1/3"}>
                      <img src={etlap} alt="étlap" className="w-[300px] mt-2 mx-auto"/>
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
