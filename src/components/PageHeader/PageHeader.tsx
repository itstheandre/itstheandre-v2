import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useIsMedium } from "../../hooks";

interface PageHeaderProps {
  homePage?: boolean;
  contactPage?: boolean;
}

export const PageHeader: FC<PageHeaderProps> = ({
  children,
  homePage = false,
}) => {
  const isMedium = useIsMedium();

  const height = homePage ? "100vh" : "80vh";

  return (
    <Flex
      minH={`calc(${height} - ${3 * 16 + 20}px)`}
      direction="column"
      justifyContent="center"
      align="center"
    >
      <Box as="header" textAlign="left">
        {children}
      </Box>
    </Flex>
  );
};
