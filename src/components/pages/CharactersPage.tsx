import React, { useState } from "react";
import { CharacterList } from "../organisms/CharacterList";
import { SearchBar } from "../molecules/SearchBar";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../../interfaces/Character";
import { TitleText } from "../atoms/texts/TitleText";

export const CharactersPage: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleCharacterSelect = (character: ICharacter) => {
    navigate(`/character/${character.id}`);
  };

  return (
    <div className="m-4 ">
      <TitleText children="Rick and Morty list" className="py-4" />
      <SearchBar
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onSearch={() => {}}
      />
      <CharacterList onSelectCharacter={handleCharacterSelect} />
    </div>
  );
};
