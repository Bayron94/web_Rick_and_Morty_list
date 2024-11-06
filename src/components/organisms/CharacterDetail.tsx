import React, { useState } from "react";
import { ICharacter } from "../../interfaces/Character";
import { TitleItemText } from "../atoms/texts/TitleItemText";
import { DetailItemText } from "../atoms/texts/DetailItemText";
import { TitleText } from "../atoms/texts/TitleText";
import ProfileWithHeart from "../molecules/ProfileWithHeart";
import { Button } from "../atoms/Button";

interface CharacterDetailProps {
  character: ICharacter;
  handleAddComment: (message: string) => void;
  handleToggleFavorite: () => void;
}

export const CharacterDetail: React.FC<CharacterDetailProps> = ({
  character,
  handleAddComment,
  handleToggleFavorite,
}) => {
  const [newComment, setNewComment] = useState("");

  const sendComment = () => {
    handleAddComment(newComment);
    setNewComment("");
  };

  return (
    <div className="px-16 pt-6">
      <div onClick={handleToggleFavorite} className="mb-8 space-y-2">
        <ProfileWithHeart
          imageUrl={character.image}
          isStarred={character.isFavorite}
        />
        <TitleText>{character.name}</TitleText>
      </div>
      <div>
        <TitleItemText>Specie</TitleItemText>
        <DetailItemText>{character.species}</DetailItemText>
      </div>
      <hr className="w-full border-divider my-4" />
      <div>
        <TitleItemText>Status</TitleItemText>
        <DetailItemText>{character.status}</DetailItemText>
      </div>
      <hr className="w-full border-divider my-4" />
      <div>
        <TitleItemText>Gender</TitleItemText>
        <DetailItemText>{character.gender}</DetailItemText>
      </div>

      <hr className="w-full border-divider my-4" />
      <div className="mt-4">
        <TitleItemText>Comments</TitleItemText>
        <ul>
          {character.comments.map((comment, index) => (
            <DetailItemText key={index} className="ml-2">
              - {comment}
            </DetailItemText>
          ))}
        </ul>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="border border-primary-100 p-2 rounded w-1/2 mt-2 mr-4"
        />
        <Button
          onClick={sendComment}
          className="mt-4 p-2 bg-primary-600 text-white rounded"
        >
          Add Comment
        </Button>
      </div>
    </div>
  );
};
