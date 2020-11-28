import { Box, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { NextLink } from "../../Common/Links";
import { TTMonoBold } from "../../../theme/utils/fonts";

export const NameLink = () => {
  const [isMedium] = useMediaQuery("(min-width: 768px)");

  return (
    <Box textAlign={isMedium ? "start" : "center"}>
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
