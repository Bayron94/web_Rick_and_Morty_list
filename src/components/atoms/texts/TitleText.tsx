import React from "react";
import { Text } from "./Text";
import { TextProps } from "../../../interfaces/components/atoms";

export const TitleText: React.FC<TextProps> = ({ children, className }) => {
  return (
    <Text className={`text-2xl font-bold leading-8 ${className}`}>
      {children}
    </Text>
  );
};
