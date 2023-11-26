import { Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
import Footer from "./components/Footer";
import ImageNutrition from "./components/ImageNutrition";
import Kaloriamano from "./components/Kaloriamano";
import Navbar from "./components/Navbar";
import Nutrition from "./components/Nutrition";
import Recipe from "./components/Recipe";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen overflow-hidden">
      <Navbar />
      <Routes>
        {/* ez lesz a főoldal  */}
        <Route path="/" element={<Kaloriamano />} />
        {/* a nevek a calorieninja-ból jönnek (api referencet ha megnézed majd) */}
        <Route path="nutrition" element={<Nutrition />} />
        <Route path="imagenutrition" element={<ImageNutrition />} />
        {/* Jelenleg a recipe oldal nem működik, mert a calorieninja api nem válaszol 
        <Route path="recipe" element={<Recipe />} /> */}

        {/* ez a 404 oldal, ha nem találja a routot */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
