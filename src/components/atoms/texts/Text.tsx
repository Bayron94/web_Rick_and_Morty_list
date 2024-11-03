import React from "react";
import { TextProps } from "../../../interfaces/components/atoms";

export const Text: React.FC<TextProps> = ({ children, className }) => {
  return (
    <span className={`block font-greycliff ${className}`}>{children}</span>
  );
};
