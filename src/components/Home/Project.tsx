import { Box, ColorMode, Heading, Text, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { brandMain, gray900 } from "../../theme/utils/custom.colors";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { NextLink } from "../Common";

interface ProjectProps {
  isLast?: boolean;
  slug?: string;
  name?: string;
}

export const Project: React.FC<ProjectProps> = ({
  isLast = false,
  name = "Savorly",
  slug,
}) => {
  const { colorMode } = useColorMode();
  console.log("isLast:", isLast);

  return (
    <NextLink href={`/work/${slug}`} _hover={{ textDecor: "none" }}>
      <Box
        borderBottom={isLast ? "1px solid white" : "0"}
        borderColor={colorMode === "dark" ? "white" : "gray.900"}
        borderBottomWidth={isLast ? "1px" : "0"}
        borderTopWidth="1px"
        className="strokeWrapper"
        py={{ base: "3.5em", lg: "32" }}
      >
        <Box mx={{ base: "0", lg: "7.75em", xl: "7em" }} textAlign="center">
          <Heading as="h4" className="stroke" fontSize="4xl" mb={1}>
            {name}
          </Heading>

          <Text size="sm">🛒 E-commerce website</Text>
        </Box>
      </Box>
    </NextLink>
  );
};
