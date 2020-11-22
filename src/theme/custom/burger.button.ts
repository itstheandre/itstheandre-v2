import styled from "@emotion/styled";
import { gray900 } from "../utils/gray";

interface BurgerProps {
  open: boolean;
  colorMode?: "light" | "dark";
  index?: number;
}

export const StyledBurger = styled.button<BurgerProps>`
  position: relative;
  display: flex;
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
    background: ${({ colorMode }) =>
      colorMode === "light" ? gray900 : "white"};
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
