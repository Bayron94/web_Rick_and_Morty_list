import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";
import { CharacterDetailPage } from "../components/pages/CharacterDetailPage";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/characters/:id" element={<CharacterDetailPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
