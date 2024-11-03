import React from "react";
import { CharacterDetail } from "../organisms/CharacterDetail";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_CHARACTER_DETAILS } from "../../services/queries";

export const CharacterDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const character = data.character;

  return <CharacterDetail character={character} />;
};
