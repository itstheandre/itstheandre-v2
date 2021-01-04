import { Box } from "@chakra-ui/react";
import { FC } from "react";

export const BodyWrapper: FC = ({ children }) => (
  <Box
    mx={{ base: "0", lg: "7.75em", xl: "7em" }}
    textAlign={{ base: "center", lg: "left" }}
  >
    {children}
  </Box>
);
