import React, { useState } from "react";
import styles from "../style";

const Recipe = () => {
  const [food, setFood] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    // itt fogjuk tárolni az apiból jövő adatokat.
  });

  const handleSubmit = (e) => {
    console.log("ide jön majd az api hívás");
    e.preventDefault();
  };
  return (
    <section>
      <div className={`flex md:flex-row flex-col w-full ${styles.paddingY}`}>
        <div className="flex flex-col items-center justify-center flex-1 px-6 md:items-start sm:px-16">
          <h1
            className={`flex-1 font-semibold ss:text-[42px] text-[22px] ss:leading-[60px] leading-[40px] text-center md:text-left `}
          >
            Keress receptet kedvenc ételedhez a{" "}
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
              placeholder="írd ide az ételt, amihez receptet keresel!"
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
          segít abban, hogy gyorsan receptet találj bármilyen ételhez! <br />
          Csak annyi a dolgod, hogy beírod az étel nevét, és a{" "}
          <span className="font-bold text-verdigris-500">Kalóriamanó</span>{" "}
          azonnal keres neked egy receptet hozzá, mely tartalmazza az étel
          mennyiségét, a hozzávalókat, és azt is, hogyan készítsd el! <br />
          Jelenleg a{" "}
          <span className="font-bold text-verdigris-500">Kalóriamanó</span> csak
          angolul ért, ezért kérlek angolul próbáld az ételeket megnevezni!
          Szorgosan dolgozunk azon, hogy megtanítsuk magyarul is!
        </p>
      </div>
    </section>
  );
};

export default Recipe;
