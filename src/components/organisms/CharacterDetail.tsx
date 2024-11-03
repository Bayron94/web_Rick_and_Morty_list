import React from "react";
import { Text } from "../atoms/texts/Text";
import { ICharacter } from "../../interfaces/Character";

interface CharacterDetailProps {
  character: ICharacter;
}

export const CharacterDetail: React.FC<CharacterDetailProps> = ({
  character,
}) => {
  return (
    <div>
      <img
        src={character.image}
        alt={character.name}
        className="w-24 h-24 rounded-full mb-4"
      />
      <Text className="text-2xl font-bold">{character.name}</Text>
      <Text className="text-gray-500">Species: {character.species}</Text>
      <Text className="text-gray-500">Status: {character.status}</Text>
      <Text className="text-gray-500">Gender: {character.gender}</Text>
    </div>
  );
};
