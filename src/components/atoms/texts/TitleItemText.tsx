import React from "react";
import { Text } from "./Text";
import { TextProps } from "../../../interfaces/components/atoms";

export const TitleItemText: React.FC<TextProps> = ({ children, className }) => {
  return (
    <Text
      className={`text-base font-semibold leading-6 text-text-600 ${className}`}
    >
      {children}
    </Text>
  );
};
