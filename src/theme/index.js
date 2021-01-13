import { extendTheme, Text } from "@chakra-ui/react";
import { colors } from "./colors";
import { config } from "./config";
import { styles } from "./styles";
import { components } from "./overrides";
import { mode } from "@chakra-ui/theme-tools";

import { TTMonoBold, TTRegBold } from "./utils/fonts";

export const theme = extendTheme({
  colors,
  styles,
  config,
  components: {
    ...components,
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: "none",
        },
        _focus: {
          boxShadow: "none",
        },
      },
    },
  },
});

export const MyStroke = ({ children }) => (
  <Text as="span" className="strokerText stroke">
    {children}
  </Text>
);
export * from "./custom/ArticleBox";

// baseStyle: {
//   fontWeight: "bold",
//   textTransform: "uppercase",
//   borderRadius: "20px",
//   _disabled: {
//     opacity: "0.4",
//   },
//   _focus: {
//     boxShadow: "0",
//   },
//   _hover: {
//     _disabled: {
//       opacity: "0.4",
//     },
//   },
// },
// variants: {
//   outline: {
//     backgroundColor: "none",
//     borderColor: "brand.main",
//     color: "brand.main",
//     border: "2px solid",
//     _hover: {
//       bg: "brand.base",
//       _disabled: {
//         bg: "none",
//         // opacity: "0.4",
//       },
//       _active: {
//         bg: "brand.base",
//       },
//     },
//   },
//   solid: {
//     backgroundColor: "brand.main",
//     color: "white",
//     _active: { bg: "hovers.brand" },
//     _hover: {
//       bg: "hovers.brand",
//       _disabled: {
//         bg: "brand.main",
//         // opacity: "0.4",
//       },
//     },
//   },
// },

// defaultProps: {
//   variant: "solid",
// },
// Two variants: outline and solid
// variants: {
//   // outline: {
//   //   border: "2px solid",
//   //   borderColor: "green.500",
//   // },
//   solid: (props) => {
//     return {
//       bg: mode("brand.main", "purples.main")(props),
//       color: "white",
//     };
//   },
// },
// The default size and variant values
// defaultProps: {
//   size: "md",
//   variant: "outline",
// },
