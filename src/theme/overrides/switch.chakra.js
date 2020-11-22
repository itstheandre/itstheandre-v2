import { mode } from "@chakra-ui/theme-tools";

export default {
  baseStyle: (props) => ({
    track: {
      bg: "none",
      borderWidth: "2px",
      borderColor: mode("gray.900", "white")(props),

      _checked: {
        bg: "none",
      },
      _focus: {
        boxShadow: "none",
      },
    },
    thumb: {
      bg: mode("gray.900", "white")(props),
    },
  }),
};
