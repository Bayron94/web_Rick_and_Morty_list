import React, { useState } from "react";
import {
  GenderFilter,
  IFilterCriteria,
  SpeciesFilter,
  StatusFilter,
} from "../../interfaces/Character.d";
import { DetailItemText } from "../atoms/texts/DetailItemText";
import { Button } from "../atoms/Button";

interface FilterModalProps {
  onClose: () => void;
  onApplyFilters: (filters: IFilterCriteria) => void;
  initialCriteria: IFilterCriteria;
}

const FilterModal: React.FC<FilterModalProps> = ({
  onClose,
  onApplyFilters,
  initialCriteria,
}) => {
  const [isFavorite, setIsFavorite] = useState(initialCriteria.isFavorite);
  const [species, setSpecies] = useState(initialCriteria.species);
  const [status, setStatus] = useState(initialCriteria.status);
  const [gender, setGender] = useState(initialCriteria.gender);

  const handleApplyFilters = () => {
    onApplyFilters({ isFavorite, species, status, gender });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
          Filters
        </h2>

        {/* Filtro de Favoritos */}
        <div className="mb-4">
          <DetailItemText>Starred</DetailItemText>
          <div className="flex space-x-2">
            <Button
              onClick={() => setIsFavorite(false)}
              className={`px-6 rounded-full ${
                !isFavorite
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              All
            </Button>
            <Button
              onClick={() => setIsFavorite(true)}
              className={`px-6 rounded-full ${
                isFavorite
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Starred
            </Button>
          </div>
        </div>

        {/* Filtro de Especie */}
        <div className="mb-4">
          <DetailItemText>Specie</DetailItemText>
          <div className="flex space-x-2">
            <Button
              onClick={() => setSpecies(SpeciesFilter.ALL)}
              className={`px-6 rounded-full ${
                species === "All"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              All
            </Button>
            <Button
              onClick={() => setSpecies(SpeciesFilter.HUMAN)}
              className={`px-6 rounded-full ${
                species === "Human"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Human
            </Button>
            <Button
              onClick={() => setSpecies(SpeciesFilter.ALIEN)}
              className={`px-6 rounded-full ${
                species === "Alien"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Alien
            </Button>
          </div>
        </div>

        {/* Filtro de Estado */}
        <div className="mb-4">
          <DetailItemText>State</DetailItemText>{" "}
          <div className="flex space-x-2">
            <Button
              onClick={() => setStatus(StatusFilter.ALL)}
              className={`px-6 rounded-full ${
                status === "All"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              All
            </Button>
            <Button
              onClick={() => setStatus(StatusFilter.ALIVE)}
              className={`px-6 rounded-full ${
                status === "Alive"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Alive
            </Button>
            <Button
              onClick={() => setStatus(StatusFilter.DEAD)}
              className={`px-6 rounded-full ${
                status === "Dead"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Dead
            </Button>
          </div>
        </div>

        {/* Filtro de Género */}
        <div className="mb-4">
          <DetailItemText>Gender</DetailItemText>{" "}
          <div className="flex space-x-2">
            <Button
              onClick={() => setGender(GenderFilter.ALL)}
              className={`px-6 rounded-full ${
                gender === "All"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              All
            </Button>
            <Button
              onClick={() => setGender(GenderFilter.MALE)}
              className={`px-6 rounded-full ${
                gender === "Male"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Male
            </Button>
            <Button
              onClick={() => setGender(GenderFilter.FEMALE)}
              className={`px-6 rounded-full ${
                gender === "Female"
                  ? "bg-primary-100 text-primary-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              Female
            </Button>
          </div>
        </div>

        <button
          onClick={handleApplyFilters}
          className="w-full bg-primary-600 text-white py-2 rounded-lg mt-4 hover:bg-gray-200"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
