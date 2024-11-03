import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/pages/HomePage";
import { CharacterDetailPage } from "../components/pages/CharacterDetailPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />}>
        <Route index element={<h2>Seleccione un personaje</h2>} />
        <Route path="character/:id" element={<CharacterDetailPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
