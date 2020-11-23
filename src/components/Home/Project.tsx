import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { gray900 } from "../../theme/utils/custom.colors";
import styled from "@emotion/styled";
import { StrokeHeading, StrokeLink } from "../../theme/custom/stroke.text";

interface ProjectProps {
  isLast?: boolean;
}

export const Project: React.FC<ProjectProps> = ({ isLast = false }) => {
  const { colorMode } = useColorMode();
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const test = /webkit/gi.test(navigator.userAgent);
  //     const isMobileDevice = /Mobi/gi.test(navigator.userAgent);
  //     setIsWebkit(test);
  //     setIsMobile(isMobileDevice);
  //   }
  // }, []);

  return (
    <Box
      borderTop="1px solid white"
      borderBottom={isLast ? "1px solid white" : "0"}
      // _hover={{ color: "brand.main" }}
      // bg="blue.900"
      py={{ base: "3.5em", lg: "32" }}
    >
      <Box
        // bg="blue.900"
        mx={{ base: "0", lg: "7.75em", xl: "7em" }}
        // my={{ base: "3.5em", lg: "32" }}
        textAlign="center"
      >
        {/* <StrokeLink textDecor="none" colorMode={colorMode}>
          Test
        </StrokeLink> */}
        <StrokeHeading
          colorMode={colorMode}
          as="h4"
          fontSize="4xl"
          mb={1}
          _hover={{ cursor: "pointer" }}
          // _hover={{ color: "brand.main", cursor: "pointer" }}
        >
          Savorly
        </StrokeHeading>
        {/* <Heading as="h4" fontSize="4xl" css={obj} mb={1}>
          Savorly
        </Heading> */}
        <Text size="sm">🛒 E-commerce website</Text>
      </Box>
    </Box>
  );
};
