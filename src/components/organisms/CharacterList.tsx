import React from "react";
import { CharacterCard } from "../molecules/CharacterCard";
import { ICharacter } from "../../interfaces/Character";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../services/queries";
import { Text } from "../atoms/texts/Text";

interface CharacterListProps {
  onSelectCharacter: (characterId: ICharacter) => void;
}

export const CharacterList: React.FC<CharacterListProps> = ({
  onSelectCharacter,
}) => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <Text className="text-center">Loading...</Text>;
  if (error)
    return (
      <Text className="text-center text-red-500">Error: {error.message}</Text>
    );

  return (
    <div className="space-b-2">
      {data.characters.results.map((character: ICharacter) => (
        <CharacterCard
          character={character}
          key={character.id}
          isSelected={false}
          isStarred={true}
          onClick={() => onSelectCharacter(character)}
        />
      ))}
    </div>
  );
};
