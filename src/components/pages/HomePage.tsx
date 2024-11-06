import React, { useState } from "react";
import { CharactersPage } from "./CharactersPage";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { CharacterDetailPage } from "./CharacterDetailPage";
import { DetailItemText } from "../atoms/texts/DetailItemText";

export const HomePage: React.FC = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleSelectCharacter = (id: number) => {
    if (isMobile) {
      navigate(`/characters/${id}`);
    } else {
      setSelectedItem(id);
    }
  };

  return (
    <div className={`flex ${isMobile ? "flex-col" : "flex-row"} h-screen`}>
      <div className="w-full md:w-1/3 h-screen">
        <CharactersPage onSelectCharacter={handleSelectCharacter} />
      </div>

      {!isMobile && (
        <div className="w-full md:w-2/3 h-screen p-4">
          {selectedItem !== null ? (
            <CharacterDetailPage characterID={selectedItem} />
          ) : (
            <DetailItemText className="flex items-center justify-center h-full text-gray-500">
              Select an item to view details
            </DetailItemText>
          )}
        </div>
      )}
    </div>
  );
};
