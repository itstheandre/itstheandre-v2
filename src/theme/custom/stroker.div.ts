import { Box, ColorMode, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { brandMain, gray900 } from "../utils/custom.colors";

export const StrokerText = styled(Text)`
  &:hover {
    .stroke {
      @supports (-webkit-text-fill-color: transparent) and
        (-webkit-text-stroke: 0.75px ${brandMain}) and
        (-webkit-background-clip: text) {
        background-position: 0 100%;
        -webkit-text-stroke: 0.25px ${brandMain};
        text-decoration: none;
      }
    }
  }
`;

export const StrokerBox = styled(Box)<{ colormode: ColorMode }>`
  .stroke {
    font-weight: 500;
    display: inline-block;
    color: ${brandMain};
    text-decoration: none;
    background: linear-gradient(
      0deg,
      ${brandMain},
      ${brandMain} 50%,
      transparent 50%
    );

    @supports (-webkit-text-fill-color: transparent) and
      (-webkit-text-stroke: 0.75px ${brandMain}) and
      (-webkit-background-clip: text) {
      -webkit-text-stroke: 0.75px
        ${({ colormode }) => (colormode === "dark" ? "white" : gray900)};
      -webkit-text-fill-color: transparent;
      transition: background-position 275ms ease,
        -webkit-text-stroke 275ms ease-in;
      background-clip: text;
      background-size: 100% 200%;
      background-position: 0% 0%;
    }
  }

  .strokeWrapper {
    &:hover {
      .stroke {
        @supports (-webkit-text-fill-color: transparent) and
          (-webkit-text-stroke: 0.75px ${brandMain}) and
          (-webkit-background-clip: text) {
          background-position: 0 100%;
          -webkit-text-stroke: 0.25px ${brandMain};
          text-decoration: none;
        }
      }
    }
  }

  .strokerText {
    &:hover {
      @supports (-webkit-text-fill-color: transparent) and
        (-webkit-text-stroke: 0.75px ${brandMain}) and
        (-webkit-background-clip: text) {
        background-position: 0 100%;
        -webkit-text-stroke: 0.25px ${brandMain};
        text-decoration: none;
      }
    }
  }
`;
