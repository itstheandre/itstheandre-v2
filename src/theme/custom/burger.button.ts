import { Button } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { gray900 } from "../utils/custom.colors";

interface BurgerProps {
  open: boolean;
  colormode?: "light" | "dark";
  index?: number;
}

export const StyledBurger = styled(Button)<BurgerProps>`
  position: relative;
  /* display: flex; */
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ colormode }) =>
      colormode === "light" ? gray900 : "white"};
    border-radius: 10px;
    transition: all 0.3s linear;
    /* position: relative; */
    transform-origin: 1px;
    &:nth-of-type(1) {
      /* background: red; */
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-of-type(2) {
      /* background: yellow; */
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-of-type(3) {
      /* background: green; */
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
