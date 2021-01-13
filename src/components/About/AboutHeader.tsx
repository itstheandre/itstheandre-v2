import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import NextImage from "next/image";
import * as React from "react";
import { useIsLarge, useIsMedium } from "../../hooks";
// import { ReactIcon } from "../../Icons/TechIcons/React.icon";
import { TTRegBold } from "../../theme/utils/fonts";
export function AboutHeader() {
  const medium = useIsMedium();
  const large = useIsLarge();
  const { colorMode } = useColorMode();
  return (
    <Flex
      direction="column"
      alignItems="flex-start"
      minH={{ base: "75vh", md: "80vh", xl: "calc(100vh - 96px)" }}
      justify="flex-end"
      pos={{ md: "relative" }}
      pl={{ xl: "7em" }}
    >
      <Heading
        as="h2"
        textAlign="left"
        fontFamily={TTRegBold}
        fontSize={{ base: "24px", lg: "4xl", xl: "5xl" }}
        mb="6"
        w={{ md: "60%", lg: "70%" }}
      >
        My name is Andre and I am a full stack developer with a previous career
        in business, that allows me to translate business needs to the
        technology world.
      </Heading>
      <Text w={{ md: "55%", lg: "60%" }}>
        Purus maecenas consequat, venenatis, iaculis. Diam ut enim scelerisque
        id sit massa. Eu morbi elementum in augue a, nisl donec. Ultricies ut
        fermentum libero velit volutpat, placerat massa
      </Text>
      {/* <HStack spacing="6" mt="6">
        <ReactIcon w="5" h="5" />
        <ReactIcon w="5" h="5" />
      </HStack> */}
      <Box
        h="100%"
        display={{ base: "none", md: "block" }}
        pos="absolute"
        zIndex={colorMode === "dark" ? "-1" : "1"}
        top={{ base: "20%", lg: "0" }}
        right={{ base: "0", lg: "-10", xl: "0" }}
      >
        <NextImage
          src="/images/about/me.png"
          height={large ? 600 : 500}
          width={large ? 475 : 375}
          //  layout="responsive"
          objectFit="cover"
        />
      </Box>
    </Flex>
  );
}
