import { Grid, Switch, useColorMode, useMediaQuery } from "@chakra-ui/react";
import { useMenu } from "../Layout";
import { MdNav } from "./md.nav";
import { SmNav } from "./sm.nav";

export const Nav = () => {
  const { toggleColorMode } = useColorMode();
  const [isMedium = true] = useMediaQuery("(min-width: 768px)");
  const { isOpen } = useMenu();

  return (
    <Grid
      mt={5}
      h={12}
      templateColumns="repeat(3,1fr)"
      gridColumnGap={2}
      justifyContent="center"
      alignItems="center"
      as="nav"
      zIndex={isOpen ? -1 : 0}
    >
      {isMedium ? <MdNav /> : <SmNav />}

      <Switch
        justifySelf="end"
        zIndex={isOpen ? -1 : 0}
        onChange={toggleColorMode}
      />
    </Grid>
  );
};
