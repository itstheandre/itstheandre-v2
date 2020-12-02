import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import { BurgerMenu } from "./burgermenu";
import { NameLink } from "./name";

export const SmNav = () => {
  return (
    <>
      <BurgerMenu />
      <NameLink />
    </>
  );
};
