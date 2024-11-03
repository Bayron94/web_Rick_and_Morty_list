import React from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  onSearch,
}) => {
  return (
    <div className="flex items-center space-x-2 py-4">
      <Input value={value} onChange={onChange} placeholder="Search..." />
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};
