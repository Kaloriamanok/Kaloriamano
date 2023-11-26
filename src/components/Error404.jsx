import React from "react";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-poppins font-bold text-[36px] text-verdigris-500 text-center">
        404 - A keresett oldal nem található
      </h1>
      <p className="font-poppins text-[18px] text-verdigris-500 text-center">
        A keresett oldal nem található, vagy nem létezik.
      </p>
      <button
        className="px-4 py-2 mt-4 font-bold text-white rounded-md font-poppins bg-verdigris-500 hover:bg-verdigris-600"
        onClick={() => window.location.replace("/")}
      >
        Vissza a főoldalra
      </button>
    </div>
  );
};

export default Error404;
