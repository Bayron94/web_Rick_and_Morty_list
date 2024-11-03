// src/components/pages/MasterDetailPage.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import { CharactersPage } from "./CharactersPage";

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-1/3 lg:w-1/4">
        <CharactersPage />
      </div>

      <div className="flex-1 p-4 bg-white">
        <Outlet />
      </div>
    </div>
  );
};
