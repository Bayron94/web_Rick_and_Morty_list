import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CharacterList } from "../organisms/CharacterList";
import {
  ICharacter,
  ICharactersData,
  IFilterCriteria,
  SortDirection,
} from "../../interfaces/Character";
import { TitleText } from "../atoms/texts/TitleText";
import SearchBar from "../molecules/SearchBar";
import FilterModal from "../organisms/FilterModal";
import SortSelect from "../molecules/SortSelect";
import {
  setSearchQuery,
  setSortDirection,
  setFilterCriteria,
  setCharacters,
} from "../../store/characterSlice";
import { RootState } from "../../store";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../../services/queries";
import { TitleItemText } from "../atoms/texts/TitleItemText";

interface CharactersPageProps {
  onSelectCharacter: (characterId: number) => void;
}

export const CharactersPage: React.FC<CharactersPageProps> = ({
  onSelectCharacter,
}) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const filterCriteria = useSelector(
    (state: RootState) => state.character.filterCriteria
  );

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSearch = (query: string) => {
    dispatch(setSearchQuery(query));
  };

  const handleSortChange = (direction: SortDirection) => {
    dispatch(setSortDirection(direction));
  };

  const handleApplyFilters = (filters: IFilterCriteria) => {
    dispatch(setFilterCriteria(filters));
    handleCloseModal();
  };

  const handleCharacterSelect = (character: ICharacter) => {
    onSelectCharacter(character.id);
  };

  const { loading, error, data } = useQuery<ICharactersData>(GET_CHARACTERS);

  useEffect(() => {
    if (data) {
      const charactersWithExtras = data.characters.results.map(
        (character: ICharacter) => ({
          ...character,
          isFavorite: false,
          comments: [],
        })
      );
      dispatch(setCharacters(charactersWithExtras));
    }
  }, [data, dispatch]);

  if (loading)
    return (
      <TitleItemText className="text-center flex justify-center items-center h-full">
        Loading...
      </TitleItemText>
    );
  if (error) {
    return (
      <TitleItemText className="text-center flex justify-center items-center h-full">
        Error: {error.message}
      </TitleItemText>
    );
  }

  return (
    <div className="backdrop-blur-lg bg-grayBackground px-4 pt-8 min-h-screen">
      <TitleText
        children="Rick and Morty List"
        className="py-4 ml-3 text-2xl font-bold text-gray-800"
      />

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
        <SearchBar onSearch={handleSearch} onOpenFilters={handleOpenModal} />
        <SortSelect onSortChange={handleSortChange} />
      </div>

      {showModal && (
        <FilterModal
          onClose={handleCloseModal}
          onApplyFilters={handleApplyFilters}
          initialCriteria={filterCriteria}
        />
      )}

      <CharacterList onSelectCharacter={handleCharacterSelect} />
    </div>
  );
};

export default CharactersPage;
