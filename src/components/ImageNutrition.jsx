import React, { useEffect, useState } from "react";
import getImageNutritionByName from "../api/imagenutrition";
import styles from "../style";

const ImageNutrition = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [Food, setFood] = useState([]);
  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFood([]);
    await getImageNutritionByName(image).then((data) => {
      setFood(data.items);
    });
    console.log(Food);

    e.target.reset();
    setImage();
    setImageURL();
  };
  useEffect(() => {
    if (!image) {
      return;
    }
    const objectUrl = URL.createObjectURL(image);
    setImageURL(objectUrl);
  }, [image]);
  return (
    <section>
      <div className={`flex md:flex-row flex-col w-full ${styles.paddingY}`}>
        <div className="flex flex-col items-center justify-center flex-1 px-6 md:items-start sm:px-16">
          <h1 className={`flex-1 ${styles.heading2} text-center md:text-left `}>
            Nézd meg a blokkodon lévő ételek tápértékét a{" "}
            <br className="hidden sm:block" />{" "}
            <span className="text-verdigris-500">Kalóriamanó</span>{" "}
            <br className="hidden sm:block" /> segítségével!
          </h1>
        </div>

        <form
          className="flex flex-col items-center justify-center flex-1 px-6 md:items-end sm:px-16"
          onSubmit={handleSubmit}
        >
          {imageURL && (
            <img
              src={imageURL}
              alt="preview"
              className="object-cover w-64 h-64 rounded-md shadow-lg"
            />
          )}
          <div className="relative w-full mt-2">
            <input
              type="file"
              accept="image/*"
              onChange={onImageChange}
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

      {Food.length > 0 ? (
        <div
          className={`w-full py-6 overflow-auto rounded-md md:py-16${styles.paddingX}`}
        >
          <div className="flex flex-col flex-1 p-4 bg-gray-800 min-h-max min-w-max">
            <div className="flex flex-row py-2 text-white border-b border-gray-6000">
              <div className="w-1/12 px-2 font-bold text-center ">Név</div>
              <div className="w-1/12 px-2 font-bold text-center ">Kalória</div>
              <div className="w-1/12 px-2 font-bold text-center ">Adag (g)</div>
              <div className="w-1/12 px-2 font-bold text-center ">Zsír (g)</div>
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
              <div className="w-1/12 px-2 font-bold text-center ">Rost (g)</div>
              <div className="w-1/12 px-2 font-bold text-center ">
                Cukor (g)
              </div>
            </div>

            {Food.length > 1 && (
              <div className="flex flex-row py-2 text-white border-b border-gray-600">
                <div className="w-1/12 font-bold text-center">Összesen:</div>
                {Object.entries(
                  Food.reduce((total, item) => {
                    [
                      "calories",
                      "serving_size_g",
                      "fat_total_g",
                      "fat_saturated_g",
                      "protein_g",
                      "sodium_mg",
                      "potassium_mg",
                      "cholesterol_mg",
                      "carbohydrates_total_g",
                      "fiber_g",
                      "sugar_g",
                    ].forEach((key) => {
                      total[key] = (total[key] || 0) + item[key];
                    });
                    return total;
                  }, {})
                ).map(([key, value], index) => (
                  <div key={index} className="w-1/12 text-center">
                    {Math.round(value * 100) / 100}
                  </div>
                ))}
              </div>
            )}

            {Food.map((nutrients, index) => (
              <div
                key={index}
                className="flex flex-row py-2 text-white border-b border-gray-600"
              >
                <div className="w-1/12 text-center">{nutrients.name}</div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.calories * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.serving_size_g * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.fat_total_g * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.fat_saturated_g * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.protein_g * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.sodium_mg * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.potassium_mg * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.cholesterol_mg * 100) / 100}{" "}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.carbohydrates_total_g * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.fiber_g * 100) / 100}
                </div>
                <div className="w-1/12 text-center">
                  {Math.round(nutrients.sugar_g * 100) / 100}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-xs text-center font-poppins ">
          ha megpróbáltad feltölteni a képet, és nem jelenik meg a táblázat itt
          akkor valami nem sikerült
        </p>
      )}

      <div className={`flex flex-col w-full ${styles.paddingX}`}>
        {/* Ide fog jönni az api válasza, és egyéb kondicionális logika */}
        <p className={styles.paragraph}>
          Most jöttél haza egy kiruccanásról, és nem tudod, hogy mennyi kalória
          volt az ételben amit rendeltél? A blokkot hazahoztad magaddal? A{" "}
          <span className="font-bold text-verdigris-500">Kalóriamanó</span>{" "}
          segít megmondani, hogy mi is volt az ennivalódban!
          <br />
          Csak annyit kell tenned, hogy lefotózod a blokkot, feltöltöd a képet,
          és a <span className="font-bold text-verdigris-500">
            Kalóriamanó
          </span>{" "}
          kiszámolja neked, hogy milyen tápértékek voltak a rendelésedben!
          <br />
          Jelenleg a{" "}
          <span className="font-bold text-verdigris-500">Kalóriamanó</span> csak
          angolul ért, ezért nem biztos, hogy felfogja ismerni a magyar
          blokkokat! Szorgosan dolgozunk azon, hogy megtanítsuk magyarul is!
        </p>
      </div>
    </section>
  );
};

export default ImageNutrition;
