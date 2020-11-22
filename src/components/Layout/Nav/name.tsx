import { Heading, Text, useMediaQuery } from "@chakra-ui/react";
import { NextLink } from "../../Common/Links";
import { TTMonoBold } from "../../../theme/utils/fonts";

export const NameLink = () => {
  const [isMedium] = useMediaQuery("(min-width: 768px)");

  return (
    <NextLink>
      <Heading
        as="h5"
        fontSize="1em"
        textAlign={!isMedium ? "center" : "start"}
        variant="mono"
        //   fontFamily={TTMonoBold}
      >
        André{" "}
        <Text as="span" display={{ md: "none", lg: "inline" }}>
          de Albuquerque
        </Text>
      </Heading>
    </NextLink>
  );
};
