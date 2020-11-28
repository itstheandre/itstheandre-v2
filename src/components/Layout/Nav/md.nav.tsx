import { ListItem, UnorderedList } from "@chakra-ui/react";
import { NextLink } from "../../Common/Links";
import { NameLink } from "./name";
import { webLinks } from "./webLinks";

export const MdNav = () => (
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
      {webLinks.map((el) => (
        <ListItem key={el.url}>
          <NextLink href={el.url}>{el.text}</NextLink>
        </ListItem>
      ))}
    </UnorderedList>
  </>
);
