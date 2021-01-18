import { ColorMode, ListItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { gray50, gray900 } from "../utils/custom.colors";

interface MenuLinkProps {
  isrightpage: string;
  colormode: ColorMode;
}
export const MenuLink = styled(ListItem)<MenuLinkProps>`
  ${({ isrightpage, colormode }) => {
    console.log("isrightpage:", isrightpage);
    if (isrightpage === "true") {
      return `
    &::before {
      transform: translateX(-50%);
      border-radius: 100%;
      position: absolute;
      background: ${colormode === "dark" ? gray50 : gray900};
      bottom: -0.7em;
      height: 8px;
      content: '';
      width: 8px;
      left: 50%;
    }
    `;
    }
  }}
`;
