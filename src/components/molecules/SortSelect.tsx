import React from "react";
import { SortDirection } from "../../interfaces/Character";

interface SortSelectProps {
  onSortChange: (direction: SortDirection) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ onSortChange }) => {
  return (
    <select
      onChange={(e) => onSortChange(e.target.value as SortDirection)}
      className="border border-primary-100 rounded-lg p-2 focus:outline-none focus:border-blue-500"
    >
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
};

export default SortSelect;
