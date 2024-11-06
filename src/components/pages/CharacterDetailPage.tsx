import React from "react";
import { CharacterDetail } from "../organisms/CharacterDetail";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addComment, toggleFavorite } from "../../store/characterSlice";
import BackButtonIcon from "../../assets/back_button.svg";

interface CharacterDetailPageProps {
  characterID?: number;
}

export const CharacterDetailPage: React.FC<CharacterDetailPageProps> = ({
  characterID,
}) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const selectedId = characterID || id;
  const character = useAppSelector((state) => state.character);

  const characterSelected = character.characters.find(
    (c) => c.id == selectedId
  );
  const dispatch = useAppDispatch();

  if (!(character || selectedId)) return <p>Character not found</p>;

  const handleToggleFavorite = () => {
    dispatch(toggleFavorite(selectedId ?? ""));
  };

  const handleAddComment = (message: string) => {
    if (message.trim()) {
      dispatch(addComment({ id: selectedId ?? "", comment: message }));
    }
  };

  if (characterSelected) {
    return (
      <div>
        <button
          onClick={() => navigate("/")}
          className="md:hidden text-blue-500 mb-4"
        >
          <img
            src={BackButtonIcon}
            alt="Filter Icon"
            className="w-5 h-5 text-purple-800"
          />
        </button>
        <CharacterDetail
          character={characterSelected}
          handleAddComment={handleAddComment}
          handleToggleFavorite={handleToggleFavorite}
        />
      </div>
    );
  }

  return <p>Error pasar a common</p>;
};
