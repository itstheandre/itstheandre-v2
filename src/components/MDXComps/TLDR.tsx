import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { TTMonoBold } from "../../theme/utils/fonts";

interface TLDRProps {
  title?: string;
}

export const TLDR: FC<TLDRProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "dark" ? "gray.800" : "gray.50";
  return (
    <Box
      w="100%"
      borderRadius="10px"
      pt={{ base: 4, md: 8 }}
      pb={{ base: 4, md: 8 }}
      pr={{ base: 6, md: 12 }}
      pl={{ base: 6, md: 12 }}
      bg={bg}
      mb={{ base: 10, md: 20 }}
    >
      <Heading as="h5" fontSize="md" fontFamily={TTMonoBold} mb="2">
        🗒 TLDR
      </Heading>
      {children}
    </Box>
  );
};
