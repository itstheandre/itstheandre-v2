import { Box, Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { gray900 } from "../../theme/utils/gray";

interface ProjectProps {
  isLast?: boolean;
}

export const Project: React.FC<ProjectProps> = ({ isLast = false }) => {
  const [isWebkit, setIsWebkit] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const test = /webkit/gi.test(navigator.userAgent);
      const isMobileDevice = /Mobi/gi.test(navigator.userAgent);
      setIsWebkit(test);
      setIsMobile(isMobileDevice);
    }
  }, []);
  const obj = isWebkit
    ? { WebkitTextStroke: `0.5px white`, color: "transparent" }
    : { color: gray900 };

  return (
    <Box
      borderTop="1px solid white"
      borderBottom={isLast ? "1px solid white" : "0"}
    >
      <Box
        mx={{ base: "0", lg: "7.75em", xl: "7em" }}
        my={{ base: "3.5em", lg: "32" }}
        textAlign="center"
      >
        <Heading as="h4" fontSize="4xl" css={obj} mb={1}>
          Savorly
        </Heading>
        <Text size="sm">🛒 E-commerce website</Text>
      </Box>
    </Box>
  );
};
