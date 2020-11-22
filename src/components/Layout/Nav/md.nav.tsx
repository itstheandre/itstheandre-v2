import { ListItem, UnorderedList } from "@chakra-ui/react";
import { NextLink } from "../../Common/Links";
import { NameLink } from "./name";

export const MdNav = () => (
  <>
    <NameLink />
    <UnorderedList
      justifySelf="center"
      d="grid"
      gridTemplateColumns="repeat(2,auto)"
      gridColumnGap={2}
      w="100%"
      justify="center"
      listStyleType="none"
    >
      <ListItem>
        <NextLink href="/components">Components Page</NextLink>
      </ListItem>
      <ListItem>
        <NextLink href="/login">Login</NextLink>
      </ListItem>
    </UnorderedList>
  </>
);
