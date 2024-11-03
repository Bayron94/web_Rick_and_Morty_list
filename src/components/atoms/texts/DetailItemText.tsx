import React from "react";
import { Text } from "./Text";
import { TextProps } from "../../../interfaces/components/atoms";

export const DetailItemText: React.FC<TextProps> = ({
  children,
  className,
}) => {
  return (
    <Text
      className={`text-base font-normal leading-6 text-text-400 ${className}`}
    >
      {children}
    </Text>
  );
};
