import React, { useEffect, useState } from "react";
import styles from "../style";

const ImageNutrition = () => {
  const [image, setImage] = useState();
  const [imageURL, setImageURL] = useState();
  const [food, setFood] = useState({
    name: "",
    calories: "",
    carbs: "",
    protein: "",
    fat: "",
    // itt fogjuk tárolni az apiból jövő adatokat
  });

  const onImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    console.log("ide jön majd az api hívás");
    e.preventDefault();
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
          <h1
            className={`flex-1 font-semibold ss:text-[42px] text-[22px] ss:leading-[60px] leading-[40px] text-center md:text-left `}
          >
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
