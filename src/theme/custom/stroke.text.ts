import { Heading, Link, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { gray900 } from "../utils/custom.colors";

export const StrokeHeading = styled(Heading)<{ colorMode: "light" | "dark" }>`
  /* color: ${({ colorMode }) => (colorMode === "dark" ? "white" : gray900)};
  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 0.5px
      ${({ colorMode }) => (colorMode === "dark" ? "white" : gray900)};
    -webkit-text-fill-color: transparent;
    &:hover {
      -webkit-text-fill-color: #f85333;
      -webkit-text-stroke: 0;
    }
  }
  &:hover {
    color: #f85333;
  } */
`;

export const StrokeText = styled(Text)<{ colorMode: "light" | "dark" }>`
  /* color: ${({ colorMode }) => (colorMode === "dark" ? "white" : gray900)};
  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 0.5px
      ${({ colorMode }) => (colorMode === "dark" ? "white" : gray900)};
    -webkit-text-fill-color: transparent;
    &:hover {
      -webkit-text-fill-color: #f85333;
      -webkit-text-stroke: 0;
    }
  }
  &:hover {
    color: #f85333;
  } */
`;

export const StrokeLink = styled(Link)<{ colorMode: "light" | "dark" }>`
  /* color: ${({ colorMode }) => (colorMode === "dark" ? "white" : gray900)};
  @supports (-webkit-text-stroke: 1px black) {
    -webkit-text-stroke: 0.5px
      ${({ colorMode }) => (colorMode === "dark" ? "white" : gray900)};
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-size: 100% 200%;
    background-position: 0% 0%;
    &:hover {
    }
  }
  &:hover {
    color: #f85333;
  } */
  /* position: relative; */
  /* display: inline-block;
  color: yellow;
  font-weight: bold;
  font-size: 5rem;
  text-decoration: none;
  -webkit-text-stroke: 0.1px white;
  background: linear-gradient(0deg, orange, orange 50%, transparent 50%);
  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100% 200%;
  background-position: 0% 0%;
  transition: background-position 275ms ease, -webkit-text-stroke 2ms ease-in;

  &:hover {
    background-position: 0 100%;
    -webkit-text-stroke: 0;
    -webkit-text-stroke: 0.1px orange;
    text-decoration: none;
  } */
`;
