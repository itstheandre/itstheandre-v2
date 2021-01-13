import { Box, Heading, Text } from "@chakra-ui/react";
import { NextLink } from "../../Common/Links";

export const NameLink = () => {
  return (
    // <Box textAlign={isMedium ? "left" : "center"}>
    <Box textAlign={{ base: "center", md: "left" }}>
      <NextLink href="/" _hover={{ textDecor: "none" }}>
        <Heading as="h5" fontSize="1em" variant="mono">
          André{" "}
          <Text as="span" display={{ md: "none", lg: "inline" }}>
            de Albuquerque
          </Text>
        </Heading>
      </NextLink>
    </Box>
  );
};
