import { Box, ColorMode, useColorMode } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { FC } from "react";
import { gray50, gray900 } from "../utils/custom.colors";

export const ArticleBox: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <StyledArticleBox colorMode={colorMode} as="article">
      {children}
    </StyledArticleBox>
  );
};

const StyledArticleBox = styled(Box)<{ colorMode: ColorMode }>`
  .overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: ${({ colorMode }) =>
      colorMode === "dark" ? gray900 : gray50};
    opacity: 0;
    top: 0;
    left: 0;
    transition: opacity 0.2s;
  }
  svg {
    opacity: 0;
    transform: translateY(20px);
    transition: transform 0.2s ease-in, opacity 0.2s ease-in;
  }
  :hover {
    .overlay {
      opacity: 0.6;
    }
    svg {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
