import React, { useState } from "react";
import exampleApiCall from "../api/example.js";
import styles from "../style";

let Food = [];

const Nutrition = () => {
  const [food, setFood] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    // itt fogjuk tárolni az apiból jövő adatokat
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    Food = [];
    await exampleApiCall(e.target.food.value)
      .then((data) => {
        for (let i = 0; i < data.items.length; i++) {
          console.log(data.items[i]);
          Food.push(data.items[i]);
        }
      })
      .catch((error) => console.error("Error:", error));
    console.log("food");
    console.log(Food);
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
              value={food.name}
              onChange={(e) => setFood({ ...food, name: e.target.value })}
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
