export default {
  baseStyle: {
    fontWeight: "bold",
    // textTransform: "uppercase",
    borderRadius: "20px",
    _disabled: {
      opacity: "0.4",
    },
    _focus: {
      boxShadow: "0",
    },
    _hover: {
      _disabled: {
        opacity: "0.4",
      },
    },
  },
  variants: {
    outline: {
      bg: "none",
      borderColor: "brand.main",
      color: "brand.main",
      border: "2px solid",
      _hover: {
        bg: "brand.main",
        color: "white",
        _disabled: {
          bg: "none",
          // opacity: "0.4",
        },
        _active: {
          bg: "brand.base",
        },
      },
    },
    solid: {
      backgroundColor: "brand.main",
      color: "white",
      _active: { bg: "hovers.brand" },
      _hover: {
        bg: "hovers.brand",
        _disabled: {
          bg: "brand.main",
          // opacity: "0.4",
        },
      },
    },
  },

  defaultProps: {
    variant: "solid",
  },
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
};
