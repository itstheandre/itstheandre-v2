import { Text } from "@chakra-ui/react";
import React, { FC } from "react";

export const EmojiWrapper: FC = ({ children }) => {
  return (
    <Text mr={2} as="span">
      {children}
    </Text>
  );
};

export default EmojiWrapper;
