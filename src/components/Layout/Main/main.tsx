import { Box } from "@chakra-ui/react";

interface BodyProps {
  children: React.ReactNode;
}
export const Main: React.FC<BodyProps> = ({ children }) => {
  return (
    <Box
      as="main"
      mx="auto"
      maxW={{ base: "90%", sm: "30em", md: "46em", lg: "61em", xl: "77em" }}
    >
      {children}
    </Box>
  );
};
