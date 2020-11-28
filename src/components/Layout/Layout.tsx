import { Box, useColorMode } from "@chakra-ui/react";
import { FC } from "react";
import { StrokerBox } from "../../theme/custom/stroker.div";
import { Main } from "./Main";
import { Nav } from "./Nav";
import { MDXWrapper } from "../../theme/custom/MDX.comps";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Main>
      <Nav />
      <StrokerBox colormode={colorMode} pos="relative">
        <MDXWrapper>{children}</MDXWrapper>
      </StrokerBox>
    </Main>
  );
};
