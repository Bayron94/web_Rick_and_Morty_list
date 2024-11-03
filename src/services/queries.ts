import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        status
        species
        gender
        type
        image
      }
    }
  }
`;

export const GET_CHARACTER_DETAILS = gql`
  query GetCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      type
      image
    }
  }
`;
