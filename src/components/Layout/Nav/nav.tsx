import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Icon,
  ListItem,
  Switch,
  Text,
  UnorderedList,
  useColorMode,
  useMediaQuery,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MdNav } from "./md.nav";
import { NameLink } from "./name";
import { SmNav } from "./sm.nav";

export const Nav = () => {
  const { toggleColorMode } = useColorMode();
  const [isMedium] = useMediaQuery("(min-width: 768px)");
  console.log("isMedium:", isMedium);
  return (
    <Grid
      mt={5}
      h={12}
      templateColumns="repeat(3,1fr)"
      // templateColumns="auto 1fr auto"
      gridColumnGap={2}
      justifyContent="center"
      alignItems="center"
      as="nav"
    >
      {/* // <Flex justify="space-between" align="center" mx="auto" mt={5} h={12}> */}
      {isMedium ? <MdNav /> : <SmNav />}

      <Switch justifySelf="end" onChange={toggleColorMode} />

      {/* <UnorderedList d="flex" justify="space-between" listStyleType="none">
        <ListItem>
          <NextLink href="/components">Components Page</NextLink>
        </ListItem>
        <ListItem ml={5}>
          <NextLink href="/login">Login</NextLink>
        </ListItem>
      </UnorderedList> */}
      {/* // </Flex> */}
    </Grid>
  );
};
