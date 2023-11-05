import { Route, Routes } from "react-router-dom";
import "./App.css";
import Kaloriamano from "./components/Kaloriamano";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Kaloriamano />} />
      </Routes>
    </div>
  );
}

export default App;
