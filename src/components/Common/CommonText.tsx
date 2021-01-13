import { Text } from "@chakra-ui/react";
import { FC } from "react";

export const CommonText: FC = ({ children }) => (
  <Text as="span" className="strokerText stroke">
    {children}
  </Text>
);
