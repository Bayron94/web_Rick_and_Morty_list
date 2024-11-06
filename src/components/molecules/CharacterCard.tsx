import React from "react";
import { ICharacter } from "../../interfaces/Character";
import HeartFilledIcon from "../atoms/icons/HeartFilledIcon";
import HeartOutlineIcon from "../atoms/icons/HeartOutlineIcon";
import { TitleItemText } from "../atoms/texts/TitleItemText";
import { DetailItemText } from "../atoms/texts/DetailItemText";

interface CharacterCardProps {
  character: ICharacter;
  isSelected: boolean;
  onClick: () => void;
  onToggleFavorite: (id: number) => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({
  character,
  isSelected,
  onClick,
  onToggleFavorite,
}) => {
  return (
    <div className="flex flex-col items-left px-2">
      <hr className="w-full border-divider mb-2 mx-3" />
      <div
        className={`flex items-center justify-between p-4 rounded-lg cursor-pointer ${
          isSelected ? "bg-primary-100" : "bg-transparent"
        }`}
      >
        <div onClick={onClick} className="flex items-center flex-1">
          <img
            src={character.image}
            alt={character.name}
            className="w-12 h-12 rounded-full mr-4"
          />

          <div>
            <TitleItemText>{character.name}</TitleItemText>
            <DetailItemText>{character.species}</DetailItemText>
          </div>
        </div>

        <div onClick={() => onToggleFavorite(character.id)}>
          {character.isFavorite ? (
            <HeartFilledIcon isSelected={isSelected} />
          ) : (
            <HeartOutlineIcon isSelected={isSelected} />
          )}
        </div>
      </div>
    </div>
  );
};
