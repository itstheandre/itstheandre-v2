import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { BurgerMenu } from "./burgermenu";
import { NameLink } from "./name";

export const SmNav = () => (
  <>
    <BurgerMenu />
    <NameLink />
  </>
);
