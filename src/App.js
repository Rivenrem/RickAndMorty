import "./App.scss";
import HomePage from "./components/HomePage";
import CharactersList from "./components/CharactersList";
import LocationsList from "./components/LocationsList";
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/charactersList" element={<CharactersList />} />
        <Route path="/locationsList" element={<LocationsList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
