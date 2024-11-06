import React, { useState } from "react";
import { CharacterCard } from "../molecules/CharacterCard";
import {
  GenderFilter,
  ICharacter,
  SpeciesFilter,
  StatusFilter,
} from "../../interfaces/Character.d";
import { SectionText } from "../atoms/texts/SectionText";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleFavorite } from "../../store/characterSlice";
import { DetailItemText } from "../atoms/texts/DetailItemText";

interface CharacterListProps {
  onSelectCharacter: (characterId: ICharacter) => void;
}

export const CharacterList: React.FC<CharacterListProps> = ({
  onSelectCharacter,
}) => {
  const dispatch = useAppDispatch();
  const character = useAppSelector((state) => state.character);

  const [selectedCharacterId, setSelectedCharacterId] = useState<number | null>(
    null
  );

  const { characters, searchQuery, sortDirection, filterCriteria } = character;

  const handleToggleFavorite = (id: number) => {
    dispatch(toggleFavorite(id));
  };

  const filteredCharacters = characters
    .filter((character) => {
      const matchesSearch = character.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      // Filtrar por favoritos, especie, estado, género
      const matchesFavorite =
        filterCriteria.isFavorite === false ||
        character.isFavorite === filterCriteria.isFavorite;
      const matchesSpecies =
        filterCriteria.species === SpeciesFilter.ALL ||
        character.species === filterCriteria.species;
      const matchesStatus =
        filterCriteria.status === StatusFilter.ALL ||
        character.status === filterCriteria.status;
      const matchesGender =
        filterCriteria.gender === GenderFilter.ALL ||
        character.gender == filterCriteria.gender;

      return (
        matchesSearch &&
        matchesFavorite &&
        matchesSpecies &&
        matchesStatus &&
        matchesGender
      );
    })
    .sort((a, b) => {
      return sortDirection === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });

  const favoriteCharacters = filteredCharacters.filter(
    (character) => character.isFavorite
  );
  const notFavoriteCharacters = filteredCharacters.filter(
    (character) => !character.isFavorite
  );

  const handleCharacterClick = (character: ICharacter) => {
    setSelectedCharacterId(character.id);
    onSelectCharacter(character);
  };

  return (
    <div className="h-screen overflow-y-auto bg-gray-100 space-y-2">
      <SectionText className="pl-6 my-4">
        STARRED CHARACTERS ({favoriteCharacters.length})
      </SectionText>
      {favoriteCharacters.length > 0 ? (
        favoriteCharacters.map((character) => (
          <CharacterCard
            character={character}
            key={character.id}
            isSelected={character.id === selectedCharacterId}
            onClick={() => handleCharacterClick(character)}
            onToggleFavorite={(id) => handleToggleFavorite(id)}
          />
        ))
      ) : (
        <DetailItemText className="ml-4 p-4">
          No stareed characters selected
        </DetailItemText>
      )}

      <SectionText className="pl-6 mb-4 pt-6">
        CHARACTERS ({notFavoriteCharacters.length})
      </SectionText>
      {notFavoriteCharacters.length > 0 ? (
        notFavoriteCharacters.map((character) => (
          <CharacterCard
            character={character}
            key={character.id}
            isSelected={character.id === selectedCharacterId}
            onClick={() => handleCharacterClick(character)}
            onToggleFavorite={(id) => handleToggleFavorite(id)}
          />
        ))
      ) : (
        <DetailItemText className="ml-4 p-4">No characters</DetailItemText>
      )}
    </div>
  );
};
