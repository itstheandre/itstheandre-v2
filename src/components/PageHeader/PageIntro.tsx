import { Heading } from "@chakra-ui/react";

export const PageIntro: React.FC = ({ children }) => (
  <Heading
    as="h5"
    mb={1}
    fontSize={{ base: "md", sm: "xl", xl: "2xl" }}
    variant="mono"
  >
    {children}
  </Heading>
);
