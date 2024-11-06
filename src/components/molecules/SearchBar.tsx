import React, { useState } from "react";
import SearchIcon from "../../assets/search.svg";
import FilterIcon from "../../assets/filter.svg";

interface SearchBarProps {
  onSearch: (query: string) => void;
  onOpenFilters: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onOpenFilters }) => {
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-lg shadow-sm">
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="w-5 h-5 text-gray-500 ml-3 mr-2 pointer-events-none"
      />

      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Buscar personajes"
        className="flex-1 bg-transparent focus:outline-none text-gray-700"
      />
      <button
        onClick={onOpenFilters}
        className="text-purple-500 p-2 rounded-lg hover:bg-purple-100"
      >
        <img src={FilterIcon} alt="Search" className="w-5 h-5 mr-2" />
      </button>
    </div>
  );
};

export default SearchBar;
