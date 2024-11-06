import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  GenderFilter,
  ICharacter,
  IFilterCriteria,
  SortDirection,
  SpeciesFilter,
  StatusFilter,
} from "../interfaces/Character.d";

interface CharacterState {
  characters: ICharacter[];
  searchQuery: string;
  sortDirection: SortDirection;
  filterCriteria: IFilterCriteria;
}

const initialState: CharacterState = {
  characters: [],
  searchQuery: "",
  sortDirection: SortDirection.ASC,
  filterCriteria: {
    isFavorite: false,
    species: SpeciesFilter.ALL,
    status: StatusFilter.ALL,
    gender: GenderFilter.ALL,
  },
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.characters = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<number | string>) => {
      const character = state.characters.find((c) => c.id === action.payload);
      if (character) {
        character.isFavorite = !character.isFavorite;
      }
    },
    addComment: (
      state,
      action: PayloadAction<{ id: number | string; comment: string }>
    ) => {
      const character = state.characters.find(
        (c) => c.id === action.payload.id
      );
      if (character) {
        character.comments.push(action.payload.comment);
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortDirection: (state, action: PayloadAction<SortDirection>) => {
      state.sortDirection = action.payload;
    },
    setFilterCriteria: (state, action: PayloadAction<IFilterCriteria>) => {
      state.filterCriteria = action.payload;
    },
  },
});

export const {
  setCharacters,
  toggleFavorite,
  addComment,
  setSearchQuery,
  setSortDirection,
  setFilterCriteria,
} = characterSlice.actions;
export default characterSlice.reducer;
