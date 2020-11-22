// const { extendTheme } = require("@chakra-ui/react");
import { mode } from "@chakra-ui/theme-tools";
import { TTReg } from "./utils/fonts";

export const styles = {
  global: (props) => ({
    body: {
      fontFamily: TTReg,
      color: mode("gray.900", "white")(props),
      bg: mode("white", "gray.900")(props),
      lineHeight: "base",
    },
  }),
};
