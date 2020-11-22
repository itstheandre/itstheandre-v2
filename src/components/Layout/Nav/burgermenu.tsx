import { useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import {
  //   BurgerSlices,
  StyledBurger,
} from "../../../theme/custom/burger.button";

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorMode } = useColorMode();

  return (
    <StyledBurger
      open={isOpen}
      onClick={() => setIsOpen((o) => !o)}
      colorMode={colorMode}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
