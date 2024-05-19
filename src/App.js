import { Navigate, Route, Routes } from "react-router-dom";
import Characters from "./components/pages/Characters";
import Locations from "./components/pages/Locations";
import Episodes from "./components/pages/Episodes";
import CharacterDetails from "./components/pages/CharacterDetails";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="*" element={<Navigate to="/characters" />} />
    </Routes>
  );
};

export default App;
