import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import { AboutHeader } from "./AboutHeader";

const AboutHeroSectionV1 = () => {
  const { colorMode } = useColorMode();

  const greetings =
    colorMode === "dark" ? "👋 Hello world" : "👁️ My eyes, my eyes!*";
  return (
    <>
      <Box
        h={{
          base: "calc(80vh - 96px)",
          lg: "calc(60vh - 96px)",
          // xl: "calc(50vh - 96px)",
        }}
        zIndex="-1"
        pos="absolute"
        w="100%"
        top={{ base: "24", sm: "20", md: "40", lg: "20", xl: "10" }}
        mx={{ xl: "7em" }}
      >
        <Heading
          fontSize={{ base: "120px", md: "136px", lg: "144px" }}
          color={colorMode === "dark" ? "gray.700" : "gray.200"}
          lineHeight="90%"
        >
          {greetings}{" "}
        </Heading>
      </Box>
      <AboutHeader />
    </>
  );
};

export default AboutHeroSectionV1;
