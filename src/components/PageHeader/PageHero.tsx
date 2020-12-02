import { Heading } from "@chakra-ui/react";
import { FC } from "react";

export const PageHero: FC = ({ children }) => (
  <Heading as="h2" fontSize={{ base: "2xl", sm: "3xl", lg: "4xl", xl: "5xl" }}>
    {children}
  </Heading>
);
