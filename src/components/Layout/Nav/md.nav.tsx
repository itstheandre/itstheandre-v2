import {
  ColorMode,
  ListItem,
  UnorderedList,
  useColorMode,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { gray50, gray900 } from "../../../theme/utils/custom.colors";
import { NextLink } from "../../Common/Links";
import { NameLink } from "./name";
import { webLinks } from "./webLinks";

const MenuLink = styled(ListItem)<{
  isRightPage: boolean;
  colormode: ColorMode;
}>`
  ${({ isRightPage, colormode }) => {
    if (isRightPage) {
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

export const MdNav = () => {
  const router = useRouter();
  console.log("router:", router);
  const { route } = router;
  const { colorMode } = useColorMode();
  console.log("router:", route);
  return (
    <>
      <NameLink />
      <UnorderedList
        justifySelf="center"
        d="grid"
        gridTemplateColumns={`repeat(${webLinks.length},auto)`}
        gridColumnGap={2}
        w="100%"
        justify="center"
        listStyleType="none"
      >
        {webLinks.map((el) => {
          const isRightPage = el.url === route;
          return (
            <MenuLink
              colormode={colorMode}
              isRightPage={isRightPage}
              key={el.url}
              pos="relative"
              textAlign="center"
            >
              <NextLink href={el.url}>{el.text}</NextLink>
            </MenuLink>
          );
        })}
      </UnorderedList>
    </>
  );
};
