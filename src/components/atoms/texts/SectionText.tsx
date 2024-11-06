import React from "react";
import { Text } from "./Text";
import { TextProps } from "../../../interfaces/components/atoms";

export const SectionText: React.FC<TextProps> = ({ children, className }) => {
  return (
    <Text
      className={`text-xs font-medium leading-4 text-text-400 ${className}`}
    >
      {children}
    </Text>
  );
};
