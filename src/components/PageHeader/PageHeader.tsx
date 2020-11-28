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
  // const alignText = homePage ? ({!isMedium ? "center" : "start"}) : "initial";

  const height = homePage ? "100vh" : "70vh";

  return (
    <Flex
      h={`calc(${height} - ${3 * 16 + 20}px)`}
      direction="column"
      justifyContent="center"
      align="center"
    >
      <Box
        as="header"
        textAlign={!homePage ? "initial" : !isMedium ? "center" : "start"}
      >
        {children}
      </Box>
    </Flex>
  );
};
