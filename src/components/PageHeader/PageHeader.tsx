import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

interface PageHeaderProps {
  homePage?: boolean;
  contactPage?: boolean;
}

export const PageHeader: FC<PageHeaderProps> = ({
  children,
  homePage = false,
}) => {
  const height = homePage ? "100vh" : "80vh";

  return (
    <Flex
      minH={`calc(${height} - ${3 * 16 + 20}px)`}
      direction="column"
      justifyContent="center"
      align="center"
    >
      <Box as="header" textAlign="left" mx={{ lg: "7.75em", xl: "7em" }}>
        {children}
      </Box>
    </Flex>
  );
};
