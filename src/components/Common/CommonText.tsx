import { FC } from "react";
import { Text } from "@chakra-ui/react";

export const CommonText: FC = ({ children }) => (
  <Text as="span" className="strokerText stroke">
    {children}
  </Text>
);
