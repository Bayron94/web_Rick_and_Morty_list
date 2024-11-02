// src/routes/AppRoutes.tsx
import { Routes, Route } from 'react-router-dom';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<></>} />
      <Route path="/character/:id" element={<></>} />
    </Routes>
  );
}

export default AppRoutes;
