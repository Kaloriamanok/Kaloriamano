import React, { useEffect, useState } from "react";
import getNutritionByName from "../api/nutrition.js";
import styles from "../style";

const Nutrition = () => {
  const [food, setFood] = useState("");

  const [selectedFood, setSelectedFood] = useState({ name: "", response: [] });

  const [allFood, setAllFood] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allFood"));
    if (data) {
      setAllFood(data);
    }
  }, []);

  useEffect(() => {
    if (allFood.length > 0) {
      localStorage.setItem("allFood", JSON.stringify(allFood));
    }
  }, [allFood]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let Food = [];
    await getNutritionByName(e.target.food.value)
      .then((data) => {
        Food = data.items;
      })
      .catch((error) => console.error("Error:", error));

    if (Food.length > 0) {
      const newFood = { name: e.target.food.value, response: Food };
      setSelectedFood(newFood);
      setAllFood((prevAllFood) => [...prevAllFood, newFood]);
      setFood("");
    } else {
      setFood("Nincs ilyen étel az adatbázisban!");
    }
  };

  return (
    <section>
      <div className={`flex md:flex-row flex-col w-full ${styles.paddingY}`}>
        <div className="flex flex-col items-center justify-center flex-1 px-6 md:items-start sm:px-16">
          <h1 className={`flex-1 ${styles.heading2} text-center md:text-left `}>
            Számold ki mennyi kalória volt a menüdben a{" "}
            <br className="hidden sm:block" />{" "}
            <span className="text-verdigris-500">Kalóriamanó</span>{" "}
            <br className="hidden sm:block" /> segítségével!
          </h1>
        </div>

        <form
          className="flex flex-col items-center justify-center flex-1 px-6 md:items-end sm:px-16"
          onSubmit={handleSubmit}
        >
          <div className="relative w-full mt-2">
            <input
              type="text"
              name="food"
              placeholder="írd be, mit ettél ma!"
              required
              value={food}
              onChange={(e) => setFood(e.target.value)}
              className={`block w-full h-12  my-6 px-4 mb-4 py-2.5 pl-2 pr-10 text-sm text-gray-700 dark:text-babyPowder-600 placeholder-gray-400 border border-verdigris-300 rounded-md  shadow-lg font-sans focus:outline-none focus:ring-0 peer focus:border-verdigris-700 font-medium `}
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center justify-center w-10 pt-1 font-sans text-sm font-medium text-gray-400 border-none hover:text-vermillion-500 peer-focus:text-vermillion-500"
            >
              &#x21B5;
            </button>
          </div>
        </form>
      </div>
      {/* ha van eddigi keresés, akkor megjelenik a lista, és a kiválasztott étel */}

      {allFood.length > 0 && (
        <div
          className={`flex flex-col py-6 md:py-16 md:flex-row w-full ${styles.paddingX}`}
        >
          <div className="flex flex-col items-center justify-center px-6 md:items-start sm:px-16">
            <div className="w-64 h-64 p-4 overflow-auto rounded-md bg-verdigris-500">
              <h2 className="font-semibold text-center dark:text-white md:text-left">
                Az eddigi keresések:
              </h2>
              <ul className="flex flex-col space-y-2">
                {allFood.map((thisFood, index) => (
                  <li
                    key={index}
                    className={`text-center md:text-left p-2 rounded-md ${
                      selectedFood.name === thisFood.name
                        ? "bg-marianBlue-400 text-white font-medium"
                        : "bg-verdigris-400 text-black font-normal duration-150 ease-linear hover:font-semibold hover:bg-marianBlue-300 hover:text-white"
                    }`}
                    onClick={() =>
                      setSelectedFood({
                        name: thisFood.name,
                        response: thisFood.response,
                      })
                    }
                  >
                    {thisFood.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {selectedFood.name !== "" && (
            <div className="w-full py-6 overflow-auto rounded-md md:py-0">
              <div className="flex flex-col flex-1 p-4 bg-gray-800 min-h-max min-w-max">
                <h2 className="text-center text-white md:text-left">
                  A kiválasztott étel adatai:
                </h2>

                <div className="flex flex-row py-2 text-white border-b border-gray-6000">
                  <div className="w-1/12 px-2 font-bold text-center ">Név</div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Kalória
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Adag (g)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Zsír (g)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Telített zsír (g)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Protein (g)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Nátrium (mg)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Kálium (mg)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Koleszterin (mg)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Szénhidrát (g)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Rost (g)
                  </div>
                  <div className="w-1/12 px-2 font-bold text-center ">
                    Cukor (g)
                  </div>
                </div>

                {selectedFood.response.map((nutrients, index) => (
                  <div
                    key={index}
                    className="flex flex-row py-2 text-white border-b border-gray-600"
                  >
                    <div className="w-1/12 text-center">{nutrients.name}</div>
                    <div className="w-1/12 text-center">
                      {nutrients.calories}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.serving_size_g}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.fat_total_g}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.fat_saturated_g}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.protein_g}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.sodium_mg}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.potassium_mg}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.cholesterol_mg}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.carbohydrates_total_g}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.fiber_g}
                    </div>
                    <div className="w-1/12 text-center">
                      {nutrients.sugar_g}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <div className={`flex flex-col w-full ${styles.paddingX}`}>
        {/* Ide fog jönni az api válasza, és egyéb kondicionális logika */}
        <p className={styles.paragraph}>
          A <span className="font-bold text-verdigris-500">Kalóriamanó</span>{" "}
          segítségével megtudhatod, hogy mennyi kalória volt a mai menüdben!{" "}
          <br />
          Csak annyit kell tenned, hogy leírod, hogy mit ettél, és a{" "}
          <span className="font-bold text-verdigris-500">Kalóriamanó</span>{" "}
          kiszámolja neked, hogy mennyi kalória volt a menüdben! Ha tudsz, akkor
          írd le a mennyiséget is, mert akkor pontosabb lesz az eredmény! <br />
          Jelenleg a{" "}
          <span className="font-bold text-verdigris-500">Kalóriamanó</span> csak
          angolul ért, ezért kérlek angolul próbáld az ételeket megnevezni!
          Szorgosan dolgozunk azon, hogy megtanítsuk magyarul is!
        </p>
      </div>
    </section>
  );
};

export default Nutrition;
