import { UnorderedList, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MenuLink } from "../../../theme/custom/MenuLink";
import { NextLink } from "../../Common/Links";
import { NameLink } from "./name";
import { webLinks } from "./webLinks";

export const MdNav = () => {
  const { route } = useRouter();
  const { colorMode } = useColorMode();
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
          const isRightPage = route.includes(el.url);
          return (
            <MenuLink
              colormode={colorMode}
              isrightpage={isRightPage}
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
